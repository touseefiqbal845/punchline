'use client';

import { useState, useRef, useEffect } from 'react';
import {
  FaPlayCircle,
  FaPauseCircle,
  FaVolumeMute,
  FaVolumeDown,
  FaVolumeUp
} from 'react-icons/fa';
import { RiReplay15Fill, RiForward15Fill } from 'react-icons/ri';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { Line } from 'rc-progress';

const Whitebg = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [showSlider, setShowSlider] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const numberOfSegments = 10;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      if (Math.abs(currentTime - duration) < 0.000001) {
        setCurrentTime(0);
      }
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    console.log(currentTime);
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleEndAudio = () => {
    if (audioRef.current) {
      setIsPlaying(false);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickPercentage = clickX / rect.width;
      const newTime = clickPercentage * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        audioRef.current.currentTime - 15,
        0
      );
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.currentTime + 15,
        duration
      );
    }
  };

  const handlePlaybackRateChange = () => {
    const newRate = playbackRate === 1 ? 1.5 : 1;
    setPlaybackRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <FaVolumeMute size={20} />;
    if (volume > 0 && volume <= 0.5) return <FaVolumeDown size={20} />;
    return <FaVolumeUp size={20} />;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sliderRef.current &&
        !sliderRef.current.contains(event.target as Node)
      ) {
        setShowSlider(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      handleLoadedMetadata();

      return () => {
        audioRef.current?.removeEventListener(
          'loadedmetadata',
          handleLoadedMetadata
        );
      };
    }
  }, []);

  return (
    <>


      <div className="relative bottom-0 h-[400px] w-full bg-[#e5e7eb] text-white p-2 px-8 md:px-40 flex flex-col justify-between">
        <div className="w-full 2xl:w-[100%] h-full flex flex-row justify-start items-between">
          <div className=" p-0  flex items-center justify-center">
            <img
              className="object-cover  w-80"
              src="https://pakonlinebooks.com/wp-content/uploads/2022/08/1.jpg"
              alt="Descriptive Alt Text"
            />
          </div>

          <div className="w-full h-[50%] flex flex-col justify-start items-end">
            <h3 className="text-lg font-semibold mb-2"></h3>
            <p className="text-sm text-gray-500 mb-4">
            </p>  
          </div>
        </div>
        <audio
          ref={audioRef}
          src="/test.mp3"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEndAudio}
        />

        <div className="flex items-center w-full mt-4">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <div
            className="flex-1 mx-4 h-1 bg-[#003E6D] relative rounded-full flex"
            onClick={handleProgressClick}
          >
            {[...Array(numberOfSegments)].map((_, index) => {
              let value =
                (currentTime / duration) * 100 >= index * 10
                  ? (((currentTime / duration) * 100) % 10) / 10
                  : 0;
              if ((currentTime / duration) * 100 >= (index + 1) * 10) value = 1;
              return (
                <Line
                  key={index}
                  className={`h-full cursor-pointer`}
                  percent={value * 100}
                  strokeLinecap="butt"
                  strokeColor="#5DBBB6"
                  trailColor="#577E98"
                  transition="none"
                  style={{
                    width: `${100 / numberOfSegments}%`,
                    marginLeft: index === 0 ? 0 : '2px',
                    marginRight: index === numberOfSegments - 1 ? 0 : '2px'
                  }}
                ></Line>
              );
            })}
          </div>
          <span className="text-sm">{formatTime(duration)}</span>
        </div>

        <div className="flex justify-between items-center gap-3 w-full mb-2">
          <div className="flex justify-start"></div>
          <div className="flex gap-6 items-center justify-center">
            <button aria-label="SkipNext">
              <MdSkipPrevious size={24} />
            </button>
            <button onClick={handleRewind} aria-label="Rewind">
              <RiReplay15Fill size={24} />
            </button>
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <FaPauseCircle size={40} />
              ) : (
                <FaPlayCircle size={40} />
              )}
            </button>
            <button onClick={handleForward} aria-label="Forward">
              <RiForward15Fill size={24} />
            </button>
            <button aria-label="SkipPrevious">
              <MdSkipNext size={24} />
            </button>
          </div>
          <div className="flex items-center justify-end gap-6 min-w-20">
            <button
              onClick={handlePlaybackRateChange}
              aria-label="Playback Speed"
            >
              {playbackRate}x
            </button>
            <div className="flex items-center relative">
              <button onClick={() => setShowSlider(!showSlider)}>
                {getVolumeIcon()}
              </button>

              {showSlider && (
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  ref={sliderRef}
                  onChange={handleVolumeChange}
                  className="absolute bottom-11 -left-3 rotate-[-90deg] w-[86px]"
                  style={{
                    transformOrigin: 'center'
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Whitebg;
