import React from 'react';

export default function Editor()
{
  return(
    <div className="card">
      <h4>O que você quer que eu faça?</h4>
      <div className="btn-container">
        <input></input>
        <button className="btn" onClick={()=>{
          electron.notificationApi.sendNotification(
            'Postando...')}}>
          Enviar
        </button>
      </div>
    </div>
  )
}
