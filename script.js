const musicList = [
    {
        trackName: 'Crash & Burn',
        artistName: 'Aakash Gandhi',
        song: 'music/1.mp3'
    },
    {
        trackName: 'Rains Of Meghalaya',
        artistName: 'Hanu Dixit',
        song: 'music/2.mp3'
    },
    {
        trackName: 'Train Of Thoughts',
        artistName: 'Hanu Dixit',
        song: 'music/3.mp3'
    },
    {
        trackName: 'Lotus Pond',
        artistName: 'Aakash Gandhi',
        song: 'music/4.mp3'
    },
    {
        trackName: 'Kirwani - Teental',
        artistName: 'Aditya Verma',
        song: 'music/5.mp3'
    }
]

// Taking index 0
let i = 0;

// Taking elements by their Ids
let music = new Audio('music/1.mp3');
let track = document.getElementById('track');
let artist = document.getElementById('artist');
let progressBar = document.getElementById('progressBar');
let previous = document.getElementById('previous');
let midIcon = document.getElementById('icon-mid');
let next = document.getElementById('next');

// For play and pause Music
midIcon.addEventListener('click', (e) => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        midIcon.classList.remove('fa-circle-play');
        midIcon.classList.add('fa-circle-pause');
    }
    else {
        music.pause();
        midIcon.classList.remove('fa-circle-pause');
        midIcon.classList.add('fa-circle-play');
    }
})

// Setting track and artist name
let setName = () => {
    track.innerText = musicList[0].trackName;
    artist.innerText = musicList[0].artistName;
}
setName();

// For progress Bar
music.addEventListener('timeupdate', () => {
    progress = parseInt(music.currentTime / music.duration * 100);
    progressBar.value = progress;
    if (music.currentTime == music.duration) {
        midIcon.classList.remove('fa-circle-pause');
        midIcon.classList.add('fa-circle-play');
    }
})

progressBar.addEventListener('change', () => {
    music.currentTime = progressBar.value * music.duration / 100;
    console.log(music.currentTime);
    music.play();
    midIcon.classList.remove('fa-circle-play');
    midIcon.classList.add('fa-circle-pause');
})

// For updating song time
let curTime = document.getElementById('currentTime');
let updateTime = setInterval(() => {
    let currMins = Math.floor(music.currentTime / 60);
    let currSecs = Math.floor(music.currentTime % 60);
    if (currSecs < 10) {
        currSecs = '0' + currSecs;
    }
    curTime.innerHTML = '0' + currMins + ':' + currSecs;
}, 1000)

// For getting next song
next.addEventListener('click', (e) => {
    i++;
    track.innerHTML = musicList[i].trackName;
    artist.innerHTML = musicList[i].artistName;
    music.src = musicList[i].song;
    music.play();
    midIcon.classList.remove('fa-circle-play');
    midIcon.classList.add('fa-circle-pause');
})

// For getting previous song
previous.addEventListener('click', (e) => {
    i--;
    track.innerHTML = musicList[i].trackName;
    artist.innerHTML = musicList[i].artistName;
    music.src = musicList[i].song;
    music.play();
    midIcon.classList.remove('fa-circle-play');
    midIcon.classList.add('fa-circle-pause');
})

// For controlling volume of music
let vol = document.getElementById('volumeControl');
vol.addEventListener('change', (e) => {
    music.volume = e.target.value / 100;
})

