import { writable } from 'svelte/store';

const isDarkMode = false;

const { subscribe, set, update } = writable(isDarkMode);

const change = (next: boolean) =>
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	update((_): boolean => next);

const reset = () => {
	set(isDarkMode);
};

export default {
	subscribe,
	reset,
	change
};