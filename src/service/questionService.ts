import QuestionCategoryEnum from '../models/enum/questionCategory';
import { Question } from '../models/question';
import User from '../models/user';
import questionsData from '../data/questions.json';
import usersData from '../data/user.json';

export class QuestionService{

    static getQuestions() : Question[] {
        var questions : Question[] = [];
        console.log(questionsData)
        console.log("teste")
        return questions;
    }

    static getAnwser(category : QuestionCategoryEnum, selectedOption: string) : User[]{
        var users : User[] = []
        var result : User[] = [];

        switch (category) {
            case QuestionCategoryEnum.PROJECT:
              result = users.filter(u => u.projects.includes(selectedOption))
              break;
            case QuestionCategoryEnum.KNOWLEDGE_AREA:
                result = users.filter(u => u.knowledgeAreas.includes(selectedOption))
              break;
            case QuestionCategoryEnum.DEPARTMENT:
                result = users.filter(u => u.department === selectedOption)
              break;
            case QuestionCategoryEnum.DEPARTMENT_LEADER:
                result = users.filter(u => u.department === selectedOption && u.leader)
              break;
            case QuestionCategoryEnum.RESPONSIBILITY:
                result = users.filter(u => u.responsibility.includes(selectedOption))
              break;
            default:
              break;
          }

          return result
    }
}