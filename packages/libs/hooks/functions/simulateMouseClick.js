export const simulateMouseClick = (element) => {
    if (element)
      element.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          isTrusted: true,
          bubbles: true,
          cancelable: true,
        })
      )
  }