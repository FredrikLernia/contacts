// Look at extending components to get access to partens methods

class App {

  constructor() {
    this.addInstanceId()
    // this.createDOM()
    // this.createEventListener()
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
    this.createEl('main', 'body')
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

  loadContacts() {
    try {
      return JSON.parse(localStorage.contacts)
    }
    catch(e) {
      return 'Det finns inga kontakter tillagda ännu...'
    }
  }

}

new App().createDOM()