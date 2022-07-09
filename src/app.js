const initialLoad = () => {
  console.log("JS connected to HTML");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuseOptions = ["who", "action", "what", "when"];

  const generatExcuse = () => {
    let displayPhrase = ""; // variable to store the created excuse phrase
    // The loop creates 5 different phrases
    for (let i = 1; i < 6; i++) {
      let randomArrayIndex = 0;
      if (i < 5) {
      }
    }
  };
};

window.addEventListener("DOMContentLoaded", initialLoad);
