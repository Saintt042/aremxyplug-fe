import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const CodeAnimation = () => {
  const [code, setCode] = useState([
    "const greeting = 'Hello, World!';",
    "console.log(greeting);",
  ]);
  const [currentLine, setCurrentLine] = useState(0);

  const cursorAnimation = useSpring({
    loop: true,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const addLine = () => {
    setCode((prevCode) => [
      ...prevCode,
      "const name = 'John';",
    ]);
    setCurrentLine((prevLine) => prevLine + 2);
  };

  return (
    <div className="code-editor">
      {code.map((line, index) => (
        <div key={index} className="code-line">
          {index === currentLine && (
            <animated.span style={cursorAnimation}>|</animated.span>
          )}
          {line}
        </div>
      ))}
      <button onClick={addLine}>Add Line</button>
    </div>
  );
};

export default CodeAnimation;
