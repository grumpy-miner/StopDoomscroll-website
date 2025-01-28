<script lang="ts">
	export let images: string[] = [];
	let currentIndex = 0;
	const visibleImages = 3;
	const gap = 16;
	const maxIndex = images.length - visibleImages + 1;

	function next() {
		currentIndex = (currentIndex + 1) % maxIndex;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + maxIndex) % maxIndex;
	}

	// Auto-advance carousel
	setInterval(next, 4000);
</script>

<div class="relative w-full max-w-7xl mx-auto overflow-hidden py-8">
	<div
		class="flex transition-transform duration-700 ease-in-out"
		style="transform: translateX(calc(-{currentIndex} * (100% / {visibleImages} + {gap}px))); gap: {gap}px;"
	>
		{#each images as image, index}
			<div class="w-1/{visibleImages} flex-shrink-0 px-2">
				<img
					src={image}
					alt="Screenshot of Stop Doomscroll"
					class="w-full h-[400px] object-contain rounded-lg shadow-lg border-2 border-gray-200 hover:border-doom-blue transition-colors duration-300"
				/>
			</div>
		{/each}
	</div>

	<button
		on:click={prev}
		class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-doom-blue/75 text-white p-3 rounded-full hover:bg-doom-blue transition-colors duration-300"
		aria-label="Previous Slide"
	>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button
		on:click={next}
		class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-doom-blue/75 text-white p-3 rounded-full hover:bg-doom-blue transition-colors duration-300"
		aria-label="Next Slide"
	>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>
</div>
