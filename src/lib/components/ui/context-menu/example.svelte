<script lang="ts">
	import * as ContextMenu from './index.js';
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger class="rounded-md border px-3 py-2 text-sm">Right click</ContextMenu.Trigger>
	<ContextMenu.Content>
		<ContextMenu.Item>Copy</ContextMenu.Item>
		<ContextMenu.Item>Paste</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
