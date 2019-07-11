
  const playBtn = document.querySelector('.player__button');
  const video = document.querySelector('.player__video');

  let isPlaying = false;
  
  const playVid = function(){
    // console.log('clicked')
    isPlaying = !isPlaying;
    video.play();
} 

const pauseVid = () => {
    isPlaying = !isPlaying;
      video.pause();
  }

  playBtn.addEventListener('click', (e) => {
      if(!isPlaying) playVid();
      else pauseVid();
  })