import { v4 as uuidV4 } from "uuid";

// Definição da Classe de Usuário
class User {
  id?: string;
  name: string;
  admin?: boolean;
  email: string;
  created_at?: Date;
  updated_at?: Date;

  // Construtor da classe
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
      this.created_at = new Date();
      this.updated_at = new Date();
    }
    // console.log(this.id);
  }
}

export { User };
