const data = {
    "artists" : "Secuestro",
    "href" : "https://api.spotify.com/v1/albums/5B4PYA7wNN4WdEXdIJu58a",
    "images" : "https://github.com/ErikING-Chile/pagina/blob/main/img/SecuestroBG.jpg?raw=true",
    "name" : "Secuestro",
    "tracks" : [
      {
        "duration_ms" : 231367,
        "spotify" : "https://open.spotify.com/track/2pBsNDHzowJ5GvX9xVJqoI?si=c31dfb74af914a9a",
        "name" : "Déjate Caer",
        "track_number" : 1
      }, {
        "duration_ms" : 292580,
        "spotify" : "https://open.spotify.com/track/7f28l9hfYNKeA73xL47ufx?si=d822ebf7a8fa45ce",
        "name" : "Cigarro",
        "track_number" : 2
      }, {
        "duration_ms" : 340907,
        "explicit" : false,
        "spotify" : "https://open.spotify.com/track/0PgN5Tj5zJkJEJLpGfRgJ0?si=e2ec1e666fe8481b",
        "name" : "Resistiré",
        "track_number" : 3
      }, {
        "duration_ms" : 200039,
        "spotify" : "https://open.spotify.com/track/1TBuNNhtJ7kJoqcCeD3J8d?si=9f1642c0ec2d4ae9",
        "name" : "Sentido a Mil",
        "track_number" : 4
      }, 
    ]
  };
  
  // helper method
  function convertToHumanTime(duration) {
    let s = parseInt((duration / 1000) % 60, 10);
    const m = parseInt((duration / (1000 * 60)) % 60, 10);
  
    s = (s < 10) ? `0${s}` : s;
  
    return `${m}:${s}`;
  }
  
  // methods to create and render the album info
  function createMarkupAlbum(data) {
    return (`
      <img class="album-image" src="${data.images}" alt="${data.name}">
      <p class="album-title">${data.name}</p>
      <p class="album-artist">${data.artists}</p>
      <p class="album-counter">${data.tracks.length} Músicas</p>
    `);
  }
  
  function renderAlbumInfo(data, element) {
    const markup = createMarkupAlbum(data);
    element.innerHTML = markup;
  };
  
  // methods to create and render the tracks
  function createMarkupTracks(tracks) {
    return tracks.map(track => `
      <div class="music">
        <p class="music-number">${track.track_number}</p>
        <p class="music-title">${track.name}</p>
        <p class="music-duration">${convertToHumanTime(track.duration_ms)}</p>
      </div>`).join('');
  }
  
  function renderAlbumTracks(data, element) {
    const markup = createMarkupTracks(data);
    element.innerHTML = markup;
  }
  
  // working with the DOM and calling the methods
  const list = document.getElementById('list');
  const album = document.getElementById('album');
  
  renderAlbumTracks(data.tracks, list);
  
  renderAlbumInfo(data, album);
