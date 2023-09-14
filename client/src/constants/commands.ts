import { THEMES_LIST } from './themes';

export enum COMMANDS {
	HELP = 'help',
	HELP_THEME = 'help theme',
	HELP_CHAT = 'help chat',
	HELP_SOUND = 'help sound',
	HELP_CLEAR = 'help clear',
	HELP_EXIT = 'help exit',
	CHAT = 'chat',
	INFO = 'info',
	THEME = 'theme',
	THEME_TERMINAL = 'theme terminal',
	THEME_LOVE = 'theme love',
	THEME_MAGIC = 'theme magic',
	THEME_OPTIMISM = 'theme optimism',
	THEME_OCEAN = 'theme ocean',
	SOUND = 'sound',
	CLEAR = 'clear',
	EXIT = 'exit',
}

export const COMMANDS_LIST: string[] = Object.values(COMMANDS);

export const COMMANDS_RESPONSE = {
	[COMMANDS.HELP]: [
		'Available commands: ',
		'help: Show available commands or info about specific command',
		'chat: Start chat with assistant',
		'info: Show info about your browser and OS',
		'theme: Show current theme or change theme',
		'sound: Toggle sound',
		'clear: Clear terminal content and history',
		'exit: Turn off the terminal',
	],
	[COMMANDS.HELP_THEME]: [
		'Commands for changing theme: ',
		'theme: Show name of the current theme',
		'theme <theme_name>: Change theme',
		'',
		'Available themes:',
		...THEMES_LIST.map(theme => 'theme ' + theme),
	],
	[COMMANDS.HELP_CHAT]: [
		'Commands for chat:',
		'chat: Start chat with assistant',
		'chat <message>: Start chat and send message to assistant',
	],
	[COMMANDS.HELP_SOUND]: `${COMMANDS.SOUND}: Toggle sound`,
	[COMMANDS.HELP_CLEAR]: `${COMMANDS.CLEAR}: Clear terminal content`,
	[COMMANDS.INFO]: [
		'Name: ' + navigator.appName,
		'OS: ' + navigator.platform,
		'Browser: ' + navigator.userAgent,
		'Language: ' + navigator.language,
		'Online: ' + navigator.onLine,
	],
} as { [key: string]: string | string[] };

export class CommandsHelper {
	public command: string;
	public args: string[];

	constructor(command: string) {
		this.command = this.getCommand(command);
		this.args = this.getArgs(command);
	}

	private getCommand(command: string): string {
		return command
			.split(' ')
			.filter(arg => arg)[0]
			.toLowerCase();
	}

	private getArgs(command: string): string[] {
		return command
			.split(' ')
			.filter(arg => arg)
			.slice(1);
	}
}
