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
    const newKey = notes[key].cloneNode(true);
    newKey.play();
  });

  $('body').keypress(function(event) {
    const key = String.fromCharCode(event.keyCode).toLowerCase();
    if (notes[key]) {
      const newKey = notes[key].cloneNode(true);
      newKey.play();
    }
  });
});
