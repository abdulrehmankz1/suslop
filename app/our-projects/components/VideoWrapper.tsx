"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const VideoWrapper = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true; 
    }
  };

  return (
    <div className="video_wrapper overflow-hidden rounded-2xl relative">
      <video
        ref={videoRef}
        src="/assets/images/detail-video.mp4"
        className="rounded-lg w-full h-full object-cover"
        muted
        playsInline
        controls={false} // 👈 by default controls off
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          setIsPlaying(false);
          if (videoRef.current) {
            videoRef.current.controls = false;
          }
        }}
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md p-5">
            <Image
              src="/assets/images/play-icon.png"
              alt="video play icon"
              width={40}
              height={40}
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoWrapper;
