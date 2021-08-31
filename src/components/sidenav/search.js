import React from 'react';
import Search from '../../../assets/icons/search.svg';

export default function Buscador()
{
  return(
  <div>
    <input className="btn-input" placeholder="pergunta?"></input>
    <button className="btn" 
      onClick={()=>{electron.notificationApi.sendNotification(
      'Buscando...')}}><img src={Search}/>
    </button>
  </div>
  )
}
