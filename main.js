// Selectors
const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");

// Texts array
const txt = ["Witaj, siemanko!", "Dobrze Cię widzieć.", "Co chcesz robić?"];

// Cursor animation function
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};

setInterval(cursorAnimation, 400);

// Main function parameters
let arrayIndex = 0;
let charIndex = 0;
const time = 50;
const deleteTime = 2000;

// Main function
const oneTxt = () => {
  const addLetter = () => {
    spnText.textContent += txt[arrayIndex][charIndex];
    charIndex++;

    if (charIndex === txt[arrayIndex].length) {
      clearInterval(writing);

      const deleteText = () => {
        arrayIndex++;
        charIndex = 0;

        if (arrayIndex < txt.length) {
          spnText.textContent = null;
        }

        if (arrayIndex === txt.length) {
          clearInterval(allTexts);
        }
      };

      setTimeout(deleteText, deleteTime);
    }
  };

  const writing = setInterval(addLetter, time);
};

const allTexts = setInterval(oneTxt, txt[arrayIndex][charIndex].length * time + deleteTime + 1000);
