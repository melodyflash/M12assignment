class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

album1.play()
album2.play()
album2.play()
album2.play()
album2.play()
album2.play()
album3.play()


  // Populate the dropdown menu
  const albumSelect = document.getElementById('albumSelect');
  const playButton = document.getElementById('playButton');
  const showFavoriteButton = document.getElementById('showFavoriteButton');
  const favoriteAlbumDisplay = document.getElementById('favoriteAlbumDisplay');

  [album1, album2, album3].forEach((album, index) => {
    jbox.addAlbum(album);

    const option = document.createElement('option');
    option.value = index;
    option.text = `${album.artist} - ${album.title}`;
    albumSelect.add(option);
  });

  // Event listener for play button
  playButton.addEventListener('click', () => {
    const selectedIndex = albumSelect.selectedIndex;
    if (selectedIndex !== -1) {
      const selectedAlbum = jbox.albums[selectedIndex];
      selectedAlbum.play();
    }
  });

  // Event listener for show favorite button
  showFavoriteButton.addEventListener('click', () => {
    const favoriteAlbumInfo = jbox.favoriteAlbum();
    favoriteAlbumDisplay.textContent = favoriteAlbumInfo;
  });

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)