class XDialog extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.querySelector("dialog").addEventListener(
      "close",
      this.#runSomeFunction
    );
  }

  #runSomeFunction(e) {
    console.log(e.target.returnValue);
  }
}

customElements.define("x-dialog", XDialog);
