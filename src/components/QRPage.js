import React from 'react';
import './QRPage.css';

const QRPage = () => {
  return (
    <section className="singles-section qr-section" aria-label="Single Ani Olczyk">
      <div className="container qr-container">
        <div className="qr-layout">
          <div className="qr-info">
            <h2>Cześć, </h2>
            <p>
Tu Ania Olczyk, Piszę piosenki, które słuchają Ciebie.
Moja muzyka balansuje między organicznym brzmieniem a elektroniką, od gitar i perkusji po syntezatory i chórki, ale najważniejsze są w niej słowa: intymne, szczere i pełne obserwacji. 
<br />
To Alternatywny Pop, który wymaga uwagi. Na scenie szukam bliskości. 
<br />
Chcę, żeby słuchacz poczuł się częścią tej samej opowieści.</p>
            <h3>Kontakt</h3>
            <p>
              Manager: <a href="mailto:mgmt@aniaolczyk.com">mgmt@aniaolczyk.com</a>
              <br />
              Booking: <a href="mailto:booking@aniaolczyk.com">booking@aniaolczyk.com</a>
              <br />
              Instagram: <a href="https://www.instagram.com/ania__olczyk" target="_blank" rel="noopener" aria-label="Instagram Ania Olczyk">ania__olczyk</a>
            </p>
          </div>
          <div className="qr-video">
            <h2>Nagranie Live:</h2>
            <iframe 
              src={`https://www.youtube.com/embed/0lCvE87M9Zg`}
              title={`Live Session - Ania Olczyk`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
        <div class="spotify-embed">
          <iframe
            src="https://open.spotify.com/embed/artist/1AfgDOc4Q0Z7LZpdQbU49y?utm_source=generator&theme=0"
            style={{ borderRadius: '12px', width: '70%', height: '352px', marginTop: '25px' }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Spotify Artist"
          />

        </div>
      </div>
    </section>
  );
};

export default QRPage;