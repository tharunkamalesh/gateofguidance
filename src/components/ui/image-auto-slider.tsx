import React from 'react';

interface ImageAutoSliderProps {
    images: string[];
    title?: string;
    subtitle?: string;
    description?: string;
    className?: string;
    duration?: number;
}

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({
    images,
    title,
    subtitle,
    description,
    className = '',
    duration = 20
}) => {
    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <>
            <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right ${duration}s linear infinite;
        }

        .infinite-scroll:hover {
          animation-play-state: paused;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
          box-shadow: 0 25px 50px -12px rgba(45, 53, 82, 0.4);
        }
      `}</style>

            <div className={`w-full relative overflow-hidden ${className}`}>
                {/* Header */}
                {(title || subtitle || description) && (
                    <div className="text-center mb-12">
                        {subtitle && (
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                {subtitle}
                            </span>
                        )}
                        {title && (
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-4 mb-6">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Scrolling images container */}
                <div className="relative w-full flex items-center justify-center py-8">
                    <div className="scroll-container w-full">
                        <div className="infinite-scroll flex gap-6 w-max">
                            {duplicatedImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="image-item flex-shrink-0 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
                                >
                                    <img
                                        src={image}
                                        alt={`Achiever ${(index % images.length) + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageAutoSlider;
