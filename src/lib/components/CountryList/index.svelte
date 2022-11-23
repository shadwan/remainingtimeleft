<script>
	import { countries, regions } from 'country-data';
	console.log(regions);
</script>

{#each Object.entries(regions) as [region, data]}
	{#each Object.entries(data) as d}
		{d.countries}
	{/each}
{/each}
