// Animal Quiz Game Logic
// Uses existing animal data from script.js

// Game State
const gameState = {
    currentMode: null,
    currentQuestion: 0,
    score: 0,
    streak: 0,
    lives: 3,
    questions: [],
    timeLeft: 30,
    timerInterval: null,
    gameStarted: false
};

// Game Modes
const GAME_MODES = {
    GUESS_ANIMAL: 'guess-animal',
    HABITAT_MATCH: 'habitat-match',
    DIET_QUIZ: 'diet-quiz',
    TRUE_FALSE: 'true-false'
};

// Initialize game
function initGame(mode) {
    gameState.currentMode = mode;
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.streak = 0;
    gameState.lives = 3;
    gameState.gameStarted = true;

    // Generate questions based on mode
    gameState.questions = generateQuestions(mode, 10);

    // Show game screen
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';

    // Start first question
    showQuestion();
}

// Generate questions based on game mode
function generateQuestions(mode, count) {
    const questions = [];
    const shuffledAnimals = [...animals].sort(() => 0.5 - Math.random());

    for (let i = 0; i < Math.min(count, shuffledAnimals.length); i++) {
        const animal = shuffledAnimals[i];

        switch (mode) {
            case GAME_MODES.GUESS_ANIMAL:
                questions.push(generateGuessAnimalQuestion(animal));
                break;
            case GAME_MODES.HABITAT_MATCH:
                questions.push(generateHabitatQuestion(animal));
                break;
            case GAME_MODES.DIET_QUIZ:
                questions.push(generateDietQuestion(animal));
                break;
            case GAME_MODES.TRUE_FALSE:
                questions.push(generateTrueFalseQuestion(animal));
                break;
        }
    }

    return questions;
}

// Generate "Guess the Animal" question
function generateGuessAnimalQuestion(animal) {
    const wrongAnimals = animals
        .filter(a => a.id !== animal.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    const options = [animal, ...wrongAnimals]
        .sort(() => 0.5 - Math.random())
        .map(a => a.name);

    return {
        type: GAME_MODES.GUESS_ANIMAL,
        question: 'สัตว์ในภาพนี้คืออะไร?',
        image: animal.image,
        options: options,
        correctAnswer: animal.name,
        points: 10
    };
}

// Generate "Habitat Match" question
function generateHabitatQuestion(animal) {
    const habitats = [...new Set(animals.map(a => a.habitat))];
    const wrongHabitats = habitats
        .filter(h => h !== animal.habitat)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    const options = [animal.habitat, ...wrongHabitats]
        .sort(() => 0.5 - Math.random());

    return {
        type: GAME_MODES.HABITAT_MATCH,
        question: `${animal.name} อาศัยอยู่ที่ไหน?`,
        image: animal.image,
        options: options,
        correctAnswer: animal.habitat,
        points: 15
    };
}

// Generate "Diet Quiz" question
function generateDietQuestion(animal) {
    const diets = [...new Set(animals.map(a => a.diet))];
    const wrongDiets = diets
        .filter(d => d !== animal.diet)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    const options = [animal.diet, ...wrongDiets]
        .sort(() => 0.5 - Math.random());

    return {
        type: GAME_MODES.DIET_QUIZ,
        question: `${animal.name} กินอะไร?`,
        image: animal.image,
        options: options,
        correctAnswer: animal.diet,
        points: 15
    };
}

// Generate "True or False" question
function generateTrueFalseQuestion(animal) {
    const statements = [
        { text: `${animal.name} เป็น${getTypeInfo(animal.type).label}`, correct: true },
        { text: `${animal.name} อาศัยอยู่${animal.habitat}`, correct: true },
        { text: `${animal.name} เป็น${animal.diet}`, correct: true }
    ];

    // Add false statements
    const wrongAnimal = animals.find(a => a.id !== animal.id && a.type !== animal.type);
    if (wrongAnimal) {
        statements.push({ text: `${animal.name} เป็น${getTypeInfo(wrongAnimal.type).label}`, correct: false });
    }

    const statement = statements[Math.floor(Math.random() * statements.length)];

    return {
        type: GAME_MODES.TRUE_FALSE,
        question: statement.text,
        image: animal.image,
        options: ['จริง', 'เท็จ'],
        correctAnswer: statement.correct ? 'จริง' : 'เท็จ',
        points: 20
    };
}

// Show current question
function showQuestion() {
    if (gameState.currentQuestion >= gameState.questions.length) {
        endGame();
        return;
    }

    const question = gameState.questions[gameState.currentQuestion];

    // Update UI
    document.getElementById('questionNumber').textContent = `${gameState.currentQuestion + 1}/${gameState.questions.length}`;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionImage').src = question.image;
    document.getElementById('scoreDisplay').textContent = gameState.score;
    document.getElementById('streakDisplay').textContent = gameState.streak;

    // Update lives
    updateLivesDisplay();

    // Render options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(option, question.correctAnswer, question.points);
        optionsContainer.appendChild(button);
    });

    // Start timer
    startTimer();
}

// Start countdown timer
function startTimer() {
    gameState.timeLeft = 30;
    updateTimerDisplay();

    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            checkAnswer(null, gameState.questions[gameState.currentQuestion].correctAnswer, 0);
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    timerEl.textContent = gameState.timeLeft;

    if (gameState.timeLeft <= 10) {
        timerEl.style.color = 'var(--accent)';
        timerEl.style.animation = 'pulse 0.5s infinite';
    } else {
        timerEl.style.color = 'var(--primary)';
        timerEl.style.animation = 'none';
    }
}

// Update lives display
function updateLivesDisplay() {
    const livesContainer = document.getElementById('livesDisplay');
    livesContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('i');
        heart.className = i < gameState.lives ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        heart.style.color = i < gameState.lives ? 'var(--accent)' : 'var(--text-muted)';
        livesContainer.appendChild(heart);
    }
}

// Check answer
function checkAnswer(selectedAnswer, correctAnswer, points) {
    clearInterval(gameState.timerInterval);

    const isCorrect = selectedAnswer === correctAnswer;

    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    if (isCorrect) {
        // Calculate score with time bonus and streak multiplier
        const timeBonus = Math.floor(gameState.timeLeft / 3);
        const streakMultiplier = 1 + (gameState.streak * 0.1);
        const totalPoints = Math.floor((points + timeBonus) * streakMultiplier);

        gameState.score += totalPoints;
        gameState.streak++;

        showFeedback('correct', `+${totalPoints} คะแนน!`);
    } else {
        gameState.lives--;
        gameState.streak = 0;

        if (gameState.lives <= 0) {
            showFeedback('wrong', 'หมดชีวิตแล้ว!');
            setTimeout(endGame, 2000);
            return;
        }

        showFeedback('wrong', `คำตอบที่ถูกคือ: ${correctAnswer}`);
    }

    // Next question after delay
    setTimeout(() => {
        gameState.currentQuestion++;
        showQuestion();
    }, 2000);
}

// Show feedback
function showFeedback(type, message) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
    feedback.style.display = 'block';

    setTimeout(() => {
        feedback.style.display = 'none';
    }, 1800);
}

// End game
function endGame() {
    clearInterval(gameState.timerInterval);

    // Save high score
    saveHighScore(gameState.score);

    // Show results
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';

    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('correctAnswers').textContent = gameState.currentQuestion;
    document.getElementById('totalQuestions').textContent = gameState.questions.length;

    // Show leaderboard
    displayLeaderboard();

    // Confetti if high score
    if (isHighScore(gameState.score)) {
        showConfetti();
    }
}

// Save high score
function saveHighScore(score) {
    const userEmail = getCurrentUserEmail();
    const scores = JSON.parse(localStorage.getItem('gameScores') || '{}');

    if (!scores[userEmail]) {
        scores[userEmail] = [];
    }

    scores[userEmail].push({
        score: score,
        mode: gameState.currentMode,
        date: new Date().toISOString()
    });

    // Keep only top 10 scores per user
    scores[userEmail].sort((a, b) => b.score - a.score);
    scores[userEmail] = scores[userEmail].slice(0, 10);

    localStorage.setItem('gameScores', JSON.stringify(scores));
}

// Check if high score
function isHighScore(score) {
    const userEmail = getCurrentUserEmail();
    const scores = JSON.parse(localStorage.getItem('gameScores') || '{}');

    if (!scores[userEmail] || scores[userEmail].length === 0) {
        return true;
    }

    return score > scores[userEmail][0].score;
}

// Display leaderboard
function displayLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    const allScores = JSON.parse(localStorage.getItem('gameScores') || '{}');

    // Flatten all scores
    const flatScores = [];
    Object.keys(allScores).forEach(email => {
        allScores[email].forEach(scoreData => {
            flatScores.push({
                email: email,
                ...scoreData
            });
        });
    });

    // Sort by score
    flatScores.sort((a, b) => b.score - a.score);

    // Display top 10
    leaderboard.innerHTML = '';
    flatScores.slice(0, 10).forEach((entry, index) => {
        const row = document.createElement('div');
        row.className = 'leaderboard-row';
        row.innerHTML = `
            <span class="rank">#${index + 1}</span>
            <span class="player">${entry.email.split('@')[0]}</span>
            <span class="score">${entry.score}</span>
        `;
        leaderboard.appendChild(row);
    });
}

// Show confetti animation
function showConfetti() {
    // Simple confetti effect
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = ['var(--primary)', 'var(--secondary)', 'var(--accent)'][Math.floor(Math.random() * 3)];
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}

// Restart game
function restartGame() {
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('modeSelection').style.display = 'block';
    gameState.gameStarted = false;
}

// Helper function from script.js
function getTypeInfo(type) {
    switch (type) {
        case 'land': return { label: 'สัตว์บก', className: 'badge-land' };
        case 'water': return { label: 'สัตว์น้ำ', className: 'badge-water' };
        case 'poultry': return { label: 'สัตว์ปีก', className: 'badge-poultry' };
        default: return { label: 'ทั่วไป', className: '' };
    }
}
