class App {

  constructor() { }

  /* createDOM() {
    this.listen()

    const main = this.createEl('main', 'body')
    this.createEl('div', main, { 'class': 'form' })
    this.createEl('div', main, { 'class': 'contacts' })
    this.createEl('div', main, { 'class': 'contact' })

    this.inputSections = [
      { label: 'Namn', id: 'name', inputs: [{ type: 'text', className: 'name-input', id: 'name', value: '' }] },
      { label: 'Epost', id: 'email', inputs: [{ type: 'text', className: 'email-input', id: 'email', value: '' }] },
      { label: 'Telefon', id: 'telephone', inputs: [{ type: 'text', className: 'telephone-input', id: 'telephone', value: '' }] }
    ]

    this.updateId = ''

    this.router = new Router(location.pathname, this.inputSections)
    
    this.form = new Form(this.inputSections)
    this.contacts = new Contacts()
  } */
  
  createDOM() {
    this.listen()

    const main = this.createEl('main', 'body')
    this.createEl('div', main, { 'class': 'form' })
    this.createEl('div', main, { 'class': 'contacts' })
    this.createEl('div', main, { 'class': 'contact' })

    /* this.inputSections = [
      { label: 'Namn', id: 'name', inputs: [{ type: 'text', className: 'name-input', id: 'name', value: '' }] },
      { label: 'Epost', id: 'email', inputs: [{ type: 'text', className: 'email-input', id: 'email', value: '' }] },
      { label: 'Telefon', id: 'telephone', inputs: [{ type: 'text', className: 'telephone-input', id: 'telephone', value: '' }] }
    ] */

    this.updateId = ''

    // this.router = new Router(location.pathname)
    this.router = new Router()
    
    /* this.form = new Form(this.inputSections)
    this.contacts = new Contacts() */
  }

  listen() {
    window.addEventListener('click', e => {
      if (e.target.className.includes('add-input-field')) this.addInputSection(e.target.id)
      if (e.target.className.includes('save-contact')) this.saveContact(e.target.id)
      if (e.target.className.includes('edit-contact')) this.editContact(e.target.id)
      if (e.target.className.includes('delete-contact')) this.deleteContact(e.target.id)
      if (e.target.className.includes('update-contact')) this.updateContact(e.target.id)
      if (e.target.closest('.change-version')) this.changeVersion(e.target.parentElement.id)
      if (e.target.className.includes('exit-form')) this.exitForm()
      if (e.target.closest('.go-back')) this.goBack()
    })

    window.addEventListener('popstate', () => {
      this.router.frontendRouter(location.pathname)
    })
  }

  createEl(tagName, parent, attributes = '') {
    const el = document.createElement(tagName)

    if (attributes) Object.keys(attributes).forEach(attribute => el.setAttribute(attribute, attributes[attribute]))

    if (typeof parent === 'string') document.querySelector(parent).append(el)
    else parent.append(el)

    return el
  }

  readForm() {
    const name = document.querySelector('input#name-input').value

    const emailSectionEls = document.querySelector('div#input-section-email').children
    const email = []
      .filter.call(emailSectionEls, input => input.tagName === 'INPUT')
      .map(input => input.value)

    const telephoneSectionEls = document.querySelector('div#input-section-telephone').children
    const telephone = []
      .filter.call(telephoneSectionEls, input => input.tagName === 'INPUT')
      .map(input => input.value)

    return { name, email, telephone }
  }

  /* async addInputSection(id) {
    const inputValues = await this.readForm()
    const [name, email, telephone] = this.inputSections

    name.inputs[0].value = inputValues.name
    email.inputs.forEach((input, i) => input.value = inputValues.email[i])
    telephone.inputs.forEach((input, i) => input.value = inputValues.telephone[i])

    const inputSection = this.inputSections.find(section => section.id === id)
    const inputId = inputSection.inputs.length + 1
    const newInput = { type: 'text', className: `${id}-input`, id: `${id}${inputId}`, value: '' }
    inputSection.inputs.push(newInput)

    document.querySelector('div.form-section').outerHTML = ''
    this.updateId ? this.form = new Form(this.inputSections, this.updateId) : this.form = new Form(this.inputSections)
  } */
  
  addInputSection(id) {
    const inputSection = document.querySelector(`div#input-section-${id}`)
    this.createEl('input', inputSection, { type: 'text', 'class': `${id}-input`, value: '' })
  }

  /* saveContact(id = '') {
    const data = this.readForm()

    if (!data.name) {
      alert('Du måste ange ett namn!')
      return false
    }

    const time = new Date().getTime()
    data.email = data.email.filter(email => email)
    data.telephone = data.telephone.filter(telephone => telephone)
    data.added = time

    let contact
    if (id) {
      contact = contacts.find(contact => contact.id === +id)
      contact.versions.push(data)
      contact.chosenVersion = contact.versions.length - 1
    }
    else {
      contact = {
        id: time,
        chosenVersion: 0,
        versions: [data]
      }
      contacts.push(contact)
    }
    contacts.save()

    if (!id) {
      this.router.addRoutes()
    }

    if (id) {
      document.querySelector('div.form-section').outerHTML = ''
      this.form = ''
      document.querySelector('div.contact-section').outerHTML = ''
      this.contact = new Contact(id)
    }
    else {
      this.inputSections = [
        { label: 'Namn', id: 'name', inputs: [{ type: 'text', className: 'name-input', id: 'name', value: '' }] },
        { label: 'Epost', id: 'email', inputs: [{ type: 'text', className: 'email-input', id: 'email', value: '' }] },
        { label: 'Telefon', id: 'telephone', inputs: [{ type: 'text', className: 'telephone-input', id: 'telephone', value: '' }] }
      ]

      document.querySelector('div.form-section').outerHTML = ''
      this.form = new Form(this.inputSections)
      document.querySelector('div.contacts-section').outerHTML = ''
      this.contacts = new Contacts()
    }
  } */

  saveContact(id = '') {
    const data = this.readForm()

    if (!data.name) {
      alert('Du måste ange ett namn!')
      return false
    }

    const time = new Date().getTime()
    data.email = data.email.filter(email => email)
    data.telephone = data.telephone.filter(telephone => telephone)
    data.added = time

    let contact
    if (id) {
      contact = contacts.find(contact => contact.id === +id)
      contact.versions.push(data)
      contact.chosenVersion = contact.versions.length - 1
    }
    else {
      contact = {
        id: time,
        chosenVersion: 0,
        versions: [data]
      }
      contacts.push(contact)
    }
    contacts.save()

    if (!id) {
      this.router.addRoute(contact.id)
      this.router.frontendRouter('/')
    }
    else {
      this.router.frontendRouter(`/${id}`)
    }
    /* if (id) {
      document.querySelector('div.form-section').outerHTML = ''
      this.form = ''
      document.querySelector('div.contact-section').outerHTML = ''
      this.contact = new Contact(id)
    }
    else {
      document.querySelector('div.form-section').outerHTML = ''
      this.form = new Form(this.inputSections)
      document.querySelector('div.contacts-section').outerHTML = ''
      this.contacts = new Contacts()
    } */
  }

  editContact(id) {
    /* this.contact = new Contact(id)

    document.querySelector('div.form-section').outerHTML = ''
    this.form = ''
    document.querySelector('div.contacts-section').outerHTML = ''
    this.contacts = '' */
    // history.pushState(null, null, `/${id}`)
    // this.router.appendComponents(`/${id}`)
    history.pushState(null, null, `/${id}`)
    this.router.frontendRouter(`/${id}`)
  }

  deleteContact(id) {
    const contact = contacts.find(contact => contact.id === +id)

    if (confirm(`Är du säker på att du vill ta bort ${contact.versions[contact.chosenVersion].name}?`))
    contacts.splice(contacts.findIndex(contact => contact.id === +id), 1)
    contacts.save()

    // this.router.addRoutes()
    this.router.frontendRouter('/')
    /* document.querySelector('div.contacts-section').outerHTML = ''
    this.contacts = new Contacts() */
  }

  updateContact(id) {
    /* this.updateId = id

    const contact = contacts.find(contact => contact.id === +id)
    const { name, email, telephone } = contact.versions[contact.chosenVersion] */

    /* this.inputSections = [
      { label: 'Namn', id: 'name', inputs: [{ type: 'text', className: 'name-input', id: 'name', value: name }] },
      { label: 'Epost', id: 'email', inputs: email.length ? email.map((x, i) => ({ type: 'text', className: 'email-input', id: i ? `email${i}` : 'email', value: x })) : [{ type: 'text', className: 'email-input', id: 'email', value: '' }] },
      { label: 'Telefon', id: 'telephone', inputs: telephone.length ? telephone.map((x, i) => ({ type: 'text', className: 'telephone-input', id: i ? `telephone${i}` : 'telephone', value: x })) : [{ type: 'text', className: 'telephone-input', id: 'telephone', value: '' }] }
    ] */

    this.form = new Form(id)
  }

  changeVersion(targetId) {
    const id = targetId.split('-')[0]
    const version = +targetId.split('-')[1]
    const contact = contacts.find(contact => contact.id === +id)

    if (confirm(`Vill du ändra version av ${contact.versions[contact.chosenVersion].name}?`)) {
      contact.chosenVersion = version
      contacts.save()

      document.querySelector('div.contact-section').outerHTML = ''
      this.contact = new Contact(id)

      if (document.querySelector('div.form-section')) {
        document.querySelector('div.form-section').outerHTML = ''
        this.form = ''
      }
    }
  }

  exitForm() {
    this.form = ''
    document.querySelector('div.form-section').outerHTML = ''
  }

  goBack() {
    history.pushState(null, null, '/')
    this.router.frontendRouter('/')
  }

}