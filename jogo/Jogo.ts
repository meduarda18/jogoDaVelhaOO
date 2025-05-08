import Jogador from "./Jogador";
import Partida from "./Partida";


export default class Jogo{
    private numeroPartidas: number;
    private jogador1: Jogador;
    private jogador2: Jogador;

    constructor(jogador1: Jogador, jogador2: Jogador) {
        this.numeroPartidas = 0;
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
    }

    public getNumeroPartidas(): number {
        return this.numeroPartidas;
    }

    public getJogador1(): Jogador {
        return this.jogador1;
    }

    public getJogador2(): Jogador {
        return this.jogador2;
    }

    public incrementaPartidas(): void {
        this.numeroPartidas++;
    }

    public iniciaPartida(): Partida {
        return new Partida(this.jogador1, this.jogador2);
    }

    public reiniciaJogo(): void {
        this.numeroPartidas = 0;
        this.jogador1.reinicar();
        this.jogador2.reinicar();
    }

}