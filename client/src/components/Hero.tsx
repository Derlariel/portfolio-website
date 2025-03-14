import React, { useState } from "react";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// const icons = [
//   {id:"user" , icon:FaUser , link:""},
//   {id:"github" , icon:FaGithub , link:""},
//   {id:"code" , icon:FaCode , link:""}
// ]

const Hero = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleClick = (icon: string) => {
    setSelectedIcon(selectedIcon === icon ? null : icon);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <div className="flex gap-5">
        <motion.div
          onClick={() => handleClick("user")}
          className={`cursor-pointer ${
            selectedIcon === "user" ? "scale-150" : "scale-100"
          } transition-all duration-300`}
          style={{
            filter:
              selectedIcon && selectedIcon !== "user" ? "blur(2px)" : "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <IoMailUnreadSharp size={40} />
        </motion.div>
        <motion.div
          onClick={() => handleClick("github")}
          className={`cursor-pointer ${
            selectedIcon === "github" ? "scale-150" : "scale-100"
          } transition-all duration-300`}
          style={{
            filter:
              selectedIcon && selectedIcon !== "github" ? "blur(2px)" : "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <FaGithub size={40} />
        </motion.div>
        <motion.div
          onClick={() => handleClick("code")}
          className={`cursor-pointer ${
            selectedIcon === "code" ? "scale-150" : "scale-100"
          } transition-all duration-300`}
          style={{
            filter:
              selectedIcon && selectedIcon !== "code" ? "blur(2px)" : "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <FaLinkedin size={40} />
        </motion.div>
      </div>

      <TypingText
        text={["Welcome To My", "Portfolio Website!"]}
        textColor={[
          "text-white",
          "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent",
        ]}
        textSize={["text-9xl"]}
      />
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2 , delay:4}}>
        <DotLottieReact
          src="https://lottie.host/91a21a1d-9c98-4eee-b06d-aacf64ae29b3/EVcOb2OGxw.lottie"
          loop
          autoplay
          className="w-60"
        />
      </motion.p>
    </div>
  );
};

export default Hero;
