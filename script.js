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
var modelo;

function inicializar() {
  mundo = new Mundo();
  mundo.escena.background = new THREE.Color(0x9BB59E);
  //ilumnarConHDRI('hdr/bosque.hdr', mundo);
  //mundo.crearOrbitControl();


  var loader = new GLTFLoader();
  loader.load('modelo/maceta.glb', function(gltf) {
    modelo = gltf.scene;
    modelo.scale.x = 6.5;
    modelo.scale.y = 6.5;
    modelo.scale.z = 6.5;
    modelo.position.y = -0.4;
    modelo.position.z = -0.1;
    modelo.rotation.x = 0.4;
    modelo.traverse(function(child) {
      if (child.isMesh) {
        if (child.name === 'vidrio') {
          child.material.opacity = 0.4;
          child.material.transparent = true;
          child.material.roughness = 0;
          child.material.refractionRatio = 0.8;
        }
      }
    });
    mundo.escena.add(modelo);
  });
}

function crearIluminacionDePrueba(){
    var light = new THREE.AmbientLight( 0xfafafa ); // soft white light
    mundo.escena.add( light );

    var puntual = new THREE.PointLight( 0xD5C9A4, 1, 100 );
    puntual.position.set( 1, 1.5, 1.2 );
    mundo.escena.add( puntual );
}

function animar() {
  requestAnimationFrame(animar);
  modelo.rotation.y += 0.01;
  mundo.renderizar();
}
inicializar();
crearIluminacionDePrueba();
animar();
