const probiere = document.querySelector('.probiere');
const ausgabe = document.querySelector('.ausgabe');
const hack = document.querySelector('.hack');

const fetchJSON = async (query, body) => {
    let response = await fetch(
        'http://localhost:9922' + query, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    return await response.json();
};

hack.onclick = async () => {
    let passwortHack = '';

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxzy01234567890!@_-'

    for (let a = 0; a < alphabet.length; a++) {

        zeichenA = alphabet[a];

        for (let b = 0; b < alphabet.length; b++) {

            zeichenB = alphabet[b]

            for (let c = 0; c < alphabet.length; c++) {

                zeichenC = alphabet[c]

                for (let d = 0; d < alphabet.length; d++) {

                    zeichenD = alphabet[d]

                    for (let e = 0; e < alphabet.length; e++) {

                        zeichenE = alphabet[e]

                        for (let f = 0; f < alphabet.length; f++) {

                            zeichenF = alphabet[f]
                            passwortHack = zeichenA + zeichenB + zeichenC + zeichenD + zeichenE + zeichenF


                            let data = await fetchJSON(
                                '/login', {
                                    pass: passwortHack
                                });

                            if (data.status === 'success') {
                                alert('Hacked')
                                return
                            } else {
                                console.log(passwortHack)
                                // document.write(passwortHack)
                                document.getElementById("demo").innerText = passwortHack
                            }
                        }
                    }
                }
            }
        }
    }
}