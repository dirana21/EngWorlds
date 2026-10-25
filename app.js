const originalWords = [
  { english: "Apoptosis", ukrainian: "Апоптоз", pronunciation: "[ейпопто́усіс]", type: "Noun" },
  { english: "Carrier", ukrainian: "Носій", pronunciation: "[ке́ріер]", type: "Noun" },
  { english: "Chain", ukrainian: "Ланцюг", pronunciation: "[чейн]", type: "Noun" },
  { english: "Dysmenorrhea", ukrainian: "Дисменорея", pronunciation: "[дісменері́а]", type: "Noun" },
  { english: "Incompatibility", ukrainian: "Несумісність", pronunciation: "[інкемпетебі́літі]", type: "Noun" },
  { english: "Infertility", ukrainian: "Безпліддя", pronunciation: "[інферті́літі]", type: "Noun" },
  { english: "Maturation", ukrainian: "Дозрівання", pronunciation: "[метчуре́йшн]", type: "Noun" },
  { english: "Offspring", ukrainian: "Потомство, нащадки", pronunciation: "[о́фспрінґ]", type: "Noun" },
  { english: "Ovum", ukrainian: "Яйцеклітина", pronunciation: "[о́увем]", type: "Noun" },
  { english: "Pattern", ukrainian: "Закономірність", pronunciation: "[пе́терн]", type: "Noun" },
  { english: "Scrape", ukrainian: "Зішкріб", pronunciation: "[скрейп]", type: "Noun" },
  { english: "Sequence", ukrainian: "Послідовність", pronunciation: "[сі́квенс]", type: "Noun" },
  { english: "To define", ukrainian: "Визначати", pronunciation: "[ту діфа́йн]", type: "Verb" },
  { english: "To determine", ukrainian: "Встановлювати, визначати", pronunciation: "[ту діте́рмін]", type: "Verb" },
  { english: "To deliver", ukrainian: "Доставляти; народжувати", pronunciation: "[ту ділі́вер]", type: "Verb" },
  { english: "To introduce", ukrainian: "Вводити, представляти", pronunciation: "[ту інтреді́ус]", type: "Verb" },
  { english: "To label", ukrainian: "Позначати", pronunciation: "[ту ле́йбл]", type: "Verb" },
  { english: "To observe", ukrainian: "Спостерігати", pronunciation: "[ту ебзе́рв]", type: "Verb" },
  { english: "To occur", ukrainian: "Відбуватися, виникати", pronunciation: "[ту еке́р]", type: "Verb" },
  { english: "To release", ukrainian: "Вивільняти", pronunciation: "[ту рілі́с]", type: "Verb" },
  { english: "To resist", ukrainian: "Чинити опір", pronunciation: "[ту рі́зіст]", type: "Verb" },
  { english: "To restore", ukrainian: "Відновлювати", pronunciation: "[ту рісто́р]", type: "Verb" },
  { english: "To result in", ukrainian: "Призводити до", pronunciation: "[ту різа́лт ін]", type: "Verb" },
  { english: "To spread", ukrainian: "Поширюватися", pronunciation: "[ту спред]", type: "Verb" },
  { english: "Developmental", ukrainian: "Пов’язаний із розвитком", pronunciation: "[діве́лепме́нтл]", type: "Adjective" },
  { english: "Drastic", ukrainian: "Різкий, радикальний", pronunciation: "[дра́стік]", type: "Adjective" },
  { english: "Environmental", ukrainian: "Пов’язаний із довкіллям", pronunciation: "[інва́йренме́нтл]", type: "Adjective" },
  { english: "Germinal", ukrainian: "Зародковий", pronunciation: "[дже́рмінл]", type: "Adjective" },
  { english: "Haploid", ukrainian: "Гаплоїдний", pronunciation: "[хе́плоїд]", type: "Adjective" },
  { english: "Multiple", ukrainian: "Множинний", pronunciation: "[ма́лтіпл]", type: "Adjective" },
  { english: "Necessary", ukrainian: "Необхідний", pronunciation: "[не́сесе́рі]", type: "Adjective" },
  { english: "Provisional", ukrainian: "Попередній, тимчасовий", pronunciation: "[прові́женл]", type: "Adjective" },
  { english: "Similar", ukrainian: "Схожий", pronunciation: "[сі́мілар]", type: "Adjective" },
  { english: "Subnormal", ukrainian: "Нижчий за норму", pronunciation: "[сабно́рмл]", type: "Adjective" },
  { english: "Yellowish", ukrainian: "Жовтуватий", pronunciation: "[є́лоуіш]", type: "Adjective" },
  { english: "Approximately", ukrainian: "Приблизно", pronunciation: "[епро́ксімейтлі]", type: "Adverb" },
  { english: "Congenitally", ukrainian: "Вроджено", pronunciation: "[кондже́нітлі]", type: "Adverb" },
  { english: "Immediately", ukrainian: "Негайно", pronunciation: "[імі́діетлі]", type: "Adverb" },
  { english: "Respectively", ukrainian: "Відповідно", pronunciation: "[ріспе́ктівлі]", type: "Adverb" },
  { english: "Predominantly", ukrainian: "Переважно", pronunciation: "[прідо́мінентлі]", type: "Adverb" },
];

const quizPrompts = {
  Apoptosis: "Programmed cell death is called _____.",
  Carrier: "A person who carries a genetic trait without symptoms is a _____.",
  Chain: "DNA consists of a long _____ of nucleotides.",
  Dysmenorrhea: "Painful menstruation is known as _____.",
  Incompatibility: "Blood group _____ can cause complications during pregnancy.",
  Infertility: "The inability to conceive may be diagnosed as _____.",
  Maturation: "The final stage of cell _____ prepares it for its function.",
  Offspring: "Genes are passed from parents to their _____.",
  Ovum: "A mature female reproductive cell is called an _____.",
  Pattern: "The inheritance _____ was visible across three generations.",
  Scrape: "The doctor collected a skin _____ for examination.",
  Sequence: "A gene is defined by its DNA _____.",
  "To define": "Scientists _____ apoptosis as programmed cell death.",
  "To determine": "Genetic testing can _____ the cause of the disorder.",
  "To deliver": "The bloodstream can _____ oxygen to every tissue.",
  "To introduce": "The researcher will _____ the new method to the team.",
  "To label": "Technicians _____ each sample before analysis.",
  "To observe": "Doctors _____ the cells under a microscope.",
  "To occur": "Mutations may _____ during DNA replication.",
  "To release": "Cells _____ energy during metabolism.",
  "To resist": "Some bacteria can _____ antibiotics.",
  "To restore": "Treatment may _____ normal hormone levels.",
  "To result in": "Vitamin deficiency can _____ developmental problems.",
  "To spread": "Infections can _____ rapidly through a population.",
  Developmental: "Childhood is a period of rapid _____ change.",
  Drastic: "The treatment caused a _____ reduction in symptoms.",
  Environmental: "Air pollution is an _____ risk factor.",
  Germinal: "These cells belong to the _____ layer.",
  Haploid: "A human sperm cell is _____.",
  Multiple: "The patient showed _____ symptoms.",
  Necessary: "Water is _____ for all living organisms.",
  Provisional: "The researchers made a _____ diagnosis before all tests were complete.",
  Similar: "The twins have _____ genetic profiles.",
  Subnormal: "The result was slightly _____ but not critically low.",
  Yellowish: "The sample had a _____ color.",
  Approximately: "The human body contains _____ 37 trillion cells.",
  Congenitally: "The condition was present _____ rather than acquired later.",
  Immediately: "Severe allergic reactions must be treated _____.",
  Respectively: "The samples were labeled A and B, _____.",
  Predominantly: "The tissue is _____ composed of muscle cells.",
};

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
  partOfSpeech: document.querySelector("#partOfSpeech"),
  deckTitle: document.querySelector("#deckTitle"),
  deckSize: document.querySelector("#deckSize"),
  renameDeck: document.querySelector("#renameDeckButton"),
  renameDialog: document.querySelector("#renameDialog"),
  renameForm: document.querySelector("#renameForm"),
  deckNameInput: document.querySelector("#deckNameInput"),
  closeDialog: document.querySelector("#closeDialogButton"),
  cancelRename: document.querySelector("#cancelRenameButton"),
  modeButtons: document.querySelectorAll(".mode-button"),
  cardsPanel: document.querySelector("#cardsPanel"),
  quizPanel: document.querySelector("#quizPanel"),
  quizType: document.querySelector("#quizType"),
  quizScore: document.querySelector("#quizScore"),
  quizSentence: document.querySelector("#quizSentence"),
  quizTranslation: document.querySelector("#quizTranslation"),
  quizForm: document.querySelector("#quizForm"),
  quizAnswer: document.querySelector("#quizAnswer"),
  quizSubmit: document.querySelector("#quizSubmit"),
  quizFeedback: document.querySelector("#quizFeedback"),
  hintButton: document.querySelector("#hintButton"),
};

let words = [...originalWords];
let currentIndex = Number.parseInt(localStorage.getItem("wordly-index") || "0", 10);
const deckVersion = "biology-1-v1";
if (localStorage.getItem("wordly-deck-version") !== deckVersion) {
  currentIndex = 0;
  localStorage.setItem("wordly-deck-version", deckVersion);
}
if (!Number.isFinite(currentIndex) || currentIndex >= words.length) currentIndex = 0;
let deckName = localStorage.getItem("wordly-deck-name") || "Біологія 1";
let currentMode = localStorage.getItem("wordly-mode") === "quiz" ? "quiz" : "cards";
let quizScore = 0;
let quizAnswered = false;

function renderCard() {
  const word = words[currentIndex];
  elements.card.classList.remove("is-flipped");
  elements.card.setAttribute("aria-label", `Англійське слово: ${word.english}`);
  elements.english.textContent = word.english;
  elements.english.classList.toggle("long-word", word.english.length > 12);
  elements.englishBack.textContent = word.english;
  elements.ukrainian.textContent = word.ukrainian;
  elements.pronunciation.textContent = word.pronunciation;
  elements.partOfSpeech.textContent = word.type;
  elements.deckTitle.textContent = deckName;
  elements.deckSize.textContent = words.length;
  elements.current.textContent = currentIndex + 1;
  elements.total.textContent = words.length;
  elements.progress.style.width = `${((currentIndex + 1) / words.length) * 100}%`;
  localStorage.setItem("wordly-index", String(currentIndex));
}

function renderQuiz() {
  const word = words[currentIndex];
  elements.deckTitle.textContent = deckName;
  elements.deckSize.textContent = words.length;
  elements.renameDeck.setAttribute("aria-label", `Перейменувати каталог ${deckName}`);
  elements.quizType.textContent = word.type;
  elements.quizSentence.textContent = quizPrompts[word.english];
  elements.quizTranslation.textContent = word.ukrainian;
  elements.quizScore.textContent = quizScore;
  elements.quizAnswer.value = "";
  elements.quizAnswer.disabled = false;
  elements.quizAnswer.classList.remove("is-correct", "is-wrong");
  elements.quizSubmit.textContent = "Перевірити";
  elements.quizFeedback.hidden = true;
  elements.quizFeedback.className = "quiz-feedback";
  elements.hintButton.hidden = false;
  quizAnswered = false;
  elements.current.textContent = currentIndex + 1;
  elements.total.textContent = words.length;
  elements.progress.style.width = `${((currentIndex + 1) / words.length) * 100}%`;
  localStorage.setItem("wordly-index", String(currentIndex));
}

function renderActiveMode() {
  if (currentMode === "quiz") renderQuiz();
  else renderCard();
}

function setMode(mode) {
  currentMode = mode;
  elements.cardsPanel.hidden = mode !== "cards";
  elements.quizPanel.hidden = mode !== "quiz";
  elements.modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === mode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem("wordly-mode", mode);
  renderActiveMode();
  if (mode === "quiz") elements.quizAnswer.focus();
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
  if (currentIndex === 0) showToast("Каталог завершено — починаємо знову");
}

function nextQuiz() {
  currentIndex = (currentIndex + 1) % words.length;
  renderQuiz();
  elements.quizAnswer.focus();
  if (currentIndex === 0) showToast(`Тест завершено: ${quizScore} з ${words.length}`);
}

function normalizeAnswer(value) {
  return value.trim().toLocaleLowerCase("en-US").replace(/\s+/g, " ");
}

function expectedAnswer(word) {
  return word.english.replace(/^To\s+/i, "");
}

function checkQuizAnswer(event) {
  event.preventDefault();
  if (quizAnswered) {
    nextQuiz();
    return;
  }

  const word = words[currentIndex];
  const expected = expectedAnswer(word);
  const answer = normalizeAnswer(elements.quizAnswer.value);
  if (!answer) {
    elements.quizAnswer.focus();
    return;
  }

  const isCorrect = answer === normalizeAnswer(expected);
  elements.quizAnswer.classList.remove("is-correct", "is-wrong");
  elements.quizFeedback.hidden = false;

  if (isCorrect) {
    quizScore += 1;
    quizAnswered = true;
    elements.quizScore.textContent = quizScore;
    elements.quizAnswer.classList.add("is-correct");
    elements.quizAnswer.disabled = true;
    elements.quizFeedback.className = "quiz-feedback is-correct";
    elements.quizFeedback.textContent = `Правильно! ${word.english} — ${word.ukrainian}.`;
    elements.quizSubmit.textContent = "Наступне завдання";
    elements.hintButton.hidden = true;
  } else {
    elements.quizAnswer.classList.add("is-wrong");
    elements.quizFeedback.className = "quiz-feedback is-wrong";
    elements.quizFeedback.textContent = "Поки що ні. Перевірте написання та спробуйте ще раз.";
    elements.quizAnswer.select();
  }
}

function showQuizHint() {
  const answer = expectedAnswer(words[currentIndex]);
  elements.quizFeedback.hidden = false;
  elements.quizFeedback.className = "quiz-feedback";
  const letterCount = answer.replace(/\s/g, "").length;
  elements.quizFeedback.textContent = `Починається з «${answer[0]}» · ${letterCount} літер`;
  elements.quizAnswer.focus();
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
  quizScore = 0;
  renderActiveMode();
  showToast("Слова перемішано");
}

function resetDeck() {
  words = [...originalWords];
  currentIndex = 0;
  quizScore = 0;
  renderActiveMode();
  showToast("Починаємо спочатку");
}

function openRenameDialog() {
  elements.deckNameInput.value = deckName;
  elements.renameDialog.showModal();
  elements.deckNameInput.select();
}

function closeRenameDialog() {
  elements.renameDialog.close();
}

function saveDeckName(event) {
  event.preventDefault();
  const nextName = elements.deckNameInput.value.trim();
  if (!nextName) return;
  deckName = nextName;
  elements.deckTitle.textContent = deckName;
  elements.renameDeck.setAttribute("aria-label", `Перейменувати каталог ${deckName}`);
  localStorage.setItem("wordly-deck-name", deckName);
  closeRenameDialog();
  showToast("Назву каталогу збережено");
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
elements.renameDeck.addEventListener("click", openRenameDialog);
elements.renameForm.addEventListener("submit", saveDeckName);
elements.closeDialog.addEventListener("click", closeRenameDialog);
elements.cancelRename.addEventListener("click", closeRenameDialog);
elements.modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
elements.quizForm.addEventListener("submit", checkQuizAnswer);
elements.hintButton.addEventListener("click", showQuizHint);
elements.renameDialog.addEventListener("click", (event) => {
  if (event.target === elements.renameDialog) closeRenameDialog();
});

document.addEventListener("keydown", (event) => {
  if (currentMode === "cards" && event.code === "Space") {
    event.preventDefault();
    flipCard();
  }
  if (currentMode === "cards" && event.code === "ArrowRight") nextCard();
});

setMode(currentMode);
