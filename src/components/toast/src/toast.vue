<template>
	<div class="toast-container" v-show="visible">
		<span class="toast-con">{{ text }}</span>
	</div>
</template>
<script>
	export default {
		props:{
			text: {
				type: String,
				default: ''
			},
			visible: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return{

			}
		},
		created(){

		}
	}
</script>
<style lang="scss" scoped>
	.toast-container{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.toast-con{
		background-color: #000;
		color: #fff;
		position: absolute;
		padding: .1rem .5rem;
		opacity: .7;
		border-radius: 5px;
		font-size: .28rem;
	}
</style>