import { HTMLActions } from "@zoly-cro/hooks"

export function unifyAceiteSMS(){
    const wpp = document.getElementById('whats-app');
    const aceiteSMS = document.getElementById('aceiteSMS')
    wpp.addEventListener('click', () => {
      console.log("clicado")
      HTMLActions.simulateMouseClick(aceiteSMS)
    })
  }