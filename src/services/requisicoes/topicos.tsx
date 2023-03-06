import api from '../api'

export async function getTopicos() {
    try {
      const response = await api.get('/tarefas');
      return response.data
    } catch (error) {

      return []
    }
}

