const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Under Tides',
            artist: 'Siren-MSR',
            url: 'http://tsmusic24.tc.qq.com/331459731.mp3',
            cover: 'background.jpg',
        },
    ]
});