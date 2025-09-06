import React from 'react';
import { Youtube, Instagram, Spotify } from "lucide-react";

const QRPage = () => {
  return (
    <section className="singles-section py-10 bg-gray-50" aria-label="Showcase Card">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="rounded-2xl shadow-lg p-6 bg-white">
          {/* Artist Bio */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Your Artist Name</h1>
            <p className="text-gray-700 leading-relaxed">
              Short bio about you, your music journey, influences, and what brings you
              to this showcase festival. Keep it personal and engaging so people can
              quickly connect with your story.
            </p>
          </div>

          {/* YouTube Live Sessions */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Live Sessions</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://youtube.com/your-private-link-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-600 hover:underline"
                >
                  <Youtube size={20} /> Live Session 1
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/your-private-link-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-600 hover:underline"
                >
                  <Youtube size={20} /> Live Session 2
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://open.spotify.com/artist/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              <Spotify size={18} /> Spotify
            </a>

            <a
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRPage;
