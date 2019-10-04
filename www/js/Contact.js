class Contact extends App {

  constructor(id) {
    super()
    this.id = id
    this.createSection()
  }

  getContact() {
    const contacts = this.loadContacts()
    console.log(contacts)
    const contact = contacts.find(contact => contact.id === this.id)
    return contact
  }

  createSection() {
    const contact = this.getContact()
    
    const contactSection = this.createEl('div', 'div.contact', { 'class': 'contact-section' })

    const contactHeader = this.createEl('div', contactSection, { 'class': 'contact-header' })
    this.createEl('i', contactHeader, { 'class': 'far fa-address-card' })
    this.createEl('h3', contactHeader).innerText = contact.name
  }

}

// Template of localStorage structure

/* [
  {
    chosenVersion: 1,
    versions: [
      {
        name: 'Kalle',
        email: ['kalle@email.com'],
        telephone: ['0712345612']
      },
      {
        name: 'Calle',
        email: ['calle2@hotmail.com', 'calle@gmail.com'],
        telephone: ['0712345612']
      },
      {
        name: 'Calle',
        email: ['calle2@hotmail.com', 'calle@gmail.com'],
        telephone: ['0754899334', '0799654471']
      }
    ]
  }
] */