import React, { useState, UseEffect } from 'react';
import { useHistory } from 'react-router-dom';

const VideoPlayer = ({ videoSources, onBack, onNext }) => {

  const [videoIndex, setVideoIndex] = useState(0);
  const [videoPlayable, setVideoPlayable] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleVideoError = () => {
    if (videoIndex < videoSources.length - 1) {
      // Try the next video format
      setVideoIndex(videoIndex + 1);
    } else {
      // No video formats worked
      setVideoPlayable(false);
      setVideoEnded(true);
    }
  };

  const handleVideoCanPlay = () => {
    setVideoPlayable(true);
  };

  const handleVideoEnded = () => {
  if (videoEnded) {
    showNextButton(true);
  }
  else {
    UseEffect(() => {
      const timer = setTimeout(() => {
        setShowNextButton(true);
      }, 120000); // 2 minutes

      return () => clearTimeout(timer);
    }, []);
  }
  };

  return (
    <div>
      {videoPlayable ? (
        <video
          width="100%"
          autoPlay
          muted
          controls={false}
          onEnded={handleVideoEnded}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
          style={{ marginBottom: '20px' }} // Leave some space for buttons
        >
          <source src={videoSources[videoIndex]} type={`video/${videoSources[videoIndex].split('.').pop()}`} />
          Your browser does not support the video tag {`video/${videoSources[videoIndex].split('.').pop()}`}.
        </video>
      ) : (
        <p>Video playback is not supported on your browser (Type: {`${videoSources[videoIndex].split('.').pop()}`}).</p>
      )}

      <button onClick={onBack}>Back</button>
      <button onClick={onNext} value={videoEnded}>Next</button>
    </div>
  );
};

const Video = () => {
  const history = useHistory();

  const videoSources = [
    '/vid/samplevid.mp4', 
    '/vid/samplevid.mpeg',
    '/vid/samplevid.ogv',
    '/vid/samplevid.webm', // Note: AVI is generally not supported for direct browser playback
  ];

  const handleBack = () => history.push('/login');

  const handleNext = () => history.push('/profile');

  return (
    <VideoPlayer
      videoSources={videoSources}
      onBack={handleBack}
      onNext={handleNext}
    />
  );
};

export default Video;
