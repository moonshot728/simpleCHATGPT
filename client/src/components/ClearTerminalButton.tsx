import useTerminalStore from '../zustand/useTerminalStore';
import Button from './Button';
import { BsFillTrashFill } from 'react-icons/bs';

const ClearTerminalButton = () => {
	const { clearTerminalContent } = useTerminalStore();
	return <Button active={false} value={<BsFillTrashFill className="text-lg" />} onClick={clearTerminalContent} />;
};

export default ClearTerminalButton;
