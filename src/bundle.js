import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/index.scss';
import Sidebar from './components/sidenav/sidebar';

function Bundle(){
  return(
    <>
      <Sidebar/>
      {/* <Main/> */}
    </>
  )
}

ReactDOM.render(<Bundle />,document.getElementById('root'));
