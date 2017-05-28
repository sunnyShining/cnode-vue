<template>
    <div class="loading" v-show="visible">
    	<div class="loading-container">
	        <div>
	        	<img src="../../../assets/images/loading.svg">
	    	</div>
	        <div class="loading-text">{{ text }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
        	visible: true
        }
    },
    created() {

    }
}
</script>
<style lang="scss" scoped>
	.loading{
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: 0.7;
		position: absolute;
		top: 0;
		left:0;
		z-index: 99;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.loading-container{
		display: flex;
		justify-content: space-around;
		position: absolute;
		z-index: 999;
		background-color: #fff;
		opacity: 1;
		width: 2.5rem;
		height: .7rem;
		border-radius: .35rem;
	}
	.loading-text{
		line-height: .7rem;
		font-size: .32rem;
		color: #000;
		white-space: nowrap;
	}
</style>
