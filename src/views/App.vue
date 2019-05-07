<template>
	<div>
		<navbar></navbar>
		<router-view></router-view>
		<alert-snack :text="alertText"></alert-snack>
	</div>
</template>

<script>
	import AlertSnack from "../components/AlertSnack";
	import Navbar from "./Navbar"
	import { mapState } from 'vuex';

	export default {
		computed: {
			...mapState({
				alertText: state => state.alertText
			})
		},
		components: {
			AlertSnack,
			Navbar
		}
	}
</script>
