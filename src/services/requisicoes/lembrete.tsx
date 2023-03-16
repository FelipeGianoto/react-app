import { Lembrete } from "../../interfaces";
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


