import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

export type timeType = {
  minutes: number;
  seconds: number;
};

interface TimerLeftProps {
  initialTime?: timeType;
  useTimer: boolean;
}

export default function TimerLeft(props: TimerLeftProps) {
  const [timeLeft, setTimeLeft] = useState<number>(
    props.initialTime
      ? props.initialTime.minutes * 60 + props.initialTime.seconds
      : 8 * 60
  );

  useEffect(() => {
    if (!props.useTimer) return; 
    let interval: NodeJS.Timer | null = null;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}m:${String(secs).padStart(2, "0")}s`;
  };

  return (
    <>
      <div className="timer-left">
        <ReactSVG
          className="timer-left__icon"
          src="/assets/icons/timer-icon.svg"
        />

        <p className="timer-left__desc">
          You only have{" "}
          <span className="timer-left__highlight">{formatTime(timeLeft)}</span>,{" "}
          to participate.
        </p>
      </div>
    </>
  );
}
