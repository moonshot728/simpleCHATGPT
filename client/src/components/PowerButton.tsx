import useTerminalStore from '../zustand/useTerminalStore';
import { useEffect } from 'react';
import Button from './Button';
import { FaPowerOff } from 'react-icons/fa';

const PowerButton = () => {
	const { power, powerOn, powerOff, addContentToTerminal, clearTerminalContent, setBusy } = useTerminalStore();
	const handleTogglePower = () => (power ? powerOff() : powerOn());

	useEffect(() => {
		if (!power) {
			return;
		}

		setBusy(true);
		setTimeout(() => {
			setBusy(false);
		}, 3500);

		addContentToTerminal(['', 'Ready.', '\n'], 1300);

		addContentToTerminal('████████╗███████╗██████╗░███╗░░░███╗██╗███╗░░██╗░█████╗░██╗░░░░░', 1800);
		addContentToTerminal('╚══██╔══╝██╔════╝██╔══██╗████╗░████║██║████╗░██║██╔══██╗██║░░░░░', 1800);
		addContentToTerminal('░░░██║░░░█████╗░░██████╔╝██╔████╔██║██║██╔██╗██║███████║██║░░░░░', 1800);
		addContentToTerminal('░░░██║░░░██╔══╝░░██╔══██╗██║╚██╔╝██║██║██║╚████║██╔══██║██║░░░░░', 1800);
		addContentToTerminal('░░░██║░░░███████╗██║░░██║██║░╚═╝░██║██║██║░╚███║██║░░██║███████╗', 1800);
		addContentToTerminal('░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚══════╝', 1800);

		addContentToTerminal(
			[
				'\u00A0',
				'Author: HEOSHII (George Shyriaiev)',
				'Version: 2.0',
				'\u00A0',
				'\u00A0',
				'Type "help" to get started.',
			],
			2400,
		);
	}, [power, clearTerminalContent, addContentToTerminal, setBusy]);

	return <Button active={power} powerIgnore value={<FaPowerOff />} onClick={handleTogglePower} />;
};

export default PowerButton;
