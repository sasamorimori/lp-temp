import Aos from './class/Aos';

export default class Main {
    constructor() {
        new Aos()
      }
  }

  window.addEventListener('DOMContentLoaded',() => {
    new Main()
  });
