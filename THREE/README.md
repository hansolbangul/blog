## three.js 맛보기
```txt
three.js 의 기본 설정 (렌더, 씬, 카메라, 메쉬, 애니메이션, 리사이징) 에 대한 기본적인 소스를 공유하기 위해 만들어진 페이지입니다.
```

### 실행 전 설치
```txt
npm i -D @babel/cli @babel/core @babel/preset-env babel-loader clean-webpack-plugin copy-webpack-plugin core-js cross-env html-webpack-plugin source-map-loader terser-webpack-plugin webpack webpack-cli webpack-dev-server
```

```txt
npm i three
```
<br />

### html 의 canvas?
일종의 도화지라 생각하면 된다.

도화지의 크기는 window.innerWidth 와 window.innerHeight 의 크기로 설정을 한다.
<br />

### THREE.WebGLRenderer ? 
```js
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
```

위의 소스를 하나씩 보자면

renderer이란 웹의 three를 랜더해주기 위해 만든다. 크기는 화면의 width, height의 크기로 설정한다.

but) setPixelRatio 란 화면의 해상도는 어마어마하게 좋을 수 있으나, 블록의 화질 (pixel)이  좋지 못하다면 좋지 않은 웹의 품질을 보일 수 있다. 그렇기에 device의 pixelRatio의 값을 토대로 1의 이상일땐 2배 키우게 된다.
<br />

### THREE.PerspectiveCamera ?
```js
const scene = new THREE.Scene();
```

scene의 경우 무대를 만드는 것이다. 해당하는 배우들(mesh), 카메라(camera)를 add를 통해 무대에 추가할 수 있고, 무조건적으로 사용해야 한다.
<br />

### THREE.DirectionalLight ? 
```js
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.x = 1;
light.position.y = 3;
light.position.z = 10;

scene.add(light);
```
는 무대의 조명을 뜻한다. 조명은 position의 x, y, z를 통해 위치를 조절할 수 있다.
<br />

### THREE.PerspectiveCamera ?

```js
const camera = new THREE.PerspectiveCamera(
  75, // 시야각
  window.innerWidth / window.innerHeight, // 종횡비
  0.1, // near
  1000 // far
);
camera.position.y = 1;
camera.position.z = 5;
scene.add(camera);
```
카메라는 두종류가 있다. 위의 소스가 가장 많이 사용하는 카메라이고, 아래의 케이스는 원근법을 무시하는 카메라다.

주로 게임에 사용을 많이 한다. (ex. 땅따먹기?)

```js
const camera = new THREE.OrthographicCamera(
  -(window.innerWidth / window.innerHeight), // left
  window.innerWidth / window.innerHeight, // right
  1, //top
  -1, // bottom
);
camera.position.x = 1;
camera.position.z = 5;
camera.position.y = 2;
camera.lookAt(0, 0, 0);
camera.zoom = 0.5;
camera.updateProjectionMatrix();
scene.add(camera);
```
<br />

### THREE.Mesh ?
mesh는 무대에 들어갈 배우나 사물에 사용된다. mesh는 geometry와 material의 조합으로 만들어 진다.

three.js의 공식 홈페이지에 따르면 매우 다양한 형태의 geometry 가 있다.

```js
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: 'tomato'
});

let mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```
mesh는 geometry와 material을 통대 만들었으며 material은 재원으로 생각하면 된다. 여기에 이미지나 색상 등을 넣을 수 있다.
<br />
<br />
