import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Qual é o verdadeiro nome do Batman?',
    options: ['Bruce Wayne', 'Clark Kent', 'Barry Allen', 'Oliver Queen'],
    answer: 'Bruce Wayne'
  },
  {
    question: 'Quem é o arqui-inimigo do Superman?',
    options: ['Coringa', 'Lex Luthor', 'Darkseid', 'Bane'],
    answer: 'Lex Luthor'
  },
  {
    question: 'Qual herói é conhecido como o Velocista Escarlate?',
    options: ['Lanterna Verde', 'Flash', 'Shazam', 'Aquaman'],
    answer: 'Flash'
  },
  {
    question: 'Qual é o nome da cidade protegida pelo Arqueiro Verde?',
    options: ['Gotham', 'Metropolis', 'Star City', 'Central City'],
    answer: 'Star City'
  },
  {
    question: 'Quem é a princesa de Themyscira?',
    options: ['Zatanna', 'Hera', 'Diana', 'Mera'],
    answer: 'Diana'
  },
  {
    question: 'Qual lanterna verde é um ex-piloto de testes?',
    options: ['John Stewart', 'Kyle Rayner', 'Hal Jordan', 'Guy Gardner'],
    answer: 'Hal Jordan'
  },
  {
    question: 'Qual vilão quebrou a coluna do Batman?',
    options: ['Bane', 'Coringa', 'Ra’s al Ghul', 'Pinguim'],
    answer: 'Bane'
  },
  {
    question: 'Quem criou a Liga da Justiça?',
    options: ['Superman', 'Batman', 'Aquaman', 'Todos juntos'],
    answer: 'Todos juntos'
  },
  {
    question: 'Quem foi o primeiro Robin?',
    options: ['Jason Todd', 'Dick Grayson', 'Tim Drake', 'Damian Wayne'],
    answer: 'Dick Grayson'
  },
  {
    question: 'Qual é o maior medo do Lanterna Verde?',
    options: ['Escuridão', 'Fogo', 'Perder o anel', 'Medo'],
    answer: 'Medo'
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const getTrophy = (score) => {
    if (score === 1000) return '🏆 Platina';
    if (score >= 800) return '🥇 Ouro';
    if (score >= 500) return '🥈 Prata';
    if (score >= 200) return '🥉 Bronze';
    return '❌ Nenhum troféu';
  };

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 100);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      <h1>Jogo de Heróis e Vilões da DC</h1>
      <p>Prepare-se para responder perguntas desafiadoras!</p>
      {showResult ? (
        <div className="result">
          <h2>Fim do jogo!</h2>
          <p>Você fez {score} pontos.</p>
          <p>Troféu: {getTrophy(score)}</p>
        </div>
      ) : (
        <div className="quiz">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
