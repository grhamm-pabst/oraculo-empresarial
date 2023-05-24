class User {
    name: string;
    role: string;
    department: string;
    email: string;
    projects: string[];
    knowledgeAreas: string[];
  
    constructor(name: string, role: string, department: string, email:string,projects: string[], knowledgeAreas: string[]) {
      this.name = name;
      this.role = role;
      this.department = department;
      this.email = email;
      this.projects = projects;
      this.knowledgeAreas = knowledgeAreas
    }

  }