import React, { useEffect, useState }from 'react';
import './App.css';
import {QuestionService} from './service/questionService'

function App() {
  const [question, setQuestion] = useState<Question[]>([]);

  useEffect(() => {
    var questions = QuestionService.getQuestions();
    console.log(questions)
    setQuestion(questions)

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
