<template>
	<div id="app" :class="{ 'login-bg': $route.path === '/login' }">
		<RouterView />
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss">
	html,body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		width: 100%;
		height: 100%;
	}
	.login-bg {
		background-image: -webkit-linear-gradient(135deg,#55c2b6,#54b6b1 50%,#4c6d8f);
	}
</style>
