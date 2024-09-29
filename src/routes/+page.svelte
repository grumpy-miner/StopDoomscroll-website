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

<div class="container mx-auto p-6">
	<h1 class="text-4xl font-bold mb-4">Welcome to Stop Doomscroll</h1>
	<p class="mb-6">
		Stop Doomscroll is a Chrome extension designed to help users limit their time and scrolling on
		distracting websites. Set time limits, monitor your scrolling distance, and regain control of
		your browsing habits with this easy-to-use extension.
	</p>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="bg-gray-100 p-4 rounded-lg">
			<h2 class="text-2xl font-semibold mb-2">Features</h2>
			<ul class="list-disc ml-6">
				<li>Set custom time limits for websites</li>
				<li>Monitor your scrolling in real-time</li>
				<li>Customize reset intervals</li>
			</ul>
		</div>
		<div class="bg-gray-100 p-4 rounded-lg">
			<h2 class="text-2xl font-semibold mb-2">Get Started</h2>
			<p>Download the Stop Doomscroll extension from the Chrome Store today!</p>
			<a
				href="https://chromewebstore.google.com/detail/stop-doomscroll/nhhkaopmidmnhkhcefakkfkohinlinhh"
				class="text-blue-600 underline mt-2 block"
			>
				Download from Google Marketplace
			</a>
		</div>
	</div>
	<div class="mt-8">
		<Carousel images={screenshots} />
	</div>
</div>
