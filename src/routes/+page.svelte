<script>
	import { AgeFromDateString } from 'age-calculator';
	export const ssr = false;
	import Calendar from '$lib/components/Calendar/index.svelte';
	import WorldMap from '$lib/components/WorldMap/index.svelte';
	import VisualizerBoxes from '$lib/components/VisualizerBoxes/index.svelte';

	let day;
	let month;
	let year;
	let age;
	let avgAge;
	$: dob = year + '-' + month + '-' + day;
	$: {
		age = new AgeFromDateString(dob);
	}
</script>

<div class="flex flex-col md:flex-row  h-screen w-screen ">
	<div class=" flex flex-col w-fit h-full min-w-[375px] md:w-1/3 md:h-screen">
		<div class="space-y-4 p-10 tems-center justify-center">
			<h1>Select your date of birth</h1>
			<Calendar bind:selected_day={day} bind:selected_month={month} bind:selected_year={year} />
		</div>
		<div class="space-y-4 p-10 tems-center justify-center h-1/2  ">
			<h1>Select your Location</h1>
			<WorldMap bind:averageAge={avgAge} />
		</div>
	</div>
	<div class="min-w-fit w-3/4 p-10 tems-center justify-center h-screen  ">
		<VisualizerBoxes bind:userAge={age._age} bind:avgAge />
	</div>
</div>
