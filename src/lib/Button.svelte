<script lang="ts">
	import { onMount } from 'svelte';
	import type Icons from './utilities/icons';
	import Icon from './Icon.svelte';
	import darkMode from './store/ThemeMode';

	export let icons: {
		light?: Icons;
		dark?: Icons;
	} = {};
	export let height: string = '30px';
	export let width: string = '30px';
	export let accent: {
		light: { color: string; hover: string; onClick: string };
		dark?: { color: string; hover: string; onClick: string };
	} = {
		light: { color: '#00000015', hover: '#00000025', onClick: '#00000045' }
	};
	export let onClick: () => void;

	onMount(() => {
		darkMode.change(window.document.body.classList.contains('dark'));
		window.document.body.addEventListener('change', (_) => {
			darkMode.change(window.document.body.classList.contains('dark'));
		});
	});

	let bgColor = $darkMode
		? accent.dark !== undefined
			? accent.dark.color
			: '#FFFFFF22'
		: accent.light.color;
</script>

<div
	class="button"
	style="height: {height}; background-color: {bgColor}"
	on:click={onClick}
	on:mouseenter={() => {
		if ($darkMode) {
			bgColor = accent.dark !== undefined ? accent.dark.color : '#FFFFFF33';
		} else {
			bgColor = accent.light.color;
		}
	}}
	on:mouseleave={() => {
		if ($darkMode) {
			bgColor = accent.dark !== undefined ? accent.dark.color : '#FFFFFF22';
		} else {
			bgColor = accent.light.hover;
		}
	}}
	on:mousedown={() => {
		if ($darkMode) {
			bgColor = accent.dark !== undefined ? accent.dark.color : '#FFFFFF55';
		} else {
			bgColor = accent.light.onClick;
		}
	}}
>
	<div class="buttonIcon">
		{#if $darkMode && icons.dark !== undefined}
			<Icon {height} {width} name={icons.dark} />
		{:else}
			<Icon {height} {width} name={icons.light} />
		{/if}
	</div>
	<slot />
</div>

<style>
	.buttonIcon {
		padding-right: 5px;
	}

	.button {
		padding: 7px;
		border-radius: 15px;
		background-color: transparent;
		display: flex;
		flex-direction: row;
		transition: background-color 0.2s 0ms;
		user-select: none;
		align-items: center;
		width: fit-content;
		box-shadow: #00000011 0px 2px 3px 3px;
	}
</style>
