import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// creating a scene
const scene = new THREE.Scene();

// create a sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: '#00ff83',
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

// create a light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10)
scene.add(light);

// Add a camera
// Not see objects, which are fathers than 100
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1);
// This is the distance from the camera to the object
camera.position.z = 20;
scene.add(camera);

// Render the scene
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;


// Resize the scene
window.addEventListener('resize', () => {
    // Update the sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

//    Update the camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
    // mesh.position.x += 0.1;
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}

loop();
