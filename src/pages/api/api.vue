<template>
    <div class="api">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
import service from '../../api/services';
export default {
    name: 'api',
    data () {
        return {
            msg: 'api'
        };
    },
    created () {
        console.log(ENV);
        service.topics().then((data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        });
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/scss/variables';
</style>
