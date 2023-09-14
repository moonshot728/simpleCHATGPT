import { THEMES_LIST } from '../constants';
import Button from './Button';
import useTerminalStore from '../zustand/useTerminalStore';
import { IoMdColorPalette } from 'react-icons/io';

const ThemeChangerButton = () => {
	const { power, theme, setTheme } = useTerminalStore();
	const handleChangeTheme = () => {
		if (!power) {
			return;
		}
		const currentThemeIndex = Object.values(THEMES_LIST).indexOf(theme);
		const nextThemeIndex = currentThemeIndex + 1 === Object.values(THEMES_LIST).length ? 0 : currentThemeIndex + 1;
		setTheme(THEMES_LIST[nextThemeIndex]);
	};

	return (
		<Button active={power} busyIgnore value={<IoMdColorPalette className="text-lg" />} onClick={handleChangeTheme} />
	);
};

export default ThemeChangerButton;
