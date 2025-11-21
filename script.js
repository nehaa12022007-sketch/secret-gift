let currentRiddle = 0;
let attempts = 0;

const riddles = [
  {
    question: "I speak without a mouth and hear without ears. What am I?",
    answer: "echo",
    note: "You always listen like it matters.",
    failNote: "You tried 5 times. I admire your stubbornness more than your logic 😄"
  },
  {
    question: "I’m not alive, but I grow. I don’t have lungs, but I need air.",
    answer: "fire",
    note: "You warm the coldest parts of me.",
    failNote: "5 wrong guesses? You’re on fire… but not the right kind 🔥"
  },
  {
    question: "I’m always running but never move. I’m full of numbers but never count.",
    answer: "clock",
    note: "You make time feel gentle.",
    failNote: "Time’s up! But hey, you’re still cute ⏰"
  },
  {
    question: "I’m yours, but others use me more. I’m invisible, but I shape your world.",
    answer: "name",
    note: "Your name is my favorite sound.",
    failNote: "You forgot your own name? I’m calling you ‘Champ’ now 😎"
  }
];

const questions = [
  "What’s your favorite shared memory?",
  "If you could relive one moment with me, what would it be?",
  "What does ‘home’ mean to you?"
];

function startJourney() {
  document.getElementById("stage").style.display = "block";
  showRiddle();
}

function showRiddle() {
  if (currentRiddle >= riddles.length) {
    showQuestions();
    return;
  }

  const r = riddles[currentRiddle];
  document.getElementById("stage").innerHTML = `
    <div class="card">
      <div class="badge">Riddle ${currentRiddle + 1}</div>
      <p>${r.question}</p>
      <input type="text" id="riddleInput" placeholder="Your answer…" />
      <button onclick="checkRiddle()">Submit</button>
      <p id="riddleResult"></p>
    </div>
  `;
}

function checkRiddle() {
  const input = document.getElementById("riddleInput").value.trim().toLowerCase();
  const r = riddles[currentRiddle];

  if (input === r.answer.toLowerCase()) {
    showNote(r.note);
  } else {
    attempts++;
    if (attempts >= 5) {
      showNote(r.failNote);
    } else {
      document.getElementById("riddleResult").textContent = `Wrong (${attempts}/5). Try again.`;
    }
  }
}

function showNote(text) {
  document.getElementById("stage").innerHTML = `
    <div class="card">
      <div class="badge">Note</div>
      <p>${text}</p>
      <button onclick="nextRiddle()">Next</button>
    </div>
  `;
}

function nextRiddle() {
  currentRiddle++;
  attempts = 0;
  showRiddle();
}

function showQuestions() {
  let html = `<div class="card"><div class="badge">Personal Questions</div>`;
  questions.forEach((q, i) => {
    html += `<p>${q}</p><input type="text" id="q${i}" placeholder="Your answer…" />`;
  });
  html += `<button onclick="finishQuestions()">Submit Answers</button></div>`;
  document.getElementById("stage").innerHTML = html;
}

function finishQuestions() {
  document.getElementById("stage").innerHTML = `
    <div class="card">
      <div class="badge">Final Step</div>
      <p>Great! Now let’s move to the final reveal.</p>
      <button onclick="goToFinal()">Go to Final</button>
    </div>
  `;
}

function goToFinal() {
  window.location.href = "final.html";
}
