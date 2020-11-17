import * as THREE from 'https://unpkg.com/three@0.121.1/build/three.module.js'; //'../threegit/build/three.module.js';;//'https://unpkg.com/three@0.118.3/build/three.module.js';//'../threeLibs/build/three.module.js';
import {
  Mundo
} from './Mundo.js';
import {
  RGBELoader
} from 'https://unpkg.com/three@0.121.1/examples/jsm/loaders/RGBELoader.js';
import {
  GLTFLoader
} from 'https://unpkg.com/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';
import {
  ilumnarConHDRI
} from './funciones.js';
import {
  OrbitControls
} from 'https://unpkg.com/three@0.121.1/examples/jsm/controls/OrbitControls.js';
var mundo;
var cubo1, cubo2;

function inicializar() {
  mundo = new Mundo();
  ilumnarConHDRI('hdr/campo2.hdr', mundo);
  mundo.crearOrbitControl();


  var loader = new GLTFLoader();
  loader.load('modelo/maceta.glb', function(gltf) {
    gltf.scene.scale.x = 5.5;
    gltf.scene.scale.y = 5.5;
    gltf.scene.scale.z = 5.5;
    gltf.scene.position.y = -0.75;
    gltf.scene.traverse(function(child) {
      if (child.isMesh) {
        if (child.name === 'vidrio') {
          child.material.opacity = 0.4;
          child.material.transparent = true;
          child.material.roughness = 0;
          child.material.refractionRatio = 0.8;
        }
      }
    });
    mundo.escena.add(gltf.scene);
  });
}

function animar() {
  requestAnimationFrame(animar);
  mundo.renderizar();
}
inicializar();
animar();
