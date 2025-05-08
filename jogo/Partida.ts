import Jogador from "./Jogador";
import {Peca} from "./Peca";
import {SituacaoPartida} from "./SituacaoPartida";

export default class Partida{
    private jogador1: Jogador;
    private jogador2: Jogador;
    private tabuleiro: (Peca | undefined)[][];
    private vezJogador1: boolean;

    constructor(jogador1: Jogador, jogador2: Jogador) {
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.tabuleiro = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
        this.vezJogador1 = true;
    }

    public getJogador1(): Jogador {
        return this.jogador1;
    }

    public getJogador2(): Jogador {
        return this.jogador2;
    }

    public getTabuleiro(): (Peca | undefined)[][] {
        return this.tabuleiro;
    }

    public getVezJogador1(): boolean {
        return this.vezJogador1;
    }

    public joga(linha: number, coluna: number): boolean {
        if (this.tabuleiro[linha][coluna] == undefined) {
            if (this.vezJogador1) {
                this.tabuleiro[linha][coluna] = Peca.Xis;
            } else {
                this.tabuleiro[linha][coluna] = Peca.Circulo;
            }

            this.vezJogador1 = !this.vezJogador1;
            return true;
        } else {
            return false;
        }
    }

    private extraiLinha(i: number) {
        return this.tabuleiro[i];
    }

    private extraiColuna(i: number) {
        return [this.tabuleiro[0][i], this.tabuleiro[1][i], this.tabuleiro[2][i]]
    }

    private extraiDiagonalPrincipal() {
        return [this.tabuleiro[0][0], this.tabuleiro[1][1], this.tabuleiro[2][2]];
    }

    private extraiDiagonalSecundaria() {
        return [this.tabuleiro[0][2], this.tabuleiro[1][1], this.tabuleiro[2][0]];
    }

   //entender melhor os métodos de verificar vencedor/empate/fim e tentar desenvolver

}