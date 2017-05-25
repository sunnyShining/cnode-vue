<template>
    <div class="signin">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
import service from '../../api/services';
export default {
    name: 'signin',
    data() {
        return {
            msg: 'signin'
        }
    },
    created(){
        console.log(ENV);
        service.topics().then((data) => {
            console.log(data);
        })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/scss/variables';
</style>
