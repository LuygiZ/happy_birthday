import { forwardRef } from "react";
import { config } from "../config";

const Greeting = forwardRef((props, ref) => {
  return (
    <div className="section greeting-section" ref={ref}>
      <span className="greeting">{config.greeting}</span>
      <span className="name">{config.name}</span>
      <p className="greeting-text">{config.greetingText}</p>
    </div>
  );
});

Greeting.displayName = "Greeting";

export default Greeting;
