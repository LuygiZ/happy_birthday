import { forwardRef } from "react";

const Balloons = forwardRef((props, ref) => {
  const renderBalloons = () => {
    const balloons = [];
    for (let i = 0; i < 32; i++) {
      const balloonType = (i % 3) + 1;
      balloons.push(
        <img
          key={i}
          src={`${process.env.PUBLIC_URL}/img/ballon${balloonType}.svg`}
          alt="balloon"
          className="balloon-img"
        />
      );
    }
    return balloons;
  };

  return (
    <div className="balloons-section" ref={ref}>
      {renderBalloons()}
    </div>
  );
});

Balloons.displayName = "Balloons";

export default Balloons;
