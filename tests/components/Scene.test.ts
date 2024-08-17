import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { initScene } from '../../src/components/scene';

jest.mock('three');

describe('Scene', () => {
  it('initializes a scene with correct properties', () => {
    const mockScene = new Scene();
    const mockCamera = new PerspectiveCamera();
    const mockRenderer = new WebGLRenderer();

    // jest.spyOn(document.body, 'appendChild').mockImplementation(() => {});

    const result = initScene();

    expect(result.scene).toBeInstanceOf(Scene);
    expect(result.camera).toBeInstanceOf(PerspectiveCamera);
    expect(result.renderer).toBeInstanceOf(WebGLRenderer);
    expect(result.cube).toBeDefined();

    expect(document.body.appendChild).toHaveBeenCalledWith(mockRenderer.domElement);
  });
});
