<template>
	<div>
		<p>
			<img class='imgProfile' src="https://inomics.com/sites/default/files/pictures/picture-95970-1460131169.png">
			<div class='infomation'>
				Hello, My name is <span class='name'>{{ $route.params.name }}</span>
			</div>
		</p>
		<router-link to='/'><button class="ui button">Back</button></router-link>
	</div>
</template>

<style scoped>
	.imgProfile{
		height: 7em;
	}
	.infomation{
		font-size: 2em;
	}
	.infomation .name{
		font-weight: bold;
		color: green;
	}
</style>