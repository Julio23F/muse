import React from "react";
import './player.scss';
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";



export default function Player({audioElem, isplaying, setIsplaying, currentSong, setCurrentSong, songs}){

    // Modifier l'état de isplaying quand on clique
    const PlayPause=()=>{
        
        setIsplaying(!isplaying)
    }
    let style;

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
                <input type="range" className="barre" />
                <div className="duration">
                    <span className="left">0:2</span>
                    <span className="right">3:25</span>
                </div>
            </div>
            <div className="controls">
                <IoPlaySkipBackSharp className="control" onClick={Before}/>
                {isplaying ? <FaPause className="control" onClick={PlayPause}/> : <FaPlay className="control" onClick={PlayPause}/>}
                <IoPlaySkipForward className="control" onClick={After}/>
            </div>
        </div>
    )


}

// const Player=()=>{

// }
// export default Player;