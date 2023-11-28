import { useRef, useState } from 'react';
import './App.css';
import Player from './Player/Player';
import { sonsdata } from './Player/audios';

function App() {
  const [songs, setSongs]= useState(sonsdata);
  const [isplaying, setIsplaying]= useState(false);
  const [currentSong, setCurrentSong]= useState(sonsdata[0]);

  const audioElem = useRef();
  return (
    <div className="App">
      <audio src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fd/bb/38/fdbb38d2-073d-4bc7-68c4-348a0be6d560/mzaf_4150435585996894188.plus.aac.p.m4a" ref={audioElem}/>
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setIsplaying={setIsplaying} audioElem={audioElem}/>
    </div>
  );
}

export default App;
