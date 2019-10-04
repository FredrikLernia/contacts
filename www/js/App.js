class App {

  constructor() {}

  createDOM() {
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

    this.form = new Form(this.inputSections)
    this.contacts = new Contacts()
  }

  listen() {
    window.addEventListener('click', e => {
      if (e.target.className.includes('add-input-field')) this.addInputSection(e.target.id)

      if (e.target.className.includes('save-contact')) this.saveContact(e)

      if (e.target.className.includes('update-contact')) this.updateContact(e.target.id)

      if (e.target.className.includes('delete-contact')) this.deleteContact(e.target.id)
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
    const name = document.querySelector('input#name').value

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

  async addInputSection(id) {
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
    this.form = new Form(this.inputSections)
  }

  loadContacts() {
    if (localStorage.contacts === '[]') return false

    try {
      return JSON.parse(localStorage.contacts)
    }
    catch (e) {
      return false
    }
  }

  async saveContact() {
    const time = new Date().getTime()

    const data = await this.readForm()
    data.added = time

    const newContact = {
      id: time,
      chosenVersion: 0,
      versions: [data]
    }

    try {
      let contacts = JSON.parse(localStorage.contacts)
      contacts.push(newContact)
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
    catch(e) {
      localStorage.setItem('contacts', JSON.stringify([newContact]))
    }

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

  updateContact(id) {
    this.contact = new Contact(id)

    document.querySelector('div.form-section').outerHTML = ''
    document.querySelector('div.contacts-section').outerHTML = ''
  }

  async deleteContact(id) {
    const contacts = await this.loadContacts()
    contacts.splice(contacts.findIndex(contact => contact.id === +id), 1)
    localStorage.setItem('contacts', JSON.stringify(contacts))

    document.querySelector('div.contacts-section').outerHTML = ''
    this.contacts = new Contacts()
  }

}