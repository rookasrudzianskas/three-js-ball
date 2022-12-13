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

// Add a camera
const camera = new THREE.PerspectiveCamera(45, )
