import * as THREE from 'three';

// creating a scene
const scene = new THREE.Scene();

// create a sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: '#00ff83',
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// create a light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10)
scene.add(light);

// Add a camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600);
// This is the distance from the camera to the object
camera.position.z = 20;
scene.add(camera);

// Render the scene
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(800, 600);
renderer.render(scene, camera);
