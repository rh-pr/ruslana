import React from 'react'

function Technologie({arrTechnologie, imgUrl}) {
    const rang = [0,0,0,0,0];
    rang[arrTechnologie.rang] = 1;
    let fullRang = false;

  return (
    <div className='oneTech'>
        <p className='nameTech'>{arrTechnologie.name}</p>
        <img src={imgUrl} alt={arrTechnologie.name} className='imgTech' />
        <div className='rangTech'>
            {rang && rang.map(el => {
                if (el === 1) {
                    fullRang = true;
                }
                return <div className={ `point ${fullRang ? 'plus' : 'minus'}`}></div>              
            })}
        </div>
        
    </div>
  )
}

export default Technologie