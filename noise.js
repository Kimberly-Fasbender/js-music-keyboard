$(document).ready( () => {

  const Element = (file) => {
    return document.getElementById(file);
  }

  const notes = {
    'c': Element("cAudio"),
    'd': Element("dAudio"),
    'e': Element("eAudio"),
    'f': Element("fAudio"),
    'g': Element("gAudio"),
    'a': Element("aAudio"),
    'b': Element("bAudio"),
  }

  $('.note').click(function(event) {
    const key = `${this.innerHTML}`;
      if (notes[key].paused) {
        notes[key].play();
      } else {
        notes[key].currentTime = 0;
      }
  });

  $('body').keydown(function(event) {
    const key = String.fromCharCode(event.keyCode).toLowerCase();
   
      if (notes[key]) {
        if (notes[key].paused) {
          notes[key].play();
        } else {
          notes[key].currentTime = 0;
        }
      }
  });

});
