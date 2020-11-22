import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';

export class Mundo {

  constructor() {
    // camara
    this.camara = new THREE.PerspectiveCamera();
    this.camara.position.set(0, 0, 0); //---- la camara se inicializa en 0,0,0
    // escena
    this.escena = new THREE.Scene();
    this.escena.add(this.camara); //---- la camara tiene que estar adentro de la escena para moverse con la escena
    // renderizador
    this.renderizador = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderizador.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderizador.domElement);
  }

  iluminar() {
    var light = new THREE.AmbientLight(0x404040); // soft white light
    this.escena.add(light);

    var puntual = new THREE.PointLight(0xffffff, 1, 100);
    puntual.position.set(1, 1.5, 1.2);
    this.escena.add(puntual);

    puntual = new THREE.PointLight(0xffaa00, 1, 100);
    puntual.position.set(-1, 1.5, 1.2);
    this.escena.add(puntual);

    puntual = new THREE.PointLight(0xff00ff, 1, 100);
    puntual.position.set(1, -1.5, 1.2);
    this.escena.add(puntual);

    puntual = new THREE.PointLight(0xffffff, 1, 100);
    puntual.position.set(1, -1.5, -1.2);
    this.escena.add(puntual);
  }

  dibujar() {
    this.renderizador.render(this.escena, this.camara);
  }
}
