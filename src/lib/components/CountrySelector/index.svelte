<script>
	import { clickOutside } from '$lib/scripts/click_outside.js';

	let showDropDown = false;

	export let selectedValue = [null, null];
	let highlight = { highlightstatus: false, value: selectedValue };
	export let values = [];
	export let update = () => {};
	let selectedname;

	function updateCountry(i, name) {
		selectedValue[0] = selectedValue[1];
		selectedValue[1] = i;
		selectedname = name;
	}
</script>

<div
	use:clickOutside
	on:outclick={() => {
		if (showDropDown == true) {
			showDropDown = false;
		}
	}}
	class="w-max relative mt-1"
>
	<input
		id="combobox"
		type="text"
		class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
		role="combobox"
		aria-controls="options"
		aria-expanded="false"
	/>
	<button
		on:click={() => (showDropDown = !showDropDown)}
		type="button"
		class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
		aria-haspopup="listbox"
		aria-expanded="true"
		aria-labelledby="listbox-label"
	>
		<span class="block truncate"
			>{selectedValue[1] != null ? selectedname : 'Select your country'}</span
		>
		<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
			<!-- Heroicon name: mini/chevron-up-down -->
			<svg
				class="h-5 w-5 text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
	</button>

	<!--
        Select popover, show/hide based on select state.
  
        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      -->
	{#if showDropDown}
		<ul
			class="absolute z-10 mt-1 max-h-60 w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
			tabindex="-1"
			role="listbox"
			aria-labelledby="listbox-label"
			aria-activedescendant="listbox-option-3"
		>
			<!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
  
          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
			{#each values as value, i}
				<li
					on:click={() => updateCountry(value.CountryCode, value.CountryName)}
					class="group text-gray-900  relative cursor-default select-none py-2 pl-8 pr-4 hover:text-white hover:bg-indigo-600"
					id="listbox-option-0"
					role="option"
				>
					<!-- Selected: "font-semibold", Not Selected: "font-normal" -->
					<span class="font-normal block truncate">{value.CountryName}</span>

					<!--
            Checkmark, only display for selected option.
  
            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          -->
					{#if selectedValue[1] == value.CountryCode}
						<span
							class=" text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5 hover:text-white "
						>
							<!-- Heroicon name: mini/check -->
							<svg
								class="h-5 w-5 fill-indigo-600 group-hover:fill-white"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					{/if}
				</li>

				<!-- More items... -->
			{/each}
		</ul>
	{/if}
</div>
