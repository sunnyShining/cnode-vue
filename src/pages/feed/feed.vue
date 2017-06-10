<template>
    <div class="feed">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
import services from '../../api/services';
export default {
    name: 'feed',
    data() {
        return {
            msg: 'feed'
        }
    },
    created(){
        console.log(ENV);
        service.topics().then((data) => {
            console.log(data);
        }, (error) => {
            
        })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/scss/variables';
</style>
