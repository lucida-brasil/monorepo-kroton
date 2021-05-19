export function hideElement(element) {
  if (element) element.setAttribute('hidden', 'true')
}

export function hideElements([elements]) {
  if (elements)
   for(var i = 0; i < elements.length; i++){
     console.log(element[i])
     elements[i].setAttribute('hidden', 'true')
   }   
}

export function unhideElement(element) {
  if (element) element.setAttribute('hidden', 'true')
}
