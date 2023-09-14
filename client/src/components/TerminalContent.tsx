import useTerminalStore from '../zustand/useTerminalStore';
import { useRef } from 'react';
import TypingText from './TypingText';

const TerminalContent = () => {
	const { terminalContent } = useTerminalStore();
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div
			className=" pt-[50dvh] pl-20 pr-40 pb-40 h-full overflow-y-scroll after:absolute after:w-full after:h-full after:top-0 after:left-0 "
			ref={contentRef}
		>
			{terminalContent.map((content, index) => (
				<TypingText text={content} key={content + '_' + index} parentRef={contentRef} />
			))}
		</div>
	);
};

export default TerminalContent;
