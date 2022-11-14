<template>
	<div>
		<a :class="classTypeWrite" class="typed-text">{{ typeValue }} </a>
		<a :class="classTypeWrite" :style="`background:${cursorColor}`" class="cursor"
			>&nbsp;</a
		>
	</div>
</template>

<script>
import { setTimeout } from "timers"

export default {
	props: {
		cursorColor: String,
		classTypeWrite: String,
		typeArray: {
			type: Array,
			default: ["quan"],
		},
	},
	data: () => {
		return {
			typeStatus: false,
			typingSpeed: 200,
			erasingSpeed: 200,
			newTextDelay: 500,
			typeArrayIndex: 0,
			charIndex: 0,
		}
	},
	created() {
		//   console.log( this.$refs.typeWrite)
		setTimeout(this.typeText, this.newTextDelay + 200)
	},
	methods: {
		typeText() {
			if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
				if (!this.typeStatus) this.typeStatus = true
				this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
				this.charIndex += 1
				setTimeout(this.typeText, this.typingSpeed)
			} else {
				this.typeStatus = false
				setTimeout(this.eraseText, this.newTextDelay)
			}
		},
		eraseText() {
			if (this.charIndex > 0) {
				if (!this.typeStatus) this.typeStatus = true
				this.typeValue = this.typeArray[this.typeArrayIndex].substring(
					0,
					this.charIndex - 1
				)
				this.charIndex -= 1
				setTimeout(this.eraseText, this.erasingSpeed)
			} else {
				this.typeStatus = false
				this.typeArrayIndex += 1
				if (this.typeArrayIndex >= this.typeArray.length) this.typeArrayIndex = 0
				setTimeout(this.typeText, this.typingSpeed + 1000)
			}
		},
	},
}
</script>

<style lang="scss">
a.cursor {
	display: inline-block;
	margin-left: 3px;
	width: 8px;
	animation: cursorBlink 1s infinite;
	font-size: 8rem;
	height: 4rem;
}
@keyframes cursorBlink {
	49% {
		background-color: transparent;
	}
	50% {
		background-color: transparent;
	}
	99% {
		background-color: transparent;
	}
}
</style>
