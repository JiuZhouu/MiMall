<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="">王一博</a><span>|</span>
            <a href="">RedMi</a><span>|</span>
            <a href="">5g红米</a><span>|</span>
            <a href="">上线啦</a>
            <a href=""></a>
        </div>
        <div class="copyright">
            Copyright @2019 <span class="pi">mi.futurefe.com</span> All Rights Reserved.
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss" scoped>
    .footer{
        height:204px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color:#999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top:36px;
            margin-bottom:31px;
            img{
                width:53px;
                height:36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color:#999999;
                display:inline-block;
            }
            span{
                margin:0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright{
            .pi{
                color:#FF6600;
            }
        }
    }
</style>