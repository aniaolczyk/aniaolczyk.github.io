import React from 'react';

const Singles = () => {
  const singles = [
    {
      id: 'listy-milosne',
      title: 'Listy Miłosne',
      year: '2025',
      coverImage: '/covers/listy-milosne.jpg',
      youtubeVideoId: 'VIDEO_ID_PLACEHOLDER',
      spotifyUrl: 'https://open.spotify.com/track/TRACK_ID_PLACEHOLDER',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=VIDEO_ID_PLACEHOLDER',
      tidalUrl: 'https://tidal.com/browse/track/TRACK_ID_PLACEHOLDER',
      appleMusicUrl: 'https://music.apple.com/pl/album/listy-mi%C5%82osne-single/ALBUM_ID_PLACEHOLDER',
      description: 'Najnowszy singiel Ani Olczyk - \'Listy Miłosne\' to opowieść o miłości w formie listów, gdzie każdy wers to osobista wiadomość do ukochanej osoby.'
    },
    {
      id: 'zacmienie-99',
      title: 'Zaćmienie \'99',
      year: '2025',
      coverImage: '/covers/zacmienie-99.jpg',
      youtubeVideoId: 'VIDEO_ID_PLACEHOLDER',
      spotifyUrl: 'https://open.spotify.com/track/TRACK_ID_PLACEHOLDER',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=VIDEO_ID_PLACEHOLDER',
      tidalUrl: 'https://tidal.com/browse/track/TRACK_ID_PLACEHOLDER',
      appleMusicUrl: 'https://music.apple.com/pl/album/za%C4%87mienie-99-single/ALBUM_ID_PLACEHOLDER',
      description: '\'Zaćmienie \'99\' to nostalgiczna podróż do przeszłości, gdzie Ania Olczyk opowiada historię z perspektywy roku 1999, łącząc przeszłość z teraźniejszością.'
    },
    {
      id: 'rumianki',
      title: 'Rumianki',
      year: '2023',
      coverImage: '/covers/rumianki.jpg',
      youtubeVideoId: 'VIDEO_ID_PLACEHOLDER',
      spotifyUrl: 'https://open.spotify.com/track/TRACK_ID_PLACEHOLDER',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=VIDEO_ID_PLACEHOLDER',
      tidalUrl: 'https://tidal.com/browse/track/TRACK_ID_PLACEHOLDER',
      appleMusicUrl: 'https://music.apple.com/pl/album/rumianki-single/ALBUM_ID_PLACEHOLDER',
      description: '\'Rumianki\' to delikatna ballada o miłości i nadziei, gdzie Ania Olczyk wykorzystuje symbolikę rumianków jako metaforę czystości i niewinności uczuć.'
    },
    {
      id: 'toksyk',
      title: 'Toksyk',
      year: '2022',
      coverImage: '/covers/toksyk.jpg',
      youtubeVideoId: 'VIDEO_ID_PLACEHOLDER',
      spotifyUrl: 'https://open.spotify.com/track/7iwMnjjivF3FiUIymvMZfy',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=DGVSi0LF4u0',
      tidalUrl: 'https://tidal.com/browse/track/TRACK_ID_PLACEHOLDER',
      appleMusicUrl: 'https://music.apple.com/pl/album/toksyk/1653125333?i=1653125349&l=pl',
      description: 'Debiutancki singiel \'Toksyk\' to opowieść o toksycznej relacji, gdzie Ania Olczyk pokazuje swoją wrażliwość i umiejętność opowiadania historii przez muzykę.'
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
