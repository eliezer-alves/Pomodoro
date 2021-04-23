<template>
	<layout title="Welcome">
		<div class="grid grid-cols-1 gap-2 place-items-center">
			<Counter :minute="1"/>
		</div>
	</layout>
</template>

<script>
	import Layout from '../Layout'
	import Counter from '../Components/Counter.vue'
	export default {
		components: {
			Layout,
			Counter,
		}
	}
</script>