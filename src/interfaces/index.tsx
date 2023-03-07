export interface Anotacao {
    titulo: string;
    descricao: string;
    data: string;
    usersId: number;
  };

  export interface Tarefa {
    titulo: string;
    descricao: string;
    data: string;
    usersId: number;
    status: StatusTarefa;
  };
  export enum StatusTarefa {
    PENDENTE = 'pendente',
    CONCLUIDO = 'concluido',
    EM_ANDAMENTO = 'em andamento'
  }