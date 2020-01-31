import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <button
      onClick={() => {
        parent.postMessage({pluginMessage: {type: 'test'}}, '*');
      }}>
      Test
    </button>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
