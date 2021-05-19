import { HTMLActions } from '@zoly-cro/hooks'

function mainFunction() {
  try {
    const components = document.querySelectorAll('.fnl-input-wrapper')
    if (components === undefined) return
    const cpf = document.querySelector('.fnl-input-wrapper #cpf').parentElement
    const rg = document.querySelector('.fnl-input-wrapper #rg').parentElement
    const dtNascimento = document.querySelector('.fnl-input-wrapper #dataNascimento').parentElement
    const anoConclusao = document.querySelector('.fnl-select-search #fnl-dataconclusao-search-input-div').parentElement
    const elements = [
      cpf,
      rg,
      dtNascimento,
      anoConclusao,
      document.querySelector('.fnl-flex-row #fnl-section-opcoes-vestibular').parentElement,
      document.querySelector('#zoly-section-endereco'),
      document.querySelector('#zoly-section-acessibilidade')
    ]
    
    HTMLActions.hideElements(elements)
  } catch (e) {
    console.error(e)
  }
}

window.addEventListener('loadedmetadata', mainFunction())

