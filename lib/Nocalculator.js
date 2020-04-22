"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Nocalculator = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M11 14h2v2h-2v-2zm0 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 4h-2v2h2v-2zm2 0h2v2h-2v-2z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5 3.414l-1 1 2 2V28h15c1.942 0 3.25-.56 4.056-1.456.181-.202.33-.412.45-.624l1.121 1.122 1-1L5 3.414zM8 26V8.414l11 11V24h2v-2.586l2.965 2.965a1.685 1.685 0 01-.396.827c-.32.355-1.011.794-2.569.794H8z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M26 21.586V4H8.414l2 2H24v13.586l2 2z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M20.414 16H21v-2h-2v.586L20.414 16zM12.5 8H22v4h-5.5l-4-4z", fill: "currentColor" })));
    }
    if (size === 'S' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M6 7H5v1h1V7zM5 9h1v1H5V9zm0 2h1v1H5v-1zm3-2H7v1h1V9zm-1 2h1v1H7v-1z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.707 2L2 2.707l1 1V14h7.5c.971 0 1.625-.28 2.028-.728a1.53 1.53 0 00.017-.02l.769.769.707-.707L2.707 2zm9.128 10.542L11 11.707V12H9V9.707l-5-5V13h6.5c.779 0 1.125-.22 1.285-.397a.784.784 0 00.05-.061z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M9 7.293l2 2V7H9v.293z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M12 3v7.293l1 1V2H3.707l1 1H12z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M11 4H6l2 2h3V4z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.414 3L4 4.414l2 2V28h16a4 4 0 003.509-2.077l1.118 1.119 1.415-1.415L5.414 3zM21 21.414l-2-2V24h2v-2.586zM13 14h-2v2h2v-2zm0 4h-2v2h2v-2zm4 2v-2h-2v2h2zm-6 2h2v2h-2v-2zm6 2v-2h-2v2h2z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M26 4v17.586L20.414 16H21v-2h-2v.586L16.414 12H22V8h-9.586l-4-4H26z", fill: "currentColor" })));
    }
    if (size === 'S' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.707 2L2 2.707l1 1V14h8c.627 0 1.186-.288 1.553-.74l.76.76.708-.706L2.707 2zM11 11.707l-2-2V12h2v-.293zM5 7h1v1H5V7zm1 2H5v1h1V9zm-1 2h1v1H5v-1zm3-2H7v1h1V9zm-1 2h1v1H7v-1zm4-4v2.293l2 2V2H3.707L9 7.293V7h2zm0-1V4H7l2 2h2z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(Nocalculator));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL05vY2FsY3VsYXRvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sZ0RBQTBCO0FBRTFCLElBQU0sWUFBWSxHQU1kLFVBQUMsRUFJSixFQUFFLEdBQUc7SUFISixJQUFBLFlBQVUsRUFBViwrQkFBVSxFQUNWLFlBQWMsRUFBZCxtQ0FBYyxFQUNkLG9DQUFRO0lBR0EsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDbkMsT0FBTyxDQUFDLGdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixJQUFLLEtBQUssSUFBRSxHQUFHLEVBQUUsR0FBRztZQUFFLHdDQUFNLENBQUMsRUFBQyxnRkFBZ0YsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFO1lBQUEscURBQWdCLFNBQVMsZUFBVyxTQUFTLEVBQUMsQ0FBQyxFQUFDLDJNQUEyTSxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSx3Q0FBTSxDQUFDLEVBQUMsdUNBQXVDLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHdDQUFNLENBQUMsRUFBQyw0REFBNEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQ25xQjtJQUdELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSx3Q0FBTSxDQUFDLEVBQUMsc0VBQXNFLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHFEQUFnQixTQUFTLGVBQVcsU0FBUyxFQUFDLENBQUMsRUFBQyw0TUFBNE0sRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFO1lBQUEsd0NBQU0sQ0FBQyxFQUFDLHdCQUF3QixFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSx3Q0FBTSxDQUFDLEVBQUMsaUNBQWlDLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHdDQUFNLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQ2hxQjtJQUdELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsMkxBQTJMLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHdDQUFNLENBQUMsRUFBQyxxRUFBcUUsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQ3plO0lBR0QsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDcEMsT0FBTyxDQUFDLGdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixJQUFLLEtBQUssSUFBRSxHQUFHLEVBQUUsR0FBRztZQUFFLHFEQUFnQixTQUFTLGVBQVcsU0FBUyxFQUFDLENBQUMsRUFBQyxrT0FBa08sRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQzdhO0lBR1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixrQkFBZSxlQUFLLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyJ9