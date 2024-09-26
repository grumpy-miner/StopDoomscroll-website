<script lang="ts">
	import { page } from '$app/stores';

	let scrollDistance = 0;
	let timeLeft = 0; // Time left in seconds
	let siteBlocked = false;
	let site = '';
	let allParamsProvided = false;

	const formatTime = (seconds: number) => {
		let message = '';
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secs = seconds % 60;
		if (hours > 0) {
			message += `${hours} hour${hours > 1 ? 's' : ''} `;
		}
		if (minutes > 0) {
			message += `${minutes} minute${minutes > 1 ? 's' : ''} `;
		}
		if (hours === 0 && secs > 0) {
			message += `${secs} second${secs > 1 ? 's' : ''}`;
		}
		return message.trim();
	};

	// Extract query parameters from the URL
	const params = $page.url.searchParams;

	// Get the query parameters and assign to variables
	scrollDistance = parseFloat(params.get('scrollDistance') || '0');
	timeLeft = parseInt(params.get('timeLeft') || '0');
	siteBlocked = params.get('blocked') === 'true';
	site = params.get('site') || '';
	allParamsProvided =
		params.has('scrollDistance') &&
		params.has('timeLeft') &&
		params.has('blocked') &&
		params.has('site');
</script>

{#if allParamsProvided}
	<div
		class="container mx-auto p-8 text-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg"
	>
		<h1 class="text-5xl font-extrabold text-doom-red-2 mb-6">Access Blocked</h1>

		<p class="text-xl text-doom-red-2 font-medium mb-4">
			Your access to <strong>{site}</strong> has been blocked.
		</p>

		{#if !siteBlocked}
			<p class="text-lg text-gray-700 mb-4">
				You have scrolled <strong>{scrollDistance.toFixed(2)} meters</strong>.
			</p>
		{/if}

		<p class="text-lg text-gray-700 mb-4">
			You will regain access in <strong>{formatTime(timeLeft)}</strong>.
		</p>

		<div class="bg-white rounded-lg p-4 mt-6 shadow-md">
			<h2 class="text-2xl font-semibold text-blue-700 mb-4">Take a Break</h2>
			<p class="text-gray-600 mb-2">
				It’s time to step away and recharge. Use this opportunity to do something that can help
				break the doomscrolling cycle. Here are a few ideas:
			</p>
			<ul class="list-disc list-inside text-center text-gray-700">
				<li><strong>Go for a short walk</strong> and clear your mind with some fresh air.</li>
				<li><strong>Stretch or do a quick workout</strong> to refresh your body.</li>
				<li><strong>Meditate</strong> for a few minutes to reduce stress and regain focus.</li>
				<li><strong>Read a book</strong> or engage in a hobby to shift your attention.</li>
				<li><strong>Connect with a friend</strong> for a quick chat and catch up.</li>
			</ul>
		</div>
	</div>
{/if}
