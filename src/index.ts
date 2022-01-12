class ValidadorString {
    validar(valor: string): boolean {
        // colchetes, chaves e parênteses === ccp
        let ccp: string = '[]{}()';
        let pilha: number[] = [];
        const valoresInvalidos: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

        for(let unidade of valor) {
            let ccpIndex: number = ccp.indexOf(unidade);

            if (valoresInvalidos.includes(unidade)) {
                return false;
            };

            if (ccpIndex === -1){
                continue;
            }

            if(ccpIndex % 2 === 0) {
                pilha.push(ccpIndex + 1);
            } else {
                if(pilha.pop() !== ccpIndex) {
                    return false;
                }
            }
        }
        return pilha.length === 0;
    }
}
