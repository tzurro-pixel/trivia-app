(() => {
  const app = document.getElementById("app");
  const themeToggle = document.getElementById("themeToggle");

  const QUIZ_LENGTH = 10;
  const QUESTION_TIME = 10;
  const LEADERBOARD_KEY = "ai-trivia-leaderboard";
  const THEME_KEY = "ai-trivia-theme";

  const quizData = {
    politics: {
      title: "Politics",
      icon: "🏛️",
      questions: [
        {
          question: "What is the primary role of a legislature in a democracy?",
          options: [
            "Enforce laws",
            "Interpret laws",
            "Create laws",
            "Lead the military"
          ],
          answer: 2
        },
        {
          question: "What does the term 'voter turnout' refer to?",
          options: [
            "The number of candidates running",
            "The percentage of eligible voters who vote",
            "The number of campaign speeches",
            "The number of registered parties"
          ],
          answer: 1
        },
        {
          question: "Which political system is ruled by a king or queen?",
          options: ["Republic", "Monarchy", "Democracy", "Federation"],
          answer: 1
        },
        {
          question: "What is a coalition government?",
          options: [
            "A government led by the army",
            "A government formed by two or more parties",
            "A temporary court",
            "A one-party government"
          ],
          answer: 1
        },
        {
          question: "What is the purpose of a constitution?",
          options: [
            "To list national holidays",
            "To describe trade routes",
            "To define laws and government structure",
            "To appoint judges"
          ],
          answer: 2
        },
        {
          question: "What does 'term limit' mean in politics?",
          options: [
            "Time allowed for debates",
            "Maximum length someone can hold office",
            "Budget limits for campaigns",
            "The number of political parties allowed"
          ],
          answer: 1
        },
        {
          question: "Which branch of government usually interprets laws?",
          options: ["Executive", "Judicial", "Legislative", "Municipal"],
          answer: 1
        },
        {
          question: "What is a referendum?",
          options: [
            "A diplomatic mission",
            "A direct vote by citizens on an issue",
            "A type of parliament",
            "A tax policy"
          ],
          answer: 1
        },
        {
          question: "What is meant by 'bipartisan'?",
          options: [
            "Supported by two political parties",
            "A two-stage election",
            "A military-backed policy",
            "A policy from two countries"
          ],
          answer: 0
        },
        {
          question: "What is the main function of the executive branch?",
          options: [
            "Make laws",
            "Interpret laws",
            "Implement and enforce laws",
            "Write constitutions"
          ],
          answer: 2
        }
      ]
    },
    sports: {
      title: "Sports",
      icon: "⚽",
      questions: [
        {
          question: "How many players does a standard soccer team have on the field?",
          options: ["9", "10", "11", "12"],
          answer: 2
        },
        {
          question: "In tennis, what is the term for a score of zero?",
          options: ["Blank", "Love", "Nil", "Duck"],
          answer: 1
        },
        {
          question: "Which sport uses a shuttlecock?",
          options: ["Tennis", "Squash", "Badminton", "Table Tennis"],
          answer: 2
        },
        {
          question: "How many points is a touchdown worth in American football?",
          options: ["3", "6", "7", "8"],
          answer: 1
        },
        {
          question: "What color jersey does the Tour de France leader wear?",
          options: ["Green", "White", "Red", "Yellow"],
          answer: 3
        },
        {
          question: "In basketball, how many points is a free throw worth?",
          options: ["1", "2", "3", "4"],
          answer: 0
        },
        {
          question: "Which sport is associated with Wimbledon?",
          options: ["Golf", "Tennis", "Cricket", "Rugby"],
          answer: 1
        },
        {
          question: "How long is an Olympic swimming pool?",
          options: ["25 meters", "40 meters", "50 meters", "100 meters"],
          answer: 2
        },
        {
          question: "What is a hat-trick in soccer?",
          options: [
            "Three fouls in one game",
            "Three goals by one player",
            "Three yellow cards",
            "Three assists"
          ],
          answer: 1
        },
        {
          question: "Which sport features the terms strike and spare?",
          options: ["Baseball", "Bowling", "Boxing", "Volleyball"],
          answer: 1
        }
      ]
    },
    geopolitics: {
      title: "Geopolitics",
      icon: "🌍",
      questions: [
        {
          question: "What is a border dispute?",
          options: [
            "A disagreement over national boundaries",
            "A financial crisis",
            "A trade agreement",
            "A type of election"
          ],
          answer: 0
        },
        {
          question: "Which organization is primarily focused on international peace and cooperation?",
          options: ["NATO", "UN", "OPEC", "WTO"],
          answer: 1
        },
        {
          question: "What is a sanctions regime?",
          options: [
            "A new constitution",
            "A military alliance",
            "Economic or political penalties imposed on a state",
            "A border checkpoint system"
          ],
          answer: 2
        },
        {
          question: "What does NATO stand for?",
          options: [
            "Northern Alliance Treaty Organization",
            "North Atlantic Treaty Organization",
            "National Atlantic Trade Office",
            "New Alliance Treaty Order"
          ],
          answer: 1
        },
        {
          question: "What is a ceasefire?",
          options: [
            "A peace treaty ending all conflict forever",
            "A temporary stop in fighting",
            "A trade negotiation",
            "A UN election"
          ],
          answer: 1
        },
        {
          question: "What is meant by 'sphere of influence'?",
          options: [
            "A country's area of strategic influence",
            "Its geographical size",
            "Its climate zone",
            "Its voting system"
          ],
          answer: 0
        },
        {
          question: "What is diplomacy?",
          options: [
            "Using force to settle disputes",
            "Negotiating between states",
            "Building embassies",
            "A military parade"
          ],
          answer: 1
        },
        {
          question: "Which of these is an example of a strategic waterway?",
          options: ["Sahara Desert", "Amazon Rainforest", "Strait of Hormuz", "Alps"],
          answer: 2
        },
        {
          question: "What is an embassy?",
          options: [
            "A military base",
            "A foreign country's official diplomatic office",
            "An intelligence agency",
            "A trade tariff"
          ],
          answer: 1
        },
        {
          question: "What does 'multipolar world' usually mean?",
          options: [
            "A world with one dominant power",
            "A world with many major power centers",
            "A world divided by climate",
            "A world without alliances"
          ],
          answer: 1
        }
      ]
    },
    popCulture: {
      title: "Pop Culture",
      icon: "🎬",
      questions: [
        {
          question: "What does 'binge-watch' mean?",
          options: [
            "Watching one movie a year",
            "Watching many episodes in one sitting",
            "Watching only documentaries",
            "Watching without sound"
          ],
          answer: 1
        },
        {
          question: "Which platform is known for short-form viral videos?",
          options: ["LinkedIn", "TikTok", "Dropbox", "Slack"],
          answer: 1
        },
        {
          question: "What is a reboot in entertainment?",
          options: [
            "A soundtrack album",
            "A restarted version of a franchise",
            "A film award",
            "A concert rehearsal"
          ],
          answer: 1
        },
        {
          question: "What does 'spoiler' mean in movies or TV?",
          options: [
            "A scene filmed outdoors",
            "A reveal of important plot details",
            "A bad review",
            "An actor's contract"
          ],
          answer: 1
        },
        {
          question: "Which of these is commonly associated with fandom culture?",
          options: ["Fan art", "Tax filing", "Land zoning", "Jury duty"],
          answer: 0
        },
        {
          question: "What is cosplay?",
          options: [
            "Competitive singing",
            "Dressing as fictional characters",
            "Watching films outdoors",
            "A type of dance"
          ],
          answer: 1
        },
        {
          question: "What is a viral meme?",
          options: [
            "A private letter",
            "A widely shared humorous image or idea",
            "A type of camera",
            "A movie trailer"
          ],
          answer: 1
        },
        {
          question: "What does 'box office' refer to?",
          options: [
            "A cinema's parking lot",
            "Revenue from movie ticket sales",
            "An actor's dressing room",
            "A DVD collection"
          ],
          answer: 1
        },
        {
          question: "Which awards celebrate achievements in film?",
          options: ["Oscars", "Pulitzers", "Nobel Prizes", "Emmys for books"],
          answer: 0
        },
        {
          question: "What is a streaming service?",
          options: [
            "A postal delivery company",
            "A platform for watching content online",
            "A radio antenna brand",
            "A music instrument"
          ],
          answer: 1
        }
      ]
    },
    history: {
      title: "History",
      icon: "📜",
      questions: [
        {
          question: "Which ancient civilization built the pyramids of Giza?",
          options: ["Romans", "Greeks", "Egyptians", "Persians"],
          answer: 2
        },
        {
          question: "What was the Renaissance?",
          options: [
            "A military campaign",
            "A cultural revival in Europe",
            "An industrial policy",
            "A farming method"
          ],
          answer: 1
        },
        {
          question: "The Industrial Revolution began in which country?",
          options: ["France", "Germany", "Britain", "Spain"],
          answer: 2
        },
        {
          question: "Who was the first emperor of Rome?",
          options: ["Julius Caesar", "Augustus", "Nero", "Trajan"],
          answer: 1
        },
        {
          question: "What was the Silk Road?",
          options: [
            "A road in Rome",
            "A trade network linking East and West",
            "A royal palace route",
            "A military wall"
          ],
          answer: 1
        },
        {
          question: "Which wall fell in 1989, symbolizing the end of the Cold War era in Europe?",
          options: ["Great Wall", "Hadrian's Wall", "Berlin Wall", "Western Wall"],
          answer: 2
        },
        {
          question: "Who wrote the Declaration of Independence's main draft?",
          options: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"],
          answer: 1
        },
        {
          question: "Which empire was ruled by Genghis Khan?",
          options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Byzantine Empire"],
          answer: 2
        },
        {
          question: "What was D-Day?",
          options: [
            "The moon landing",
            "The Allied invasion of Normandy",
            "The signing of the Magna Carta",
            "The start of the Renaissance"
          ],
          answer: 1
        },
        {
          question: "Which civilization is known for democracy in Athens?",
          options: ["Ancient Greece", "Ancient Egypt", "Phoenicia", "Mesopotamia"],
          answer: 0
        }
      ]
    }
  };

  const state = {
    playerName: "",
    currentScreen: "categories",
    currentCategoryKey: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    timer: QUESTION_TIME,
    timerInterval: null,
    answerLocked: false,
    correctAnswers: 0
  };

  function init() {
    loadTheme();
    renderCategoriesScreen();
    bindThemeToggle();
  }

  function bindThemeToggle() {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
    });
  }

  function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const isDark = savedTheme === "dark";
    document.body.classList.toggle("dark", isDark);
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }

  function renderCategoriesScreen() {
    state.currentScreen = "categories";
    clearTimer();

    const categoryCards = Object.entries(quizData)
      .map(([key, category]) => {
        return `
          <button class="category-card fade-in" data-category="${key}">
            <span class="category-icon">${category.icon}</span>
            <div class="category-title">${category.title}</div>
            <div class="category-meta">10 questions · 10 seconds each</div>
          </button>
        `;
      })
      .join("");

    app.innerHTML = `
      <section class="card hero fade-in">
        <h2>Welcome to the AI Trivia Quiz</h2>
        <p>
          Pick a category, race against the timer, and see if you can land a spot
          on the leaderboard. The AI is your quizmaster, and every correct answer
          earns 10 points.
        </p>

        <div class="player-form">
          <label for="playerName" class="section-label">Player name</label>
          <input
            id="playerName"
            class="input"
            type="text"
            maxlength="20"
            placeholder="Enter your name"
            value="${escapeHtml(state.playerName)}"
          />
        </div>
      </section>

      <section class="card fade-in">
        <div class="section-header">
          <div>
            <h2>Choose a category</h2>
            <p>Select one topic to begin your 10-question quiz.</p>
          </div>
        </div>

        <div class="category-grid">
          ${categoryCards}
        </div>

        <div class="actions">
          <button id="viewLeaderboardBtn" class="btn btn-secondary">View Leaderboard</button>
        </div>
      </section>
    `;

    document.getElementById("playerName").addEventListener("input", (event) => {
      state.playerName = event.target.value.trimStart();
    });

    document.querySelectorAll("[data-category]").forEach((button) => {
      button.addEventListener("click", () => {
        const categoryKey = button.dataset.category;
        startQuiz(categoryKey);
      });
    });

    document.getElementById("viewLeaderboardBtn").addEventListener("click", renderLeaderboardScreen);
  }

  function startQuiz(categoryKey) {
    const playerNameInput = document.getElementById("playerName");
    const playerName = playerNameInput ? playerNameInput.value.trim() : state.playerName.trim();

    state.playerName = playerName || "Anonymous";
    state.currentCategoryKey = categoryKey;
    state.currentQuestions = [...quizData[categoryKey].questions];
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.timer = QUESTION_TIME;
    state.answerLocked = false;
    state.correctAnswers = 0;
    state.currentScreen = "quiz";

    renderQuizScreen();
    startTimer();
  }

  function renderQuizScreen() {
    const category = quizData[state.currentCategoryKey];
    const question = state.currentQuestions[state.currentQuestionIndex];
    const progressPercent = ((state.currentQuestionIndex) / QUIZ_LENGTH) * 100;
    const timerPercent = (state.timer / QUESTION_TIME) * 100;

    app.innerHTML = `
      <section class="card quiz-header fade-in">
        <div class="quiz-topline">
          <div>
            <h2>${category.icon} ${category.title}</h2>
            <p class="category-meta">AI Quizmaster is asking the next question.</p>
          </div>

          <div class="badge-row">
            <div class="badge">Player: ${escapeHtml(state.playerName)}</div>
            <div class="badge">Score: ${state.score}</div>
          </div>
        </div>

        <div class="progress-wrap">
          <div class="progress-meta">
            <span>Question ${state.currentQuestionIndex + 1} / ${QUIZ_LENGTH}</span>
            <span>${Math.round(progressPercent)}% complete</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <div class="timer-wrap">
          <div class="progress-meta">
            <span>Time remaining</span>
            <span id="timerText">${state.timer}s</span>
          </div>
          <div class="timer-bar">
            <div id="timerFill" class="timer-fill" style="width: ${timerPercent}%"></div>
          </div>
        </div>
      </section>

      <section class="card question-card pop">
        <p class="eyebrow">Question</p>
        <div class="question-text">${escapeHtml(question.question)}</div>

        <div class="answers">
          ${question.options
            .map((option, index) => {
              return `
                <button class="answer-btn" data-answer-index="${index}">
                  ${escapeHtml(option)}
                </button>
              `;
            })
            .join("")}
        </div>

        <div id="feedback" class="feedback" aria-live="polite"></div>

        <div class="actions">
          <button id="quitQuizBtn" class="btn btn-secondary">Quit Quiz</button>
        </div>
      </section>
    `;

    document.querySelectorAll(".answer-btn").forEach((button) => {
      button.addEventListener("click", handleAnswerClick);
    });

    document.getElementById("quitQuizBtn").addEventListener("click", renderCategoriesScreen);
  }

  function handleAnswerClick(event) {
    if (state.answerLocked) return;

    const selectedIndex = Number(event.currentTarget.dataset.answerIndex);
    const currentQuestion = state.currentQuestions[state.currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.answer;

    state.answerLocked = true;
    clearTimer();

    if (isCorrect) {
      state.score += 10;
      state.correctAnswers += 1;
    }

    showAnswerFeedback(selectedIndex, currentQuestion.answer, isCorrect, false);
  }

  function showAnswerFeedback(selectedIndex, correctIndex, isCorrect, isTimeout) {
    const answerButtons = document.querySelectorAll(".answer-btn");
    const feedback = document.getElementById("feedback");

    answerButtons.forEach((button, index) => {
      button.disabled = true;

      if (index === correctIndex) {
        button.classList.add("correct");
      }

      if (!isTimeout && index === selectedIndex && index !== correctIndex) {
        button.classList.add("incorrect");
      }
    });

    if (isTimeout) {
      feedback.textContent = "Time's up! The correct answer was highlighted.";
      feedback.className = "feedback incorrect";
    } else if (isCorrect) {
      feedback.textContent = "Correct! +10 points";
      feedback.className = "feedback correct";
    } else {
      feedback.textContent = "Incorrect.";
      feedback.className = "feedback incorrect";
    }

    setTimeout(goToNextQuestion, 1200);
  }

  function startTimer() {
    clearTimer();
    state.timer = QUESTION_TIME;
    updateTimerUI();

    state.timerInterval = setInterval(() => {
      state.timer -= 1;
      updateTimerUI();

      if (state.timer <= 0) {
        clearTimer();
        handleTimeout();
      }
    }, 1000);
  }

  function updateTimerUI() {
    const timerText = document.getElementById("timerText");
    const timerFill = document.getElementById("timerFill");

    if (!timerText || !timerFill) return;

    timerText.textContent = `${state.timer}s`;
    timerFill.style.width = `${(state.timer / QUESTION_TIME) * 100}%`;
  }

  function handleTimeout() {
    if (state.answerLocked) return;

    state.answerLocked = true;
    const currentQuestion = state.currentQuestions[state.currentQuestionIndex];
    showAnswerFeedback(null, currentQuestion.answer, false, true);
  }

  function goToNextQuestion() {
    state.currentQuestionIndex += 1;
    state.answerLocked = false;

    if (state.currentQuestionIndex >= QUIZ_LENGTH) {
      finishQuiz();
      return;
    }

    renderQuizScreen();
    startTimer();
  }

  function finishQuiz() {
    clearTimer();
    saveScore({
      playerName: state.playerName,
      score: state.score,
      category: quizData[state.currentCategoryKey].title,
      date: new Date().toLocaleDateString()
    });

    renderResultsScreen();
  }

  function renderResultsScreen() {
    const wrongAnswers = QUIZ_LENGTH - state.correctAnswers;

    app.innerHTML = `
      <section class="card fade-in">
        <p class="eyebrow">Quiz Complete</p>
        <h2>Nice work, ${escapeHtml(state.playerName)}!</h2>
        <p class="category-meta">
          You completed the ${quizData[state.currentCategoryKey].title} quiz.
        </p>

        <div class="results-grid">
          <div class="stat-card">
            <div class="stat-label">Final Score</div>
            <div class="stat-value">${state.score}</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Correct Answers</div>
            <div class="stat-value">${state.correctAnswers}</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Incorrect / Timeouts</div>
            <div class="stat-value">${wrongAnswers}</div>
          </div>
        </div>

        <div class="actions">
          <button id="playAgainBtn" class="btn btn-primary">Play Again</button>
          <button id="viewLeaderboardFromResultsBtn" class="btn btn-secondary">View Leaderboard</button>
        </div>
      </section>
    `;

    document.getElementById("playAgainBtn").addEventListener("click", renderCategoriesScreen);
    document.getElementById("viewLeaderboardFromResultsBtn").addEventListener("click", renderLeaderboardScreen);
  }

  function renderLeaderboardScreen() {
    clearTimer();
    const scores = getLeaderboard();
    const rows = scores.length
      ? scores
          .map((entry, index) => {
            return `
              <tr>
                <td>${index + 1}</td>
                <td>${escapeHtml(entry.playerName)}</td>
                <td>${entry.score}</td>
                <td>${escapeHtml(entry.category)}</td>
                <td>${escapeHtml(entry.date)}</td>
              </tr>
            `;
          })
          .join("")
      : `
        <tr>
          <td colspan="5" class="empty-state">No high scores yet. Play a quiz to create the first entry.</td>
        </tr>
      `;

    app.innerHTML = `
      <section class="card fade-in">
        <div class="section-header">
          <div>
            <p class="eyebrow">Top Players</p>
            <h2>Leaderboard</h2>
            <p>Top 5 scores saved locally on this device.</p>
          </div>
        </div>

        <table class="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>

        <div class="actions">
          <button id="backHomeBtn" class="btn btn-primary">Back to Categories</button>
          <button id="clearLeaderboardBtn" class="btn btn-secondary">Clear Leaderboard</button>
        </div>
      </section>
    `;

    document.getElementById("backHomeBtn").addEventListener("click", renderCategoriesScreen);
    document.getElementById("clearLeaderboardBtn").addEventListener("click", clearLeaderboard);
  }

  function saveScore(entry) {
    const existingScores = getLeaderboard();
    existingScores.push(entry);

    existingScores.sort((a, b) => b.score - a.score);

    const topFive = existingScores.slice(0, 5);
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(topFive));
  }

  function getLeaderboard() {
    try {
      return JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
    } catch (error) {
      return [];
    }
  }

  function clearLeaderboard() {
    localStorage.removeItem(LEADERBOARD_KEY);
    renderLeaderboardScreen();
  }

  function clearTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  init();
})();
