class Router extends App {

  constructor() {
    super()
    this.frontendRouter(location.pathname)
    // this.appendComponents(this.path)
  }

  clearDOM() {
    /* const formSection = document.querySelector('div.form-section')
    const contactsSection = document.querySelector('div.contacts-section')
    const contactSection = document.querySelector('div.contact-section')
    if (formSection) formSection.outerHTML = ''
    if (contactsSection) contactsSection.outerHTML = ''
    if (contactSection) contactSection.outerHTML = '' */
    document.querySelector('div.form').innerHTML = ''
    document.querySelector('div.contacts').innerHTML = ''
    document.querySelector('div.contact').innerHTML = ''
  }

  frontendRouter(path) {
    this.routes = {
      '/': () => {
        this.clearDOM()
        new Form()
        new Contacts()
      },
      '/404': () => {
        this.clearDOM()
        new MissingPage()
      }
    }

    contacts.forEach(({ id }) => {
      this.routes[`/${id}`] = () => {
        this.clearDOM()
        new Contact(id)
      }
    })

    path = this.routes[path] ? path : '/404'

    this.routes[path]()

    /* this.routes['/'] = () => {
      this.clearDOM()
      this.form = new Form()
      this.contacts = new Contacts()
    } */

    /* contacts.forEach(({ id }) => {
      this.routes[`/${id}`] = () => {
        this.clearDOM()
        this.contact = new Contact(id)
      }
    }) */
  }

  addRoute(id) {
    this.routes[`/${id}`] = () => {
      this.clearDOM()
      this.contact = new Contact(id)
    }
  }

  /* appendComponents(path) {
    if (this.routes[path]) {
      this.routes[path]()
    }
    else {
      this.clearDOM()
      new MissingPage()
    }
  } */

}