import { forwardRef } from "react";

const Confetti = forwardRef((_, ref) => {
  const colors = [
    "#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff",
    "#5f27cd", "#00d2d3", "#ff9f43", "#10ac84", "#ee5253"
  ];

  const emojis = ["🎉", "🎊", "🎈", "🎁", "⭐", "✨", "🌟", "💫", "🎂", "🥳"];

  const renderConfettiPieces = () => {
    const pieces = [];

    // Paper confetti (rectangles)
    for (let i = 0; i < 60; i++) {
      const color = colors[i % colors.length];
      const left = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = 3 + Math.random() * 2;

      pieces.push(
        <div
          key={`paper-${i}`}
          className="confetti-paper"
          style={{
            left: `${left}%`,
            backgroundColor: color,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }

    // Emoji confetti
    for (let i = 0; i < 30; i++) {
      const emoji = emojis[i % emojis.length];
      const left = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = 3.5 + Math.random() * 2;

      pieces.push(
        <div
          key={`emoji-${i}`}
          className="confetti-emoji"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          {emoji}
        </div>
      );
    }

    return pieces;
  };

  // Circle burst confetti
  const renderBurstCircles = () => {
    return Array.from({ length: 9 }, (_, i) => (
      <svg key={i} viewBox="0 0 100 100" className="confetti-circle">
        <circle cx="50" cy="50" r="50" />
      </svg>
    ));
  };

  return (
    <div className="confetti-section" ref={ref}>
      {renderBurstCircles()}
      <div className="confetti-rain">
        {renderConfettiPieces()}
      </div>
    </div>
  );
});

Confetti.displayName = "Confetti";

export default Confetti;
