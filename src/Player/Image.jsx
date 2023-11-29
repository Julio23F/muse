import React from "react";
import './player.scss';

export default function Image({currentSong, isplaying}){
    let cercle={}
    if(isplaying){
        cercle={
            animation: "1s linear infinite alternate boxMagic, 5s linear infinite annimRotation, 2s linear big",
            paddingTop: "12px",
            border: "solid 1px white"
            // animation: 1s linear infinite alternate boxMagic,
            // 4s linear infinite annimRotation;
        }


    }
    // let small={
        
    //     animation: "1s linear alternate boxMagic, 1s linear annimRotation, 1s linear small"
    // }

    return (
        <div className="box">
            <div className="circle" style={cercle}></div>
            <div className='containImage'>
                <img src={currentSong.image} alt="Image"/>
            </div>
        </div>

    )
}