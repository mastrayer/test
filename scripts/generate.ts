import fs from 'fs';
import path from 'path';
import groupBy from 'lodash.groupby';
import SVGO from 'svgo';

import {mkdirIfNotExists, unique} from './utils';
import config from './utils/config';

const {SVGS_PATH, SRC_PATH} = config;

interface SvgFile {
  name: string;
  type: string;
  size: string;
  svg: string;
}

const svgo = new SVGO({
  plugins: [
    {removeViewBox: false},
    {
      addAttributesToSVGElement: {
        attributes: ['{...props}', 'ref={ref}'],
      },
    },
  ],
});
async function main() {
  mkdirIfNotExists(SRC_PATH);

  const files = await fs.promises.readdir(SVGS_PATH);
  const svgs = groupBy(
    files
      .filter((file) => /\.svg$/.test(file))
      .map((file) => /^(?<name>.+)_(?<type>.+?)_(?<size>.+?)\.svg$/i.exec(file))
      .filter((x) => x)
      .map((match) => {
        return ({
          name: match.groups.name,
          size: match.groups.size.toUpperCase(),
          type: match.groups.type.toLowerCase(),
          svg: fs.readFileSync(path.resolve(SVGS_PATH, match[0]), {encoding: 'utf8'}),
        } as any) as SvgFile;
      }),
    (svg) => svg.name
  );

  fs.writeFileSync(
    path.resolve(SRC_PATH, 'index.ts'),
    Object.keys(svgs)
      .map((name) => `export {default as ${name}} from './${name}';`)
      .join('\n')
  );

  for (const name in svgs) {
    const sizes = unique(svgs[name].map((s) => s.size));
    const types = unique(svgs[name].map((s) => s.type));

    const component = `
      import React from 'react';

      const ${name}: React.ForwardRefRenderFunction<
        SVGSVGElement,
        JSX.IntrinsicElements['svg'] & {
          size?: ${sizes.map((s) => `'${s}'`).join('|')};
          type?: ${types.map((s) => `'${s}'`).join('|')};
        }
      > = ({
        size = 'L',
        type = 'solid',
        ...props
      }, ref) => {
        ${(
          await Promise.all(
            svgs[name].map(async (svg) => {
              const optimizedSvg = await svgo.optimize(svg.svg);
              return `
                if (size === '${svg.size}' && type === '${svg.type}') {
                  return (${optimizedSvg.data});
                }
              `;
            })
          )
        ).join('\n')}

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(${name}));
    `;

    fs.writeFileSync(path.resolve(SRC_PATH, `${name}.tsx`), component);
  }
}

main();
