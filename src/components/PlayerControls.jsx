import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ProgressBar from "./ProgressBar";

function PlayerControls({ song }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [song]);
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleVolumeChange = (e) => {
    if (audioRef.current) {
      audioRef.current.volume = e.target.value;
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  const handleSeek = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };
  return (
    <div className="player-controls">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={song.audio} type="audio/mpeg" />
      </audio>
      <Button onClick={handlePlayPause} className="me-3 mb-3">
        {isPlaying ? "Pause" : "Play"}
      </Button>
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />
      <div className="volume-box">
        <label>Volume</label>
        <Form.Range
          min="0"
          max="1"
          step="0.01"
          defaultValue="0.5"
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default PlayerControls;
