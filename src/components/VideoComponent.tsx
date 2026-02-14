import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface VideoComponentProps {
  src: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate?: string;
  duration?: string; // ISO 8601 format: PT1M30S = 1 min 30 sec
  contentUrl?: string;
  embedUrl?: string;
  style?: React.CSSProperties;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  poster?: string;
  preload?: 'none' | 'metadata' | 'auto';
  lazyLoad?: boolean;
  rootMargin?: string;
}

const VideoComponent = ({
  src,
  title,
  description,
  thumbnailUrl,
  uploadDate = '2026-01-27T00:00:00+01:00',
  duration = 'PT1M',
  contentUrl,
  embedUrl,
  style,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  poster,
  preload = 'none',
  lazyLoad = true,
  rootMargin = '200px',
}: VideoComponentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!lazyLoad);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!lazyLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazyLoad, rootMargin]);

  // Auto-play when visible
  useEffect(() => {
    if (isVisible && videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, user interaction required
      });
    }
  }, [isVisible, isLoaded, autoPlay]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  // Full URL for structured data
  const fullVideoUrl = contentUrl || `https://derivant.ai${src}`;
  const fullThumbnailUrl = thumbnailUrl.startsWith('http')
    ? thumbnailUrl
    : `https://derivant.ai${thumbnailUrl}`;

  // JSON-LD VideoObject structured data
  const videoStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    thumbnailUrl: fullThumbnailUrl,
    uploadDate: uploadDate,
    duration: duration,
    contentUrl: fullVideoUrl,
    embedUrl: embedUrl || fullVideoUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Derivant',
      logo: {
        '@type': 'ImageObject',
        url: 'https://derivant.ai/logo.png',
      },
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(videoStructuredData)}
        </script>
      </Helmet>

      {/* Video Container with Lazy Loading */}
      <div
        ref={containerRef}
        className={className}
        style={{
          position: 'relative',
          ...style,
        }}
      >
        {/* Placeholder/Thumbnail while loading */}
        {lazyLoad && !isLoaded && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: poster
                ? `url(${poster}) center/cover no-repeat`
                : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {!isVisible && (
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ marginLeft: '2px' }}
                >
                  <path
                    d="M8 5.14v14l11-7-11-7z"
                    fill="rgba(255, 255, 255, 0.5)"
                  />
                </svg>
              </div>
            )}
          </div>
        )}

        {/* Video Element */}
        {isVisible && (
          <video
            ref={videoRef}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            controls={controls}
            poster={poster}
            preload={preload}
            onLoadedData={handleLoadedData}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease',
              ...style,
            }}
            // Accessibility attributes
            aria-label={title}
            title={title}
          >
            <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
            {/* Fallback text for SEO */}
            <p>{description}</p>
          </video>
        )}
      </div>
    </>
  );
};

export default VideoComponent;
