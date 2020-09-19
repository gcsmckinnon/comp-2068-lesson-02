import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

function HelloWorld () {
  return (
    <Fragment>
      <div>Hello World</div>
      <div>Goodbye</div>
    </Fragment>
  );
}

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
);