<template>
    <div class="container">

        <div class="content"></div>
    </div>
</template>

<script>
import { TagCloud } from "../../utils/TagCloud"
export default {
    data() {
        return {
        headers: [
            { imgs: "/slile1.jpg", link: "https://www.facebook.com/" },
            { imgs: "/slile2.jpg", link: "https://www.facebook.com/" },
            { imgs: "/slile3.jpg", link: "https://www.facebook.com/" },
            { imgs: "/slile4.jpg", link: "https://www.facebook.com/" },
            { imgs: "/slile5.jpg", link: "https://www.facebook.com/" },
            { imgs: "/slile1.jpg", link: "https://www.facebook.com/" },
            { imgs: "/slile2.jpg", link: "https://www.facebook.com/" },
            { imgs: "/slile3.jpg", link: "https://www.stiq.com/" },
        ],
        stacks: [
            "/slideplogg/slide.png",
            "/slideplogg/slide2.png",
            "/slideplogg/slide3.png",
            "/slideplogg/slide4.png",
            "/slideplogg/slide5.png",
            "/slideplogg/slide6.png",
            "/slideplogg/slide7.png",
            "/slideplogg/slide8.png",
            "/slideplogg/slide.png",
            "/slideplogg/slide1.png",
            "/slideplogg/slide2.png",
            "/slideplogg/slide3.png",
            "/slideplogg/slide4.png"

        ],
        current: 1,
        interval: undefined,
        direction: 1,
        slideInterval: 2,
        tagCloud: undefined,
        }
    },
    created() {
        this.interval = setInterval(() => {
            if (
                this.current === 0 ||
                this.current === this.headers.length - 1
            ) {
                this.direction *= -1;
                this.current += this.direction;
            } else {
                this.current += this.direction;
            }
        }, this.slideInterval * 1000);
    },
    beforeDestroy() {
        this.tagCloud && this.tagCloud.destroy()
        clearInterval(this.interval);
    },
    mounted(){
        const container = '.content';
        const options = {
            radius: 400,
            keep: false,
            maxSpeed: "fast"
        };

        this.tagCloud = new TagCloud(document.querySelector(container), this.stacks, options);
    }
};
</script>

<style scoped >
    .container {
        display: flex;  
        justify-content: center;
    }
</style>
