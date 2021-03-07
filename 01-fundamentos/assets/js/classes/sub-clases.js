class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' Instancias';
    }

    nombre = '';
    codigo = '';
    frase = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;

    // Set
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
        // El set no puede tener el mismo nombre de la propiedad de lo contrario crearia un ciclo infinito
        // El set no puede tener el mismo nombre de la propiedad al cual deseamos establecercelo
    }
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    // Metodos
    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona( 'Peter Parket', 'Spiderman', 'Soy tu amigable vecino spiderman' );
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );