import { forwardRef } from "react";
import { config } from "../config";

const Outro = forwardRef(({ onReplay }, ref) => {
  return (
    <div className="section outro-section" ref={ref}>
      <p className="outro-text">{config.outroText}</p>
      <p className="replay-btn" onClick={onReplay}>
        {config.replayText}
      </p>
      <p className="last-smile">{config.outroSmiley}</p>
    </div>
  );
});

Outro.displayName = "Outro";

export default Outro;
