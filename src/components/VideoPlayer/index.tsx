import { useState } from 'react';
import ReactPlayer from 'react-player';

import { Container, PlayVideoIcon } from './styles';

function Icon() {
  return (
    <PlayVideoIcon
      src="assets/icons/play-video.svg"
      width="100"
      height="100"
      alt="Play video"
    />
  );
}

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  function handlePlayPause() {
    setPlaying(playing ? false : true);
  }

  return (
    <Container onClick={handlePlayPause}>
      <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
        playing={playing}
        light={'assets/images/video-thumbnail.png'}
        playIcon={<Icon />}
        width="100%"
        controls={true}
        style={{ margin: '0 auto' }}
      />
    </Container>
  );
}
