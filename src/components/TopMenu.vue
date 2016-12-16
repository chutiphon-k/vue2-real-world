<template>
	<div class='ui menu'>
	  	<router-link to='/' class='item' active-class="active" exact>Home</router-link>
	  	<div class="right menu">
		  	<router-link v-if="currentUser" to='/profile' class='item' active-class="active" exact>Profile</router-link>
		  	<router-link v-if='!currentUser' to='/signin' class='item' active-class="active" exact>Sign In</router-link>
		  	<div @click='signOut' v-if="currentUser" class="link item" active-class="active">Sign Out</div>
	  	</div>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		data() {
			return {
				currentUser: null
			}
		},
		created () {
			const auth = firebase.auth()
			auth.onAuthStateChanged((user) => {
				console.log('current user: ' + user)
				this.currentUser = user
			})
		},
		methods: {
			signOut () {
				firebase.auth().signOut()
				this.$router.replace('/')
			}
		}
	}
</script>