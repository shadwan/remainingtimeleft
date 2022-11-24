<script>
	export let avgAge = 90;
	export let userAge = 56;

	$: remainingYears = parseInt(avgAge) - parseInt(userAge);
	$: remainingMonths = remainingYears * 12;
	$: remainingWeeks = remainingYears * 52;
	$: remainingDays = remainingYears * 365;

	let selected = 'weeks';
</script>

<div class="w-full h-full ">
	<!-- <h3 class="">
		You have {remainingYears} years, {remainingMonths} months, {remainingWeeks} weeks,{userAge * 52}
		weeks, {remainingDays}
		days left
	</h3> -->
	{#if selected === 'weeks'}
		<div class=" p-2 overflow-y-auto w-fit max-h-full">
			<div class=" grid  grid-cols-52 gap-x-custom gap-y-custom  ">
				{#each { length: avgAge * 52 } as _, i}
					{#if i < userAge * 52}
						<div class=" bg-orange-500 h-2 w-2" />
					{:else}
						<div class=" bg-gray-200 h-2 w-2" />
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>
