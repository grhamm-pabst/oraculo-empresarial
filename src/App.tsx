import React, { ChangeEvent, useEffect, useState }from 'react';
import './App.css';
import {QuestionService} from './service/questionService'
import { Options, Question } from './models/question';
import QuestionCategoryEnum from './models/enum/questionCategory';
import User from './models/user';

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const [selectedValueFirstQuestion, setSelectedValueFirstQuestion] = useState('');
  const [selectedValueSecondQuestion, setSelectedValueSecondQuestion] = useState('');
  const [selectedValueThirdQuestion, setSelectedValueThirdQuestion] = useState('');

  const handleRadioChangeFirstQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValueFirstQuestion(event.target.value);
    setSelectedValueSecondQuestion("");
    setSelectedValueThirdQuestion("");
  };

  const handleRadioChangeSecondQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValueSecondQuestion(event.target.value);
    setSelectedValueThirdQuestion("");
  };

  const handleRadioChangeThirdQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValueThirdQuestion(event.target.value);
  };

  const handleReset = () => {
    setSelectedValueFirstQuestion('');
    setSelectedValueSecondQuestion('');
    setSelectedValueThirdQuestion('');
    setIsAnswered(false);
    setUsers([]);
  }

  const handleSubmit = () => {
    let category: QuestionCategoryEnum = QuestionCategoryEnum.null;
    let alternative: string = "";


    const questionSelected = questions.map(item => {
      if(item.id === selectedValueFirstQuestion) {
        item.options.map(item => {
          if(item.id === selectedValueSecondQuestion) {
            category = item.category;
            alternative = item.alternatives[Number(selectedValueThirdQuestion)];
          }
        })
      }
    })

    const answer = QuestionService.getAnwser(category, alternative);
    setUsers(answer);

    setIsAnswered(true);
  }

  useEffect(() => {
    var questionsData = QuestionService.getQuestions();
    setQuestions(questionsData)
  }, []);

  return (
    <body>
      <div className='landing-title'>
        <h1>ORÁCULO EMPRESARIAL</h1>
      </div>
      {
        !isAnswered? <>
        <div className='search-bar'>
        <div className='prompt'>
          {
            selectedValueFirstQuestion !== '' ? <div className='option' id="opt-1">
            {questions.find((item) => {
              return item.id === selectedValueFirstQuestion
            })?.description}
          </div> : <></>
          }
          {
            selectedValueSecondQuestion !== '' ? <div className='option' id="opt-2">
            {questions.find((item) => {
              return item.id === selectedValueFirstQuestion
            })?.options.find((item) => {
              return item.id === selectedValueSecondQuestion
            })?.description}
          </div> : <></>
          }
          {
            selectedValueThirdQuestion !== '' ? <div className='option' id="opt-3">
            {questions.find((item) => {
              return item.id === selectedValueFirstQuestion
            })?.options.find((item) => {
              return item.id === selectedValueSecondQuestion
            })?.alternatives[Number(selectedValueThirdQuestion)]}
          </div> : <></>
          }
          
        </div>
        {
          selectedValueThirdQuestion !== '' ? 
          <button className='search-button' onClick={handleSubmit}>
          DESCOBRIR
        </button> : <button className='search-button' disabled>
          DESCOBRIR
        </button>
        }
        
      </div>
      <div className='containers'>
        <div className="container" id='container-1'>
          <h3>1. Primeiro, selecione o início da sua pergunta</h3>
          {
            questions.map((item, index) => (
              <div>
                <input type='radio' id={"first-question-" + item.id} name='question-1' hidden value={item.id} onChange={handleRadioChangeFirstQuestion} checked={selectedValueFirstQuestion === item.id}/>
                <label id='question-box-1' className='question-box' htmlFor={"first-question-" + item.id}>{item.description}</label>
              </div>
            )
            )
          }
        </div>
        <div className="container" id='container-2'>
          <h3>2. Agora, especifique o que você quer saber</h3>
          {questions.find((item) => {
            return item.id === selectedValueFirstQuestion
          })?.options.map((item, index) => (
            <div>
                <input type='radio' id={"second-question-" + item.id} name='question-2' hidden value={item.id} onChange={handleRadioChangeSecondQuestion} checked={selectedValueSecondQuestion === item.id}/>
                <label id='question-box-2' className='question-box' htmlFor={"second-question-" + item.id}>{item.description}</label>
              </div>
          ))}
        </div>
        <div className="container" id='container-3'>
          <h3>3. Por fim, conclua a sua pergunta</h3>
          {questions.find((item) => {
            return item.id === selectedValueFirstQuestion
          })?.options.find((item) => {
            return item.id === selectedValueSecondQuestion
          })?.alternatives.map((item, index) => (
            <div>
                <input type='radio' id={"third-question-" + index} name='question-3' hidden value={index} onChange={handleRadioChangeThirdQuestion} checked={selectedValueThirdQuestion === index.toString()}/>
                <label id='question-box-3' className='question-box' htmlFor={"third-question-" + index}>{item}</label>
              </div>
          ))}
        </div>
      </div>
        </> : <>
        <div className='containers'>
            <div className='container' id="answer-container">
              <div className='answer-header'>
                <h3>Sua resposta</h3>
                <button onClick={handleReset}>PERGUNTAR NOVAMENTE</button>
              </div>
              <div className='answer-sector'>
                {
                  users.map(item => 
                    <div className='user-card'>
                      <p>{item.role}</p>
                      <p>{item.name}</p>
                      <p>{item.email}</p>
                    </div>
                  )
                }
              </div>
            </div>
        </div>
        </>
      }
      
    </body>
  );
}

export default App;
