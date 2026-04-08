<script lang="ts">
	import * as InputOTP from './index.js';
</script>

<InputOTP.Root value="123456" maxlength={6}>
	{#snippet children({ cells })}
		<InputOTP.Group>
			{#each cells as cell (cell)}
				<InputOTP.Slot {cell} />
			{/each}
		</InputOTP.Group>
	{/snippet}
</InputOTP.Root>
