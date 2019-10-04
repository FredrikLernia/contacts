class Contact extends App {

  constructor(id) {
    super()
    this.id = id
    this.tableHeadings = ['Namn', 'E-post', 'Telefon', 'Skapad', '']
    this.createSection()
  }

  getContact() {
    const contacts = this.loadContacts()
    const contact = contacts.find(contact => contact.id === +this.id)
    console.log(contact)
    return contact
  }

  createSection() {
    const contact = this.getContact()
    const contactSection = this.createEl('div', 'div.contact', { 'class': 'contact-section' })

    const contactHeader = this.createEl('div', contactSection, { 'class': 'contact-header' })
    this.createEl('i', contactHeader, { 'class': 'far fa-address-card' })
    this.createEl('h3', contactHeader).innerText = contact.versions[contact.chosenVersion].name

    const table = this.createEl('table', contactSection)

    const thead = this.createEl('thead', table)
    const tr = this.createEl('tr', thead)
    this.tableHeadings.forEach(tableHeading => this.createEl('th', tr).innerText = tableHeading)

    const tbody = this.createEl('tbody', table)
    contact.versions.forEach((versions, i) => {
      const { name, email, telephone, added } = versions
      const tr = this.createEl('tr', tbody, { 'class': contact.chosenVersion === i ? 'selected-version' : ''})
      this.createEl('td', tr).innerText = name
      this.createEl('td', tr).innerText = email.join('\n')
      this.createEl('td', tr).innerText = telephone.join('\n')
      this.createEl('td', tr).innerText = new Date(added).toLocaleDateString('sv-SE', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})
      this.createEl('td', tr)
    })
  }

}

// Template of localStorage structure

/* [
  {
    chosenVersion: 2,
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
  },
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