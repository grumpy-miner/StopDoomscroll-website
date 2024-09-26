<script>
	import '../app.css';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Stop Doomscroll</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<header class="bg-doom-yellow p-4 text-doom-blue">
		<nav class="container mx-auto flex justify-between items-center font-bold">
			<div
				class="flex items-center space-x-2"
				on:click={() => goto('/')}
				on:keyup={() => goto('/')}
				role="button"
				tabindex="0"
			>
				<img src="/128x128.png" alt="Stoop Doomscroll" class="w-10 h-10" />
				<div class="text-xl">Stop Doomscroll</div>
			</div>
			<div class="space-x-4">
				<button on:click={() => goto('/')}>Home</button>
				<button on:click={() => goto('/mental-health')}>Mental Health</button>
			</div>
		</nav>
	</header>

	<main class="flex-grow">
		<slot />
	</main>

	<footer class="bg-gray-800 text-white p-4 text-center">
		<p>
			© 2024 Stop Doomscroll. Extension source on <a
				href="https://github.com/grumpy-miner/StopDoomscroll-Chrome-Extension"
				target="_blank"
				class="text-blue-500 underline">GitHub</a
			>. Webstie source on
			<a
				href="https://github.com/grumpy-miner/StopDoomscroll-website"
				target="_blank"
				class="text-blue-500 underline">GitHub</a
			>. Licensed under the
			<a
				href="https://github.com/grumpy-miner/StopDoomscroll-Chrome-Extension/blob/main/LICENSE"
				target="_blank"
				class="text-blue-500 underline">MIT License</a
			>.
		</p>
	</footer>
</div>
