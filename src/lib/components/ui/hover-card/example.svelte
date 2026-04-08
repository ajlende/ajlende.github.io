<script lang="ts">
	import CalendarDaysIcon from 'remixicon-svelte/icons/calendar-event-fill';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
</script>

<HoverCard.Root>
	<HoverCard.Trigger
		href="https://github.com/ajlende"
		target="_blank"
		rel="noreferrer noopener"
		class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
	>
		@ajlende
	</HoverCard.Trigger>
	<HoverCard.Content>
		<div class="flex space-x-4">
			<Avatar.Root>
				<Avatar.Image src="https://github.com/ajlende.png" />
				<Avatar.Fallback>AL</Avatar.Fallback>
			</Avatar.Root>
			<div class="space-y-1">
				<h4 class="text-sm font-semibold">@ajlende</h4>
				<p class="text-sm">Software Craftsman</p>
				<div class="flex items-center pt-2">
					<CalendarDaysIcon class="me-2 size-4 opacity-70" />
					<span class="text-muted-foreground text-xs"> Joined on July 31, 2013 </span>
				</div>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
