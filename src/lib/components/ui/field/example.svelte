<script lang="ts">
	import * as Field from './index.js';
	import { Input } from '$lib/components/ui/input/index.js';
</script>

<Field.Root>
	<Field.Label>Email</Field.Label>
	<Input value="alex@example.com" readonly />
	<Field.Description>Used for account updates.</Field.Description>
</Field.Root>
