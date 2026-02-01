import { useState, useRef, useCallback } from "react";
import gsap from "gsap";
import {
  IntroCard,
  Greeting,
  BirthdayAnnouncement,
  ChatBox,
  Narrative,
  Profile,
  Balloons,
  Confetti,
  Outro,
} from "./components";

const BirthdayAnimation = () => {
  const [started, setStarted] = useState(false);
  const timelineRef = useRef(null);

  const runAnimation = useCallback(() => {
    const tl = gsap.timeline();
    timelineRef.current = tl;

    tl
      // Show container
      .to(".animation-container", {
        duration: 0.5,
        visibility: "visible",
        opacity: 1,
      })

      // 1. GREETING SECTION
      .to(".greeting-section", { duration: 0.1, opacity: 1 })
      .from(".greeting-section .greeting", { duration: 0.6, opacity: 0, y: 30 })
      .from(".greeting-section .name", { duration: 0.6, opacity: 0, y: 30 }, "-=0.3")
      .from(".greeting-section .greeting-text", { duration: 0.5, opacity: 0 }, "-=0.2")
      .to(".greeting-section", { duration: 0.5, opacity: 0 }, "+=2")

      // 2. ANNOUNCEMENT SECTION
      .to(".announcement-section", { duration: 0.1, opacity: 1 })
      .from(".announcement-section .announcement-text", { duration: 0.6, opacity: 0, scale: 0.8 })
      .to(".announcement-section", { duration: 0.5, opacity: 0 }, "+=1.5")

      // 3. CHATBOX SECTION
      .to(".chatbox-section", { duration: 0.1, opacity: 1 })
      .from(".chatbox-section .text-box", { duration: 0.5, opacity: 0, scale: 0.8 })
      .from(".fake-btn", { duration: 0.3, opacity: 0, scale: 0.5 })
      .to(".chat-char", {
        duration: 0.05,
        visibility: "visible",
        stagger: 0.04,
      })
      .to(".fake-btn", { duration: 0.2, backgroundColor: "#7fcef8" }, "+=0.3")
      .to(".chatbox-section", { duration: 0.5, opacity: 0, y: -30 }, "+=0.5")

      // 4. NARRATIVE SECTION
      .to(".narrative-section", { duration: 0.1, opacity: 1 })

      // Idea 1
      .to(".idea-1", { duration: 0.1, visibility: "visible" })
      .to(".idea-1", { duration: 0.5, opacity: 1, y: 0 })
      .to(".idea-1", { duration: 0.5, opacity: 0 }, "+=1")

      // Idea 2
      .to(".idea-2", { duration: 0.1, visibility: "visible" })
      .to(".idea-2", { duration: 0.5, opacity: 1, y: 0 })
      .to(".idea-2", { duration: 0.5, opacity: 0 }, "+=1")

      // Idea 3
      .to(".idea-3", { duration: 0.1, visibility: "visible" })
      .to(".idea-3", { duration: 0.5, opacity: 1, y: 0 })
      .to(".idea-3 strong", {
        duration: 0.4,
        scale: 1.2,
        backgroundColor: "#15a1ed",
        color: "#fff",
        padding: "5px 15px",
      }, "+=0.3")
      .to(".idea-3", { duration: 0.5, opacity: 0 }, "+=1")

      // Idea 5 (You are special)
      .to(".idea-5", { duration: 0.1, visibility: "visible" })
      .to(".idea-5", { duration: 0.6, opacity: 1 })
      .to(".idea-5 .smiley", { duration: 0.5, rotation: 90 }, "+=0.5")
      .to(".idea-5", { duration: 0.5, opacity: 0, scale: 0.8 }, "+=1")

      // Idea 6 (SO)
      .to(".idea-6", { duration: 0.1, visibility: "visible" })
      .to(".idea-6 span", {
        duration: 0.6,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.7)",
        stagger: 0.15,
      })
      .to(".idea-6 span", {
        duration: 0.5,
        opacity: 0,
        scale: 1.5,
        stagger: 0.1,
      }, "+=0.8")
      .to(".narrative-section", { duration: 0.3, opacity: 0 })

      // 5. BALLOONS + PROFILE
      .to(".profile-section", { duration: 0.1, opacity: 1 })
      .fromTo(
        ".balloon-img",
        { y: 600, opacity: 0 },
        {
          duration: 2.5,
          y: -800,
          opacity: 1,
          stagger: 0.12,
          ease: "none"
        }
      )
      .from(".profile-picture", { duration: 0.5, scale: 1.5, opacity: 0 }, "-=2")
      .from(".hat", { duration: 0.5, y: -80, rotation: -180, opacity: 0 }, "-=1.5")
      .from(".wish-hbd span", {
        duration: 0.4,
        opacity: 0,
        y: -20,
        ease: "back.out(1.7)",
        stagger: 0.06,
      }, "-=1")
      .to(".wish-hbd span", {
        duration: 0.4,
        color: "#ff69b4",
        stagger: 0.04,
      })
      .from(".wish-text", { duration: 0.4, opacity: 0, y: 10 })

      // 6. CONFETTI
      .to(".confetti-circle", {
        duration: 0.8,
        visibility: "visible",
        scale: 40,
        opacity: 0,
        stagger: 0.15,
        repeat: 2,
        repeatDelay: 0.8,
      })

      // 7. OUTRO
      .to(".profile-section", { duration: 0.5, opacity: 0 }, "+=0.5")
      .to(".outro-section", { duration: 0.1, opacity: 1 })
      .from(".outro-text", { duration: 0.5, opacity: 0, y: 20 })
      .from(".replay-btn", { duration: 0.5, opacity: 0, y: 20 }, "-=0.3")
      .from(".last-smile", { duration: 0.4, opacity: 0, scale: 0 })
      .to(".last-smile", { duration: 0.5, rotation: 90 }, "+=0.5");
  }, []);

  const handleStart = useCallback(() => {
    setStarted(true);
    setTimeout(() => {
      runAnimation();
    }, 100);
  }, [runAnimation]);

  const handleReplay = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  }, []);

  if (!started) {
    return <IntroCard onStart={handleStart} />;
  }

  return (
    <div className="animation-container">
      <Greeting />
      <BirthdayAnnouncement />
      <ChatBox />
      <Narrative />
      <Balloons />
      <Profile />
      <Confetti />
      <Outro onReplay={handleReplay} />
    </div>
  );
};

export default BirthdayAnimation;
