import { useEffect, useRef, useState } from "react";
import { Button, Form, ButtonGroup } from "react-bootstrap";
import ProgressBar from "./ProgressBar";

function PlayerControls({
  song,
  playNextSong,
  playPreviousSong,
  repeatMode,
  setRepeatMode,
  shuffleMode,
  setShuffleMode,
}) {
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

  const handleSongEnd = () => {
    if (repeatMode && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }

    playNextSong();
  };

  const handleToggleRepeat = () => {
    const nextRepeat = !repeatMode;
    setRepeatMode(nextRepeat);

    if (nextRepeat) {
      setShuffleMode(false);
    }
  };

  const handleToggleShuffle = () => {
    const nextShuffle = !shuffleMode;
    setShuffleMode(nextShuffle);

    if (nextShuffle) {
      setRepeatMode(false);
    }
  };

  return (
    <div className="player-controls">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSongEnd}
      >
        <source src={song.audio} type="audio/mpeg" />
      </audio>

      <ButtonGroup className="control-group mb-3">
        <Button variant="outline-secondary" onClick={playPreviousSong}>
          Previous
        </Button>
        <Button variant="primary" onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Button variant="outline-secondary" onClick={playNextSong}>
          Next
        </Button>
      </ButtonGroup>

      <ButtonGroup className="mode-group mb-3">
        <Button
          variant={repeatMode ? "success" : "outline-success"}
          onClick={handleToggleRepeat}
        >
          Repeat
        </Button>
        <Button
          variant={shuffleMode ? "warning" : "outline-warning"}
          onClick={handleToggleShuffle}
        >
          Shuffle
        </Button>
      </ButtonGroup>

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />

      <div className="volume-box">
        <label htmlFor="volume-control">Volume</label>
        <Form.Range
          id="volume-control"
          min="0"
          max="1"
          step="0.01"
          defaultValue="0.5"
          onChange={handleVolumeChange}
          aria-label="Volume control"
        />
      </div>
    </div>
  );
}

export default PlayerControls;
