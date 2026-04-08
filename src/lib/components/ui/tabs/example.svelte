<script lang="ts">
	import * as Tabs from './index.js';
</script>

<Tabs.Root value="overview" class="w-64">
	<Tabs.List>
		<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
		<Tabs.Trigger value="notes">Notes</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="overview" class="text-muted-foreground pt-2 text-sm">Ready</Tabs.Content>
</Tabs.Root>
