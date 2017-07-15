<template>
	<div id="app">
		<!--主路由出口，淡入淡出动画，点击进入具体回答切换主路由-->
		<transition name="custom-classes-transition" enter-active-class="fadeIn" leave-active-class="fadeOut" mode="out-in">
			<router-view class="animated" id="index"></router-view>
		</transition>
	
	</div>
</template>

<script>
export default {
	name: 'app',
}

</script>

<style>
* {
	margin: 0;
	padding: 0;
}

html,
body {
	overflow-x: hidden;
	background-color: #fbfbfb;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

ul {
	padding: 0;
	list-style: none;
}

a {
	color: #2c3e50;
	text-decoration: none;
}

span {
	color: #2c3e50;
}

span.text-keywords {
	color: #fc596a;
}

#index {
	-moz-animation-duration: 0.35s;
	-webkit-animation-duration: 0.35s;
	animation-duration: 0.35s;
}
</style>
