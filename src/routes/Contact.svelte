<script lang="ts">
	import SendPlane from 'remixicon-svelte/icons/send-plane-fill';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const formAction = 'https://forms.un-static.com/forms/9f08c765086e2a71f5c3bb696226ff2546c6382f';
</script>

<form
	action={formAction}
	method="post"
	class="grid gap-5 rounded-lg border border-sky-200 bg-white p-5 shadow-sm sm:p-6 dark:border-sky-700 dark:bg-sky-950"
>
	<div class="grid gap-2">
		<Label for="contact-name">Name</Label>
		<Input id="contact-name" name="name" autocomplete="name" required />
	</div>

	<div class="grid gap-2">
		<Label for="contact-email">Email</Label>
		<Input id="contact-email" name="email" type="email" autocomplete="email" required />
	</div>

	<div class="grid gap-2">
		<Label for="contact-company">Company</Label>
		<Input id="contact-company" name="company" autocomplete="organization" />
	</div>

	<div class="grid gap-2">
		<Label for="contact-message">Message</Label>
		<Textarea id="contact-message" name="message" rows={6} required />
	</div>

	<div class="hidden" aria-hidden="true">
		<Label for="contact-website">Website</Label>
		<Input id="contact-website" name="website" tabindex={-1} autocomplete="off" />
	</div>

	<div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
		<Button
			type="submit"
			class="bg-sky-900 text-sky-50 hover:bg-sky-800 dark:bg-sky-50 dark:text-sky-950 dark:hover:bg-sky-200"
		>
			Send message
			<SendPlane aria-hidden="true" />
		</Button>
		<p class="text-sm text-sky-600 dark:text-sky-300">
			Powered by
			<a class="underline-offset-4 hover:underline" rel="nofollow" href="https://un-static.com">
				Un-static Forms
			</a>
		</p>
	</div>
</form>
