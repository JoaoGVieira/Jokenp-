import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = ['Pedra', 'Papel', 'Tesoura'];

  const handleUserChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerPick = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(computerPick);
    determineWinner(choice, computerPick);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("Empate!");
    } else if (
      (user === 'Pedra' && computer === 'Tesoura') ||
      (user === 'Papel' && computer === 'Pedra') ||
      (user === 'Tesoura' && computer === 'Papel')
    ) {
      setResult("Você ganhou!");
    } else {
      setResult("Você perdeu!");
    }
  };

  return (
    <div className="App">
      <h1>Jokenpô</h1>
      <div className="choices">
        {choices.map(choice => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="results">
        {userChoice && <p>Sua escolha: {userChoice}</p>}
        {computerChoice && <p>Escolha do computador: {computerChoice}</p>}
        {result && <h2>{result}</h2>}
      </div>
    </div>
  )
}

export default App
