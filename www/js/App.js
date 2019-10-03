/* const arr = [
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

localStorage.setItem('contacts', JSON.stringify(arr)) */

class App {

  constructor() {
    this.addInstanceId()
  }

  createDOM() {
    this.listen()
    const main = this.createEl('main', 'body')
    this.createEl('div', main, { 'class': 'form' })
    this.createEl('div', main, { 'class': 'contacts' })

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
      if (e.target.className.includes('add-input-field')) this.addInputSection(e.target.id, this.form.instanceId)

      if (e.target.className.includes('save-contact')) this.saveContact(e)

      if (e.target.className.includes('delete-contact')) this.deleteContact(e.target.id, this.contacts.instanceId)
    })
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

  async addInputSection(id, instanceId) {
    const inputValues = await this.readForm()
    const [name, email, telephone] = this.inputSections

    name.inputs[0].value = inputValues.name
    email.inputs.forEach((input, i) => input.value = inputValues.email[i])
    telephone.inputs.forEach((input, i) => input.value = inputValues.telephone[i])

    const inputSection = this.inputSections.find(section => section.id === id)
    const inputId = inputSection.inputs.length + 1
    const newInput = { type: 'text', className: `${id}-input`, id: `${id}${inputId}`, value: '' }
    inputSection.inputs.push(newInput)

    document.querySelector(`[data-instance-id="${instanceId}"]`).outerHTML = ''
    this.form = new Form(this.inputSections)
  }

  loadContacts() {
    // returnera false och skriv ut meddelande i contacts istället (för fler användningsområden)
    if (localStorage.contacts === '[]') return 'Det finns inga kontakter tillagda ännu...'

    try {
      return JSON.parse(localStorage.contacts)
    }
    catch (e) {
      return 'Det finns inga kontakter tillagda ännu...'
    }
  }

  async saveContact(e) {
    const time = new Date().getTime()

    const data = await this.readForm()
    data.id = time

    try {
      let contacts = JSON.parse(localStorage.contacts)
      contacts.push(data)
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
    catch(e) {
      localStorage.setItem('contacts', JSON.stringify([data]))
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

  async deleteContact(id, instanceId) {
    const contacts = await this.loadContacts()
    contacts.splice(contacts.findIndex(contact => contact.id === +id), 1)
    localStorage.setItem('contacts', JSON.stringify(contacts))

    document.querySelector(`[data-instance-id="${instanceId}"]`).outerHTML = ''
    this.contacts = new Contacts()
  }

}