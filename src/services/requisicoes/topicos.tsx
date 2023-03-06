import api from '../api'
import { Tarefa } from '../../interfaces';

export async function getTopicos() {
    try {
      const response = await api.get('/tarefas');
      return response.data
    } catch (error) {

      return []
    }
}

export async function postTopicos(tarefa: Tarefa): Promise<Tarefa> {
  try {
    await api.post('/tarefas', tarefa);
    return tarefa;
  } catch (error) {
    console.error(error);
    return [] as never;
  }
}

