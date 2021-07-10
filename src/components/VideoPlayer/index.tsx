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
        url="https://www.youtube.com/watch?v=z1s37HW8Wm8&ab_channel=IBF-InternetBalancingFormula"
        playing={playing}
        light={'assets/images/video-thumbnail.jpeg'}
        playIcon={<Icon />}
        width="100%"
        controls={true}
        style={{ margin: '0 auto' }}
      />
    </Container>
  );
}
