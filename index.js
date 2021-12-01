
function playMusic(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0; //will play again
    audio.play();
    key.classList.add('playing')
}
    function removetransition(e){
        if(e.propertyName !== 'transform')
        return; 
        this.classList.remove('playing')
      
    }
 const keys = document.querySelectorAll('.key');
 keys.forEach(key => key.addEventListener('transitionend', removetransition))

window.addEventListener('keydown', playMusic);
