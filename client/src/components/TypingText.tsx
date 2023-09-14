import { playKeyboardSound } from '../constants/sounds';
import { FC, useEffect, useState } from 'react';

type TypingTextProps = {
	text: string;
	delay?: number;
	parentRef: React.RefObject<HTMLDivElement>;
};

const TypingText: FC<TypingTextProps> = ({ text, delay = 13, parentRef }) => {
	const [{ typingText }, setTypingObject] = useState<{
		typingText: string;
		typingIndex: number;
	}>({
		typingText: '',
		typingIndex: 0,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			if (typingText.length === text.length) {
				clearInterval(interval);
				return;
			}
			setTypingObject(({ typingText, typingIndex }) => ({
				typingText: typingText + text[typingIndex],
				typingIndex: typingIndex + 1,
			}));
		}, delay);
		return () => clearInterval(interval);
	}, [delay, text, typingText]);

	useEffect(() => {
		if (!parentRef.current) return;
		parentRef.current.scrollTop = parentRef.current.scrollHeight;
		playKeyboardSound();
	}, [parentRef, typingText]);

	return <pre className="text-2xl leading-[1] whitespace-break-spaces">{typingText}</pre>;
};

export default TypingText;
