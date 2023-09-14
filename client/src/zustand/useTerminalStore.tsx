import { create } from 'zustand';
import { TerminalStoreType } from '../types/store';
import { THEMES } from '../constants';

const initialChatHistory = [
	{
		role: 'system',
		content: `Speak like in the game fallout. Speak only on this language: ${navigator.language}. Сome up with your own character. Write your name at the beginning of each message by template: - [name]: message.`,
	},
];

const useTerminalStore = create<TerminalStoreType>(set => ({
	power: false,
	sound: true,
	busy: false,
	inChat: false,
	terminalContent: [],
	terminalInput: '',
	commandsHistory: [],
	chatHistory: initialChatHistory,
	theme: THEMES.TERMINAL,

	powerOn: () => set({ power: true, terminalContent: ['Terminal booting, please stand by...'] }),
	powerOff: () =>
		set({
			power: false,
			terminalContent: [],
			busy: false,
			inChat: false,
			terminalInput: '',
			commandsHistory: [],
			chatHistory: initialChatHistory,
		}),
	toggleSound: () =>
		set(state => ({
			sound: !state.sound,
			terminalContent: state.busy
				? state.terminalContent
				: [...state.terminalContent, 'Sound: ' + (!state.sound ? 'on' : 'off')],
		})),
	setTheme: (theme: string) =>
		set(state => ({
			theme,
			terminalContent: state.busy ? state.terminalContent : [...state.terminalContent, 'Theme set to: ' + theme],
		})),
	setBusy: busy => set({ busy }),
	setInChat: inChat =>
		set(state => ({
			inChat,
			...(inChat && {
				terminalContent: [...state.terminalContent, '\u00A0', 'Searching for somebody...'],
				chatHistory: [
					...state.chatHistory,
					{
						role: 'user',
						content: 'Hello!',
					},
				],
			}),
			...(!inChat && {
				chatHistory: initialChatHistory,
				terminalContent: [...state.terminalContent, 'Chat closed.'],
			}),
		})),
	setTerminalInput: input => set({ terminalInput: input }),
	addContentToTerminal: async (content, delay = 0) => {
		const isString = typeof content === 'string';
		const renderContent = isString ? content : content.join('\n');
		setTimeout(() => {
			set(state => ({
				terminalContent: [...state.terminalContent, renderContent],
			}));
		}, delay);
	},
	addUserMessageToChatHistory: content =>
		set(state => ({ chatHistory: [...state.chatHistory, { role: 'user', content }] })),
	addAssistantMessageToChatHistory: content =>
		set(state => ({ chatHistory: [...state.chatHistory, { role: 'assistant', content }] })),
	clearTerminalContent: () => set({ terminalContent: [], busy: false }),
	addCommandToHistory: command => set(state => ({ commandsHistory: [...state.commandsHistory, command] })),
}));

export default useTerminalStore;
