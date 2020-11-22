import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.122.0/examples/jsm/loaders/GLTFLoader.js';
import {Mundo} from './Mundo.js';
import {cargarModelo} from './CargarModelo.js';
import {ContextoAR} from './ContextoAR.js';

var modelo;
var mundo;
var contextoAR

function iniciar() {
  mundo = new Mundo();
  mundo.iluminar();
  contextoAR = new ContextoAR(mundo);

  var marcador = contextoAR.crearMarcador('./marcadores/gatito.patt','wabi');
  var sucu = new THREE.Object3D();
  cargarModelo('./modelo/suculenta.glb', maceta);
  sucu.scale.x = 0.1;
  sucu.scale.y = 0.1;
  sucu.scale.z = 0.1;
  sucu.rotation.y = 90;
  marcador.add(sucu);

  /* loader = new GLTFLoader();
  loader.load('modelo/maceta.glb', function(gltf) {
    modelo = gltf.scene;
    modelo.scale.x = 6.5;
    modelo.scale.y = 6.5;
    modelo.scale.z = 6.5;
    modelo.position.y = -0.6;
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


  var loader2 = new GLTFLoader();
  loader2.load('modelo/suculenta.glb', function(gltf) {
    modelo2 = gltf.scene;
    modelo2.scale.x = 0.1;
    modelo2.scale.y = 0.1;
    modelo2.scale.z = 0.1;
    modelo2.position.y = -0.7;
    modelo2.position.z = -0.1;
    modelo2.rotation.x = 0.4;
    modelo2.traverse(function(child) {
      if (child.isMesh) {
        if (child.name === 'vidrio') {
          child.material.opacity = 0.4;
          child.material.transparent = true;
          child.material.roughness = 0;
          child.material.refractionRatio = 0.8;
        }
      }
    });
    mundo.escena.add(modelo2);
  }); */
// fin iniciar
}


function animar() {
  requestAnimationFrame(animar);
  //modelo.rotation.y += 0.007;
  //modelo2.rotation.y += 0.007;
  contextoAR.actualizar();
  mundo.dibujar();
}

/// main
iniciar();
animar();
