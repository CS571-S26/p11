import { Form } from "react-bootstrap";

function ProgressBar({ currentTime, duration, onSeek }) {
  return (
    <div className="progress-wrapper">
      <div className="time-row">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <Form.Label htmlFor="song-progress" className="visually-hidden">
        Song progress
      </Form.Label>

      <Form.Range
        id="song-progress"
        min="0"
        max={duration || 0}
        step="0.1"
        value={currentTime}
        onChange={(e) => onSeek(Number(e.target.value))}
        aria-label="Song progress"
      />
    </div>
  );
}

function formatTime(time) {
  if (!time || Number.isNaN(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default ProgressBar;