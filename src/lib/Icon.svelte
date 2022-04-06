<script lang="ts">
	import Icons from './utilities/icons';
	import iconValues from './utilities/icon_values';

	export let name: Icons;
	export let svg: { x: number; y: number; path: string } | undefined = undefined;
	export let width: string = '30px';
	export let height: string = '30px';
	export let focusable = 'false';
	let icon = iconValues.find((e) => e.name === name);
</script>

{#if name === Icons.custom && svg !== undefined}
	<svg class={$$props.class} {focusable} {width} {height} viewBox="0 0 {svg.x} {svg.y}">
		{@html svg.path}
	</svg>
{:else}
	<svg class={$$props.class} {focusable} {width} {height} viewBox="0 0 {icon.x} {icon.y}">
		{@html icon.path}
	</svg>
{/if}
