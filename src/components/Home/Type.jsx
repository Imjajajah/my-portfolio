import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full-Stack & Mobile Software Engineer",
              "Enterprise Systems Architect",
              "Offline-First Data Sync Specialist",
              "Flutter & React Developer",
              "Backend & API Engineer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
          }}
        />
      )
}

export default Type;