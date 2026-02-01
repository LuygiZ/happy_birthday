import { forwardRef } from "react";

const Confetti = forwardRef((props, ref) => {
  const renderConfetti = () => {
    return Array.from({ length: 9 }, (_, i) => (
      <svg key={i} viewBox="0 0 100 100" className="confetti-circle">
        <circle cx="50" cy="50" r="50" />
      </svg>
    ));
  };

  return (
    <div className="confetti-section" ref={ref}>
      {renderConfetti()}
    </div>
  );
});

Confetti.displayName = "Confetti";

export default Confetti;
