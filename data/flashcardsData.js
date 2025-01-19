export const flashcards = {
  physics: {
    "Center Of Mass": [
      {
        question: "What is the center of mass of a system of particles?",
        imgSrc: "",
        options: {
          a: "The point where all the mass of the system is concentrated",
          b: "The geometric center of the system",
          c: "The point where external force seems to act on the system",
          d: "The point where all particles are located"
        },
        answer: "The point where external force seems to act on the system"
      }, {
        question: "In the center of mass reference frame, the total momentum of the system is:",
        imgSrc: "",
        options: {
          a: "Maximum",
          b: "Constant",
          c: "Zero",
          d: "Equal to the mass of the system"
        },
        answer: "Zero"
      }, {
        question: "The center of mass for two particles lies on:",
        imgSrc: "",
        options: {
          a: "A straight line passing through the origin",
          b: "The line joining the two particles",
          c: "The perpendicular bisector of the two particles",
          d: "None of these"
        },
        answer: "The line joining the two particles"
      }
    ], "Rotational Motion": [
      {
        question: "The line joining the two particles",
        imgSrc: "",
        options: {
          a: "Motion along a circular path",
          b: "Motion that changes the orientation of a body",
          c: "Motion that results in a change of position without rotation",
          d: "Oscillatory motion"
        },
        answer: "Motion that results in a change of position without rotation"
      }, {
        question: "Which of the following quantities is conserved in the absence of external forces during translational motion?",
        imgSrc: "",
        options: {
          a: "Kinetic energy",
          b: "Linear momentum",
          c: "Angular momentum",
          d: "Potential energy"
        },
        answer: "Linear momentum"
      }, {
        question: "The equation F=ma is applicable to which type of motion?",
        imgSrc: "",
        options: {
          a: "Rotational motion",
          b: "Translational motion",
          c: "Vibrational motion",
          d: "All types of motion"
        },
        answer: "Translational motion"
      }
    ]
  },

  maths: {
    "Linear Differential": [
      {
        question: "What is the general solution of a first-order linear differential equation?",
        imgSrc: "",
        options: {
          a: "y = mx + b",
          b: "y = C e^(ax)",
          c: "y = C e^(-ax)",
          d: "y = e^(ax) + C"
        },
        answer: "y = C e^(ax)" 

      }, {
        question: "What is the standard form of a first-order linear differential equation?",
        imgSrc: "",
        options: {
          a: "dy/dx + P(x)y = Q(x)",
          b: "dy/dx + P(x)y = Q(x)",
          c: "dy/dx = P(x) * Q(x)",
          d: "dy/dx = P(x) - Q(x)y"
        },
        answer: "dy/dx + P(x)y = Q(x)" 
      }, {
        question: "Which of the following is a solution to the differential equation: dy/dx = y?",
        imgSrc: "",
        options: {
          a: "y = 0",
          b: "y = e^x",
          c: "y = e^(-x)",
          d: "y = ln(x)"
        },
        answer: "y = e^x" 
      }
    ], "Probability And Statistics": [
      {
        question: "What is the probability of an event that is certain to happen?",
        imgSrc: "",
        options: {
          a: "0",
          b: "0.5",
          c: "1",
          d: "-1"
        },
        answer: "1" 

      }, {
        question: "Which of the following is NOT a type of event in probability?",
        imgSrc: "",
        options: {
          a: "Independent events",
          b: "Dependent events",
          c: "Sample space",
          d: "Exhaustive events"
        },
        answer: "Sample space" 
      }, {
        question: "What is the probability of drawing a red card from a standard deck of 52 playing cards?",
        imgSrc: "",
        options: {
          a: "1/2",
          b: "1/4",
          c: "1/13",
          d: "26/52"
        },
        answer: "1/2" 
      }
    ]
  },

  electrical: {
    "Operational Amplifier": [
      {
        question: "In an inverting amplifier configuration, the input signal is applied to",
        imgSrc: "",
        options: {
          a: "Non-inverting terminal",
          b: "Inverting terminal",
          c: "Both terminals",
          d: "Ground"
        },
        answer: "Inverting terminal" 

      }, {
        question: "What is the ideal input impedance of an operational amplifier (Op-Amp)?",
        imgSrc: "",
        options: {
          a: "Zero",
          b: "Infinite",
          c: "1 Ohm",
          d: "1000 Ohms"
        },
        answer: "Infinite" 
      }, {
        question: "What is the gain of an ideal Op-Amp?",
        imgSrc: "",
        options: {
          a: "1",
          b: "10",
          c: "Infinite",
          d: "100"
        },
        answer: "Infinite" 
      }
    ], "555 Timer": [
      {
        question: "The 555 Timer IC is mainly used for",
        imgSrc: "",
        options: {
          a: "Analog signal processing",
          b: "Digital signal generation",
          c: "Timing and pulse generation",
          d: "Amplification"
        },
        answer: "Timing and pulse generation" 

      }, {
        question: "What is the default mode of a 555 timer when it is configured in astable mode?",
        imgSrc: "",
        options: {
          a: "Output is high",
          b: "Output is low",
          c: "Output is a square wave",
          d: "Output is a sine wave"
        },
        answer: "Output is a square wave" 
      }, {
        question: "What is the primary function of a 555 timer in monostable mode?",
        imgSrc: "",
        options: {
          a: "Generate a continuous pulse",
          b: "Generate a single pulse of fixed duration",
          c: "Generate a frequency",
          d: "Store data"
        },
        answer: "Generate a single pulse of fixed duration" 
      }
    ]
  }
}


// 0 - not done, 1-incorrect, 2-correct
for (const subject in flashcards) {
  const lectures = flashcards[subject];
  for (const lectureName in lectures) {
    const questions = lectures[lectureName];
    
    for (const question of questions) {
      question.difficulty = 0;
    }
  }
}
