<script>
	export const ssr = false;
	import Calendar from '$lib/components/Calendar/index.svelte';
	import WorldMap from '$lib/components/WorldMap/index.svelte';
	import CountryList from '$lib/components/CountryList/index.svelte';
</script>

<div class="flex items-center justify-center h-screen">
	<div class="min-w-fit w-1/3 bg-white shadow-xl p-10 tems-center justify-center">
		<Calendar />
	</div>
	<div class="min-w-fit w-1/3 bg-white shadow-xl p-10 tems-center justify-center">
		<WorldMap />
	</div>
</div>
