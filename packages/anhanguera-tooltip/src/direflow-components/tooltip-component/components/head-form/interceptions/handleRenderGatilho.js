export function mutationObserver(color) {
  const element = document.querySelector('.fnl-container')
  var observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.textContent === "Agora selecione o período e o modo que deseja estudar:") {
          handleGatilho()
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
    let loop = setInterval(() => {
      if(document.querySelector('.fnl-tabs.fnl-m-b-15')){
        const tooltip = document.createElement('zoly-tooltip-gatilho')
        tooltip.setAttribute('start', true)
        tooltip.setAttribute('color', color)
        document.querySelector('.fnl-tabs.fnl-m-b-15').appendChild(tooltip)
        console.log('inserido')
        clearInterval(loop)
      }
    }, 100)
  }
}
