import { forwardRef } from "react";
import { config } from "../config";

const ChatBox = forwardRef((props, ref) => {
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="chat-char">{char}</span>
    ));
  };

  return (
    <div className="section chatbox-section" ref={ref}>
      <div className="text-box">
        <p className="hbd-chatbox">{splitText(config.textInChatBox)}</p>
        <span className="fake-btn">{config.sendButtonLabel}</span>
      </div>
    </div>
  );
});

ChatBox.displayName = "ChatBox";

export default ChatBox;
