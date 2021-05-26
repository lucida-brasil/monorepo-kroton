export function mutationObserver() {
  const element = document.getElementById('fnl-container-funil')
  const gatilho = document.querySelector('zoly-tooltip-gatilho')
  let target = document.getElementsByClassName('fnl-list-card-header')[0]
  var observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node === target) {
          observer.disconnect()
        }
      })
    })
  })

  observer.observe(element, {
    subtree: true,
    attributes: true,
    childList: true,
    attributeFilter: ['class']
  })

  const handleGatilho = () => {
    console.log('executado')
    if (target) {
      gatilho.setAttribute('start', true)
      target.appendChild(gatilho)
      console.log('inserido')
    }
  }
  handleGatilho()
}
