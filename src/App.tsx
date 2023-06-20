import React, { useEffect, useState }from 'react';
import './App.css';
import {QuestionService} from './service/questionService'
import { Question } from './models/question';
import QuestionCategoryEnum from './models/enum/questionCategory';

function App() {
  const [question, setQuestion] = useState<Question[]>([]);

  useEffect(() => {
    var questions = QuestionService.getQuestions();
    console.log(questions)
    var answer = QuestionService.getAnwser(QuestionCategoryEnum.PROJECT, "VitalAge")
    console.log(answer)
    setQuestion(questions)

  }, []);

  return (
    <body>
      <div className='landing-title'>
        <h1>ORÁCULO EMPRESARIAL</h1>
      </div>
      <div className='search-bar'>
        <div className='prompt'>
          <div className='option'>
          Gostaria de saber quem é o responsável
          </div>
        </div>
        <button className='search-button'>
          DESCOBRIR
        </button>
      </div>
      <div className='containers'>
        <div className="container" id='container-1'>
          <h3>1. Primeiro, selecione o início da sua pergunta</h3>
          <div className='question-box' id='question-1'>
            dasdasdsa
          </div>
        </div>
        <div className="container" id='container-2'>
          <h3>2. Agora, especifique o que você quer saber</h3>
          <div className='question-box' id='question-2'>
            dasdasdsa
          </div>
        </div>
        <div className="container" id='container-3'>
          <h3>3. Por fim, conclua a sua pergunta</h3>
          <div className='question-box' id='question-3'>
            dasdasdsa
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
