<template>
    <div class="index">
        <div class="index-tab">
            <div class="active">全部</div>
            <div class="disactive">精华</div>
            <div class="disactive">分享</div>
            <div class="disactive">问答</div>
            <div class="disactive">招聘</div>
        </div>
        <div class="index-article">
            <div class="index-article-con" v-for="article in articles" @click="toDetail(article.id)">
                <div class="author-pic">
                    <img :src="article.author.avatar_url" width="100%">
                </div>
                <div class="article-dis" v-if="article.top">置顶</div>
                <div class="article-dis" v-else-if="article.good">精华</div>
                <div class="article-dis dis-share" v-else-if="article.tab =='share'">分享</div>
                <div class="article-dis dis-share" v-else-if="article.tab =='ask'">问答</div>
                <div class="article-dis dis-share" v-else-if="article.tab =='job'">招聘</div>
                <div class="article-title">
                    <p>
                        {{ article.title }}
                    </p>
                    <p>{{ article.reply_count }}/<span class="c-b4b4b4">{{ article.visit_count }}</span></p>
                </div>
                <div class="article-time">{{ article.last_reply_at | fromNow }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import services from '../../api/services';
import filters from '../../filters/filters';
export default {
    name: 'index',
    data() {
        return {
            msg: 'Index',
            articles: []
        }
    },
    created(){
        services.topics().then((data) => {
            this.articles = data.data;
        })
    },
    filters: {
        ...filters
    },
    methods: {
        toDetail(id){
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/scss/variables';
    .index{
        // padding: .22rem 0 0 0;
    }
    .index-tab{
        display: flex;
        padding: .22rem 0;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
    }
    .index-tab div{
        height: .4rem;
        width: .72rem;
        white-space: nowrap;
        font-size: .24rem;
        text-align: center;
        margin-left: .4rem;
        line-height: .4rem;
        border-radius: 4px;
    }
    .active{
        color: #fff;
        background-color: #80bd01;
    }
    .disactive{
        color: #80bd01;
        background-color: #f6f6f6;
    }
    .index-article{

    }
    .index-article-con{
        height: 1.04rem;
        background-color: #fff;
        padding: .2rem;
        display: flex;
        // justify-content: space-around;
        border-bottom: 1px solid #ccc;
    }
    .article-dis{
        height: .4rem;
        width: .66rem;
        white-space: nowrap;
        font-size: .24rem;
        text-align: center;
        margin-left: .22rem;
        line-height: .4rem;
        border-radius: 4px;
        color: #fff;
        background-color: #80bd01;
    }
    .dis-share{
        background-color: #e5e5e5;
        color: #999;

    }
    .author-pic{
        width: .64rem;
        // line-height: 1.04rem;
    }
    .article-title{
        margin-left: .12rem;
        color: #333;
        width: 58%;
        // overflow-x: scroll;
    }
    .article-title p:first-child{
        width: 100%;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow:hidden;
    }
    .c-b4b4b4{
        color: #b4b4b4;
    }
    .article-time{
        line-height: .9rem;
        margin-left: .26rem;
        white-space: nowrap;
        color: #b4b4b4;
    }
</style>
