class Contacts extends App {

  constructor() {
    super()
    this.tableHeadings = ['Namn', 'E-post', 'Telefon', '']
    this.createSection()
  }

  async createSection() {
    const contactsSection = this.createEl('div', 'div.contacts', { 'class': 'contacts-section' })

    const contactsHeader = this.createEl('div', contactsSection, { 'class': 'contacts-header' })
    this.createEl('i', contactsHeader, { 'class': 'far fa-address-card' })
    this.createEl('h3', contactsHeader).innerText = 'Kontakter'

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