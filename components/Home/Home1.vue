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
            "/Slideplogg/slide.png",
            "/Slideplogg/slide2.png",
            "/Slideplogg/slide3.png",
            "/Slideplogg/slide4.png",
            "/Slideplogg/slide5.png",
            "/Slideplogg/slide6.png",
            "/Slideplogg/slide7.png",
            "/Slideplogg/slide8.png",
            "/Slideplogg/slide.png",
            "/Slideplogg/slide1.png",
            "/Slideplogg/slide2.png",
            "/Slideplogg/slide3.png",
            "/Slideplogg/slide4.png"

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
