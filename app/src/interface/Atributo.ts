interface Atributo {
    nome: string
    label: string
    base: number
    bonus: number
    efeito: (base: number, bonus: number) => string
}

export default Atributo