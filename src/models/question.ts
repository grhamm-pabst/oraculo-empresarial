import QuestionCategoryEnum from "./enum/questionCategory";
export interface Question{
    id : string;
    description: string;
    options : Options[]

}

export interface Options{
    id:string;
    descriprion:string;
    category: QuestionCategoryEnum;
    alternatives : string[];

}