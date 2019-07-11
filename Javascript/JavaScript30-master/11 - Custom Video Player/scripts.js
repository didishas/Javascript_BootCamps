
  const togglePlayBtn = document.querySelector('.player__button.toggle');
  const video = document.querySelector('.player__video');
  const playBtns = document.querySelectorAll('.player__button');
  console.log(playBtns)
  
  let isPlaying = false;
  let totalTime;
  
  const playVid = function(){
      // console.log('clicked')
      isPlaying = !isPlaying;
      video.play();
      if(!totalTime) totalTime = video.duration;
    } 
    
    const pauseVid = () => {
        isPlaying = !isPlaying;
        video.pause();
    }
    
    const SetBackward = (num) => {
    video.currentTime += num;
    console.log(num);
    
}

playBtns.forEach((playBtn, index) => {
    if(index !== 0){
        console.dir(playBtn.getAttribute('data-skip'))
        playBtn.addEventListener('click', function (e) {
            // console.log(parseInt(this.getAttribute('data-skip')));
            SetBackward(parseInt(this.getAttribute('data-skip')));
        })
    }
    
})
togglePlayBtn.addEventListener('click', (e) => {
    if(!isPlaying) playVid();
      else pauseVid();
    })
    video.addEventListener('click', (e) => {
        if(!isPlaying) playVid();
        else pauseVid();
    })
    
    