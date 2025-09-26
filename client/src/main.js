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

    artistName.innerText = item.artistname;
    trackContainer.append(artistName);
    musicResultContianer.append(trackContainer);
  });
}

getMusic();

// function getFormData() {
//   addEventListener(`submit`, function () {
//     event.preventDefault;
//   });
// }
