// Selectors
const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");

// Texts array
const txt = ["Witaj!", "Dobrze Cię widzieć.", "Co chcesz robić?"];

// Cursor animation function
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};

setInterval(cursorAnimation, 400);

// Main function parameters
let activeLetter = -20;
let activeText = 0;

// Main function
const addLetter = () => {
  if (activeLetter >= 0) {
    spnText.textContent += txt[activeText][activeLetter];
  }

  activeLetter++;

  if (activeLetter === txt[activeText].length) {
    activeText++;

    if (activeText === txt.length) {
      return;
    }

    return setTimeout(() => {
      activeLetter = -10;
      spnText.textContent = "";
      addLetter();
    }, 2000);
  }

  setTimeout(addLetter, 100);
};

addLetter();
