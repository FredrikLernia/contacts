class App {

  constructor() {
    this.createDOM()
  }

  createDOM() {
    const main = document.createElement('main')
    main.append(new Form().outerEl)
    main.append(new Table().outerEl)

    document.querySelector('body').append(main)
  }

}

new App()