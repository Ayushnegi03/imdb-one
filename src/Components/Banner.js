import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage:'url(data:image/jpeg;base64,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)'}}>This is my Banner 
        <div className='text-white text-xl text-center bg-gray-900/60' >Avengers Endgame </div>  
        </div>
)
}

export default Banner