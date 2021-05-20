export function hideElement(element) {
  if (element) element.hidden = true
}

export function hideElements([elements]) {
  if (elements) elements.forEach(e => e.hidden = true)
}

export function unhideElement(element) {
  if (element) element.hidden = true
}
