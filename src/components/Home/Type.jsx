import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full-Stack & Mobile Developer",
              "Enterprise Systems Architect",
              "Technical Support Engineer @ Telus",
              "Offline-First App Specialist",
              "Project Lead & Business Analyst",
              "Flutter / Dart Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
          }}
        />
      )
}

export default Type;