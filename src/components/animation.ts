import { gsap } from 'gsap';
import { SceneData } from './scene';

export function startAnimation(sceneData: SceneData) {
    const { renderer, scene, camera, cube } = sceneData;

    gsap.to(cube.rotation, { 
        duration: 2, 
        x: Math.PI * 2, 
        y: Math.PI * 2, 
        repeat: -1, 
        ease: "power1.inOut" 
    });

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}