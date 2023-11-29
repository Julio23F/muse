import React from "react";
import './player.scss';

export default function Image({currentSong, isplaying}){
    let style={}
    let cercle={}
    if(isplaying){
        // style = {
        //     animation: "Rotation infinite 20s linear",
        //     position: "absolute",
        //     top: "50%",
        //     left: "50%",
        //     transform: "translate(-50%, -50%)",

        //     borderRadius: "50%",
        //     width: "170px",
        //     height: "170px",
        //     justifyContent: "center",
        //     overflow: "hidden",
        //     margin: "0 auto"

        // }
        cercle={
            animation: "1s linear infinite alternate boxMagic"
        }

    }

    return (
        <div className="box">
            <div className="circle" style={cercle}></div>
            <div className='containImage'>
                <img src={currentSong.image} alt="Image"/>
            </div>
        </div>

    )
}