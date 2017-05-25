<template>
    <div class="about">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
import service from '../../api/services';
export default {
    name: 'about',
    data() {
        return {
            msg: 'about'
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
