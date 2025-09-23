import React, { useState } from 'react';

type MediaItem = { type: 'image' | 'video'; src: string };

interface MediaSlideshowProps {
  items: MediaItem[];
}

const MediaSlideshow: React.FC<MediaSlideshowProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  if (!items || items.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="mt-6 bg-primary/10 border border-secondary/10 rounded-lg p-4">
      <h4 className="text-lg font-semibold text-textPrimary mb-3">My proud moments</h4>
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <div className="flex-1 rounded overflow-hidden bg-black/40 flex items-center justify-center" style={{ minHeight: 240 }}>
          {items[index].type === 'image' ? (
            <img src={items[index].src} alt={`media-${index}`} className="w-full h-full object-contain" />
          ) : (
            <video controls className="w-full h-full" style={{ maxHeight: 520 }}>
              <source src={items[index].src} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="w-full sm:w-48 flex flex-col items-stretch gap-2">
          <div className="flex items-center justify-between">
            <button onClick={prev} className="px-3 py-1 rounded bg-secondary/20 hover:bg-secondary/30">Prev</button>
            <div className="text-sm text-textSecondary">{index + 1} / {items.length}</div>
            <button onClick={next} className="px-3 py-1 rounded bg-secondary/20 hover:bg-secondary/30">Next</button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-1 gap-2 mt-2">
            {items.map((it, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`rounded overflow-hidden border ${i === index ? 'border-secondary' : 'border-transparent'}`}>
                {it.type === 'image' ? (
                  <img src={it.src} alt={`thumb-${i}`} className="w-full h-20 object-cover" />
                ) : (
                  <div className="w-full h-20 bg-black flex items-center justify-center text-xs text-textSecondary">Video</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSlideshow;
