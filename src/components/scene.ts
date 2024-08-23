import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

export interface SceneData {
    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    cube: Mesh;
}

/**
 * シーンを初期化し、シーンデータを返します。
 * @returns シーン、カメラ、レンダラー、キューブを含むシーンデータ。
 */
export function initScene(): SceneData {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer({ antialias: true, canvas: document.getElementById('sceneCanvas') as HTMLCanvasElement });
    
    // レンダラーのサイズを設定
    renderer.setSize(window.innerWidth, window.innerHeight);

    // キューブを作成
    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0xffffff });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    // カメラの位置を設定
    camera.position.z = 5;

    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    return { scene, camera, renderer, cube };
}
/**
 * キューブの色を変更します。
 * @param SceneData キューブ
 */
export const removeCube = (sceneData: SceneData) => {
    const { scene, cube } = sceneData;
    scene.remove(cube);
    //黒に変更
    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x000000 });
    const newCube = new Mesh(geometry, material);
    scene.add(newCube);
    
}