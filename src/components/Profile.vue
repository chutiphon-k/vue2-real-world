<template>
	<div class='ui segment'>
		<h3 class='ui header'>Profile</h3>
		<ProfileDetail :profile='profile' />
		<br><br>
		<router-link to='edit' append class="ui green button">Edit</router-link>
	</div>
</template>

<script>
	import { Me } from '../services'
	import ProfileDetail from './ProfileDetail'

	export default {
		components: {
			ProfileDetail
		},
		data: () => ({
			profile: {
				name: '',
				description: '',
				photo: ''
			}
		}),
		created () {
			Me.get()
				.then((data) => {
					this.profile = data
				})
		}
	}
</script>