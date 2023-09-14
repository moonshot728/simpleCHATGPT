const volume = 0.2;

const keyboardSounds = [
	new Audio('/sounds/keyboard/keys_1.mp3'),
	new Audio('/sounds/keyboard/keys_2.mp3'),
	new Audio('/sounds/keyboard/keys_3.mp3'),
	new Audio('/sounds/keyboard/keys_4.mp3'),
	new Audio('/sounds/keyboard/keys_5.mp3'),
	new Audio('/sounds/keyboard/keys_6.mp3'),
	new Audio('/sounds/keyboard/keys_7.mp3'),
	new Audio('/sounds/keyboard/keys_8.mp3'),
	new Audio('/sounds/keyboard/keys_9.mp3'),
	new Audio('/sounds/keyboard/keys_10.mp3'),
	new Audio('/sounds/keyboard/keys_11.mp3'),
	new Audio('/sounds/keyboard/keys_12.mp3'),
];

const button = {
	down: [
		new Audio('/sounds/comp/button_down_1.mp3'),
		new Audio('/sounds/comp/button_down_2.mp3'),
		new Audio('/sounds/comp/button_down_3.mp3'),
		new Audio('/sounds/comp/button_down_4.mp3'),
		new Audio('/sounds/comp/button_down_5.mp3'),
		new Audio('/sounds/comp/button_down_6.mp3'),
	],
	up: [
		new Audio('/sounds/comp/button_up_1.mp3'),
		new Audio('/sounds/comp/button_up_2.mp3'),
		new Audio('/sounds/comp/button_up_3.mp3'),
		new Audio('/sounds/comp/button_up_4.mp3'),
		new Audio('/sounds/comp/button_up_5.mp3'),
		new Audio('/sounds/comp/button_up_6.mp3'),
	],
};

const atmosSound = new Audio('/sounds/comp/atmos.mp3');

Object.entries(button).forEach(([, sounds]) => {
	sounds.forEach(sound => (sound.volume = volume));
});

keyboardSounds.forEach(sound => (sound.volume = volume));
atmosSound.volume = volume;

const playSound = (sound: HTMLAudioElement, loop = false) => {
	sound.loop = loop;
	sound.play();
};

const playRandomSound = (sounds: HTMLAudioElement[]) => {
	playSound(sounds[Math.floor(Math.random() * sounds.length)]);
};

export const setMuteAll = (mute: boolean) => {
	keyboardSounds.forEach(sound => (sound.muted = mute));
	atmosSound.muted = mute;
};

export const playButtonDownSound = () => {
	playRandomSound(button.down);
};

export const playButtonUpSound = () => {
	playRandomSound(button.up);
};

export const playKeyboardSound = () => {
	playRandomSound(keyboardSounds);
};

export const playAtmosSound = () => {
	playSound(atmosSound, true);
};
