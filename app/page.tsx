"use client";
import { useEffect, useMemo, useState } from "react";

type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Home() {
  const relealseDate = new Date("2026-05-23T00:00:00Z");
  const initRemainingTime = useMemo<RemainingTime>(() => {
    const now = new Date();
    const timeDiff = relealseDate.getTime() - now.getTime();

    return {
      days: Math.floor(timeDiff / (1000 * 3600 * 24)),
      hours: Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)),
      minutes: Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
    };
  }, []);

  const [remainingTime, setRemainingTime] =
    useState<RemainingTime>(initRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = relealseDate.getTime() - now.getTime();

      setRemainingTime({
        days: Math.floor(timeDiff / (1000 * 3600 * 24)),
        hours: Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)),
        minutes: Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => {
      clearInterval(interval);
      setRemainingTime(initRemainingTime);
    };
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-black/50 space-y-8 p-4">
        {/* For TSX uncomment the commented types below */}
        <div className="font-roboto grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col">
            <span className="countdown font-mono text-4xl md:text-6xl lg:text-8xl">
              <span
                style={{ "--value": remainingTime.days } as React.CSSProperties}
                aria-live="polite"
                aria-label={remainingTime.days.toString()}
              >
                {remainingTime.days}
              </span>
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-4xl md:text-6xl lg:text-8xl">
              <span
                style={
                  {
                    "--value": remainingTime.hours,
                  } as React.CSSProperties
                }
                aria-live="polite"
                aria-label={remainingTime.hours.toString()}
              >
                {remainingTime.hours}
              </span>
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-4xl md:text-6xl lg:text-8xl">
              <span
                style={
                  {
                    "--value": remainingTime.minutes,
                  } as React.CSSProperties
                }
                aria-live="polite"
                aria-label={remainingTime.minutes.toString()}
              >
                {remainingTime.minutes}
              </span>
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-4xl md:text-6xl lg:text-8xl">
              <span
                style={
                  {
                    "--value": remainingTime.seconds,
                  } as React.CSSProperties
                }
                aria-live="polite"
                aria-label={remainingTime.seconds.toString()}
              >
                {remainingTime.seconds}
              </span>
            </span>
            sec
          </div>
        </div>
        <h3 className="font-roboto font-black text-lg md:text-2xl lg:text-4xl text-shadow-xl opacity-90">
          Until May 23rd, 2026
        </h3>
      </div>
    </div>
  );
}
