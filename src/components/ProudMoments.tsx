import React from 'react';

type Video = { type: 'youtube' | 'mp4'; src: string };

interface ProudMomentsProps {
  images?: string[];
  videos?: Video[];
}

function toYouTubeEmbed(url: string) {
  try {
    if (url.includes('youtube.com/watch')) {
      const u = new URL(url);
      const v = u.searchParams.get('v');
      return v ? `https://www.youtube.com/embed/${v}` : url;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    // assume already an embed or direct URL
    return url;
  } catch (e) {
    return url;
  }
}

const ProudMoments: React.FC<ProudMomentsProps> = ({ images = [], videos = [] }) => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-textPrimary mb-3">Proud Moments</h4>
      <p className="text-textSecondary mb-4">A few highlights — images and videos from my journey. Replace these with your own media by updating the component props or placing files in <code>public/</code>.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, idx) => (
          <div key={`img-${idx}`} className="rounded-lg overflow-hidden bg-primary/5">
            <img src={src} alt={`proud-${idx}`} className="w-full h-48 object-cover" />
          </div>
        ))}

        {videos.map((v, idx) => (
          <div key={`vid-${idx}`} className="rounded-lg overflow-hidden bg-primary/5">
            {v.type === 'youtube' ? (
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={toYouTubeEmbed(v.src)}
                  title={`video-${idx}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <video controls className="w-full h-48 bg-black">
                <source src={v.src} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProudMoments;
