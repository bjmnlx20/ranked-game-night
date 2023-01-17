import React from 'react'
import bboySesame from "./images/bboySesame.png";
import cookieGamer from "./images/cookieGamer.png";
import darthSesame from "./images/darthSesame.png";
import sesameSith from "./images/sesameSith.png";
import elmoDev from "./images/elmoDev.png";
import whyDM from "./images/whyDM.jpg";

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img 
                                src={
                                    value.img == "bboySesame"
                                      ? bboySesame
                                      : value.img == "elmoDev"
                                      ? elmoDev
                                      : value.img == "cookieGamer" ? cookieGamer : value.img == "darthSesame" ? darthSesame: value.img == "whyDM"? whyDM: sesameSith
                                  }
                             alt="" />
            
                            <div className="info">
                                <h2 className='name text-dark'>{value.name}</h2>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                        <h1 className='name text-dark'><b>{value.score}</b></h1>    
                            {/* <span>{value.score}</span> */}
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}
