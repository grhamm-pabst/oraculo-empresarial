import QuestionCategoryEnum from "./enum/questionCategory";
export interface Question{
    id : string;
    description: string;
    options : Options[]

}

export interface Options{
    id:string;
    description:string;
    category: QuestionCategoryEnum;
    alternatives : string[];

}
