import React, { useState, useEffect } from 'react';
import './App.css'


const TypewriterEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const textsToDisplay = [
    'Hi, my name is Matthew',
    'I am a software engineer',
  ];
  let textIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    const typeWriter = () => {
      if (charIndex < textsToDisplay[textIndex].length) {
        setDisplayText((prevDisplayText) => prevDisplayText + textsToDisplay[textIndex].charAt(charIndex));
        charIndex++;
        setTimeout(typeWriter, 100);
      } else {
        // Transition to the next text
        textIndex = (textIndex + 1) % textsToDisplay.length;
        charIndex = 0;
        setTimeout(() => {
          setDisplayText('');
          typeWriter();
        }, 2000);
      }
    };
    typeWriter();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-2xl font-mono">
        <span className="border-r-2 border-gray-900 animate-pulse">{displayText}</span>
      </div>
    </div>
  );
};

export default TypewriterEffect;