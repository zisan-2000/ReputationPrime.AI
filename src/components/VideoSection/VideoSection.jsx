import React from "react";

const VideoSection = ({ heading, subheading, videoSrc, styles }) => {
  return (
    <section className={`video-section ${styles.backgroundColor}`}>
      <div className="video-section-container">
        {/* Text Content */}
        <div className="video-section-text">
          <h2 className={`video-section-heading ${styles.headingColor}`}>
            {heading}
          </h2>
          <p className={`video-section-subheading ${styles.subheadingColor}`}>
            {subheading}
          </p>
        </div>
        {/* Video Content */}
        <div className="video-section-video">
          <iframe
            className="video-section-iframe"
            src={videoSrc}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
