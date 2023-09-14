export type ChatMessage = {
	role: string;
	content: string;
};

export type TerminalStoreType = {
	power: boolean;
	sound: boolean;
	busy: boolean;
	inChat: boolean;
	terminalInput: string;
	commandsHistory: string[];
	terminalContent: string[];
	chatHistory: ChatMessage[];
	theme: string;

	powerOn: () => void;
	powerOff: () => void;
	toggleSound: () => void;
	setTheme: (theme: string) => void;

	setBusy: (busy: boolean) => void;
	setInChat: (inChat: boolean) => void;
	setTerminalInput: (input: string) => void;
	addCommandToHistory: (command: string) => void;
	addContentToTerminal: (content: string | string[], delay?: number) => void;
	clearTerminalContent: () => void;
	addUserMessageToChatHistory: (message: string) => void;
	addAssistantMessageToChatHistory: (message: string) => void;
};

export type ThemeStoreType = {
	theme: string;
	setTheme: (theme: string) => void;
};
