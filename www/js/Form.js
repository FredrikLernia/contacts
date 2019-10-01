class Form {

  constructor() {
    this.inputs = [
      {
        label: 'Namn',
        type: 'text',
        id: 'name'
      },
      {
        label: 'E-post',
        type: 'text',
        id: 'email'
      },
      {
        label: 'Telefon',
        type: 'text',
        id: 'telephone'
      }
    ]
    this.outerElement = document.createElement('div')
    this.createForm()
  }

  createForm() {
    this.html = this.inputs.map(({ label, type, id }) => `
      <label for="${id}">${label}</label><input type="${type}" id="${id}">
    `)

    this.outerElement.innerHTML = this.html.join('')
  }

}

const form = new Form()

document.querySelector('body').append(form.outerElement)