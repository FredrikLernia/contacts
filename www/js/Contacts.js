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

    const table = this.createEl('table', contactsSection)

    const thead = this.createEl('thead', table)
    const tr = this.createEl('tr', thead)
    this.tableHeadings.forEach(tableHeading => this.createEl('th', tr).innerText = tableHeading)

    const tbody = this.createEl('tbody', table)
    const contacts = this.loadContacts()
    if (contacts) {
      contacts.forEach(({ id, name, email, telephone }) => {
        const tr = this.createEl('tr', tbody)
        this.createEl('td', tr).innerText = name
        this.createEl('td', tr).innerText = email.join('\n')
        this.createEl('td', tr).innerText = telephone.join('\n')
        const editTd = this.createEl('td', tr)
        this.createEl('i', editTd, { 'class': 'fas fa-user-times delete-contact', 'id': id })
      })
    }
    else {
      const emptyContacts = this.createEl('p', contactsSection, { 'class': 'empty-contacts' })
      emptyContacts.innerText = 'Det finns inga kontakter tillagda ännu...'
    }
  }

}