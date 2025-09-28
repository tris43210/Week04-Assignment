const form = document.getElementById(`form`);
const musicResultContianer = document.getElementById(`musicResultsContainer`);
console.log(musicResultContianer);

async function getMusic() {
  const getData = await fetch(`http://localhost:8080/musicStorage`);
  const gotData = await getData.json();
  console.log(gotData);
  generateHTML(gotData);
}

function generateHTML(gotData) {
  gotData.forEach(function (item) {
    const trackContainer = document.createElement(`div`);
    const artistName = document.createElement(`p`);
    const trackName = document.createElement(`p`);
    const BPMhtml = document.createElement(`p`);
    const comment = document.createElement(`p`);
    trackContainer.setAttribute("class", "track-container");

    artistName.innerText = item.artistname;
    trackName.innerText = item.trackname;
    BPMhtml.innerText = item.bpm;
    comment.innerText = item.comments;
    trackContainer.append(artistName, trackName, BPMhtml, comment);
    musicResultContianer.append(trackContainer);
  });
}

getMusic();

// function getFormData() {
//   addEventListener(`submit`, function () {
//     event.preventDefault;
//   });
// }
