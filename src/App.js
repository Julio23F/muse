import { useEffect, useRef, useState } from 'react';
import './App.css';
import Player from './Player/Player';
import { sonsdata } from './Player/audios';
import Image from './Player/Image';
import Playlist from './components/PlayList';

function App() {
  const [songs, setSongs]= useState(sonsdata);
  const [isplaying, setIsplaying]= useState(false);
  const [currentSong, setCurrentSong]= useState(sonsdata[0]);
  const [currentime, setCurrentime]= useState(0);
  const [duration, setDuration]= useState(0);

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

  // Lire ou mettre en pause en fonction de l'état de isplaying avant de mettre sur next ou before
  useEffect(()=>{
    if(isplaying){
      audioElem.current.play();
    }
    else{
      audioElem.current.pause();
    }
  },[currentSong])
  return (
    <div className='container'>
      <div className="App">
        <div className='lecture'>
          <Image currentSong={currentSong} isplaying={isplaying}/>
          <audio src={currentSong.url} ref={audioElem}/>
          <Player 
            songs={songs} 
            setSongs={setSongs} 
            isplaying={isplaying} 
            setIsplaying={setIsplaying} 
            audioElem={audioElem} 
            currentSong={currentSong} 
            setCurrentSong={setCurrentSong}
            duration={duration}
            setDuration={setDuration}
            currentime={currentime}
            setCurrentime={setCurrentime}
          />
        </div>
        <div className='liste'>
          <Playlist/>
        </div>
      </div>
    </div>

  );
}

export default App;
