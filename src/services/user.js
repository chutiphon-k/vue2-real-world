import firebase from 'firebase'
import axios from 'axios'

const get = (id, callback) => {
	// return axios.get(`https://twisser-5cc2d.firebaseio.com/user/${id}.json`)
	// 			.then(res => res.data)
	return firebase.database()
		.ref(`user/${id}`)
		.once('value')
		.then((snapshot) => snapshot.val())
}

const set = (id, data) => {
	return firebase.database()
		.ref(`user/${id}`)
		.set(data)
}

const subscribe = (id, callback) => {
	firebase.database()
		.ref(`user/${id}`)
		.on('value', (snapshot) => {
			callback(snapshot.val())
		})
}

export default {
	get,
	set,
	subscribe
}