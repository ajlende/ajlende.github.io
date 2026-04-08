<script lang="ts">
	import CalculatorIcon from 'remixicon-svelte/icons/calculator-fill';
	import CalendarIcon from 'remixicon-svelte/icons/calendar-fill';
	import CreditCardIcon from 'remixicon-svelte/icons/bank-card-fill';
	import SettingsIcon from 'remixicon-svelte/icons/settings-fill';
	import SmileIcon from 'remixicon-svelte/icons/emotion-happy-line';
	import UserIcon from 'remixicon-svelte/icons/user-fill';
	import * as Command from '$lib/components/ui/command/index.js';
</script>

<Command.Root class="rounded-lg border shadow-md md:min-w-[450px]">
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<Command.Item>
				<CalendarIcon />
				<span>Calendar</span>
			</Command.Item>
			<Command.Item>
				<SmileIcon />
				<span>Search Emoji</span>
			</Command.Item>
			<Command.Item disabled>
				<CalculatorIcon />
				<span>Calculator</span>
			</Command.Item>
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="Settings">
			<Command.Item>
				<UserIcon />
				<span>Profile</span>
				<Command.Shortcut>⌘P</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<CreditCardIcon />
				<span>Billing</span>
				<Command.Shortcut>⌘B</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<SettingsIcon />
				<span>Settings</span>
				<Command.Shortcut>⌘S</Command.Shortcut>
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Root>
