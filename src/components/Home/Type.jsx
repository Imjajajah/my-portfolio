import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full-Stack Developer", 
              "Certified Project Initiator & Business Analyst", 
              "Frontend Specialist", 
              "Technical Support Engineer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type