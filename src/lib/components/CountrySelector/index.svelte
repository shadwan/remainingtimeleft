<script>
	export const ssr = false;

	import Fuse from 'fuse.js';

	import getUnicodeFlagIcon from 'country-flag-icons/unicode';
	import { countries } from 'country-flag-icons';

	let searching = false;
	let filteredValue = [];
	let searchkeyword = null;

	export let selectedValue = [null, null];
	export let values = [];
	export let update = () => {};
	let selectedname;

	// $: {
	// 	search(searchkeyword);
	// }

	function updateCountry(i, name) {
		selectedValue[0] = selectedValue[1];
		selectedValue[1] = i;
		selectedname = name;
	}

	function search(searchkeyword) {
		searching = true;

		if (filteredValue.length === 0) {
			searching = false;
		}

		const options = {
			includeScore: false,
			distance: 0,
			// Search in `author` and in `tags` array
			keys: ['CountryName']
		};
		const fuse = new Fuse(values, options);

		filteredValue = fuse.search(searchkeyword);
		console.log(filteredValue);
	}
</script>

<div>
	<div class=" m-5  flex items-center p-1">
		<input
			type="text"
			name="search"
			id="search"
			placeholder="Start typing to search"
			class="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			bind:value={searchkeyword}
			on:input={search(searchkeyword)}
			on:blur={() => {
				if (filteredValue.length === 0) {
					searching = false;
				}
			}}
		/>
	</div>

	<div class="p-5 w-96 h-full overflow-y-auto">
		<div class="relative">
			<ul role="list" class="relative z-0 divide-y divide-gray-200  ">
				<!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
  
          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
				{#if searching}
					{#each filteredValue as value, i}
						{#if value.item.AverageAge != null}
							<li
								on:click={updateCountry(value.item.CountryCode, value.item.CountryName)}
								class="bg-white"
							>
								<div
									class="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50"
								>
									<div class="flex-shrink-0 text-5xl">
										{getUnicodeFlagIcon(value.item.CountryCode)}
									</div>

									<div class="min-w-0 flex-1">
										<a href="#" class="focus:outline-none">
											<!-- Extend touch target to entire panel -->
											<span class="absolute inset-0" aria-hidden="true" />
											<p class="text-sm font-medium text-gray-900">
												{value.item.CountryName}
											</p>
											<p class="truncate text-sm text-gray-500">
												Average Age: {parseInt(value.item.AverageAge)}
											</p>
										</a>
									</div>
								</div>
							</li>
						{/if}
					{/each}
				{:else}
					{#each values as value, i}
						{#if value.AverageAge != null}
							<li on:click={updateCountry(value.CountryCode, value.CountryName)} class="bg-white">
								<div
									class="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50"
								>
									<div class="flex-shrink-0 text-5xl">{getUnicodeFlagIcon(value.CountryCode)}</div>
									<div class="min-w-0 flex-1">
										<a href="#" class="focus:outline-none">
											<!-- Extend touch target to entire panel -->
											<span class="absolute inset-0" aria-hidden="true" />
											<p class="text-sm font-medium text-gray-900">{value.CountryName}</p>
											<p class="truncate text-sm text-gray-500">
												Average Age: {parseInt(value.AverageAge)}
											</p>
										</a>
									</div>
								</div>
							</li>
						{/if}
					{/each}
				{/if}
			</ul>
		</div>
	</div>
</div>
