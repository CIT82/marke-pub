//document.getElementById('myModal');

document.getElementById('myInput');
const progress = document.getElementById('prog-bar-status');
// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// });
const progNow = document.getElementsByClassName('progress')[0];
progress.setAttribute('style', 'width: 100%');

for (let i = 1; i <= 5; i++){
  setTimeout( () => {
    progress.setAttribute('style', `width: ${i * 100/5}%`);
    progNow.setAttribute('aria-valuenow', i * 100/5);
    const progNowLabel = Math.floor(progNow.getAttribute('aria-valuenow'));
    if ( i === 5){
      doneLoading();
    }
    progress.innerHTML = `${progNowLabel}%`;
  }, i * 1000);
}

function doneLoading(){
  const title = document.getElementById("album-2-title");
  const img = document.getElementById("album-2-img");
  const artist = document.getElementById("album-2-artist");
  const year = document.getElementById("album-2-year");
  const btn = document.getElementById("album-2-btn");
  const loadingLabel = document.getElementById("loading-lbl");

  title.innerHTML = "Abbey Road";
  img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg');
  artist.innerHTML = "The Beatles";
  year.innerHTML = "1969";
  btn.innerHTML = "Download";
  title.setAttribute("class", "card-title");
  img.setAttribute("class", "card-img-top");
  artist.setAttribute("class", "card-subtitle");
  year.setAttribute("class", "card-text");
  btn.setAttribute("class", "btn btn-primary ");
  loadingLabel.innerHTML = "";
}


