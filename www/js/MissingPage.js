class MissingPage {
  
  constructor() {
    this.createSection()
  }

  createSection() {
    const div = document.createElement('div')
    div.innerText = 'Kunde inte hitta kontakten du sökte efter :('
    const main = document.querySelector('main')
    main.append(div)
  }

}