<script lang="ts">
	import * as Command from './index.js';
</script>

<Command.Root>
	<Command.Input placeholder="Search..." />
	<Command.List>
		<Command.Empty>No tickers found.</Command.Empty>
		<Command.Group>
			{#each ['VOO', 'VIG', 'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA'] as t (t)}
				<Command.Item value={t}>{t}</Command.Item>
			{/each}
		</Command.Group>
	</Command.List>
</Command.Root>
