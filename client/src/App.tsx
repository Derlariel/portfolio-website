import React from "react";
import { motion } from "framer-motion";
import Welcome from "./pages/Welcome";
const App = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-center font-bold text-4xl w-full text-white 
               bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] backdrop-blur-xl"
               animate={{
                background: [
                  "#0f0c29", 
                  "#302b63", 
                  "#24243e", 
                  "#0f0c29", 
                ],
              }}
              transition={{
                duration: 5, 
                repeat: Infinity,
                repeatType: "mirror",
              }}
    >
      <Welcome/>
    </motion.div> 
  );
};

export default App;
