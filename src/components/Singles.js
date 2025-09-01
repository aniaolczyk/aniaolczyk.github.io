import React from 'react';

const Singles = () => {
  const singles = [
    {
      id: 'klocki-ego',
      title: 'Klocki Ego',
      year: '2025',
      coverImage: '/covers/ego.jpg',
      youtubeVideoId: 'fyMH6M0C-Tk',
      spotifyUrl: 'https://open.spotify.com/album/0Y8HhwkKwyVfcYALROfoGD?si=19MdoSaaSZGwTFWvjEIf1Q',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=YznqqpX3T6o',
      appleMusicUrl: 'https://music.apple.com/us/album/klocki-ego-single/1832070269',
      description: ''
    },
    {
      id: 'listy-milosne',
      title: 'Listy Miłosne',
      year: '2025',
      coverImage: '/covers/listy-milosne.jpg',
      youtubeVideoId: 'fyMH6M0C-Tk',
      spotifyUrl: 'https://open.spotify.com/track/2nQKXRkle7QhOu8Dl6ygOz',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=6FItDaeNASs',
      appleMusicUrl: 'https://music.apple.com/pl/album/listy-mi%C5%82osne/1818531809?i=1818531810&l=pl',
      description: ''
    },
    {
      id: 'zacmienie-99',
      title: 'Zaćmienie \'99',
      year: '2025',
      coverImage: '/covers/zacmienie-99.jpg',
      youtubeVideoId: 'ULTJcqjeD6s',
      spotifyUrl: 'https://open.spotify.com/track/3g87eKym3fy8V4R6SRwX4o',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=dnB5IE1VvTw',
      appleMusicUrl: 'https://music.apple.com/pl/album/za%C4%87mienie-99/1813390932?i=1813390933&l=pl',
      description: ''
    },
    {
      id: 'rumianki',
      title: 'Rumianki',
      year: '2023',
      coverImage: '/covers/rumianki.jpg',
      youtubeVideoId: 'M4ilQYiu5UU',
      spotifyUrl: 'https://open.spotify.com/track/422Uq4fEQTN7yKTgAIT1r0',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=PyEcvTY-uQU',
      appleMusicUrl: 'https://music.apple.com/pl/album/rumianki/1690564940?i=1690564946&l=pl',
      description: ''
    },
    {
      id: 'toksyk',
      title: 'Toksyk',
      year: '2022',
      coverImage: '/covers/toksyk.jpg',
      youtubeVideoId: 'GzO8Hlp7pec',
      spotifyUrl: 'https://open.spotify.com/track/7iwMnjjivF3FiUIymvMZfy',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=DGVSi0LF4u0',
      appleMusicUrl: 'https://music.apple.com/pl/album/toksyk/1653125333?i=1653125349&l=pl',
      description: ''
    }
  ];

  return (
    <section className="singles-section" aria-label="Single Ani Olczyk">
      <div className="container">
        <h2 className="section-title text-uppercase font-bold">Single</h2>
        
        {singles.map((single) => (
          <article key={single.id} className="single-item" id={single.id}>
            <div className="single-content">
              <div className="single-left">
                <div className="single-cover">
                  <img 
                    src={single.coverImage} 
                    alt={`Okładka singla ${single.title}`} 
                    loading="lazy"
                  />
                </div>
                
                {/* Streaming Links below cover */}
                <div className="streaming-links-sidebar">
                  <h4 className="streaming-title text-uppercase font-medium">Słuchaj na:</h4>
                  <div className="streaming-buttons-sidebar">
                    <a href={single.spotifyUrl} target="_blank" rel="noopener" className="streaming-btn-sidebar spotify">
                      <i className="fa fa-spotify"></i> Spotify
                    </a>
                    <a href={single.youtubeMusicUrl} target="_blank" rel="noopener" className="streaming-btn-sidebar youtube">
                      <i className="fa fa-youtube"></i> YouTube Music
                    </a>
                    <a href={single.appleMusicUrl} target="_blank" rel="noopener" className="streaming-btn-sidebar apple">
                      <i className="fa fa-apple"></i> Apple Music
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="single-info">
                <h3 className="single-title text-uppercase font-medium">{single.title}</h3>
                <p className="single-year">{single.year}</p>
                <p className="single-description">{single.description}</p>
                
                {/* YouTube Video - Smaller size */}
                <div className="video-container-small">
                  <iframe 
                    src={`https://www.youtube.com/embed/${single.youtubeVideoId}`}
                    title={`${single.title} - Ania Olczyk`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Singles;
