
class Question{
    id : string;
    description: string;
    options : Options[]

    constructor(id:string, description:string, options: Options[]){
        this.id = id
        this.description = description,
        this.options = options
    }
}

class Options{
    id:string;
    descriprion:string;
    category: string;
    alternatives : string[];

    constructor(id:string, description:string, category:string,alternatives : string[]){
        this.id = id
        this.descriprion = description
        this.category = category
        this.alternatives = alternatives
    }
}


