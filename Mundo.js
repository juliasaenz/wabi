import * as THREE from 'https://unpkg.com/three@0.121.1/build/three.module.js';
import { RGBELoader } from 'https://unpkg.com/three@0.121.1/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.121.1/examples/jsm/controls/OrbitControls.js';
export class Mundo{
    constructor(){
        this.escena = new THREE.Scene();
        this.camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,1,1000);
        this.camara.position.z = 1.7;
        this.renderizador = new THREE.WebGLRenderer();
        this.renderizador.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderizador.domElement );
        //this.usarOrbitControl = false;
    }
    crearOrbitControl(){
        this.controls = new OrbitControls( this.camara, this.renderizador.domElement );
        this.controls.minDistance = 2;
        this.controls.maxDistance = 5;
    }
    renderizar(){
        this.renderizador.render( this.escena, this.camara );
    }
}
