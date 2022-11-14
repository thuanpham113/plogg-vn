<template>
	<v-sheet color="transparent" width="100%" height="100%">
		<v-layout
			id="container"
			ref="container"
			align-center
			justify-center
			fill-height
			@click="toggleClick($event)"
		>
		</v-layout>
	</v-sheet>
</template>

<script>
import * as THREE from "three"
import { GLTFLoader } from "../node_modules/three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
import { TransformControls } from "../node_modules/three/examples/jsm/controls/TransformControls.js"
class Asset {
	constructor(meshes) {
		this.meshes = meshes
	}
}
export default {
	props: {
		link: String,
	},
	data: function () {
		return {
			camera: null,
			scene: null,
			renderer: null,
			gltf: null,
			orbitControls: null,
			transformControls: null,
			assets: [],
			gltfName: "",
			objectMesh: null,
			box: null,
		}
	},
	mounted: function () {
		let container = this.$refs.container
		this.camera = new THREE.PerspectiveCamera(
			60,
			this.$refs.container.clientWidth / this.$refs.container.clientHeight,
			1,
			10000
		)
		this.camera.focus = 100
		this.camera.position.set(0, 2, 2)

		this.scene = new THREE.Scene()

		const color = 0xffffff
		const intensity = 1
		const light = new THREE.PointLight(color, intensity)
		light.position.set(0, 10, 0)
		this.scene.add(light)

		const lightAmbient = new THREE.AmbientLight(0xffffff) // soft white light
		this.scene.add(lightAmbient)

		this.renderer = new THREE.WebGLRenderer({ alpha: true })
		this.renderer.setSize(
			this.$refs.container.clientWidth,
			this.$refs.container.clientHeight
		)
		this.renderer.setPixelRatio(window.devicePixelRatio)
		this.renderer.gammaFactor = 1.5
		this.renderer.gammaOutput = true

		container.appendChild(this.renderer.domElement)

		this.scene.add(this.gridHelper)

		this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)
		this.orbitControls.addEventListener(
			"change",
			() => this.renderer.render(this.scene, this.camera),
			(this.orbitControls.enableZoom = false)
		)
		this.transformControls = new TransformControls(
			this.camera,
			this.renderer.domElement
		)
		this.scene.add(this.transformControls)
		this.loadGLTF("../test.glb")
		this.animate()
	},
	methods: {
		toggleClick(event) {
			const raycaster = new THREE.Raycaster()
			const mouse = new THREE.Vector2()
			event.preventDefault()

			mouse.x =
				((event.clientX - this.$refs.container.getBoundingClientRect().x) /
					this.$refs.container.clientWidth) *
					2 -
				1
			mouse.y =
				-(
					(event.clientY - this.$refs.container.getBoundingClientRect().y) /
					this.$refs.container.clientHeight
				) *
					2 +
				1

			raycaster.setFromCamera(mouse, this.camera)

			const meshes = this.assets
				.map((asset) => {
					return asset.meshes
				})
				.flat()

			const intersects = raycaster.intersectObjects(meshes, true)
			if (intersects[0] !== undefined) {
				this.objectMesh = intersects[0]
				//this.transformControls.attach(intersects[0].object);
				intersects[0].object.traverseAncestors((ancestors) => {
					if (ancestors.userData.asset !== undefined) {
						this.gltfName = ancestors.userData.asset.name
					}
				})
			}
		},
		loadGLTF(gltfArrayBuffer) {
			console.log(gltfArrayBuffer)
			const loader = new GLTFLoader()
			loader.load(
				gltfArrayBuffer,
				(gltf) => this.loadfile(gltf),
				function (error) {
					console.log("An error happened" + error)
				}
			)
		},
		loadfile(gltf) {
			this.scene.remove(this.scene.getObjectByName("New"))
			gltf.scenes.map((scene) => {
				this.scene.name = "New"
				this.scene.add(scene)
				const asset = new Asset(gltf.scene.children)
				this.assets.push(asset)

				scene.children.forEach((mesh) => {
					mesh.userData = { ...mesh.userData, asset }
				})

				//this.transformControls.attach(scene);
				this.fitCameraToCenteredObject(scene, 1, 0.5, 0.3, 1)
				this.renderer.render(this.scene, this.camera)
			})

			this.animate()
		},

		animate() {
			requestAnimationFrame(this.animate)
			this.renderer.render(this.scene, this.camera)
		},
		fitCameraToCenteredObject(object, offset, x, y, z) {
			this.camera.fov = 18
			this.camera.updateProjectionMatrix()
			const boundingBox = new THREE.Box3()
			boundingBox.setFromObject(object)
			var middle = new THREE.Vector3()
			var size = new THREE.Vector3()
			boundingBox.getSize(size)
			boundingBox.getCenter(middle)

			const fov = this.camera.fov * (Math.PI / 180)
			const fovh = 2 * Math.atan(Math.tan(fov / 2) * this.camera.aspect)
			let dx = size.z / 2 + Math.abs(size.x / 2 / Math.tan(fovh / 2))
			let dy = size.z / 2 + Math.abs(size.y / 2 / Math.tan(fov / 2))
			let cameraZ = Math.max(dx, dy)

			// offset the camera, if desired (to avoid filling the whole canvas)
			if (offset !== undefined && offset !== 0) cameraZ *= offset

			this.camera.position.set(cameraZ * x, cameraZ * y, cameraZ * z)

			// set the far plane of the camera so that it easily encompasses the whole object
			const minZ = boundingBox.min.z
			const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ

			this.camera.far = cameraToFarEdge * 3
			this.camera.lookAt(middle.x, middle.y, middle.z)
			if (cameraZ > 10000) {
				this.camera.near = 10
				this.camera.far = 100000
			}
			this.camera.updateProjectionMatrix()
			if (this.orbitControls !== undefined) {
				// set camera to rotate around the center
				this.orbitControls.target = new THREE.Vector3(middle.x, middle.y, middle.z)

				// prevent camera from zooming out far enough to create far plane cutoff
				this.orbitControls.maxDistance = cameraToFarEdge * 2
			}
		},
	},
}
</script>
<style lang="scss" scoped></style>
