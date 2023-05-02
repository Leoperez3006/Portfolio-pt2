<template>
    <div ref="canvasRef"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { reactive, ref, onMounted, onBeforeUnmount } from 'vue';
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
  
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: '#ffffff'
      }
    },
    setup(props) {
      const canvasRef = ref(null);
      const scene = reactive(new THREE.Scene());
      const camera = reactive(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
      const renderer = reactive(new THREE.WebGLRenderer({ antialias: true }));
      const textMesh = reactive(null);
  
      onMounted(async () => {
        let textMesh = {};
        // set up the Three.js scene, camera, and renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
  
        camera.position.z = 500;
  
        // load the font asynchronously
        const loader = new FontLoader();
        const path= ("src/assets/Fonts/gentilis_bold.typeface.json")
        const font = await loader.loadAsync(path);
  
        // create a text geometry and material
      const shapes = font.generateShapes(props.text, props.size);
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const normals = [];
      const uvs = [];
      const indices = [];
      let index = 0;
      const extrudeSettings = { depth: 5, bevelEnabled: true, bevelThickness: 10, bevelSize: 8, bevelSegments: 5, curveSegments: 12 };

      for (const shape of shapes) {
        const geometryShape = new THREE.ShapeBufferGeometry(shape);
        const numPoints = geometryShape.attributes.position.count;
        geometryShape.translate(-0.5 * numPoints, 0, 0);
        const vertices = geometryShape.attributes.position.array;
        const normalsShape = geometryShape.attributes.normal.array;
        const uvsShape = geometryShape.attributes.uv.array;

        for (let i = 0; i < numPoints; i++) {
          positions.push(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
          normals.push(normalsShape[i * 3], normalsShape[i * 3 + 1], normalsShape[i * 3 + 2]);
          uvs.push(uvsShape[i * 2], uvsShape[i * 2 + 1]);
        }

        for (let i = 0; i < numPoints - 1; i++) {
          indices.push(index + i, index + i + 1, index + numPoints + i);
          indices.push(index + numPoints + i, index + i + 1, index + numPoints + i + 1);
        }

        index += numPoints;
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
      
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geometry.setIndex(indices);
      const textMaterial = new THREE.MeshBasicMaterial({
        color: props.color
  });

  // create the text mesh and add it to the scene
  textMesh.value = new THREE.Mesh(geometry, textMaterial);
  scene.add(textMesh.value);

  // render the scene
  const animate = () => {
    requestAnimationFrame(animate);
    textMesh.value.rotation.x += 0.01;
    textMesh.value.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
});

onBeforeUnmount(() => {
  // clean up the Three.js scene
  document.body.removeChild(renderer.domElement);
});

return {
  canvasRef
};}
};
</script>

