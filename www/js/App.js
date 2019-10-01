class App {

  constructor() {
    this.createDOM()
    this.createEventListener()
  }

  createEventListener() {
    window.addEventListener('click', e => {
      if (e.target.className.includes('delete')) {
        const contacts = JSON.parse(localStorage.contacts)
        contacts.splice(contacts.findIndex(contact => contact.id === +e.target.id), 1)
        localStorage.setItem('contacts', contacts)
        e.target.parentNode.parentNode.style.display = 'none'
      }
    })
  }

  createDOM() {
    const main = document.createElement('main')
    // main.append(this.table)

    document.querySelector('body').append(main)

    this.form = new Form().outerEl
    main.append(this.form)
    this.table = new Table()
  }

}

new App()