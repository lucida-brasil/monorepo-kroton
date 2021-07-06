export function pushDataLayer(dataLayerObject){
    const dataLayer = window.dataLayer || []
    dataLayer.push(dataLayerObject)
}