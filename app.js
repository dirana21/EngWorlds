const originalWords = [
  { english: "Cell", ukrainian: "Клітина", pronunciation: "[сел]" },
  { english: "Tissue", ukrainian: "Тканина", pronunciation: "[ті́шу]" },
  { english: "Organ", ukrainian: "Орган", pronunciation: "[о́рґен]" },
  { english: "Species", ukrainian: "Вид", pronunciation: "[спі́шіз]" },
  { english: "Habitat", ukrainian: "Середовище існування", pronunciation: "[хе́бітет]" },
  { english: "Nucleus", ukrainian: "Ядро", pronunciation: "[ню́кліес]" },
  { english: "Membrane", ukrainian: "Мембрана", pronunciation: "[ме́мбрейн]" },
  { english: "Growth", ukrainian: "Ріст", pronunciation: "[ґроус]" },
  { english: "Hereditary", ukrainian: "Спадковий", pronunciation: "[хере́дітері]" },
  { english: "Environment", ukrainian: "Довкілля", pronunciation: "[інва́йронмент]" },
];

const elements = {
  card: document.querySelector("#flashcard"),
  english: document.querySelector("#englishWord"),
  englishBack: document.querySelector("#englishWordBack"),
  ukrainian: document.querySelector("#ukrainianWord"),
  pronunciation: document.querySelector("#pronunciation"),
  current: document.querySelector("#currentNumber"),
  total: document.querySelector("#totalNumber"),
  progress: document.querySelector("#progressFill"),
  next: document.querySelector("#nextButton"),
  speak: document.querySelector("#speakButton"),
  shuffle: document.querySelector("#shuffleButton"),
  reset: document.querySelector("#resetButton"),
  toast: document.querySelector("#toast"),
};

let words = [...originalWords];
let currentIndex = Number.parseInt(localStorage.getItem("wordly-index") || "0", 10);
if (!Number.isFinite(currentIndex) || currentIndex >= words.length) currentIndex = 0;

function renderCard() {
  const word = words[currentIndex];
  elements.card.classList.remove("is-flipped");
  elements.card.setAttribute("aria-label", `Англійське слово: ${word.english}`);
  elements.english.textContent = word.english;
  elements.englishBack.textContent = word.english;
  elements.ukrainian.textContent = word.ukrainian;
  elements.pronunciation.textContent = word.pronunciation;
  elements.current.textContent = currentIndex + 1;
  elements.total.textContent = words.length;
  elements.progress.style.width = `${((currentIndex + 1) / words.length) * 100}%`;
  localStorage.setItem("wordly-index", String(currentIndex));
}

function flipCard() {
  elements.card.classList.toggle("is-flipped");
  const isFlipped = elements.card.classList.contains("is-flipped");
  elements.card.setAttribute(
    "aria-label",
    isFlipped
      ? `Переклад: ${words[currentIndex].ukrainian}. Вимова: ${words[currentIndex].pronunciation}`
      : `Англійське слово: ${words[currentIndex].english}`,
  );
}

function nextCard() {
  currentIndex = (currentIndex + 1) % words.length;
  renderCard();
  if (currentIndex === 0) showToast("Колоду завершено — починаємо знову");
}

function speakWord() {
  if (!("speechSynthesis" in window)) {
    showToast("Озвучування не підтримується цим браузером");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(words[currentIndex].english);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function shuffleWords() {
  for (let i = words.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  currentIndex = 0;
  renderCard();
  showToast("Слова перемішано");
}

function resetDeck() {
  words = [...originalWords];
  currentIndex = 0;
  renderCard();
  showToast("Починаємо спочатку");
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2200);
}

elements.card.addEventListener("click", flipCard);
elements.next.addEventListener("click", nextCard);
elements.speak.addEventListener("click", speakWord);
elements.shuffle.addEventListener("click", shuffleWords);
elements.reset.addEventListener("click", resetDeck);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    flipCard();
  }
  if (event.code === "ArrowRight") nextCard();
});

renderCard();
