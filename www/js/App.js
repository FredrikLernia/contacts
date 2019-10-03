const arr = [
  {
    id: 1,
    name: 'Hasse',
    email: ['hasse@email.com'],
    telephone: ['071-293 87 44', '074-335 54 34']
  },
  {
    id: 2,
    name: 'Lasse',
    email: ['lasse@email.com'],
    telephone: ['074-423 22 54']
  }
]

localStorage.setItem('contacts', JSON.stringify(arr))

class App {

  constructor() {
    this.addInstanceId()
    this.listen()
    // this.createDOM()
    // this.createEventListener()
  }

  /* createEventListener() {
    window.addEventListener('click', e => {
      if (e.target.className.includes('delete')) {
        const contacts = JSON.parse(localStorage.contacts)
        contacts.splice(contacts.findIndex(contact => contact.id === +e.target.id), 1)
        localStorage.setItem('contacts', contacts)
        e.target.parentNode.parentNode.style.display = 'none'
      }
    })
  } */

  createDOM() {
    this.createEl('main', 'body')
    this.contacts = new Contacts()
    // const main = document.createElement('main')
    // main.append(this.table)

    // document.querySelector('body').append(main)

    // this.form = new Form().outerEl
    // main.append(this.form)
    // this.table = new Table()

    //this.getContacts()
    //new Contacts()
  }

  addInstanceId() {
    App.co = App.co || 0
    this.instanceId = App.co
    App.co++
  }

  createEl(tagName, parent, attributes = '') {
    const el = document.createElement(tagName)

    if (attributes) Object.keys(attributes).forEach(attribute => el.setAttribute(attribute, attributes[attribute]))

    if (typeof parent === 'string') document.querySelector(parent).append(el)
    else parent.append(el)

    return el
  }

  listen() {
    window.addEventListener('click', e => {
      if (e.target.className.includes('delete-contact')) {
        this.deleteContact(e.target.id)
      }
    })
  }

  loadContacts() {
    if (localStorage.contacts === '[]') return 'Det finns inga kontakter tillagda ännu...'

    try {
      return JSON.parse(localStorage.contacts)
    }
    catch (e) {
      return 'Det finns inga kontakter tillagda ännu...'
    }
  }

  deleteContact(id) {
    const divToRemove = document.querySelector(`[data-instance-id="${this.instanceId}"]`)
    if (divToRemove) {
      const contacts = this.loadContacts()
      contacts.splice(contacts.findIndex(contact => contact.id === +id), 1)
      localStorage.setItem('contacts', JSON.stringify(contacts))
      divToRemove.outerHTML = ''
      // this.contacts = ''
      this.contacts = new Contacts()
    }
  }

}

// new App().createDOM()