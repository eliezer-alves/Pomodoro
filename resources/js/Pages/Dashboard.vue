<template>
	<div class="grid grid-cols-1 gap-2 place-items-center">
		<h1>oi</h1>
		<Counter :minute="1"/>
	</div>	
</template>

<script>	
	import Counter from './Counter.vue'
	export default {
		components: {
			Counter,
		}
	}
</script>