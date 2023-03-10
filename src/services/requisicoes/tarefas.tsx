import api from '../api'
import { Tarefa, StatusTarefa } from '../../interfaces';

export async function getTarefas() {
    try {
      const response = await api.get('/tarefas');
      return response.data
    } catch (error) {

      return []
    }
}
export async function getTarefasByStaus(status : StatusTarefa) {
  try {
    const response = await api.get('/tarefas', { params: { status } });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function salvaTarefa(tarefa: Tarefa): Promise<Tarefa> {
  try {
    await api.post('/tarefas', tarefa);
    return tarefa;
  } catch (error) {
    console.error(error);
    return [] as never;
  }
}

export async function atualizaTarefa(tarefa: Tarefa): Promise<Tarefa> {
  try {
    await api.put(`/tarefas/${tarefa.id}`, tarefa);
    return tarefa;
  } catch (error) {
    console.error(error);
    return [] as never;
  }
}

