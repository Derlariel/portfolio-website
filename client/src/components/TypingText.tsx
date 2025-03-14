import { motion } from 'framer-motion';
import React from 'react'


interface TextProps {
    text: string[];
    textColor: string[];
    textSize:string[]
  }
  
const TypingText: React.FC<TextProps> = ({ text, textColor , textSize }) => {
  return (
    <div className="text-8xl font-bold text-center">
      {text.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          className={`mb-2 ${textColor[lineIndex]} ${textSize[lineIndex]}`}
        >
          {line.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: (charIndex + lineIndex * 10) * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default TypingText