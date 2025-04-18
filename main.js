const icons = document.querySelectorAll(".icon svg");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("bi-telegram")) {
      alert("Вы перешли в Telegram!");
    } else if (icon.classList.contains("bi-envelope")) {
      alert("Вы перешли в Email!");
    } else if (icon.classList.contains("bi-github")) {
      alert("Вы перешли в GitHub!");
    }
  });
});

const text = "Связаться со мной";
const typingElement = document.querySelector(".typing-text");

let index = 0;
let isDeleting = false;

function type() {
  typingElement.textContent = text.slice(0, index);

  if (!isDeleting) {
    index++;
    if (index > text.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    index--;
    if (index < 0) {
      isDeleting = false;
    }
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(type, speed);
}

type();
