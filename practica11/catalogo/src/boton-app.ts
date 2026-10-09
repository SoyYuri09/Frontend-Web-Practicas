import estilos from './boton-app.css?inline';

export class BotonApp extends HTMLElement {
  static observedAttributes = ['variante', 'deshabilitado'];

  private boton: HTMLButtonElement;

  // ── CICLO DE VIDA ──────────────────────────────────────────────────────
  // El navegador llama estas funciones solo, en este orden. Nunca las
  // llamas tú. Son como los eventos de una ventana en Java: tú solo decides
  // qué hacer cuando pasan.

  // 1) constructor — cuando se CREA el elemento (al leer el HTML o con
  //    document.createElement). Todavía no está en la página: aquí se arma
  //    el Shadow DOM, pero no se leen atributos ni se toca el resto del DOM.
  constructor() {
    super(); 

    const sombra = this.attachShadow({ mode: 'open' });

    sombra.innerHTML = `
      <style>${estilos}</style>
      <button><slot></slot></button>
    `;
    this.boton = sombra.querySelector('button')!;
  }

  // 2) connectedCallback — cuando la etiqueta ENTRA a la página. Aquí ya
  //    existen los atributos: es el lugar para pintar, pedir datos o poner
  //    listeners de afuera (window, document).
  connectedCallback() {
    this.pintar();
  }

  // 3) attributeChangedCallback(nombre, anterior, nuevo) — cada vez que
  //    cambia un atributo de observedAttributes. Recibe cuál cambió, su valor
  //    viejo y el nuevo. Aquí no los usamos: con cualquier cambio se repinta.
  attributeChangedCallback() {
    this.pintar();
  }

  // 4) disconnectedCallback — cuando la etiqueta SALE de la página
  //    (element.remove()). Sirve para limpiar: quitar listeners de window,
  //    parar un setInterval. Este botón no deja nada pendiente, por eso no
  //    lo necesita.
  // disconnectedCallback() {
  //   console.log('boton-app salió de la página');
  // }

  // 5) adoptedCallback — cuando la etiqueta se MUDA a otro documento (por
  //    ejemplo, a un <iframe>). Casi nunca se usa; se menciona para que
  //    sepan que existe.
  // adoptedCallback() {
  //   console.log('boton-app se mudó de documento');
  // }

  private pintar() {
    this.boton.className = this.getAttribute('variante') ?? 'primario';
    this.boton.disabled = this.hasAttribute('deshabilitado');
  }
}

customElements.define('boton-app', BotonApp);