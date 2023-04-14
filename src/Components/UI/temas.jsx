import { fondoClaro, contenidoClaro, textoFondoClaro, fondoOscuro, constenidoOscuro, textoFondoOscuro } from "./Variables";

export const temaClaro = {
    body: fondoClaro,
    inside: contenidoClaro,
    text: textoFondoClaro,
    filter: ""
};

export const temaOscuro = {
    body: fondoOscuro,
    inside: constenidoOscuro,
    text: textoFondoOscuro,
    filter: "invert(100%)"
};