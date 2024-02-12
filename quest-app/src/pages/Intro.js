import { useState } from "react";


const Video = () => {
  const [src, setSrc] = useState("../vid/samplevid.mp4");

  const handleChange = (event) => {
    try {
      // Get the uploaded file
      const file = event.target.files[0];

      // Transform file into blob URL
      setSrc(URL.createObjectURL(file));
    } catch (error) {
      console.error(error);
    }
  };
    const handleVideoEnded = () => {
        // Show the popup after the video is finished
        // Code to show the popup goes here
    };

    const handleRestartVideo = () => {
        // Code to restart the video from the beginning goes here
    };

    const handleLeaveIntro = () => {
        // Code to navigate away from the current intro page goes here
    };

  return (
    <>
      <video src={src} controls width="100%">
        Sorry, your browser doesn't support embedded videos.
      </video>
      <input type="file" onChange={handleChange} />
    </>
  );
};

export default Video;