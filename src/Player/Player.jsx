import React from "react";
import './player.scss';
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";


export default function Player({audioElem}){
    const PlayPause=()=>{
        audioElem.current.play();
        
    }
    return (
        <div className="player_container">
            <div className="title">
                <p>First Song</p>
            </div>
            <div className="navigation">
                <input type="range" name="" id="" />
            </div>
            <div className="controls">
                <IoPlaySkipBackSharp/>
                <FaPlay onClick={PlayPause}/>
                <IoPlaySkipForward/>
            </div>
        </div>
    )


}

// const Player=()=>{

// }
// export default Player;