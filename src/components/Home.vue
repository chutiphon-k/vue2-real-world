<template>
	<div class='ui basic segment'>
		<div class='ui segment'>
			<form class="ui form" @submit.prevent='post'>
				<div class="field">
					<textarea v-model='input' />
				</div>
				<button class="ui blue button" :class="{'loading disabled': posting}">Post</button>
			</form>
		</div>
		<div v-for='tweet in list' class='ui segment'>
			<img class='ui tiny circular image' v-if='tweet.user' :src='tweet.user.photo'>
			<div v-if='tweet.user'>{{ tweet.user.name }}</div>
			{{ tweet.content }} ({{ tweet.timestamp | fromNow }})
		</div>
	</div>
</template>

<script>
	import { Tweet, User } from '../services'

	export default {
		data: () => ({
			input: '',
			posting: false,
			tweets: [],
			users: []
		}),
		created () {
			Tweet.list((list) => {
				this.tweets = list
			})
			User.list((list) => {
				this.users = list
				this.users = list.reduce((p, v, k) => {
					p[v.$id] = v
					return p
				}, {})
			})
		},
		methods: {
			post () {
				if (!this.input) return
				Tweet.post(this.input)
					.then(() => {
						this.input = ''
						this.posting = false
					})
			}
		},
		computed: {
			list () {
				return this.tweets.map((tweet) => {
					return {
						...tweet,
						user: this.users[tweet.owner]
					}
				})
			}
		}
	}
</script>