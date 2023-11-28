import { useEffect, useRef, useState } from 'react';
import './App.css';
import Player from './Player/Player';
import { sonsdata } from './Player/audios';
import Image from './Player/Image';

function App() {
  const [songs, setSongs]= useState(sonsdata);
  const [isplaying, setIsplaying]= useState(false);
  const [currentSong, setCurrentSong]= useState(sonsdata[0]);

  const audioElem = useRef();

  // Lire ou mettre en pause en fonction du changement de isplaying
  useEffect(()=>{
    if(isplaying){
      audioElem.current.play();
    }
    else{
      audioElem.current.pause();
    }
  },[isplaying])
  return (
    <div className='container'>
      <div className="App">
        <div className='lecture'>
          <Image currentSong={currentSong} isplaying={isplaying}/>
          <audio src={currentSong.url} ref={audioElem}/>
          <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setIsplaying={setIsplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
        </div>
        <div className='liste'>
          <div>
            Julio
          </div> 
        </div>
      </div>
    </div>

  );
}

export default App;
