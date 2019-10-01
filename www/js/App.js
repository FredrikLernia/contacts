window.addEventListener('click', e => {
  if (e.target.className.includes('delete')) {
    const contacts = JSON.parse(localStorage.contacts)
    contacts.splice(contacts.findIndex(contact => contact.id === +e.target.id), 1)
    localStorage.setItem('contacts', contacts)
  }
})

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