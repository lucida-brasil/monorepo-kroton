import { HTMLActions } from "../../../../../../../libs/hooks"

export function handleElementsPitagoras() {
  try {
    const components = document.querySelectorAll('.fnl-input-wrapper')
    if (components === undefined) return
    const wpp = document.getElementById('whats-app').closest('.fnl-checkbox') 
    const cpf = document.querySelector('#cpf').closest('.fnl-form')
    const rg = document.querySelector('#rg').closest('.fnl-form')
    const email = document.querySelector('#email').closest('.fnl-form')
    const dtNascimento = document.querySelector('#dataNascimento').closest('.fnl-form')
    const anoConclusao = document.querySelector('#fnl-dataconclusao-search-input-div').closest('.fnl-form')
    const mainDiv = document.querySelector('.fnl-steps-formgroup')
    const celular = document.querySelector('#telefone') 
    const aceiteSMS = document.querySelector('#aceiteSMS').closest('.fnl-checkbox')    
    const hrDadosPessoais = document.querySelector('#fnl-section-endereco')
    // const hrAcessibilidade = document.querySelector('#fnl-section-acessibilidade')
    const newDocumentosSection = document.createElement('div')
    const documentosFormDiv = document.createElement('div')
    const h2Title = document.createElement('h2')
    const hr = document.createElement('hr')
    const divCheckboxWpp = document.createElement('div')

    
    divCheckboxWpp.innerHTML = `<div class="fnl-checkbox fnl-d-inline fnl-m-b-20">
    <div role="checkbox" aria-checked="false" tabindex="0" class="fnl-d-inline"><label
    for="zoly-checkbox" class="never-font-plus">
    <input type="checkbox" id="zoly-checkbox" class="fnl-m-b-20">
    <span class="fnl-checkbox-check"></span>
    <span class="fnl-checkbox-span false">Concordo em receber contato e status de minha inscrição via SMS, e-mail e whatsapp.</span>
    </label>
      </div>
      <span style="font-family: Open Sans;
      font-size: 10px;
      font-style: italic;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
      ">*Você poderá cancelar a qualquer momento.</span>
      </div>`
      divCheckboxWpp.addEventListener('click', () => {
        const hostname = window.location.hostname.split('.')[1]
        HTMLActions.pushDataLayer({
          event: 'event',
          eventCategory: `${hostname}:graduacao`,
          eventAction: 'clique:checkbox',
          eventLabel:`${hostname}:concordo-receber-contato-whatsapp`
        })
      })
      mainDiv.insertBefore(divCheckboxWpp, hrDadosPessoais)
      mainDiv.insertBefore(newDocumentosSection, hrDadosPessoais)
      
      newDocumentosSection.id = 'zoly-section-documentos'
      h2Title.innerText = 'DOCUMENTOS'
      
      h2Title.classList.add('fnl-h2', 'fnl-m-b-24')
      hr.classList.add('fnl-hr', 'fnl-m-t-10')
      // cpf.classList.replace('fnl-col-50', 'fnl-col-100')
      email.classList.replace('fnl-col-100', 'fnl-col-50')
      aceiteSMS.hidden = true
      wpp.hidden = true
      
      newDocumentosSection.appendChild(hr)
      newDocumentosSection.appendChild(h2Title)
      
      documentosFormDiv.appendChild(cpf)
      documentosFormDiv.appendChild(rg)
      documentosFormDiv.appendChild(dtNascimento)
      documentosFormDiv.appendChild(anoConclusao)
      
      documentosFormDiv.classList.add('fnl-row')
      
      newDocumentosSection.appendChild(documentosFormDiv)
      
      let elements = document.querySelectorAll('.fnl-steps-formgroup > *')
      
      let nope = false;
      elements.forEach((el) => {
        if (el.id === 'zoly-section-documentos') {
          nope = true;
        }
        if (nope) {
          el.classList.add('zoly-hide')
        }
      })
      
      celular.addEventListener('blur', () => {
        const elements = document.querySelectorAll('.fnl-steps-formgroup > .zoly-hide')
        elements.forEach((el) => el.classList.remove('zoly-hide'))
      })

    } catch (e) {
      console.error(e)
    }
}

