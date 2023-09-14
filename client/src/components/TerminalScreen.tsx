import React, { FC } from 'react';
import useTerminalScreenStore from '../zustand/useTerminalStore';
import { TerminalInput } from './TerminalInput';
import TerminalContent from './TerminalContent';
import Loader from './Loader';
import ChatGTPIcon from './icons/ChatGTPIcon';
import SandglassIcon from './icons/SandglassIcon';

const TerminalScreen: FC = (): React.JSX.Element => {
	const { power, busy, inChat } = useTerminalScreenStore();

	return (
		<div
			className={`z-0 relative terminal-screen max-w-[1200px] max-h-[calc(100%_-_5px)] w-full h-full border-4 border-[#121212] shadow-[inset_0_0_3px_3px_#000000_,_0_0_3px_2px_#000000] rounded-[50px] transition-colors overflow-hidden text-terminal-main-primary bg-black ${
				power &&
				'bg-gradient-radial from-terminal-main-dark to-black animate-text-stereo before:absolute before:w-full before:h-full before:bg-lines before:bg-line after:animate-line-moving after:w-full after:absolute after:h-[45%] after:bg-terminal-main-light after:opacity-[0.03] before:pointer-events-none after:pointer-events-none'
			}`}
		>
			{power && (
				<>
					<TerminalContent />
					{!busy && <TerminalInput />}

					<Loader
						show={inChat ? true : busy}
						icon={inChat ? <ChatGTPIcon size={50} /> : <SandglassIcon />}
						spin={inChat && busy}
						text={inChat ? 'ChatGPT' : 'Loading...'}
					/>
				</>
			)}
		</div>
	);
};

export default TerminalScreen;
