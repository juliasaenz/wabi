import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.122.0/examples/jsm/loaders/GLTFLoader.js';
import {Mundo} from './Mundo.js';
import {cargarModelo} from './CargarModelo.js';
import {ContextoAR} from './ContextoAR.js';

var maceta;
var mundo;
var contextoAR;
function iniciar(){
    mundo = new Mundo();
    mundo.iluminar();
    contextoAR = new ContextoAR(mundo);


    var marcador = contextoAR.crearMarcador('./marcadores/nombre.patt','flecha');
    maceta = new THREE.Object3D();
    cargarModelo('./modelo/macetaF002.glb',maceta);
    maceta.scale.x = 0.15;
    maceta.scale.y = 0.15;
    maceta.scale.z = 0.15;
    maceta.position.z = 0.7;
    marcador.add(maceta);
}

function animacion(){
    requestAnimationFrame(animacion);
    contextoAR.actualizar();
    mundo.dibujar();
}

iniciar();
//crearCajaDePrueba();
animacion();
