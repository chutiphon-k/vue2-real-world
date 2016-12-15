<template>
  <div class="ui raised very padded text container segment">
	<div class="ui one column stackable center aligned page grid">
		<div class="column twelve wide">
		    <h1>HomeWork</h1>
		    <router-view />
		    <h4>Development By</h4>
		    <img class='imgLogo' src="https://vuejs.org/images/logo.png">
		    <img class='imgLogo' src="http://semantic-ui.com/images/logo.png">
		</div>
	</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
	h1 {
	  color: pink;
	}
	h4 {
		color: grey;
	}
	.imgLogo {
		height: 3em;
	}
</style>
