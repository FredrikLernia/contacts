class Router extends App {

  constructor() {
    super()
    this.frontendRouter(location.pathname)
  }

  clearDOM() {
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
  }

  addRoute(id) {
    this.routes[`/${id}`] = () => {
      this.clearDOM()
      this.contact = new Contact(id)
    }
  }

}