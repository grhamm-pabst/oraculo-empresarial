import fs from 'fs';

export class QuestionService{

    static getQuestions() : Question[] {
        var questions : Question[]
        const jsonData = fs.readFileSync('../data/questions.json', 'utf-8');
        questions = JSON.parse(jsonData);
        console.log(questions)
        return questions
    }

    static getAnwser(category : QuestionCategoryEnum, selectedOption: string) : User[]{
        var users : User[]
        const jsonData = fs.readFileSync('../data/users.json', 'utf-8');
        users = JSON.parse(jsonData);
        var result : User[] = [];

        switch (category) {
            case QuestionCategoryEnum.PROJECT:
              result = users.filter(u => u.projects.includes(selectedOption))
              break;
            case QuestionCategoryEnum.KNOWLEDGE_AREA:
                result = users.filter(u => u.knowledgeAreas.includes(selectedOption))
              break;
            case QuestionCategoryEnum.DEPARTMENT:
                result = users.filter(u => u.department == selectedOption)
              break;
            case QuestionCategoryEnum.DEPARTMENT_LEADER:
                result = users.filter(u => u.department == selectedOption && u.leader)
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