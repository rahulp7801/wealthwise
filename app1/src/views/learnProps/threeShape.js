import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function createScene() {
  const scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: "#42a5f5",
    roughness: 0.2
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
  camera.position.z = 10;
  scene.add(camera);

  const light = new THREE.PointLight(0x7b1fa2, 2, 500);
  light.position.set(0, 0, 10);
  light.intensity = 10;
  scene.add(light);

  const canvas = document.querySelector('.webgl');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
  renderer.setPixelRatio(window.devicePixelRatio);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;
  controls.enableZoom = false;

  // Raycaster
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let isHovered = false;

  const handleMouseMove = (event) => {
    // Calculate normalized device coordinates
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with the sphere
    const intersects = raycaster.intersectObject(mesh);

    if (intersects.length > 0) {
      // Mouse is hovering over the sphere
      isHovered = true;
    } else {
      // Mouse is not hovering over the sphere
      isHovered = false;
    }
  };

  canvas.addEventListener('mousemove', handleMouseMove);

  const loop = () => {
    if (isHovered) {
      // Add custom rotation logic when the sphere is hovered
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    }

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();

  return { scene, camera };
}
