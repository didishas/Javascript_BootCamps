
const video = document.querySelector('.player__video');
const playBtns = document.querySelectorAll('.player__button');
const progressFill = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const togglePlayBtn = document.querySelector('.player__button.toggle');
const ranges = document.querySelectorAll('input[type="range"]')

let isPlaying = false;
let totalTime;



const SetBackward = (num) => {
    video.currentTime += num;
    console.log(num);
}

// Click Event for All my Skip Buttons
playBtns.forEach((playBtn, index) => {
    if(index !== 0){
        console.dir(playBtn.getAttribute('data-skip'))
        playBtn.addEventListener('click', function (e) {
            SetBackward(parseInt(this.getAttribute('data-skip')));
            // console.log(parseInt(this.getAttribute('data-skip')));
        })
    }
})

// Click Event Pause and Play
togglePlayBtn.addEventListener('click', function(){
    const icon = video.paused ? '►' : '❚ ❚';
    togglePlayBtn.textContent = icon;        
    video.paused ? video.play() : video.pause();
})

// Click Event to Pause and Play the Video
video.addEventListener('click',function() {
    const icon = this.paused ? '►' : '❚ ❚';
    togglePlayBtn.textContent = icon;        
    video.paused ? video.play() : video.pause();
})

// Click Event Listener on adjust the progressFill Bar
video.addEventListener('play', (e) => {
    if(!totalTime) totalTime = video.duration;
    
    setInterval(function(){
        let flexbasis = (video.currentTime / totalTime) * 100;
        progressFill.style.flexBasis = `${flexbasis}%`;
    }, 100)
})

// Click Event Listener on progress bar to Change play sequences
progress.addEventListener('click', function(e){
    let flexbasis = (e.offsetX / progress.offsetWidth) * 100;
    progressFill.style.flexBasis = `${flexbasis}%`;
    video.currentTime = (flexbasis / 100) * totalTime;
})

// click Event Listener to Adjust volume and playback Rate
ranges.forEach(function(range) {
    range.addEventListener('change',function(e) {
        console.log(e);
        console.log(this.value)
        console.log(this)
        this.name === 'volume' ? video.volume = this.value: video.playbackRate = this.value;
})}) 
    
    