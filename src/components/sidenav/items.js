import React from 'react';
import Search from '../../../assets/icons/search.svg';

export default function Items()
{
  return(
    <div>
    <img className="logo" src="./assets/icons/logo/logo-testmode.png"></img>
    <a className="items"><Search/>busca</a>
    <a className="items">Item 2</a>
    <a className="items">Item 3</a>
    <a className="items">Item 4</a>
    <a className="items">Item 5</a>
    </div>
  )
}
