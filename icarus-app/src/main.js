import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color("#b9cbd5");
scene.fog = new THREE.Fog("#b9cbd5", 16, 32);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.set(0, 1.65, 3.4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
document.body.appendChild(renderer.domElement);

// Materials
const mat = (color, roughness = 0.8, metalness = 0) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness });

const cream = mat("#e9e1d4");
const white = mat("#f8f2e8");
const wood = mat("#80543b");
const darkWood = mat("#422f27");
const walnut = mat("#593a2b");
const green = mat("#496a53");
const leaf = mat("#73916a");
const gold = mat("#c99c58", 0.35, 0.5);
const black = mat("#292c30", 0.35);
const glass = new THREE.MeshPhysicalMaterial({
  color: "#b9e0ed",
  roughness: 0.15,
  metalness: 0.1,
  transparent: true,
  opacity: 0.5,
});

// Lighting
scene.add(new THREE.HemisphereLight("#fff4e5", "#65747b", 2.0));

const sun = new THREE.DirectionalLight("#ffe0b0", 3.0);
sun.position.set(-3, 8, 5);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -9;
sun.shadow.camera.right = 9;
sun.shadow.camera.top = 9;
sun.shadow.camera.bottom = -9;
scene.add(sun);

const lampLight = new THREE.PointLight("#ffbd72", 45, 7);
lampLight.position.set(2.5, 2.35, -1.0);
scene.add(lampLight);

// Object helpers
function box(name, size, position, material, cast = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.name = name;
  mesh.position.set(...position);
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

function sphere(name, radius, position, material) {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 20, 14),
    material,
  );
  mesh.name = name;
  mesh.position.set(...position);
  mesh.castShadow = true;
  scene.add(mesh);
  return mesh;
}

function cylinder(name, radiusTop, radiusBottom, height, position, material) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 20),
    material,
  );
  mesh.name = name;
  mesh.position.set(...position);
  mesh.castShadow = true;
  scene.add(mesh);
  return mesh;
}

// Room: 10 x 9 metres
box("Floor", [10, 0.2, 9], [0, -0.1, 0], mat("#b99b7c"));
box("Ceiling", [10, 0.15, 9], [0, 3.1, 0], mat("#eee8df"), false);

box("Back wall", [10, 3, 0.18], [0, 1.5, -4.5], cream);
box("Left wall", [0.18, 3, 9], [-5, 1.5, 0], cream);
box("Right wall", [0.18, 3, 9], [5, 1.5, 0], cream);

// Front wall has an open doorway in the middle
box("Front left wall", [3.8, 3, 0.18], [-3.1, 1.5, 4.5], cream);
box("Front right wall", [3.8, 3, 0.18], [3.1, 1.5, 4.5], cream);

// Skirting boards
box("Back skirting", [9.8, 0.16, 0.08], [0, 0.08, -4.38], white);
box("Left skirting", [0.08, 0.16, 8.8], [-4.88, 0.08, 0], white);
box("Right skirting", [0.08, 0.16, 8.8], [4.88, 0.08, 0], white);

// Rug
box("Large rug", [4.2, 0.035, 3.0], [0, 0.025, 0.0], mat("#d6c3a6"));
box("Rug inset", [3.95, 0.012, 2.75], [0, 0.048, 0], mat("#b5a085"));

// Sofa against the back wall
box("Sofa base", [2.8, 0.42, 0.95], [0, 0.43, -3.15], mat("#718276"));
box("Sofa back", [2.8, 0.9, 0.25], [0, 0.88, -3.53], mat("#526858"));
box("Sofa left arm", [0.25, 0.62, 0.95], [-1.28, 0.62, -3.15], mat("#526858"));
box("Sofa right arm", [0.25, 0.62, 0.95], [1.28, 0.62, -3.15], mat("#526858"));

for (const x of [-0.8, 0, 0.8]) {
  box("Sofa cushion", [0.75, 0.16, 0.65], [x, 0.71, -3.12], mat("#9aab96"));
}

box("Throw pillow", [0.55, 0.5, 0.18], [-0.88, 1.05, -3.28], mat("#d3b58c"));
box("Throw pillow", [0.55, 0.5, 0.18], [0.88, 1.05, -3.28], mat("#c9d1bc"));

// Coffee table
box("Coffee table top", [2.0, 0.13, 0.95], [0, 0.68, -0.85], walnut);

for (const x of [-0.82, 0.82]) {
  for (const z of [-0.34, 0.34]) {
    box("Coffee table leg", [0.09, 0.62, 0.09], [x, 0.36, -0.85 + z], darkWood);
  }
}

// Books on the coffee table
for (let i = 0; i < 3; i++) {
  box(
    "Book",
    [0.42, 0.055, 0.28],
    [-0.48 + i * 0.04, 0.78 + i * 0.055, -0.8],
    [mat("#9d5f46"), mat("#d7c7a7"), mat("#647e75")][i],
  );
}

// Sideboard on the right
box("Sideboard body", [0.55, 0.85, 1.8], [4.45, 0.5, -2.25], walnut);
box("Sideboard top", [0.72, 0.09, 1.95], [4.42, 0.96, -2.25], wood);

for (let i = 0; i < 3; i++) {
  box(
    "Cabinet door",
    [0.025, 0.55, 0.48],
    [4.16, 0.5, -2.8 + i * 0.55],
    darkWood,
  );
}

// Decorative vase
cylinder("Vase body", 0.16, 0.23, 0.42, [4.32, 1.2, -2.0], mat("#d4bca0"));
cylinder("Vase neck", 0.09, 0.13, 0.2, [4.32, 1.48, -2.0], mat("#d4bca0"));

// Floor lamp
cylinder("Lamp base", 0.28, 0.28, 0.08, [2.65, 0.08, -2.2], black);
cylinder("Lamp pole", 0.035, 0.035, 1.7, [2.65, 0.95, -2.2], gold);
cylinder("Lamp shade", 0.2, 0.34, 0.38, [2.65, 1.95, -2.2], mat("#ead4ad"));

// Wall art on back wall
box("Art frame", [1.35, 1.0, 0.08], [-2.65, 2.05, -4.36], darkWood);
box("Art canvas", [1.18, 0.83, 0.035], [-2.65, 2.05, -4.3], mat("#d4b99a"));
sphere("Art sun", 0.2, [-2.85, 2.2, -4.265], gold);
box("Art horizon", [1.1, 0.18, 0.025], [-2.65, 1.78, -4.265], green);

// Window on left wall
box("Window frame", [0.08, 1.8, 2.3], [-4.86, 1.9, 0.0], white);
box("Window glass", [0.035, 1.58, 2.08], [-4.8, 1.9, 0.0], glass);
box("Window crossbar", [0.08, 0.06, 2.1], [-4.76, 1.9, 0], white);
box("Window divider", [0.08, 1.6, 0.06], [-4.76, 1.9, 0], white);

// Indoor plants
function plant(x, z, scale = 1) {
  cylinder(
    "Plant pot",
    0.25 * scale,
    0.18 * scale,
    0.42 * scale,
    [x, 0.21 * scale, z],
    mat("#a96f50"),
  );

  cylinder(
    "Plant soil",
    0.2 * scale,
    0.2 * scale,
    0.035 * scale,
    [x, 0.42 * scale, z],
    darkWood,
  );

  for (let i = 0; i < 9; i++) {
    const angle = i * 2.399;
    const height = (0.7 + (i % 3) * 0.17) * scale;

    const leafMesh = sphere(
      "Plant leaf",
      0.17 * scale,
      [
        x + Math.cos(angle) * 0.22 * scale,
        0.48 * scale + height * 0.55,
        z + Math.sin(angle) * 0.22 * scale,
      ],
      i % 2 ? green : leaf,
    );

    leafMesh.scale.set(0.75, 1.7, 0.75);
  }
}

plant(-4.0, -3.45, 1.0);
plant(3.9, 2.8, 0.9);

// Ceiling fixture
cylinder("Ceiling fixture", 0.24, 0.24, 0.07, [0, 2.98, 0], gold);
sphere("Ceiling light", 0.17, [0, 2.82, 0], mat("#fff0cc"));

// Collision zones: player cannot pass through the main furniture
const obstacles = [
  { x1: -1.48, x2: 1.48, z1: -3.72, z2: -2.55 },
  { x1: -1.1, x2: 1.1, z1: -1.48, z2: -0.2 },
  { x1: 3.85, x2: 4.85, z1: -3.25, z2: -1.25 },
  { x1: -4.5, x2: -3.55, z1: -4.0, z2: -3.0 },
  { x1: 2.25, x2: 3.05, z1: -2.65, z2: -1.75 },
];

// First-person controls
const keys = {};
let yaw = 0;
let pitch = 0;
let locked = false;

const playerRadius = 0.27;
const speed = 3.0;

window.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

window.addEventListener("blur", () => {
  for (const key in keys) keys[key] = false;
});

renderer.domElement.addEventListener("click", () => {
  renderer.domElement.requestPointerLock();
});

document.addEventListener("pointerlockchange", () => {
  locked = document.pointerLockElement === renderer.domElement;
});

document.addEventListener("mousemove", (e) => {
  if (!locked) return;

  yaw -= e.movementX * 0.002;
  pitch -= e.movementY * 0.002;
  pitch = THREE.MathUtils.clamp(pitch, -1.35, 1.35);

  camera.rotation.order = "YXZ";
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
});

function canMove(x, z) {
  // Keep the player inside the room
  if (x < -4.65 || x > 4.65 || z < -4.12 || z > 4.12) {
    return false;
  }

  return !obstacles.some(
    (o) =>
      x + playerRadius > o.x1 &&
      x - playerRadius < o.x2 &&
      z + playerRadius > o.z1 &&
      z - playerRadius < o.z2,
  );
}

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Main loop
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const delta = Math.min(clock.getDelta(), 0.05);

  if (locked) {
    const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));

    const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));

    const direction = new THREE.Vector3();

    if (keys.w || keys.arrowup) direction.add(forward);
    if (keys.s || keys.arrowdown) direction.sub(forward);
    if (keys.d || keys.arrowright) direction.add(right);
    if (keys.a || keys.arrowleft) direction.sub(right);

    if (direction.lengthSq() > 0) {
      direction.normalize().multiplyScalar(speed * delta);

      const nextX = camera.position.x + direction.x;
      const nextZ = camera.position.z + direction.z;

      // Separate axes allow sliding along walls
      if (canMove(nextX, camera.position.z)) {
        camera.position.x = nextX;
      }

      if (canMove(camera.position.x, nextZ)) {
        camera.position.z = nextZ;
      }
    }
  }

  renderer.render(scene, camera);
}

animate();
