<script>
	import WorldMap from '$lib/components/WorldMap/index.svelte';
	import CountrySelector from '$lib/components/CountrySelector/index.svelte';
	import CountryData from '$lib/data/countrydata.json';

	let birthyearstatus = false;
	let countryarray = [null, null];
</script>

<WorldMap bind:countryarray />
<div
	class="z-50 relative bg-gradient-to-r from-indigo-100 max-w-screen min-h-screen flex flex-col justify-center items-center space-y-8 "
>
	<div class="  w-full md:w-1/3">
		<div class=" space-y-2">
			<h1 class="text-4xl font-display text-center">Hello there human. Life is short.</h1>
			<h3 class="text-2xl font-display text-center">
				Let's visualize your remaining life left compared against the <a
					href="https://data.worldbank.org/indicator/SP.DYN.LE00.IN"
					class=" underline"
					target="_blank"
					>avgerage life expectancy
				</a> of where you live.
			</h3>
		</div>
		<div class=" space-y-2 h-fit bg-gray-100 p-10">
			<h4 class="text-xl font-display text-center  ">Which year you were born?</h4>
			<div>
				<CountrySelector values={CountryData} bind:selectedValue={countryarray} />
			</div>
		</div>
	</div>
</div>
