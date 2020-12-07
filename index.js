const cenario1 = [0, 0, 1, 0, 0, 1, 0]; //4pulos
const cenario2 = [0, 0, 0, 0, 1, 0]; //3pulos

const jumpingOnClouds = c => {
    let pulos = -1
    for (let i = 0; i < c.length; i++) {
        if (c[i] == 0) {
            pulos += 1
            if (c[i] == 0 && c[i+1] == 0 && c[i+2] == 0) {
                pulos -= 1
                if (c[i+3] == 0) {
                    pulos += 1
                    if(c[i+4] == 0) {
                        pulos -= 1
                    }
                }
            } 
        }
    } return pulos
}

jumpingOnClouds(cenario1)

//c representa o cenario, mantenha o nome pra eu poder testar no hackerrank :D