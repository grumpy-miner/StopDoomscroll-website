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
	<div class="min-h-screen bg-doom-gray flex items-center justify-center p-6">
		<div class="w-full max-w-3xl">
			<div class="bg-white rounded-2xl shadow-custom overflow-hidden">
				<div class="bg-doom-red-2 text-white p-8 text-center">
					<h1 class="text-4xl md:text-5xl font-bold mb-4">Access Blocked</h1>
					<p class="text-xl opacity-90">
						Your access to <span class="font-semibold">{site}</span> has been blocked
					</p>
				</div>

				<div class="p-6">
					<div class="flex justify-center mb-6">
						{#if !siteBlocked}
							<div class="bg-doom-gray/20 rounded-xl p-4 text-center mx-2 flex-1 max-w-[200px]">
								<p class="text-gray-600 mb-1">You have scrolled</p>
								<p class="text-2xl font-bold text-doom-blue">{scrollDistance.toFixed(2)} meters</p>
							</div>
						{/if}
						<div class="bg-doom-gray/20 rounded-xl p-4 text-center mx-2 flex-1 max-w-[200px]">
							<p class="text-gray-600 mb-1">Time remaining</p>
							<p class="text-2xl font-bold text-doom-blue">{formatTime(timeLeft)}</p>
						</div>
					</div>

					<div class="border-t border-gray-200 pt-6">
						<h2 class="text-2xl font-bold text-doom-blue mb-4 text-center">Take a Break</h2>
						<p class="text-gray-600 mb-8 text-center">
							It's time to step away and recharge. Here are some activities you can try:
						</p>

						<div class="grid md:grid-cols-2 gap-3">
							<div class="p-4">
								<div class="flex items-center space-x-3">
									<svg
										class="w-6 h-6 text-doom-green"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
									<span><strong>Go for a walk</strong> - Clear your mind with fresh air</span>
								</div>
							</div>

							<div class="p-4">
								<div class="flex items-center space-x-3">
									<svg
										class="w-6 h-6 text-doom-green"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
									<span><strong>Quick workout</strong> - Energize your body</span>
								</div>
							</div>

							<div class="p-4">
								<div class="flex items-center space-x-3">
									<svg
										class="w-6 h-6 text-doom-green"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span><strong>Meditate</strong> - Reduce stress and find focus</span>
								</div>
							</div>

							<div class="p-4">
								<div class="flex items-center space-x-3">
									<svg
										class="w-6 h-6 text-doom-green"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<span><strong>Connect with friends</strong> - Have a quick chat</span>
								</div>
							</div>

							<div class="p-4">
								<div class="flex items-center space-x-3">
									<svg
										class="w-6 h-6 text-doom-green"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
									<span><strong>Read a book</strong> - Dive into a different world</span>
								</div>
							</div>

							<div class="p-4">
								<div class="flex items-center space-x-3">
									<svg
										class="w-6 h-6 text-doom-green"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span><strong>Practice a hobby</strong> - Do something you enjoy</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
