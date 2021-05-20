export function handleElements() {
  try {
    const components = document.querySelectorAll('.fnl-input-wrapper')
    if (components === undefined) return

    const cpf = document.querySelector('#cpf').closest('.fnl-form')
    cpf.classList.add('zoly-100')

    const rg = document.querySelector('#rg').closest('.fnl-form')
    const dtNascimento = document.querySelector('#dataNascimento').closest('.fnl-form')
    const anoConclusao = document.querySelector('#fnl-dataconclusao-search-input-div').closest('.fnl-form')
    const divCheckBox = document.querySelector('#whats-app').closest('.fnl-checkbox.fnl-d-inline')
    const mainDiv = document.querySelector('#formInscricao > .fnl-steps-formgroup')
    const newDocumentosSection = document.createElement('div')
    const h2Title = document.createElement('h2')
    const hr = document.createElement('hr')
    const celular = document.getElementById('telefone')
    const celularWrapper = document.querySelector('#telefone').closest('.fnl-form')
    const aceiteSMS = document.querySelector('#aceiteSMS').closest('.fnl-checkbox')
    
    const hrDadosPessoais = document.querySelector('#fnl-section-endereco')
    
    mainDiv.insertBefore(newDocumentosSection, hrDadosPessoais)
    
    newDocumentosSection.id = 'zoly-section-documentos'
    h2Title.innerText = 'DOCUMENTOS'
    
    h2Title.classList.add('fnl-h2', 'fnl-m-b-24')
    hr.classList.add('fnl-hr', 'fnl-m-t-10')
    
    newDocumentosSection.appendChild(hr)
    newDocumentosSection.appendChild(h2Title)
    
    newDocumentosSection.appendChild(cpf)
    newDocumentosSection.appendChild(rg)
    newDocumentosSection.appendChild(dtNascimento)
    
    celularWrapper.parentNode.appendChild(divCheckBox)
    
    const elements = document.querySelectorAll('#formInscricao > div > *')
    
    const nope = false;
    elements.forEach((el) => {
      if (el.id == "fnl-section-endereco") {
        nope = true;
      }
      if (nope) {
        el.classList.add('hide')
      }
    })
    
    celular.addEventListener('blur', () => {
      var elements = document.querySelectorAll('#formInscricao > div > .hide')
      elements.forEach((el) => el.classList.remove('hide'))
    })
  } catch (e) {
    console.error(e)
  }
}
