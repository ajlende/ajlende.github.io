<script lang="ts">
	import * as RadioGroup from './index.js';
</script>

<RadioGroup.Root value="email" aria-label="Notification method">
	<label class="flex items-center gap-2 text-sm">
		<RadioGroup.Item value="email" />
		Email
	</label>
	<label class="flex items-center gap-2 text-sm">
		<RadioGroup.Item value="sms" />
		SMS
	</label>
</RadioGroup.Root>
