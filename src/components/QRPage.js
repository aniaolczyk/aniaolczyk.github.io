import { React, useState } from 'react';

const QRPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);

    try {
      fetch('https://formcare.io/api/submit/7sNFVfWaxMU7', {
        method: 'POST',
        body: formData,
      });
      setSubmitted(true);
      setName('');
      setEmail('');
    } catch (err) {
      alert('Submission failed, please try again.');
      console.error(err);
    }
  };
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
            <h2>Nagranie Live (Great September exclusive):</h2>
          <iframe 
            style={{ borderRadius: '12px', width: '100%', height: '346px', marginTop: '25px' }}  
             src="https://www.youtube.com/embed/videoseries?si=n-tEdYx77ETZGVVT&amp;list=PLSGPJHBVDzmvZ6OZqqJh5DV0ki0S-8HqE"
              title={`Live Session - Ania Olczyk`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
          </div>
        </div>
        <div class="qr-70">
          <iframe
            src="https://open.spotify.com/embed/artist/1AfgDOc4Q0Z7LZpdQbU49y?utm_source=generator&theme=0"
            style={{ borderRadius: '12px', width: '100%', height: '360px', marginTop: '25px' }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Spotify Artist"
          />
        </div>
        <div class="qr-70">
          <div className="form-container">
            <h2 className="form-title">Bądź na bieżąco</h2>
            {submitted ? (
              <p className="thank-you-message">Dzięki!</p>
            ) : (
              <form
                action="https://formcare.io/api/submit/7sNFVfWaxMU7"
                method="POST"
                className="email-form"
                onSubmit={handleSubmit}
              >
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Imię"
                  required
                  autocomplete="given-name"
                  className="email-input"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  autocomplete="email"
                  className="email-input"
                />
                <button type="submit" className="submit-button">Subskrybuj</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRPage;