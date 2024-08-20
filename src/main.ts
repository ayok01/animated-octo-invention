import './style/main.css';
import { gsap } from "gsap";
import { initScene, removeCube, SceneData } from './components/scene';
import { startAnimation } from './components/animation';


gsap.to('body', { duration: 0, backgroundColor: 'black' });
let sceneData:SceneData |null = null;

sceneData = initScene();
startAnimation(sceneData);

setTimeout(() => {
    removeCube(sceneData);
    document.body.removeChild(sceneData.renderer.domElement);
}, 3000);

setTimeout(() => {
    gsap.to(document.body.style, { duration: 1, backgroundColor: 'white' });
}, 3000);
