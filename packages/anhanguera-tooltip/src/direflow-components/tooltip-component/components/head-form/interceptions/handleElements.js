import { handleElementsPitagoras } from "./handleElementsPitagoras";
import { handleElementsUnopar } from "./handleElementsUnopar";
import { handleElementsAnhanguera } from "./handleElementsAnhanguera";

export const handleElements = (university) => {
    switch (university) {
        case 'Pitágoras': {
            handleElementsPitagoras()
            break
        }
        case 'Unopar': {
            handleElementsUnopar()
            break
        } 
        case 'Anhanguera': {
            //handleElementsAnhanguera()
            break
        } 
        default:
            break;
    }
}