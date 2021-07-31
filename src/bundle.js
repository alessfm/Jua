import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/index.scss';
import Editor from './components/editor';

function Bundle(){
  return(
    <>
      <Editor/>
    </>
  )
}

ReactDOM.render(<Bundle />,document.getElementById('root'));
