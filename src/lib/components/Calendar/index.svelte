<script>
	import calendarize from 'calendarize';
	import DateSelector from '$lib/components/DateSelector/index.svelte';
	const date = new Date();
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	let selected_day = date.getDate();
	let selected_month = date.getMonth();
	let selected_year = date.getFullYear();

	let current = calendarize(date);
	let prev = calendarize(new Date(selected_year, selected_month - 1));
	let next = calendarize(new Date(selected_year, selected_month + 1));

	function updateCalendar() {
		console.log('triggered');
		let current = calendarize(new Date(selected_year, selected_month));
		let prev = calendarize(new Date(selected_year, selected_month - 1));
		let next = calendarize(new Date(selected_year, selected_month + 1));
	}

	function toPrev() {
		[current, next] = [prev, current];

		if (--selected_month < 0) {
			selected_month = 11;
			selected_year--;
		}

		prev = calendarize(new Date(selected_year, selected_month - 1));
	}

	function toNext() {
		[prev, current] = [current, next];

		if (++selected_month > 11) {
			selected_month = 0;
			selected_year++;
		}

		next = calendarize(new Date(selected_year, selected_month + 1));
	}
</script>

<h1 class="text-3xl font-bold underline">{selected_day}, {selected_month}, {selected_year}</h1>

<!-- calendar container -->
<div class="">
	<div class="flex items-center text-gray-900">
		<button
			on:click={toPrev}
			type="button"
			class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span class="sr-only">Previous month</span>
			<!-- Heroicon name: mini/chevron-left -->
			<svg
				class="h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<div class="grow justify-self-center text-center font-semibold">
			({selected_day}, {months[selected_month]}, {selected_year})
			<DateSelector values={months} bind:selectedValue={selected_month} update={updateCalendar} />
		</div>
		<button
			on:click={toNext}
			type="button"
			class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span class="sr-only">Next month</span>
			<!-- Heroicon name: mini/chevron-right -->
			<svg
				class="h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
	<div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
		<div>SUN</div>
		<div>MON</div>
		<div>TUE</div>
		<div>WED</div>
		<div>THU</div>
		<div>FRI</div>
		<div>SAT</div>
	</div>
	<div
		class="isolate mt-2 grid grid-cols-7 gap-px  bg-gray-200 text-sm shadow ring-1 ring-gray-200"
	>
		{#each { length: 6 } as w, weekIndex (weekIndex)}
			{#if current[weekIndex]}
				{#each { length: 7 } as d, dayIndex (dayIndex)}
					{#if current[weekIndex][dayIndex] != 0}
						<button
							type="button"
							class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
						>
							<time
								datetime="{selected_year}-{selected_month + 1}-{current[weekIndex][dayIndex]}"
								class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
								>{current[weekIndex][dayIndex]}</time
							>
						</button>
					{:else if weekIndex < 1}
						<button
							type="button"
							class="cursor-not-allowed	 bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
						>
							<!--
                          Always include: "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                          Is selected and is today, include: "bg-indigo-600"
                          Is selected and is not today, include: "bg-gray-900"
                        -->
							<time
								datetime="{selected_year}-{selected_month}-{prev[prev.length - 1][dayIndex]}"
								class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
								>{prev[prev.length - 1][dayIndex]}</time
							>
						</button>
					{:else}
						<button
							type="button"
							class="cursor-not-allowed	bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
						>
							<time
								datetime="{selected_year}-{selected_month + 2}-{next[0][dayIndex]}"
								class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
								>{next[0][dayIndex]}</time
							>
						</button>
					{/if}
				{/each}
			{/if}
		{/each}
	</div>
</div>
