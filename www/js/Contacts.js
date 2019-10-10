class Contacts extends App {

  constructor() {
    super()
    this.tableHeadings = ['Namn', 'E-post', 'Telefon', '']
    this.createSection()
  }

  createSection() {
    const contactsSection = this.createEl('div', 'div.contacts', { 'class': 'contacts-section' })

    const contactsHeader = this.createEl('div', contactsSection, { 'class': 'contacts-header' })
    this.createEl('i', contactsHeader, { 'class': 'far fa-address-card' })
    this.createEl('h3', contactsHeader).innerText = 'Kontakter'

    // Small devices
    const contactsSmall = this.createEl('div', contactsSection, { 'class': 'contacts-small' })

    contacts.forEach(contact => {
      const { id } = contact
      contact = contact.versions[contact.chosenVersion]

      const contactDiv = this.createEl('div', contactsSmall, { 'class': 'contact-info clearfix' })

      this.createEl('h3', contactDiv).innerHTML = `<u>${contact.name}</u><i class="fas fa-user-times delete-contact" id="${id}"></i><i class="far fa-edit edit-contact" id="${id}"></i>`

      const emailDiv = this.createEl('div', contactDiv, { 'class': 'info-div' })
      this.createEl('p', emailDiv, { 'class': 'info-heading' }).innerHTML = '<i class="fas fa-envelope"></i> <strong>E-post</strong>'
      contact.email.forEach(email => {
        this.createEl('p', emailDiv).innerText = email
      })

      const telephoneDiv = this.createEl('div', contactDiv, { 'class': 'info-div' })
      this.createEl('p', telephoneDiv, { 'class': 'info-heading' }).innerHTML = '<i class="fas fa-phone"></i> <strong>Telefon</strong>'
      contact.telephone.forEach(telephone => {
        this.createEl('p', telephoneDiv).innerText = telephone
      })
    })

    // Large devices
    const table = this.createEl('table', contactsSection)

    const thead = this.createEl('thead', table)
    const tr = this.createEl('tr', thead)
    this.tableHeadings.forEach(tableHeading => this.createEl('th', tr).innerText = tableHeading)

    const tbody = this.createEl('tbody', table)

    if (contacts.length) {
      contacts.forEach(contact => {
        const { id, chosenVersion, versions } = contact
        const version = versions[chosenVersion]
        const { name, email, telephone } = version

        const tr = this.createEl('tr', tbody)
        this.createEl('td', tr).innerText = name
        this.createEl('td', tr).innerText = email.join('\n')
        this.createEl('td', tr).innerText = telephone.join('\n')
        const editTd = this.createEl('td', tr, { 'class': 'edit-column' })
        this.createEl('i', editTd, { 'class': 'far fa-edit edit-contact', 'id': id, 'title': 'Redigera kontakt' })
        this.createEl('i', editTd, { 'class': 'fas fa-user-times delete-contact', 'id': id, 'title': 'Ta bort kontakt' })
      })
    }
    else {
      const emptyContacts = this.createEl('p', contactsSection, { 'class': 'empty-contacts' })
      emptyContacts.innerText = 'Det finns inga kontakter tillagda ännu...'
    }
  }

}