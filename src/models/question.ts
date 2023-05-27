
interface Question{
    id : string;
    description: string;
    options : Options[]

}

interface Options{
    id:string;
    descriprion:string;
    category: QuestionCategoryEnum;
    alternatives : string[];

}


