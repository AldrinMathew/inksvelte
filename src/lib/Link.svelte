<script lang="ts">
	export let text: String;
	export let url: String;
	export let openNewTab: Boolean = false;
</script>

<a class="link" href={url.toString()} target={openNewTab ? '_blank' : ''} rel="noreferrer noopener">
	{text}
</a>

<style>
	a {
		padding-left: 3px;
		padding-right: 3px;
		padding-top: 1px;
		background-color: #b3daff75;
		border-radius: 5px;
		font-weight: bold;
		text-decoration: none;
		color: var(--style);
		transition: background-color 0.3s ease-in-out 100ms, color 0.2s ease-in-out,
			border 0.3s ease-in-out;
		border-bottom: 0.2rem dotted #154a7c94;
		font-family: 'Courier New', Courier, monospace;
	}

	a:hover {
		cursor: pointer;
		background-color: #71bbff94;
	}

	:global(body.dark) a {
		background-color: #d4eeff4d;
		border-bottom: 0.2rem dotted #ffffff88;
		color: var(--style-dark);
	}

	:global(body.dark) a:hover {
		background-color: rgba(212, 238, 255, 0.5);
	}
</style>
