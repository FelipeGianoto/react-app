import { Lembrete, StatusTarefa } from "../../interfaces";
import api from "../api";


export async function salvarLembrete(lembrete: Lembrete): Promise<Lembrete> {
    try {
      await api.post('/lembrete', lembrete);
      return lembrete;
    } catch (error) {
      console.error(error);
      return [] as never;
    }
}


export async function getLembreteByStaus(status : StatusTarefa) {
  try {
    const response = await api.get('/lembrete', { params: { status } });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


