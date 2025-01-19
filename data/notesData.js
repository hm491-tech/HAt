export const notes = {
  physics: {
    "Center Of Mass": [
      {
        question: "Center of Mass (COM):",
        answer: "The point where the total mass of a system is considered to be concentrated",
        imgSrc: ""
      }, {
        question: "COM for Discrete Masses",
        answer: ": x_cm = (Σmi xi) / Σmi, y_cm = (Σmi yi) / Σmi, z_cm = (Σmi zi) / Σmi",
        imgSrc: ""
      }, {
        question: "COM for Continuous Mass Distribution",
        answer: "x_cm = (∫x dm) / M, y_cm = (∫y dm) / M, where M = ∫dm",
        imgSrc: ""
      }
    ], "Rotational Motion": [
      {
        question: "Rotational Motion",
        answer: "Movement of a body around a fixed axis, where every point traces a circular path.",
        imgSrc: ""
      }, {
        question: "Angular Displacement",
        answer: "θ = s/r, where s is the arc length and r is the radius.",
        imgSrc: ""
      }, {
        question: "Angular Velocity",
        answer: "ω = dθ/dt, rate of change of angular displacement",
        imgSrc: ""
      }
    ]
  }, 
  maths: {
    "Linear Differential": [
      {
        question: "Derivative Definition",
        answer: "The derivative of a function f(x) at x = a is given by",
        imgSrc: "../images/notes/linear-differentiation/q1.png"
      }, {
        question: "Power Rule: ",
        answer: "For f(x) = x^n, the derivative is",
        imgSrc: "../images/notes/linear-differentiation/q2.png"
      }, {
        question: "Constant Rule: ",
        answer: "Derivation of a constant is zero",
        imgSrc: ""
      }
    ], "Probability and Statistics": [
      {
        question: "Definition of Probability: ",
        answer: "Probability is a measure of the likelihood of an event occurring. If S is the sample space and A is an event, the probability of A is given by",
        imgSrc: "../images/notes/probability/q1.png"
      }, {
        question: "Sample Space",
        answer: "The sample space (SS) is the set of all possible outcomes of an experiment. For example, in tossing a coin, S={Heads, Tails}",
        imgSrc: ""
      }, {
        question: "Event",
        answer: "An event is a subset of the sample space. For example, getting an even number when rolling a die is the event A={2,4,6}.",
        imgSrc: ""
      }
    ]
  },
  electrical: {
    "Operational Amplifier": [
      {
        question: "Definition",
        answer: "An operational amplifier is a high-gain electronic voltage amplifier with differential input and a single-ended output. It is used in signal conditioning, filtering, and mathematical operations like addition and integration",
        imgSrc: ""
      }, {
        question: "Inverting Amplifier",
        answer: "The output voltage is inverted and proportional to the input voltage. Output voltage = -(Rf ÷ Rin) × Input voltage",
        imgSrc: ""
      }, {
        question: "Non-Inverting Amplifier",
        answer: "The output voltage is in phase and proportional to the input voltage. Output voltage = (1 + (Rf ÷ Rin)) × Input voltage",
        imgSrc: ""
      } 
    ], "555 Timer": [
      {
        question: "Definition",
        answer: "The 555 Timer is a versatile IC used for generating precise time delays or oscillation. It operates in three modes: monostable, astable, and bistable",
        imgSrc: "",
      }, {
        question: "Monostable Mode",
        answer: "Generates a single pulse of a fixed duration when triggered. Pulse width = 1.1 × R1 × C1",
        imgSrc: "",
      }, {
        question: "Astable Mode",
        answer: "Produces a continuous square wave. Frequency = 1.44 ÷ ((R1 + 2R2) × C1). Duty cycle = (R1 + R2) ÷ (R1 + 2R2).",
        imgSrc: "",
      }
    ]
  }
}


