<script lang="ts">
	import * as Chart from './index.js';
	import { BarChart } from 'layerchart';

	const chartData = [
		{ month: 'January', desktop: 186, mobile: 80 },
		{ month: 'February', desktop: 305, mobile: 200 },
		{ month: 'March', desktop: 237, mobile: 120 },
		{ month: 'April', desktop: 73, mobile: 190 },
		{ month: 'May', desktop: 209, mobile: 130 },
		{ month: 'June', desktop: 214, mobile: 140 }
	];

	const chartConfig = {
		desktop: {
			label: 'Desktop',
			color: 'var(--chart-1)'
		},
		mobile: {
			label: 'Mobile',
			color: 'var(--chart-2)'
		}
	};
</script>

<Chart.Container config={chartConfig} class="h-64 min-h-64 w-full">
	<BarChart
		data={chartData}
		x="month"
		axis="x"
		seriesLayout="group"
		bandPadding={0.2}
		groupPadding={0.05}
		series={[
			{
				key: 'desktop',
				label: chartConfig.desktop.label,
				value: 'desktop',
				color: chartConfig.desktop.color
			},
			{
				key: 'mobile',
				label: chartConfig.mobile.label,
				value: 'mobile',
				color: chartConfig.mobile.color
			}
		]}
		props={{
			bars: {
				radius: 4
			}
		}}
	>
		{#snippet tooltip()}
			<Chart.Tooltip />
		{/snippet}
	</BarChart>
</Chart.Container>
