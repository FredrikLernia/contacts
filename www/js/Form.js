class Form {

  constructor() {
    this.inputsData = [
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
    this.inputs = this.inputsData.map(({ label, type, id }) => `
      <label for="${id}">${label}</label><input type="${type}" id="${id}">
    `)

    this.submitButton = document.createElement('button')
    this.submitButton.innerText = 'Spara'

    this.outerElement.innerHTML = this.inputs.join('')
    this.outerElement.append(this.submitButton)
  }

  submitForm() {

  }

}

const form = new Form()

document.querySelector('body').append(form.outerElement)