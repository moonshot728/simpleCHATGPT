import { useEffect, useState } from 'react';
import { IGNORE_KEYS, COMMANDS_LIST } from '../constants';
import useTerminalStore from '../zustand/useTerminalStore';
import useRunCommand from './useRunCommand';

const useKeyListener = () => {
	const { terminalInput, inChat, setTerminalInput, addCommandToHistory, commandsHistory, busy } = useTerminalStore();

	const [cursorIndex, setCursorIndex] = useState(0);
	const [historyIndex, setHistoryIndex] = useState(0);
	const [probablyCommand, setProbablyCommand] = useState<string>('');
	const runCommand = useRunCommand();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const keyListener = (e: any) => {
		e.preventDefault();
		if (busy || IGNORE_KEYS.includes(e.key)) return;
		switch (e.key) {
			case 'Backspace':
				if (cursorIndex <= 0) return;
				setTerminalInput(terminalInput.slice(0, cursorIndex - 1) + terminalInput.slice(cursorIndex));
				setCursorIndex(cursorIndex - 1);
				break;
			case 'Delete':
				if (cursorIndex === terminalInput.length) return;
				setTerminalInput(terminalInput.slice(0, cursorIndex + 1) + terminalInput.slice(cursorIndex + 2));
				break;
			case 'Enter':
				if (!terminalInput) return;
				setTerminalInput('');
				setCursorIndex(0);
				addCommandToHistory(terminalInput.trimEnd().trimStart());
				runCommand();
				break;
			case 'ArrowLeft':
				if (cursorIndex === 0) return;
				setCursorIndex(cursorIndex - 1);
				break;
			case 'ArrowRight':
				if (cursorIndex === terminalInput.length) return;
				setCursorIndex(cursorIndex + 1);
				break;
			case 'ArrowUp':
				if (commandsHistory.length === 0 || historyIndex === 0) return;
				setCursorIndex(commandsHistory[historyIndex - 1].length);
				setHistoryIndex(prevHistory => prevHistory - 1);
				setTerminalInput(commandsHistory[historyIndex - 1]);
				break;
			case 'ArrowDown':
				if (commandsHistory.length === 0 || historyIndex === commandsHistory.length - 1) return;
				setCursorIndex(commandsHistory[historyIndex + 1].length);
				setHistoryIndex(historyIndex + 1);
				setTerminalInput(commandsHistory[historyIndex + 1]);
				break;
			case 'Tab': {
				// const probablyCommand = COMMANDS_LIST.find(command => command.startsWith(terminalInput));
				if (!probablyCommand) return;
				setTerminalInput(probablyCommand);
				setCursorIndex(probablyCommand.length);
				break;
			}
			case ' ':
				if (
					terminalInput[cursorIndex] === ' ' ||
					terminalInput[cursorIndex - 1] === ' ' ||
					(terminalInput[cursorIndex + 1] === ' ' && terminalInput[cursorIndex - 1] === ' ')
				)
					return;
				setTerminalInput(terminalInput.slice(0, cursorIndex) + ' ' + terminalInput.slice(cursorIndex));
				setCursorIndex(cursorIndex + 1);
				break;

			default:
				setTerminalInput(terminalInput.slice(0, cursorIndex) + e.key + terminalInput.slice(cursorIndex));
				setCursorIndex(cursorIndex + 1);
				break;
		}
	};

	useEffect(() => {
		setHistoryIndex(commandsHistory.length);
	}, [commandsHistory]);

	useEffect(() => {
		if (!terminalInput || inChat) {
			setProbablyCommand('');
			return;
		}
		setProbablyCommand(COMMANDS_LIST.find(command => command.startsWith(terminalInput)) || '');
	}, [terminalInput, inChat]);

	return { keyListener, cursorIndex, probablyCommand };
};

export default useKeyListener;
