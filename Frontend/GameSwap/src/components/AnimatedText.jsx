import React, { useState, useEffect } from "react";

const generateBrighterColor = () => {
  const hueShift = 60; // Adjust for warmth (higher = warmer)
  const randomValue = Math.floor(Math.random() * 16777215);
  const baseColor = randomValue.toString(16).padStart(6, "0"); // Ensure 6 digits

  // Extract hue (first two digits)
  let hue = parseInt(baseColor.slice(0, 2), 16);

  // Shift hue for warmth
  hue = (hue + hueShift) % 360;

  // Convert adjusted hue back to hex string (two digits)
  const adjustedHue = hue.toString(16).padStart(2, "0");

  // Maintain original saturation and value (remaining digits)
  const saturation = baseColor.slice(2, 4);
  const value = baseColor.slice(4);

  // Combine adjusted components
  const brighterColor = `#${adjustedHue}${saturation}${value}`;

  return brighterColor;
};

const colorize = (chars) => {
  const final = [];
  chars.forEach((element, index) => {
    let coloredSpans;
    if (index !== chars.length - 1) {
      coloredSpans = element.split("").map((char, index) => {
        return <span>{char}</span>;
      });
      final.push(...coloredSpans);
      final.push(" ");
    } else {
      coloredSpans = element.split("").map((char, index) => {
        var color = generateBrighterColor();
        return (
          <span
            style={{
              color: color,
            }}
          >
            {char}
          </span>
        );
      });
      final.push(...coloredSpans);
    }
  });
  return final;
};

const AnimatedText = ({ text, home }) => {
  const appName = text.split(" ");
  const [chars, setChars] = useState([]);
  const [typingComplete, setTypingComplete] = useState(false);
  const [colored, setColored] = useState([]);
  useEffect(() => {
    let coloredChars = colorize(appName);
    setChars(coloredChars);
  }, []);

  useEffect(() => {
    if (colored.length === text.length && !typingComplete) {
      setTypingComplete(true);
      console.log(typingComplete);
    }
    const intervalId = setInterval(() => {
      setColored(chars.slice(0, colored.length + 1));
    }, 200);

    return () => clearInterval(intervalId); // Cleanup function for interval
  }, [colored]);
  return (
    <>
      <div className=" container mx-auto my-5 flex justify-center items-center">
        <span className="text-6xl font-pixelify font-bold text-white banner min-w-min">
          {colored}
        </span>
      </div>
      {home ? (
        <div
          className={`${
            typingComplete
              ? "opactiy-100 fade-in container mx-auto text-center font-pixelify text-white font-semibold text-xl h-36"
              : "opacity-0 h-36"
          }`}
        >
          <p className="inline tracking-wide hover:transition-all ease-in-out hover:tracking-widest duration-300">
            CONNECT. SWAP. PLAY
          </p>
          <div className="container mx-auto flex justify-center my-2">
            <button className="rounded-full mx-1 py-1 px-4 bg-blue-600 text-white font-mono font-semibold text-base hover:transition-all hover:bg-blue-500 ease-in-out duration-300">
              Sign Up
            </button>
            <button className="rounded-full mx-1 py-1 px-4 border-solid border-2 border-white text-white font-mono font-semibold text-base hover:text-black hover:transition-all hover:bg-white ease-in-out duration-300">
              Explore
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AnimatedText;
