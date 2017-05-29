<template>
	<div class="dialog-container" v-if="visible">
		<div class="mask"></div>
		<div class="dialog-body">
			<h2 class="dialog-title">{{ title }}</h2>
			<div class="dialog-con" v-if="showText" v-html="text"></div>
			<div class="dialog-con" v-else>
				{{ message }}
			</div>
			<div class="dialog-btn">
				<div class="dialog-onebtn"></div>
				<div class="btn-container">
					<div type="botton" name="cancel" value="取消" @click="cancel">{{ cancelButtonText }}</div>
					<div type="botton" name="confirm" value="确定" @click="confirm">{{ confirmButtonText }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			showText: {
				type: Boolean,
				default: false
			},
			message: {
				type: String,
				default: ''
			},
			confirmButtonText: {
				type: String,
				default: '确定'
			},
			cancelButtonText: {
				type: String,
				default: '取消'
			}
		},
		data(){
			return{
				visible: false
			}
		},
		created(){

		},
		methods: {
			cancel(){
				this.visible = false;
				this.cancelCallback();
			},
			confirm(){
				this.visible = false;
				this.confirmCallback();
			}
		}
	}
</script>
<style lang="scss" scoped>
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		// z-index: 999;
		background-color: #000;
		opacity: 0.9;
	}
	.dialog-container{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		display: flex;
		align-items: center;
	}
	.dialog-body{
		position: absolute;
		// top: 40%;
		width: 70%;
		left: 15%;
		// margin: 0 1rem;
		background-color: #fff;
		color: #000;
		border-radius: 10px;
	}
	.dialog-title{
		text-align: center;
		font-size: .36rem;
		padding: .3rem 0 .1rem 0;
		font-weight: 800;
	}
	.dialog-con{
		font-size: .32rem;
		padding: .3rem .4rem .4rem .4rem;
		border-bottom: 1px solid #ccc;
	}
	.btn-container{
		display: flex;
		height: .7rem;
		border-radius: 10px;
	}
	.btn-container div{
		width: 50%;
		text-align: center;
		height: .7rem;
		line-height: .7rem;
		font-size: .3rem;
		font-weight: 800;
		border-radius: initial;//safri可能会继承border-radius，强行不让继承
	}
	.btn-container div:first-child{
		border-right: 1px solid #ccc;
		color: #ccc;
	}
	.btn-container div:last-child{
		color: #FFA500;
	}

</style>