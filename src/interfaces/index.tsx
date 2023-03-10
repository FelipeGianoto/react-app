export interface Anotacao {
    titulo: string;
    descricao: string;
    data: string;
    usersId: number;
  };

  export interface Tarefa {
    id?:string;
    titulo: string;
    descricao: string;
    data: string;
    usersId: number;
    status: StatusTarefa;
  };
  export enum StatusTarefa {
    PENDENTE = 'pendente',
    EM_ANDAMENTO = 'em andamento',
    CONCLUIDO = 'concluido',
   
  }