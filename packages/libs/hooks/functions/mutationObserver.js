export function mutationObserver(element, callback) {
    var observer = new MutationObserver(callback)

    observer.observe(element, {
        subtree: true,
        attributes: true,
    })
}
