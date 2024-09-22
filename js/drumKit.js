
document.addEventListener('DOMContentLoaded', function () {
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => {
    key.addEventListener('transitionend', (event) => {
      removeTransition(event)
    });
  });

  window.addEventListener('keydown', (event) => {
    playSound(event);
  });


  function removeTransition(event) {    
    const propertyName = event.propertyName;
    const className = event.target.classList;

    if (propertyName !== 'transform') {
      return;
    }

    className.remove('playing');
  }


  function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);    
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    
    if (!audio) {
      return;
    }
    
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

});