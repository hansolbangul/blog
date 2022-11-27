import * as THREE from 'three';
import gsap from 'gsap';

export default function example() {
  //renderer
  const canvas = document.querySelector('#three-canvas');
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 기기의 픽셀값을 기준으로 화면 비를 키워주는 소스
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)

  // 투명도
  // renderer.setClearAlpha(0.5);
  // renderer.setClearColor(0x00ff00);

  // scene
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog('black', 3, 7);

  // camera (가장 많이쓰는 카메라)
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각
    window.innerWidth / window.innerHeight, // 종횡비
    0.1, // near
    1000 // far
  );
  camera.position.y = 1;
  camera.position.z = 5;
  scene.add(camera);

  // 직교 카메라
  // const camera = new THREE.OrthographicCamera(
  //   -(window.innerWidth / window.innerHeight), // left
  //   window.innerWidth / window.innerHeight, // right
  //   1, //top
  //   -1, // bottom
  // );
  // camera.position.x = 1;
  // camera.position.z = 5;
  // camera.position.y = 2;
  // camera.lookAt(0, 0, 0);
  // camera.zoom = 0.5;
  // camera.updateProjectionMatrix();
  // scene.add(camera);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.x = 1;
  light.position.y = 3;
  light.position.z = 10;

  scene.add(light);

  // mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: 'tomato'
  });

  let mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 그리기
  // const clock = new THREE.Clock();

  // function draw() {
  //   const time = clock.getElapsedTime();
  //   // const delta = clock.getDelta();

  //   // 360도는 2파이
  //   // mesh.rotation.y += 0.001;
  //   mesh.rotation.y = time;
  //   mesh.position.y += 0.01;
  //   // mesh.position.y += delta;
  //   if (mesh.position.y > 3) {
  //     mesh.position.y = 0;
  //   }
  //   renderer.render(scene, camera);

  //   requestAnimationFrame(draw);
  // }

  const clock = new THREE.Clock();

  // 기본적인 애니메이션 없는 그리기
  function draw() {
    // const time = clock.getElapsedTime();
    const delta = clock.getDelta();
    renderer.render(scene, camera);

    // requestAnimationFrame(draw);
    renderer.setAnimationLoop(draw)
  }

  // gsap
  gsap.to(
    mesh.position,
    {
      duration: 1,
      y: 2,
      z: 3,
    }
  );

  // 리사이징
  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera)
  }

  // 이벤트
  window.addEventListener('resize', setSize);

  draw();
}