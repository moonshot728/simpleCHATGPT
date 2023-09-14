import Button from './Button';
import ChatGTPIcon from './icons/ChatGTPIcon';
import useTerminalStore from '../zustand/useTerminalStore';

const ChatToggleButton = () => {
	const { power, inChat, setInChat } = useTerminalStore();
	const handleChatToggle = () => {
		if (!power) return;
		setInChat(!inChat);
	};

	return <Button onClick={handleChatToggle} active={inChat} value={<ChatGTPIcon colorInherit />} />;
};

export default ChatToggleButton;
