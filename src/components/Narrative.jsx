import { forwardRef } from "react";
import { config } from "../config";

const Narrative = forwardRef((props, ref) => {
  return (
    <div className="section narrative-section" ref={ref}>
      <p className="idea idea-1">{config.text2}</p>
      <p className="idea idea-2">{config.text3}</p>
      <p className="idea idea-3">
        {config.text4} <strong>{config.text4Adjective}</strong>
      </p>
      <p className="idea idea-4">
        {config.text5Entry} {config.text5Content} {config.smiley}
      </p>
      <p className="idea idea-5">
        {config.text5Entry}{" "}
        <span>{config.text5Content}</span>{" "}
        <span className="smiley">{config.smiley}</span>
      </p>
      <p className="idea idea-6">
        <span>{config.bigTextPart1}</span>
        <span>{config.bigTextPart2}</span>
      </p>
    </div>
  );
});

Narrative.displayName = "Narrative";

export default Narrative;
