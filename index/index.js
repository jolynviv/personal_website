document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typewriter-text");
  const phrases = [
    "I am a Student.",
    "I am a Future Federal Agent.",

  ];

  let phraseIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
      characterIndex--;
      typeSpeed = 50;
    } else {
      textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
      characterIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && characterIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});