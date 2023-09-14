import { ChatMessage } from '../types/store';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_CHATGPT_API;

export const API = {
	get: (url: string) => axios.get(url),
	post: (data: unknown) => axios.post(BASE_URL, data),
	put: (url: string, data: unknown) => axios.put(url, data),
	delete: (url: string) => axios.delete(url),
};

export const sendMessages = async (messages: ChatMessage[]) => {
	const { data } = await API.post({ messages });
	return data;
};
