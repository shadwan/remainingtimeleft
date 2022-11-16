<script>
	const date = new Date();

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let monthIndex = date.getMonth();
	let month = monthNames[monthIndex];
	let year = date.getFullYear();
	let firstDayIndex = new Date(year, monthIndex, 1).getDay();
	let numberofDays = new Date(year, monthIndex + 1, 0).getDate();
	let currentDay = date.getDate();
	let prevMonth = new Date(year, monthIndex, 0).getDate();
</script>

<h1 class="text-3xl font-bold underline">
	{prevMonth}
</h1>

<!-- calendar container -->
<div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
	<div className="flex items-center text-gray-900">
		<button
			type="button"
			className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span className="sr-only">Previous month</span>
		</button>
		<div className="flex-auto font-semibold">January</div>
		<button
			type="button"
			className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span className="sr-only">Next month</span>
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
		{#each Array(42) as day, dayIndex}
			<!--
          Always include: "py-1.5 hover:bg-gray-100 focus:z-10"
          Is current month, include: "bg-white"
          Is not current month, include: "bg-gray-50"
          Is selected or is today, include: "font-semibold"
          Is selected, include: "text-white"
          Is not selected, is not today, and is current month, include: "text-gray-900"
          Is not selected, is not today, and is not current month, include: "text-gray-400"
          Is today and is not selected, include: "text-indigo-600"

          Top left day, include: "rounded-tl-lg"
          Top right day, include: "rounded-tr-lg"
          Bottom left day, include: "rounded-bl-lg"
          Bottom right day, include: "rounded-br-lg"
        -->
			{#if dayIndex < firstDayIndex}
				<button
					type="button"
					class=" py-1.5 bg-grey{(dayIndex === 0 && 'rounded-tl-lg',
					dayIndex === 6 && 'rounded-tr-lg',
					dayIndex === 35 && 'rounded-bl-lg',
					dayIndex === 41 && 'rounded-br-lg')}"
					disabled
				>
					<!-- || dayIndex >= numberofDays + firstDayIndex
    Always include: "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
    Is selected and is today, include: "bg-indigo-600"
    Is selected and is not today, include: "bg-gray-900"
  -->
					<time
						datetime="2021-12-27"
						class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
						>{dayIndex}
					</time>
				</button>
			{:else}
				<button
					type="button"
					class=" py-1.5 hover:bg-gray-100 focus:z-10 bg-white {(dayIndex === 0 && 'rounded-tl-lg',
					dayIndex === 6 && 'rounded-tr-lg',
					dayIndex === 35 && 'rounded-bl-lg',
					dayIndex === 41 && 'rounded-br-lg')}"
				>
					<!--
            Always include: "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
            Is selected and is today, include: "bg-indigo-600"
            Is selected and is not today, include: "bg-gray-900"
          -->
					<time
						datetime="2021-12-27"
						class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
						>{dayIndex - firstDayIndex + 1}</time
					>
				</button>
			{/if}
		{/each}
	</div>
</div>
