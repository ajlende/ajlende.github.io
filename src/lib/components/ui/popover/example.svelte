<script lang="ts">
	import * as Popover from './index.js';
</script>

<Popover.Root>
	<Popover.Trigger class="rounded-md border px-3 py-2 text-sm">Open popover</Popover.Trigger>
	<Popover.Content>
		<Popover.Header>
			<Popover.Title>Workspace</Popover.Title>
			<Popover.Description>Choose where new files are created.</Popover.Description>
		</Popover.Header>
	</Popover.Content>
</Popover.Root>
