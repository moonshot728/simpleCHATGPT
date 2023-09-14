import { useCallback, useEffect } from 'react';
import { THEMES_LIST } from '../constants';
import useTerminalStore from '../zustand/useTerminalStore';
import { sendMessages } from '../services/API.services';
import { CommandsHelper } from '../constants/commands';

import { COMMANDS, COMMANDS_LIST, COMMANDS_RESPONSE } from '../constants/commands';

const useRunCommand = () => {
	const {
		terminalInput,
		addContentToTerminal,
		clearTerminalContent,
		powerOff,
		toggleSound,
		theme,
		setTheme,
		inChat,
		setInChat,
		setBusy,
		chatHistory: messages,
		addUserMessageToChatHistory,
		addAssistantMessageToChatHistory,
	} = useTerminalStore();

	const commandNotFound = () => {
		addContentToTerminal([`Command not found: ${terminalInput}`, 'Type "help" to get started.']);
	};

	const runCommand = () => {
		if (inChat) {
			addContentToTerminal('- You: ' + terminalInput);
			addUserMessageToChatHistory(terminalInput);
			return;
		}

		addContentToTerminal('\n');

		if (!COMMANDS_LIST.includes(terminalInput.trimStart().trimEnd().toLocaleLowerCase())) {
			commandNotFound();
			return;
		}
		const { command, args } = new CommandsHelper(terminalInput);

		switch (command) {
			case COMMANDS.HELP:
			case COMMANDS.INFO:
				addContentToTerminal(COMMANDS_RESPONSE[terminalInput]);
				break;
			case COMMANDS.CHAT:
				setInChat(true);
				if (args.length) {
					addContentToTerminal('- You: ' + args.join(' '));
					addUserMessageToChatHistory(args.join(' '));
				}
				break;
			case COMMANDS.CLEAR:
				clearTerminalContent();
				break;
			case COMMANDS.EXIT:
				addContentToTerminal('Terminal is shutting down...');
				setTimeout(() => {
					powerOff();
				}, 2000);
				break;
			case COMMANDS.THEME: {
				if (args.length === 0) {
					addContentToTerminal('Theme: ' + theme);
					break;
				}
				const themeName = args[0];
				if (THEMES_LIST.includes(themeName)) {
					if (theme === themeName) {
						addContentToTerminal('Theme already set to: ' + themeName);
						break;
					}
					setTheme(themeName);
				} else {
					addContentToTerminal(['Theme not found. Available themes:	', ...THEMES_LIST.map(theme => '• ' + theme)]);
				}
				break;
			}
			case COMMANDS.SOUND:
				toggleSound();
				break;
		}
	};

	const chatGPT = useCallback(async () => {
		setBusy(true);
		try {
			const { content } = await sendMessages(messages);
			addContentToTerminal(content);
			addAssistantMessageToChatHistory(content);
			const lastMessage = messages[messages.length - 1]?.content.toLocaleLowerCase();

			if (['bye', 'exit', 'goodbye', 'good bye'].includes(lastMessage)) {
				setInChat(false);
			}
		} catch (error) {
			addContentToTerminal(['Oops. Something went wrong =(', 'Reason: ' + error]);
			setInChat(false);
		} finally {
			setBusy(false);
		}
	}, [addAssistantMessageToChatHistory, addContentToTerminal, messages, setBusy, setInChat]);

	useEffect(() => {
		if (inChat && messages[messages.length - 1]?.role === 'user') {
			chatGPT();
		}
	}, [chatGPT, inChat, messages]);

	return runCommand;
};

export default useRunCommand;
