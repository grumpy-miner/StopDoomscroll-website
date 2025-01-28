<script>
	import Carousel from '$lib/Carousel.svelte'; // Import your custom carousel

	const screenshots = [
		'/stopDoomScroll.png',
		'/screen1.png',
		'/screen2.png',
		'/screen3.png',
		'/screen4.png',
		'/screen5.png'
	];
</script>

<div class="min-h-screen bg-doom-gray">
	<div class="container mx-auto px-6 py-12">
		<div class="text-center mb-16">
			<h1 class="text-5xl font-bold text-doom-blue mb-6">Welcome to Stop Doomscroll</h1>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Stop Doomscroll is a Chrome extension designed to help users limit their time and scrolling
				on distracting websites. Set time limits, monitor your scrolling distance, and regain
				control of your browsing habits with this easy-to-use extension.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
			<div
				class="bg-white rounded-xl p-8 shadow-custom transform hover:scale-105 transition-transform duration-300"
			>
				<h2 class="text-2xl font-bold text-doom-blue mb-4">Features</h2>
				<ul class="space-y-3">
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-doom-green mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							/>
						</svg>
						Set custom time limits for websites
					</li>
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-doom-green mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							/>
						</svg>
						Monitor your scrolling in real-time
					</li>
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-doom-green mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							/>
						</svg>
						Customize reset intervals
					</li>
				</ul>
			</div>

			<div
				class="bg-white rounded-xl p-8 shadow-custom transform hover:scale-105 transition-transform duration-300"
			>
				<h2 class="text-2xl font-bold text-doom-blue mb-4">Get Started</h2>
				<p class="text-gray-700 mb-6">
					Download the Stop Doomscroll extension from the Chrome Store today!
				</p>
				<a
					href="https://chromewebstore.google.com/detail/stop-doomscroll/nhhkaopmidmnhkhcefakkfkohinlinhh"
					class="inline-block bg-doom-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
					target="_blank"
					rel="noopener noreferrer"
				>
					Download from Chrome Store
				</a>
			</div>
		</div>

		<div class="bg-white rounded-xl p-8 shadow-custom">
			<h2 class="text-2xl font-bold text-doom-blue mb-6 text-center">See It in Action</h2>
			<Carousel images={screenshots} />
		</div>
	</div>
</div>
