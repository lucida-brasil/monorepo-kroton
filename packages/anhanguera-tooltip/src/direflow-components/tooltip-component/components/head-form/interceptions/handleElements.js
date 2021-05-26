import { handleElementsPitagoras } from "./handleElementsPitagoras";
import { handleElementsUnopar } from "./handleElementsUnopar";

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
        default:
            break;
    }
}