import { useCallback, useState } from "react";
import * as THREE from "three";

export default function Background() {
  const [initialized, setInitialized] = useState(false);

  const threeDivRef = useCallback(
    // When dif gets initialized - avoiding unnecessary rerenderings
    (node: HTMLDivElement | null) => {
      if (node !== null && !initialized) {
        // Even if dev server reloads parts it doesn't reload this
        initThreeJsScene(node);
        setInitialized(true);
      }
    },
    [initialized],
  );

  return (
    <div
      className="absolute -z-10 h-screen items-center justify-center "
      ref={threeDivRef}
    >
      TEST
    </div>
  );
}

const initThreeJsScene = (node: HTMLDivElement) => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.set(8, 0, 0);
  camera.lookAt(0, 3, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xfdf8f4);
  node.appendChild(renderer.domElement);
  window.addEventListener("resize", windowResizeHandler);

  function render() {
    renderer.render(scene, camera);
  }

  function windowResizeHandler() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    render();
  }

  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10, 130, 130),
    new THREE.MeshBasicMaterial({
      color: 0x00000f,
      wireframe: true,
    }),
  );
  water.rotation.x = -Math.PI / 2;
  scene.add(water);

  function updatePlane() {
    const now = Date.now() / 1000;
    const position = water.geometry.attributes.position;
    const amplitude = 0.5;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);

      const xsin = amplitude * Math.sin(x + now);
      const ycos = amplitude * Math.cos(y + now);

      position.setZ(i, xsin + ycos);
    }

    position.needsUpdate = true;
  }

  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: 0xffff00,
      wireframe: true,
    }),
  );
  box.position.y = 0.5;
  // scene.add(box);

  function updateBox() {
    const now = Date.now() / 300;
    const amplitude = 0.5;

    const xcos = amplitude * Math.cos(now);
    const ysin = amplitude * Math.sin(now);
    const ycos = amplitude * Math.cos(now);
    const zcos = amplitude * Math.cos(now);

    box.position.y = 0.5 + ysin + ycos;

    box.rotation.z = zcos;
    box.rotation.x = xcos;
  }

  function update() {
    requestAnimationFrame(update);

    updatePlane();
    // updateBox();

    render();
  }

  update();
};
