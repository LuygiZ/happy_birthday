import { forwardRef } from "react";
import { config } from "../config";

const Profile = forwardRef((props, ref) => {
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index}>{char}</span>
    ));
  };

  return (
    <div className="section profile-section" ref={ref}>
      <div className="profile-container">
        <img
          className="profile-picture"
          src={`${process.env.PUBLIC_URL}${config.imagePath}`}
          alt={config.name}
        />
        <img
          className="hat"
          src={`${process.env.PUBLIC_URL}/img/hat.svg`}
          alt="party hat"
        />
      </div>
      <div className="wish">
        <h3 className="wish-hbd">{splitText(config.wishHeading)}</h3>
        <h5 className="wish-text">{config.wishText}</h5>
      </div>
    </div>
  );
});

Profile.displayName = "Profile";

export default Profile;
