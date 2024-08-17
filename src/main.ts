// import './style/main.css';
// import { initScene } from './components/scene';
// import { startAnimation } from './components/animation';

// const scene = initScene();
// startAnimation(scene);

import * as THREE from 'three';
import { gsap } from 'gsap';

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, cube: THREE.Mesh;

function init() {
    // シーンの作成
    scene = new THREE.Scene();

    // カメラの設定
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // レンダラーの設定
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // キューブの作成
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // アニメーションの開始
    animate();

    // GSAPアニメーション
    gsap.to(cube.rotation, { 
        duration: 2, 
        x: Math.PI * 2, 
        y: Math.PI * 2, 
        repeat: -1, 
        ease: "power1.inOut" 
    });
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// ウィンドウのリサイズ処理
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

init();