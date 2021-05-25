import { HTMLActions } from "@zoly-cro/hooks"

export function unifyAceiteSMS(){
    const wpp = document.getElementById('whats-app')
    const aceiteSMS = document.getElementById('aceiteSMS')
    const zolyCheckboxWpp = document.getElementById('zoly-checkbox')
    
    zolyCheckboxWpp && zolyCheckboxWpp.addEventListener('click', () => {
      HTMLActions.simulateMouseClick(aceiteSMS)
      HTMLActions.simulateMouseClick(wpp)
    })
  }