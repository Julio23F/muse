import React from "react";
import './player.scss';
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { sonsdata } from "./audios";


export default function Player({audioElem, isplaying, setIsplaying, currentSong, setCurrentSong, songs}){

    // Modifier l'état de isplaying quand on clique
    const PlayPause=()=>{
        
        setIsplaying(!isplaying)
    }
    const Before=()=>{
        const index = songs.findIndex(x => x.title == currentSong.title);
        if( index == 0){
            setCurrentSong(songs[songs.length - 1])
        }
        else{
            setCurrentSong(songs[index - 1])
        }

        // Revenir au début de la lecture dans toutes les situations
        audioElem.current.currentTime = 0;
    }
    const After=()=>{
        const index = songs.findIndex(x => x.title == currentSong.title);
        if( index == songs.length - 1){
            setCurrentSong(songs[0])
        }
        else{
            setCurrentSong(songs[index + 1])
        }

        // Revenir au début de la lecture dans toutes les situations
        audioElem.current.currentTime = 0;
    }

    return (
        <div className="player_container">
            <div className="title">
                <p>{currentSong.title}</p>
            </div>
            <div className="navigation">
                <input type="range" name="" id="" />
            </div>
            <div className="controls">
                <IoPlaySkipBackSharp onClick={Before}/>
                {isplaying ? <FaPause onClick={PlayPause}/> : <FaPlay onClick={PlayPause}/>}
                <IoPlaySkipForward onClick={After}/>
            </div>
        </div>
    )


}

// const Player=()=>{

// }
// export default Player;