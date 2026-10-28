const biology1Words = [
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

const biology2Words = [
  { english: "Acinus", ukrainian: "Ацинус", pronunciation: "[а́сінес]", type: "Noun" },
  { english: "Band", ukrainian: "Смуга", pronunciation: "[бенд]", type: "Noun" },
  { english: "Carnification", ukrainian: "Карніфікація", pronunciation: "[карніфіке́йшн]", type: "Noun" },
  { english: "Damage", ukrainian: "Пошкодження", pronunciation: "[де́мідж]", type: "Noun" },
  { english: "Dilation", ukrainian: "Розширення", pronunciation: "[дайле́йшн]", type: "Noun" },
  { english: "Infringement", ukrainian: "Порушення, утиск", pronunciation: "[інфрі́нджмент]", type: "Noun" },
  { english: "Layer", ukrainian: "Шар", pronunciation: "[ле́йер]", type: "Noun" },
  { english: "Magnification", ukrainian: "Збільшення", pronunciation: "[меґніфіке́йшн]", type: "Noun" },
  { english: "Permeability", ukrainian: "Проникність", pronunciation: "[перміебі́літі]", type: "Noun" },
  { english: "Palisade", ukrainian: "Палісад, ряд клітин", pronunciation: "[пелісе́йд]", type: "Noun" },
  { english: "Ratio", ukrainian: "Співвідношення", pronunciation: "[ре́йшіоу]", type: "Noun" },
  { english: "Smear", ukrainian: "Мазок", pronunciation: "[смір]", type: "Noun" },
  { english: "Specimen", ukrainian: "Зразок, препарат", pronunciation: "[спе́сімен]", type: "Noun" },
  { english: "Theca", ukrainian: "Оболонка", pronunciation: "[ті́ка]", type: "Noun" },
  { english: "Variety", ukrainian: "Різновид, різноманітність", pronunciation: "[вера́єті]", type: "Noun" },
  { english: "To belong", ukrainian: "Належати", pronunciation: "[ту бело́нґ]", type: "Verb" },
  { english: "To blur", ukrainian: "Розмивати", pronunciation: "[ту блер]", type: "Verb" },
  { english: "To carry out", ukrainian: "Виконувати", pronunciation: "[ту ке́рі аут]", type: "Verb" },
  { english: "To conduct", ukrainian: "Проводити", pronunciation: "[ту кенда́кт]", type: "Verb" },
  { english: "To detect", ukrainian: "Виявляти", pronunciation: "[ту діте́кт]", type: "Verb" },
  { english: "To impregnate", ukrainian: "Просочувати", pronunciation: "[ту імпреґне́йт]", type: "Verb" },
  { english: "To inherit", ukrainian: "Успадковувати", pronunciation: "[ту інхе́ріт]", type: "Verb" },
  { english: "To penetrate", ukrainian: "Проникати", pronunciation: "[ту пе́нітре́йт]", type: "Verb" },
  { english: "To prevent", ukrainian: "Запобігати", pronunciation: "[ту пріве́нт]", type: "Verb" },
  { english: "To proliferate", ukrainian: "Розмножуватися", pronunciation: "[ту прелі́фере́йт]", type: "Verb" },
  { english: "To separate", ukrainian: "Відокремлювати", pronunciation: "[ту се́пере́йт]", type: "Verb" },
  { english: "To specify", ukrainian: "Уточнювати, зазначати", pronunciation: "[ту спе́сіфай]", type: "Verb" },
  { english: "To underlie", ukrainian: "Лежати в основі", pronunciation: "[ту андерла́й]", type: "Verb" },
  { english: "Biconcave", ukrainian: "Двоввігнутий", pronunciation: "[байконке́йв]", type: "Adjective" },
  { english: "Compound", ukrainian: "Складний, складений", pronunciation: "[ко́мпаунд]", type: "Adjective" },
  { english: "Cryptal", ukrainian: "Криптальний", pronunciation: "[крі́птл]", type: "Adjective" },
  { english: "Loose", ukrainian: "Пухкий", pronunciation: "[лус]", type: "Adjective" },
  { english: "Myeloid", ukrainian: "Мієлоїдний", pronunciation: "[ма́єлоїд]", type: "Adjective" },
  { english: "Node-shaped", ukrainian: "Вузлоподібний", pronunciation: "[ноуд шейпт]", type: "Adjective" },
  { english: "Polygonal", ukrainian: "Багатокутний", pronunciation: "[пелі́ґенл]", type: "Adjective" },
  { english: "Predominant", ukrainian: "Переважний", pronunciation: "[прідо́мінент]", type: "Adjective" },
  { english: "Preliminary", ukrainian: "Попередній", pronunciation: "[прелі́міне́рі]", type: "Adjective" },
  { english: "Quantitative", ukrainian: "Кількісний", pronunciation: "[кво́нтітейтив]", type: "Adjective" },
  { english: "Rectangular", ukrainian: "Прямокутний", pronunciation: "[ректа́нґюлер]", type: "Adjective" },
  { english: "Squamous", ukrainian: "Плоский, лускатий", pronunciation: "[скве́ймес]", type: "Adjective" },
  { english: "Significant", ukrainian: "Значний", pronunciation: "[сіґні́фікент]", type: "Adjective" },
  { english: "Spindle-shaped", ukrainian: "Веретеноподібний", pronunciation: "[спі́ндл шейпт]", type: "Adjective" },
  { english: "Stellate", ukrainian: "Зірчастий", pronunciation: "[сте́лейт]", type: "Adjective" },
  { english: "Closely", ukrainian: "Щільно, близько", pronunciation: "[кло́услі]", type: "Adverb" },
  { english: "Diffusely", ukrainian: "Дифузно", pronunciation: "[діф’ю́слі]", type: "Adverb" },
  { english: "Eccentrically", ukrainian: "Ексцентрично", pronunciation: "[ексе́нтріклі]", type: "Adverb" },
  { english: "Extremely", ukrainian: "Надзвичайно", pronunciation: "[екстрі́млі]", type: "Adverb" },
  { english: "Insufficiently", ukrainian: "Недостатньо", pronunciation: "[інсефі́шентлі]", type: "Adverb" },
  { english: "Richly", ukrainian: "Рясно", pronunciation: "[рі́члі]", type: "Adverb" },
  { english: "Surgically", ukrainian: "Хірургічно", pronunciation: "[се́рджіклі]", type: "Adverb" },
];

const biology1Prompts = {
  Apoptosis: "Programmed cell death is called _____.", Carrier: "A person who carries a genetic trait without symptoms is a _____.", Chain: "DNA consists of a long _____ of nucleotides.", Dysmenorrhea: "Painful menstruation is known as _____.", Incompatibility: "Blood group _____ can cause complications during pregnancy.", Infertility: "The inability to conceive may be diagnosed as _____.", Maturation: "The final stage of cell _____ prepares it for its function.", Offspring: "Genes are passed from parents to their _____.", Ovum: "A mature female reproductive cell is called an _____.", Pattern: "The inheritance _____ was visible across three generations.", Scrape: "The doctor collected a skin _____ for examination.", Sequence: "A gene is defined by its DNA _____.",
  "To define": "Scientists _____ apoptosis as programmed cell death.", "To determine": "Genetic testing can _____ the cause of the disorder.", "To deliver": "The bloodstream can _____ oxygen to every tissue.", "To introduce": "The researcher will _____ the new method to the team.", "To label": "Technicians _____ each sample before analysis.", "To observe": "Doctors _____ the cells under a microscope.", "To occur": "Mutations may _____ during DNA replication.", "To release": "Cells _____ energy during metabolism.", "To resist": "Some bacteria can _____ antibiotics.", "To restore": "Treatment may _____ normal hormone levels.", "To result in": "Vitamin deficiency can _____ developmental problems.", "To spread": "Infections can _____ rapidly through a population.",
  Developmental: "Childhood is a period of rapid _____ change.", Drastic: "The treatment caused a _____ reduction in symptoms.", Environmental: "Air pollution is an _____ risk factor.", Germinal: "These cells belong to the _____ layer.", Haploid: "A human sperm cell is _____.", Multiple: "The patient showed _____ symptoms.", Necessary: "Water is _____ for all living organisms.", Provisional: "The researchers made a _____ diagnosis before all tests were complete.", Similar: "The twins have _____ genetic profiles.", Subnormal: "The result was slightly _____ but not critically low.", Yellowish: "The sample had a _____ color.", Approximately: "The human body contains _____ 37 trillion cells.", Congenitally: "The condition was present _____ rather than acquired later.", Immediately: "Severe allergic reactions must be treated _____.", Respectively: "The samples were labeled A and B, _____.", Predominantly: "The tissue is _____ composed of muscle cells.",
};

const biology2Prompts = {
  Acinus: "The secretory unit of a gland is called an _____.", Band: "A dark _____ can be seen across the muscle fiber.", Carnification: "The transformation of lung tissue into firm tissue is called _____.", Damage: "The biopsy showed severe tissue _____.", Dilation: "The _____ of the blood vessel increased its diameter.", Infringement: "Compression caused an _____ of the nerve.", Layer: "The epithelium forms a protective _____ over the surface.", Magnification: "The cells were examined under high _____.", Permeability: "Inflammation can increase capillary _____.", Palisade: "The cells formed a _____ around the central structure.", Ratio: "The nucleus-to-cytoplasm _____ helps identify the cell.", Smear: "A blood _____ was prepared on a glass slide.", Specimen: "The tissue _____ was fixed before staining.", Theca: "The ovarian follicle is surrounded by a _____.", Variety: "Histology reveals a wide _____ of cell shapes.",
  "To belong": "These fibers _____ to connective tissue.", "To blur": "Poor focus can _____ the image.", "To carry out": "The technician will _____ the staining procedure.", "To conduct": "Blood vessels _____ nutrients through the tissue.", "To detect": "Special stains help _____ abnormal cells.", "To impregnate": "Silver salts can _____ the tissue sample.", "To inherit": "Children _____ genetic traits from their parents.", "To penetrate": "Capillaries _____ deep into the tissue.", "To prevent": "Protective barriers _____ pathogens from entering.", "To proliferate": "Stem cells can _____ rapidly.", "To separate": "A thin membrane can _____ two tissue layers.", "To specify": "The report should _____ the type of epithelium.", "To underlie": "Connective tissue fibers _____ the epithelium.",
  Biconcave: "Red blood cells have a _____ shape.", Compound: "A gland may be simple or _____.", Cryptal: "The _____ epithelium lines the intestinal glands.", Loose: "Areolar tissue contains _____ connective fibers.", Myeloid: "Red bone marrow contains _____ tissue.", "Node-shaped": "The cell had a _____ appearance.", Polygonal: "Many epithelial cells are _____.", Predominant: "Collagen was the _____ component of the sample.", Preliminary: "The _____ diagnosis was confirmed by staining.", Quantitative: "The study provided _____ measurements of cell density.", Rectangular: "The cells were arranged in a _____ pattern.", Squamous: "Alveoli are lined by _____ epithelial cells.", Significant: "The sample showed a _____ increase in collagen.", "Spindle-shaped": "Fibroblasts often appear _____.", Stellate: "Astrocytes are _____ cells with many processes.",
  Closely: "The cells were _____ packed together.", Diffusely: "The stain was distributed _____ through the cytoplasm.", Eccentrically: "The nucleus was positioned _____.", Extremely: "The tissue was _____ fragile.", Insufficiently: "The sample was _____ fixed for diagnosis.", Richly: "The tissue was _____ supplied with blood vessels.", Surgically: "The lesion was removed _____.",
};

const catalogs = {
  biology1: { defaultName: "Біологія 1", words: biology1Words, prompts: biology1Prompts, version: "biology-1-v1" },
  biology2: { defaultName: "Біологія 2", words: biology2Words, prompts: biology2Prompts, version: "biology-2-v1" },
};

const elements = {
  card: document.querySelector("#flashcard"), english: document.querySelector("#englishWord"), englishBack: document.querySelector("#englishWordBack"), ukrainian: document.querySelector("#ukrainianWord"), pronunciation: document.querySelector("#pronunciation"), current: document.querySelector("#currentNumber"), total: document.querySelector("#totalNumber"), progress: document.querySelector("#progressFill"), next: document.querySelector("#nextButton"), speak: document.querySelector("#speakButton"), shuffle: document.querySelector("#shuffleButton"), reset: document.querySelector("#resetButton"), toast: document.querySelector("#toast"), partOfSpeech: document.querySelector("#partOfSpeech"), deckTitle: document.querySelector("#deckTitle"), deckSize: document.querySelector("#deckSize"), catalogSelect: document.querySelector("#catalogSelect"), renameDeck: document.querySelector("#renameDeckButton"), renameDialog: document.querySelector("#renameDialog"), renameForm: document.querySelector("#renameForm"), deckNameInput: document.querySelector("#deckNameInput"), closeDialog: document.querySelector("#closeDialogButton"), cancelRename: document.querySelector("#cancelRenameButton"), modeButtons: document.querySelectorAll(".mode-button"), cardsPanel: document.querySelector("#cardsPanel"), quizPanel: document.querySelector("#quizPanel"), quizType: document.querySelector("#quizType"), quizScore: document.querySelector("#quizScore"), quizSentence: document.querySelector("#quizSentence"), quizTranslation: document.querySelector("#quizTranslation"), quizChoices: document.querySelector("#quizChoices"), quizNext: document.querySelector("#quizNext"), quizFeedback: document.querySelector("#quizFeedback"),
};

let currentCatalogId = catalogs[localStorage.getItem("wordly-catalog")] ? localStorage.getItem("wordly-catalog") : "biology1";
let activeCatalog;
let words = [];
let quizPrompts = {};
let deckName = "";
let currentIndex = 0;
let currentMode = localStorage.getItem("wordly-mode") === "quiz" ? "quiz" : "cards";
let quizScore = 0;
let quizAnswered = false;

function nameKey(id) { return `wordly-deck-name-${id}`; }
function indexKey(id) { return `wordly-index-${id}`; }
function versionKey(id) { return `wordly-deck-version-${id}`; }

function migrateLegacyBiology1() {
  if (!localStorage.getItem(nameKey("biology1")) && localStorage.getItem("wordly-deck-name")) localStorage.setItem(nameKey("biology1"), localStorage.getItem("wordly-deck-name"));
  if (!localStorage.getItem(indexKey("biology1")) && localStorage.getItem("wordly-index")) localStorage.setItem(indexKey("biology1"), localStorage.getItem("wordly-index"));
}

function catalogName(id) { return localStorage.getItem(nameKey(id)) || catalogs[id].defaultName; }

function refreshCatalogOptions() {
  [...elements.catalogSelect.options].forEach((option) => { option.textContent = catalogName(option.value); });
  elements.catalogSelect.value = currentCatalogId;
}

function activateCatalog(id) {
  currentCatalogId = id;
  activeCatalog = catalogs[id];
  words = [...activeCatalog.words];
  quizPrompts = activeCatalog.prompts;
  deckName = catalogName(id);
  currentIndex = Number.parseInt(localStorage.getItem(indexKey(id)) || "0", 10);
  if (localStorage.getItem(versionKey(id)) !== activeCatalog.version) {
    currentIndex = 0;
    localStorage.setItem(versionKey(id), activeCatalog.version);
  }
  if (!Number.isFinite(currentIndex) || currentIndex >= words.length) currentIndex = 0;
  quizScore = 0;
  localStorage.setItem("wordly-catalog", id);
  refreshCatalogOptions();
  setMode(currentMode);
  showToast(`Відкрито: ${deckName}`);
}

function updateHeader() {
  elements.deckTitle.textContent = deckName;
  elements.deckSize.textContent = words.length;
  elements.renameDeck.setAttribute("aria-label", `Перейменувати каталог ${deckName}`);
  elements.current.textContent = currentIndex + 1;
  elements.total.textContent = words.length;
  elements.progress.style.width = `${((currentIndex + 1) / words.length) * 100}%`;
  localStorage.setItem(indexKey(currentCatalogId), String(currentIndex));
}

function renderCard() {
  const word = words[currentIndex];
  updateHeader();
  elements.card.classList.remove("is-flipped");
  elements.card.setAttribute("aria-label", `Англійське слово: ${word.english}`);
  elements.english.textContent = word.english;
  elements.english.classList.toggle("long-word", word.english.length > 12);
  elements.englishBack.textContent = word.english;
  elements.ukrainian.textContent = word.ukrainian;
  elements.pronunciation.textContent = word.pronunciation;
  elements.partOfSpeech.textContent = word.type;
}

function renderQuiz() {
  const word = words[currentIndex];
  updateHeader();
  elements.quizType.textContent = word.type;
  elements.quizSentence.textContent = quizPrompts[word.english];
  elements.quizTranslation.textContent = word.ukrainian;
  elements.quizScore.textContent = quizScore;
  elements.quizFeedback.hidden = true;
  elements.quizFeedback.className = "quiz-feedback";
  elements.quizNext.hidden = true;
  renderQuizChoices(word);
  quizAnswered = false;
}

function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getQuizChoices(correctWord) {
  const sameType = shuffled(words.filter((word) => word !== correctWord && word.type === correctWord.type));
  const otherTypes = shuffled(words.filter((word) => word !== correctWord && word.type !== correctWord.type));
  const distractors = sameType.slice(0, 4);
  if (distractors.length < 4) distractors.push(...otherTypes.slice(0, 4 - distractors.length));
  return shuffled([correctWord, ...distractors]);
}

function expectedAnswer(word) { return word.english.replace(/^To\s+/i, ""); }

function renderQuizChoices(correctWord) {
  elements.quizChoices.replaceChildren();
  getQuizChoices(correctWord).forEach((word, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.dataset.word = word.english;
    const key = document.createElement("span");
    key.className = "choice-key";
    key.setAttribute("aria-hidden", "true");
    key.textContent = index + 1;
    const label = document.createElement("span");
    label.textContent = expectedAnswer(word);
    button.append(key, label);
    button.addEventListener("click", () => chooseQuizAnswer(button, word));
    elements.quizChoices.append(button);
  });
}

function renderActiveMode() { currentMode === "quiz" ? renderQuiz() : renderCard(); }

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
}

function flipCard() {
  elements.card.classList.toggle("is-flipped");
  const isFlipped = elements.card.classList.contains("is-flipped");
  elements.card.setAttribute("aria-label", isFlipped ? `Переклад: ${words[currentIndex].ukrainian}. Вимова: ${words[currentIndex].pronunciation}` : `Англійське слово: ${words[currentIndex].english}`);
}

function nextCard() {
  currentIndex = (currentIndex + 1) % words.length;
  renderCard();
  if (currentIndex === 0) showToast("Каталог завершено — починаємо знову");
}

function nextQuiz() {
  currentIndex = (currentIndex + 1) % words.length;
  renderQuiz();
  if (currentIndex === 0) showToast(`Тест завершено: ${quizScore} з ${words.length}`);
}

function chooseQuizAnswer(button, selectedWord) {
  if (quizAnswered || button.disabled) return;
  const word = words[currentIndex];
  const isCorrect = selectedWord.english === word.english;
  elements.quizFeedback.hidden = false;
  if (isCorrect) {
    quizScore += 1;
    quizAnswered = true;
    elements.quizScore.textContent = quizScore;
    elements.quizChoices.querySelectorAll("button").forEach((choice) => {
      choice.disabled = true;
      if (choice.dataset.word === word.english) choice.classList.add("is-correct");
    });
    elements.quizFeedback.className = "quiz-feedback is-correct";
    elements.quizFeedback.textContent = `Правильно! ${word.english} — ${word.ukrainian}.`;
    elements.quizNext.hidden = false;
    elements.quizNext.focus();
  } else {
    button.classList.add("is-wrong");
    button.disabled = true;
    elements.quizFeedback.className = "quiz-feedback is-wrong";
    elements.quizFeedback.textContent = "Неправильно. Спробуйте інший варіант.";
  }
}

function speakWord() {
  if (!("speechSynthesis" in window)) { showToast("Озвучування не підтримується цим браузером"); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(words[currentIndex].english.replace(/^To\s+/i, ""));
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function shuffleWords() {
  words = shuffled(words);
  currentIndex = 0;
  quizScore = 0;
  renderActiveMode();
  showToast("Слова перемішано");
}

function resetDeck() {
  words = [...activeCatalog.words];
  currentIndex = 0;
  quizScore = 0;
  renderActiveMode();
  showToast("Починаємо спочатку");
}

function openRenameDialog() { elements.deckNameInput.value = deckName; elements.renameDialog.showModal(); elements.deckNameInput.select(); }
function closeRenameDialog() { elements.renameDialog.close(); }

function saveDeckName(event) {
  event.preventDefault();
  const nextName = elements.deckNameInput.value.trim();
  if (!nextName) return;
  deckName = nextName;
  localStorage.setItem(nameKey(currentCatalogId), deckName);
  updateHeader();
  refreshCatalogOptions();
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
elements.catalogSelect.addEventListener("change", () => activateCatalog(elements.catalogSelect.value));
elements.renameDeck.addEventListener("click", openRenameDialog);
elements.renameForm.addEventListener("submit", saveDeckName);
elements.closeDialog.addEventListener("click", closeRenameDialog);
elements.cancelRename.addEventListener("click", closeRenameDialog);
elements.modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
elements.quizNext.addEventListener("click", nextQuiz);
elements.renameDialog.addEventListener("click", (event) => { if (event.target === elements.renameDialog) closeRenameDialog(); });

document.addEventListener("keydown", (event) => {
  if (currentMode === "cards" && event.code === "Space") { event.preventDefault(); flipCard(); }
  if (currentMode === "cards" && event.code === "ArrowRight") nextCard();
  if (currentMode === "quiz" && /^[1-5]$/.test(event.key)) {
    const choice = elements.quizChoices.querySelectorAll("button")[Number(event.key) - 1];
    if (choice && !choice.disabled) choice.click();
  }
});

migrateLegacyBiology1();
refreshCatalogOptions();
activateCatalog(currentCatalogId);
