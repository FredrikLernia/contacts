class Router extends App {

  constructor(path, inputSections) {
    super()
    this.path = path
    this.inputSections = inputSections
    this.addRoutes()
    this.appendComponents(this.path)
  }

  clearDOM() {
    const formSection = document.querySelector('div.form-section')
    const contactsSection = document.querySelector('div.contacts-section')
    const contactSection = document.querySelector('div.contact-section')
    if (formSection) formSection.outerHTML = ''
    if (contactsSection) contactsSection.outerHTML = ''
    if (contactSection) contactSection.outerHTML = ''
  }

  addRoutes() {
    this.routes = {}

    this.routes['/'] = () => {
      this.clearDOM()
      this.form = new Form(this.inputSections)
      this.contact = new Contacts()
    }

    contacts.forEach(({ id }) => {
      this.routes[`/${id}`] = () => {
        this.clearDOM()
        this.contact = new Contact(id)
      }
    })

    console.log(this.routes)
  }

  appendComponents(path) {
    this.routes[path]()
  }

}