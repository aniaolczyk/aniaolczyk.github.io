import React from 'react';
import './QRPage.css';

const QRPage = () => {
  return (
    <section className="singles-section qr-section" aria-label="Single Ani Olczyk">
      <div className="container qr-container">
        <div className="qr-layout">
          <div className="qr-info">
            <h2>Heading</h2>
            <p>Jestem Ania Olczyk, bla bla bla...</p>
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
            <iframe 
              src={`https://www.youtube.com/embed/0lCvE87M9Zg`}
              title={`Live Session - Ania Olczyk`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3fXkjWQG9QA9Ddizcx6ykZ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </section>
  );
};

export default QRPage;