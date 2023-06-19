import QuestionCategoryEnum from '../models/enum/questionCategory';
import { Question, Options } from '../models/question';
import User from '../models/user';
import questionsData from '../data/questions.json';
import usersData from '../data/user.json';

export class QuestionService{

    static getQuestions() : Question[] {
        return this.transformQuestionsData();
    }

    static getAnwser(category : QuestionCategoryEnum, selectedOption: string) : User[]{
        var users : User[] = this.transformUserData()
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

    static transformUserData(): User[] {
      const transformedUsers: User[] = [];
  
      usersData.forEach((userData: any) => {
        const user: User = {
          name: userData.name,
          role: userData.role,
          department: userData.department,
          email: userData.email,
          projects: userData.projects,
          knowledgeAreas: userData.knowledgeAreas,
          leader: userData.leader,
          responsibility: userData.responsibility,
        };
  
        transformedUsers.push(user);
      });
  
      return transformedUsers;
    }

    static transformQuestionsData(): Question[] {
      const transformedQuestions: Question[] = [];
  
      questionsData.forEach((questionData: any) => {
        const options: Options[] = [];
  
        questionData.options.forEach((optionData: any) => {
          const categoryKey: keyof typeof QuestionCategoryEnum =
            optionData.category as keyof typeof QuestionCategoryEnum;
  
          const category: QuestionCategoryEnum =
            QuestionCategoryEnum[categoryKey];
  
          const option: Options = {
            id: optionData.id,
            description: optionData.description,
            category,
            alternatives: optionData.alternatives,
          };
  
          options.push(option);
        });
  
        const question: Question = {
          id: questionData.id,
          description: questionData.description,
          options,
        };
  
        transformedQuestions.push(question);
      });
  
      return transformedQuestions;
    }
}