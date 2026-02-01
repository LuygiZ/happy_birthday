import { useState } from "react";
import { config } from "../config";

const IntroCard = ({ onStart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    if (!isOpen) {
      // First click/tap opens the card
      setIsOpen(true);
    } else {
      // Second click/tap starts the animation
      onStart();
    }
  };

  // For desktop: hover opens, click starts
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="intro-wrapper">
      <div
        className={`intro-card ${isOpen ? "card-open" : ""}`}
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-front">
          <div className="card-decoration">
            <div className="balloon balloon-1"></div>
            <div className="balloon balloon-2"></div>
            <div className="balloon balloon-3"></div>
            <div className="balloon balloon-4"></div>
          </div>
          <div className="card-content">
            <span className="card-emoji">🎂</span>
            <h2 className="card-title">Happy Birthday</h2>
            <h3 className="card-name">{config.name}!</h3>
            <p className="card-hint">
              {isOpen ? "Tap again to start!" : "Tap to open"}
            </p>
          </div>
          <div className="card-sparkles">
            <span>✨</span>
            <span>✨</span>
            <span>✨</span>
          </div>
        </div>
        <div className="card-inside">
          <div className="card-inside-content">
            <p className="card-message">A special surprise awaits...</p>
            <span className="card-arrow">→</span>
          </div>
        </div>
      </div>
      <p className="intro-instruction">
        {isOpen ? "Tap to start!" : "Tap or hover the card"}
      </p>
    </div>
  );
};

export default IntroCard;
