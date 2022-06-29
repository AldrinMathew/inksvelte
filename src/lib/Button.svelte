<script lang="ts">
	import type Icons from './utilities/icons';
	import Icon from './Icon.svelte';

	export let icons: {
		light?: Icons;
		dark?: Icons;
	} = {};
	export let height: string = '30px';
	export let width: string = '30px';
	export let border: {
		radius?: string;
		width?: string;
		color?: string;
		style?: string;
	} = {};
	export let themeMode: boolean;
	export let accent: {
		light: { color: string; hover: string; onClick: string };
		dark?: { color: string; hover: string; onClick: string };
	} = {
		light: { color: '#00000015', hover: '#00000025', onClick: '#00000045' }
	};
	export let onClick: () => void;

	let bgColor = themeMode
		? accent.dark !== undefined
			? accent.dark.color
			: '#FFFFFF22'
		: accent.light.color;
</script>

<div
	class="button"
	style="height: {height}; background-color: {bgColor}; border-radius: {border.radius ??
		'10px'}; border: {border.color ?? '#000000FF'} {border.style ?? 'solid'} {border.width ??
		'0px'};"
	on:click={onClick}
	on:mouseenter={() => {
		if (themeMode) {
			bgColor = accent.dark ? accent.dark.color : '#FFFFFF33';
		} else {
			bgColor = accent.light.color;
		}
	}}
	on:mouseleave={() => {
		if (themeMode) {
			bgColor = accent.dark ? accent.dark.color : '#FFFFFF22';
		} else {
			bgColor = accent.light.hover;
		}
	}}
	on:mousedown={() => {
		if (themeMode) {
			bgColor = accent.dark ? accent.dark.color : '#FFFFFF55';
		} else {
			bgColor = accent.light.onClick;
		}
	}}
>
	{#if icons.light || icons.dark}
		<div class="buttonIcon">
			{#if themeMode && icons.dark}
				<Icon {height} {width} name={icons.dark} />
			{:else}
				<Icon {height} {width} name={icons.light} />
			{/if}
		</div>
	{/if}
	<slot />
</div>

<style>
	.buttonIcon {
		padding-right: 5px;
	}

	.button {
		padding: 7px;
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
