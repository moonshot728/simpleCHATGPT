import Button from './Button';
import useTerminalStore from '../zustand/useTerminalStore';
import { BsMusicNoteBeamed } from 'react-icons/bs';

const SoundToggleButton = () => {
	const { power, sound, toggleSound } = useTerminalStore();

	const handleToggleSound = () => {
		if (!power) {
			return;
		}
		toggleSound();
	};

	return (
		<Button
			active={power && sound}
			busyIgnore
			value={<BsMusicNoteBeamed className="text-lg" />}
			onClick={handleToggleSound}
		/>
	);
};

export default SoundToggleButton;
