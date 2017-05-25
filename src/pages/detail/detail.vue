<template>
    <div class="detail">
        <div class="article-container">
            <div class="article-information">
                <div class="article-title">
                    <span class="article-dis">置顶</span>{{ articleData.title }}
                </div>
                <div class="article-info">
                    <span> 发布于{{ articleData.create_at | fromNow }}</span>
                    <span> 作者{{ author.loginname }}</span>
                    <span> {{ articleData.visit_count}}次浏览</span>
                    <span> 最后一次编辑是{{ articleData.last_reply_at | fromNow }}</span>
                    <span> 来自 {{ articleData.tab | tabText }}</span>
                </div>
            </div>
            <div class="article-con" v-html="articleData.content"></div>
            <div class="reply-container">
                <div class="reply-count">{{articleData.reply_count}} 回复</div>
                <div :class="['reply-con',{'bg_c': reply.ups.length>4}]" v-for="(reply, idx) in articleData.replies">
                    <div class="author-info">
                        <div class="author-header">
                            <img :src="reply.author.avatar_url" width="100%">
                        </div>
                        <!-- <div class="author-loginname"></div> -->
                        <div class="reply-footer">{{reply.author.loginname}} <span class="c_4e88cc">{{idx}}楼 - {{ reply.create_at | fromNow }}</span></div>
                        <div class="reply-ups" @click="ups(reply.id)">
                            <span>
                                <i class="fa up_btn fa-thumbs-o-up" title="喜欢"></i>
                            </span>
                            <span>
                                &nbsp;{{ reply.ups.length }}
                            </span>
                        </div>
                    </div>
                    <div v-html="reply.content"></div>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
import services from '../../api/services';
import filters from '../../filters/filters'
export default {
    name: 'feed',
    data() {
        return {
            articleData: {},
            author: {},
            id: ''
        }
    },
    filters: {
        ...filters
    },
    created(){
        let id  = this.$route.params.id;
        services.detail({
            id,
        }).then((data) => {
            this.articleData = data.data;
            this.author = data.data.author;//初始化时vue可能打出警告
        })

    },
    methods: {
        //无cnode接口文档，这句报错
        ups(id){
            services.up({
                id,
            }).then((data) => {
                console.log(data)
            })
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/scss/variables';
    .detail{
        background-color: #fff;
        padding-top: .4rem;
    }
    .article-information{
        border-bottom: 1px solid #ccc;
        width: 100%;
        // margin-bottom: .18rem;
    }
    .article-title{
        font-size: .44rem;
        font-weight: 700;
        margin: 0 .26rem .18rem .18rem;
        width: 80%;
        line-height: .6rem;
        vertical-align: bottom;
    }
    .article-dis{
        height: .4rem;
        width: .66rem;
        white-space: nowrap;
        display: inline-block;
        font-size: .24rem;
        text-align: center;
        // margin-left: .22rem;
        margin-right: .14rem;
        line-height: .4rem;
        border-radius: 4px;
        color: #fff;
        background-color: #80bd01;
    }
    .article-info{
        font-size: 12px;
        color: #838383;
        line-height: .4rem;
        padding: 0 .26rem .18rem .18rem;
    }
    .article-info span:before {
        content: "•";
    }
    .article-con{
        padding: 0 .4rem .2rem .4rem;
    }
    .reply-container{
        padding-top: .54rem;
    }
    .reply-count{
        height: .82rem;
        padding-left: .2rem;
        color: #444;
        background-color: #f6f6f6;
        line-height: .82rem;
        font-size: .28rem;
    }
    .reply-con{
        padding: .24rem .2rem.5rem .28rem;
        border-bottom: 1px solid #ccc;
    }
    .author-info{
        display: flex;
        justify-content: space-between;
    }
    .author-header{
        width: .64rem;
    }
    .author-loginname{

    }
    .reply-footer{
        width: 80%;
        padding-left: .18rem;
        font-size: .28rem;
    }
    
    .c_4e88cc{
       color: #4e88cc;
    }
    .bg_c{
        background-color: #f4fcf0;
    }
    .reply-ups{
        display: flex;
    }
</style>
