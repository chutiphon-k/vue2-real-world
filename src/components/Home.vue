<template>
	<div>
		<h1>Twisser</h1>
		<div class="ui action input fluid">
		  <input type="text" v-model.trim='name' ref='inputCard'>
		  <button @click='add' class="ui teal icon button">ADD</button>
		</div>
		<br>
		<div>
			<p v-for='profile in listProfiles' class="ui raised text segment">
			<router-link :to="{ path:`/profile/${profile.name}`}">{{ profile.name }}</router-link>
			</p>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      listProfiles: [
        { 
			name: 'eiei#1'
        },
        { 
			name: 'eiei#2'
        },
        { 
			name: 'eiei#3'
        }
      ]
    }
  },
  methods: {
  	add () {
		this.$refs.inputCard.value = ''
		// console.log(this.$refs.inputCard.value)
		this.listProfiles.push({ name: this.name })
  	}
  }
}
</script>