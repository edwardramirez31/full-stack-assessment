import axios from './axiosInstance';

import type { Question } from '@store/types/models';

interface StrapiQuestion {
  id: number;
  attributes: { title: string; text: string };
}

export class QuestionsAPI {
  static async getQuestions(): Promise<Question[]> {
    const response = await axios.get<{ data: StrapiQuestion[] }>('/questions');
    return response.data.data.map(({ id, attributes }) => ({
      id,
      title: attributes.title,
      text: attributes.text,
    }));
  }
}
