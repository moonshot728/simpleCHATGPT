import useTerminalStore from '../zustand/useTerminalStore';
import { playButtonDownSound, playButtonUpSound } from '../constants';
import React, { FC } from 'react';

type ButtonProps = {
	active: boolean;
	value: string | React.ReactNode;
	onClick: () => void;
	busyIgnore?: boolean;
	powerIgnore?: boolean;
};

const Button: FC<ButtonProps> = ({ active, value, onClick, busyIgnore = false, powerIgnore = false }) => {
	const { busy, power } = useTerminalStore();
	const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		playButtonDownSound();
	};

	const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		playButtonUpSound();
		if (busy && !busyIgnore) return;
		if (!power && !powerIgnore) return;
		onClick();
	};

	return (
		<button
			className="flex items-center space-x-4 min-w-[100px]"
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<div
				className={`w-full relative rounded-full bg-[#6d6d6d] p-3 flex justify-center items-center font-sans text-xl shadow-button after:absolute after:z-[-1] after:bg-[#111213]  after:rounded-full after:top-[-1px] after:left-[-3px] after:w-[calc(100%_+_6px)] after:h-[calc(100%_+_6px)] after:block after:shadow-buttonAfter active:shadow-buttonActive active:top-[2px] active:after:top-[-3px] ${
					active && 'after:bg-[var(--terminal-main)] after:shadow-[0_0_20px_1px_var(--terminal-main)]'
				} `}
			>
				<p
					className={
						active
							? ' text-terminal-main-primary fill-terminal-main-primary drop-shadow-[0_0_2px_var(--terminal-main)]'
							: 'text-[rgb(17,18,19)] fill-black'
					}
				>
					{value}
				</p>
			</div>
		</button>
	);
};

export default Button;
