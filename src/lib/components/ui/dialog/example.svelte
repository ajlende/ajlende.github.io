<script lang="ts">
	import * as Dialog from './index.js';
</script>

<Dialog.Root>
	<Dialog.Trigger class="rounded-md border px-3 py-2 text-sm">Open dialog</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Edit profile</Dialog.Title>
			<Dialog.Description>Update the public display name.</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
