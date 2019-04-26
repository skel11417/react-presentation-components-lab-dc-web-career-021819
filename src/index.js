import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent mood='happy' handleClick={()=>console.log('sfsgsw')} />
  </div>,
  document.getElementById('root')
);
