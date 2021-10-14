export class Juego {
  constructor(nom, desenvolupador, genere, pegi, lanzamiento) {
    this.nom = nom;
    this.desenvolupador = desenvolupador;
    this.genere = genere;
    this.pegi = pegi;
    this.lanzamiento = lanzamiento;
  }

  render() {
    return `
    nom:${this.nom}, 
    desenvolupador:${this.desenvolupador},
    genere:${this.genere},
    pegi:${this.pegi},
    lanzamiento:${this.lanzamiento},
    `;
  }

  JSON(){
    return {
      nom: this.nom, 
    desenvolupador:this.desenvolupador,
    genere:this.genere,
    pegi:this.pegi,
    lanzamiento:this.lanzamiento

    }
  }
}
