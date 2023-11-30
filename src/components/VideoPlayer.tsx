import { useEffect, useRef, useState } from "react";
import styles from "../styles/components/VideoPlayer.module.scss";
import { GoUnmute, GoMute } from "react-icons/go";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <div className={styles.videoContainer}>
      <div
        style={{
          color: "white",
          fontSize: "1.5rem",
          position: "absolute",
          zIndex: 1000000,
          top: "25px",
          left: "25px",
          cursor: "pointer",
        }}
        onClick={() => setMuted(!muted)}
      >
        {!muted && <GoUnmute />}
        {muted && <GoMute />}
      </div>
      <video ref={videoRef} className={styles.videoPlayer} autoPlay={true} muted={muted} loop>
        <source src="/video.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}
