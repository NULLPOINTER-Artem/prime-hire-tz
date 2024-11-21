import { gsap } from "gsap";
import { useRef } from "react";

interface BoxProps {
  isWinner?: boolean;
  handleWin: () => void;
}

export default function Box({ isWinner, handleWin }: BoxProps) {
  let isStarted = false;
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bodyRef = useRef(null);
  const lightRef = useRef(null);
  const backpackRef = useRef(null);
  const backpackWinRef = useRef(null);

  const handleChoose = () => {
    if (
      !topRef.current ||
      !middleRef.current ||
      !bodyRef.current ||
      !lightRef.current ||
      (!backpackRef.current && isWinner) ||
      (!backpackWinRef.current && isWinner) ||
      isStarted
    ) {
      return;
    }
    isStarted = true;

    if (isWinner) {
      const winTL = gsap.timeline({
        onComplete: () => {
          winTL.kill();
          handleWin();
        },
      });

      winTL
        .to(topRef.current, {
          top: "19%",
          duration: 0.4,
          ease: "linear",
        })
        .to(topRef.current, {
          rotateZ: -5,
          duration: 0.1,
          ease: "linear",
          delay: 0.6,
        })
        .to(topRef.current, {
          top: "-20%",
          left: "0%",
          duration: 0.3,
          ease: "linear",
          delay: 0.1,
        })
        .to(topRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: "linear",
          onComplete: () => {
            gsap.set(backpackRef.current, {
              display: "none",
            });
            gsap.set(bodyRef.current, {
              zIndex: 2,
            });
            gsap.set(backpackWinRef.current, {
              zIndex: 2,
            });
          },
        })
        .to(backpackWinRef.current, {
          top: "17%",
          duration: 0.4,
        });
    } else {
      const emptyTL = gsap.timeline({
        onComplete: () => {
          emptyTL.kill();
        },
      });

      emptyTL
        .to(topRef.current, {
          top: "19%",
          duration: 0.4,
          ease: "linear",
        })
        .to(topRef.current, {
          top: "12%",
          left: "37%",
          rotateZ: -30,
          duration: 0.6,
          ease: "linear",
          delay: 0.6,
        })
        .to(
          lightRef.current,
          {
            opacity: 0,
            duration: 0.6,
            ease: "linear",
            delay: 0.6,
          },
          "-=1"
        );
    }
  };

  return (
    <div className="box" onClick={handleChoose}>
      <img
        ref={topRef}
        className="box__top"
        src="/prime-hire-tz/assets/images/box/top.png"
        alt="box box__top"
      />
      <img
        ref={lightRef}
        className="box__light"
        src="/prime-hire-tz/assets/images/box/light.png"
        alt="box box__light"
      />
      <img
        ref={middleRef}
        className="box__middle"
        src="/prime-hire-tz/assets/images/box/middle.png"
        alt="box box__middle"
      />

      {isWinner && (
        <>
          <img
            ref={backpackWinRef}
            className="box__backpack-win"
            src="/prime-hire-tz/assets/images/box/backpack-win.png"
            alt="box box__backpack-win"
          />
          <img
            ref={backpackRef}
            className="box__backpack"
            src="/prime-hire-tz/assets/images/box/backpack.png"
            alt="box box__backpack"
          />
        </>
      )}

      <img
        ref={bodyRef}
        className="box__body"
        src="/prime-hire-tz/assets/images/box/body.png"
        alt="box body"
      />
    </div>
  );
}
