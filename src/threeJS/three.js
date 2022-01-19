// import '../styles/App.css'
// import * as THREE from 'three'
// import * as dat from 'lil-gui'
// import { gsap } from "gsap";

// /**
//  * Debug
//  */
// const gui = new dat.GUI()

// const parameters = {
//     materialColor: '#ffeded'
// }

// gui
//     .addColor(parameters, 'materialColor')
//     .onChange(() =>
//     {
//         material.color.set(parameters.materialColor)
//         particlesMaterial.color.set(parameters.materialColor)
//     })

// /**
//  * Base
//  */
// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Objects
//  */
// // Texture
// const textureLoader = new THREE.TextureLoader()
// const gradientTexture = textureLoader.load('textures/gradients/5.jpg')
// gradientTexture.magFilter = THREE.NearestFilter

// // Material
// const material = new THREE.MeshPhongMaterial({ 
//     color: 0x3f7b9d 
//     // gradientMap: gradientTexture
// })

// // Meshes

// const mesh1 = new THREE.Mesh(
//     new THREE.TorusGeometry(1, 0.4, 15, 60),
//     material
// )
// const mesh2 = new THREE.Mesh(
//     new THREE.IcosahedronGeometry(1, 0),
//     material
// )
// const mesh3 = new THREE.Mesh(
//     new THREE.TorusKnotGeometry(0.8, 0.27, 100, 10),
//     material
// )

// // Position
// const objectsDistance = 4

// mesh2.position.y = - objectsDistance * 1
// mesh3.position.y = - objectsDistance * 2

// mesh1.position.x = 1.5
// mesh2.position.x =- 1.5
// mesh3.position.x = 1.5

// scene.add(mesh1, mesh2, mesh3)

// const sectionMeshes = [mesh1, mesh2, mesh3]

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  *  Scroll
//  */
// let scrollY = window.scrollY
// let currentSection = 0

// window.addEventListener('scroll', () =>
// {
//     scrollY = window.scrollY
    
//     const newSection = Math.round(scrollY / sizes.height)
    
//     if(newSection != currentSection)
//     {
//         currentSection = newSection
       
//         gsap.to(
//             sectionMeshes[currentSection].rotation,
//             {
//                 duration: 1.5,
//                 ease: 'power2.inOut',
//                 x: '+=6',
//                 y: '+=3',
//                 z: '+=1.5'
//             }
//         )
//     }
// })

// /**
//  * Coursor
//  */
// const cursor = {}
// cursor.x = 0
// cursor.y = 0

// window.addEventListener('mousemove', (event) =>
// {
//     cursor.x = event.clientX / sizes.width - 0.5
//     cursor.y = event.clientY / sizes.height - 0.5
// })

// /**
//  * Particles
//  */
// // Geometry
// const particlesCount = 300
// const positions = new Float32Array(particlesCount * 3)

// for(let i = 0; i < particlesCount; i++)
// {
//     positions[i * 3 + 0] = (Math.random() - 0.5) * 10
//     positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length
//     positions[i * 3 + 2] = (Math.random() - 0.5) * 10
// }

// const particlesGeometry = new THREE.BufferGeometry()
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// // Material
// const particlesMaterial = new THREE.PointsMaterial({
//     color: parameters.materialColor,
//     sizeAttenuation: true,
//     size: 0.03
// })

// // Points
// const particles = new THREE.Points(particlesGeometry, particlesMaterial)
// scene.add(particles)

// /**
//  *  Lights
//  */
// const directionalLight = new THREE.DirectionalLight('#ffffff', 1.5)
// directionalLight.position.set(0, 1, 1)
// directionalLight.castShadow = true;
// scene.add(directionalLight)


// /**
//  * Camera
//  */
// // Group
// const cameraGroup = new THREE.Group()
// scene.add(cameraGroup)

// // Base camera
// const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
// camera.position.z = 6
// cameraGroup.add(camera)

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha: true 
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()
// let previousTime = 0

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()
//     const deltaTime = elapsedTime - previousTime
//     previousTime = elapsedTime

//         // console.log(deltaTime)

//     // Animate meshes
//     const sectionMeshes = [ mesh1, mesh2, mesh3 ]

//     for(const mesh of sectionMeshes)
//     {
//         mesh.rotation.x += deltaTime * 0.1
//         mesh.rotation.y += deltaTime * 0.12
//     }

//     // Animate camera
//     camera.position.y = - scrollY / sizes.height * objectsDistance

//     const parallaxX = cursor.x * 0.5
//     const parallaxY = - cursor.y * 0.5
//     cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
//     cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()