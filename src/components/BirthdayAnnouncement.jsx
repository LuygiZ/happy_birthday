import { forwardRef } from "react";
import { config } from "../config";

const BirthdayAnnouncement = forwardRef((props, ref) => {
  return (
    <div className="section announcement-section" ref={ref}>
      <span className="announcement-text">{config.text1}</span>
    </div>
  );
});

BirthdayAnnouncement.displayName = "BirthdayAnnouncement";

export default BirthdayAnnouncement;
