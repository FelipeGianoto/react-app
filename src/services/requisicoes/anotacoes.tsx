import api from '../api'
import { Anotacao } from '../../interfaces';

export async function getTopicos() {
    try {
      const response = await api.get('/anotacoes');
      return response.data
    } catch (error) {

      return []
    }
}

export async function postTopicos(anotacao: Anotacao): Promise<Anotacao> {
  try {
    await api.post('/anotacoes', anotacao);
    return anotacao;
  } catch (error) {
    console.error(error);
    return [] as never;
  }
}

