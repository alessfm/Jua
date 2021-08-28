import React from 'react';
import Buscador from './search';
import Items from './items';

export default function Sidebar()
{
  return(
    <div className="sidenav">
      <Buscador/>
      <Items/>
    </div>
  )
}
