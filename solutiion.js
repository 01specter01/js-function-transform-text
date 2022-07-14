// 1. Erstelle eine Funktion, die jeden Anfangsbuchstaben der Wörter eines Strings in einen Großbuchstaben umwandelt. Anschließend soll die Funktion den String zurückgeben.
console.log("----------------Aufgabe 1---------------");
function capitalizeFirstLetter() {
    let text1 =
        "Authoritatively incentivize excellent alignments whereas sources rapidiously.";
    let array = [];
    let text11 = text1.split(" ");
    for (let i = 0; i < text11.length; i++) {
        const word = text11[i].charAt(0).toUpperCase() + text11[i].substring(1);
        array.push(word);
    }
    console.log(array.join(" "));
}

capitalizeFirstLetter();

// 2. Entwickle eine Funktion, die einen gegebenen Text auf maximal 30 Wörter gekürzt zurückgibt. Ist der Text länger als 30 Wörter, soll in der Ausgabe ein "..." am Ende angefügt werden.
console.log("----------------Aufgabe 2---------------");

// 3. Kombiniere beide Funktionen, sodass ein übergebener Text gekürzt und die Anfangsbuchstaben der Wörter in Großbuchstaben ausgegeben werden.
console.log("----------------Aufgabe 3---------------");

// 4. Prüfe in jeder Funktion, ob die übergebenen Werte tatsächlich Strings sind. Falls nicht, gib eine Fehlermeldung zurück (z.B. "Invalides Argument! Es muss ein String übergeben werden!").
console.log("----------------Aufgabe 4---------------");

// 5. Sind deine Funktionen Pure Functions oder haben sie Side Effects? Begründe/Beweise deine Antwort.
console.log("----------------Aufgabe 5---------------");

// Hier ein paar Daten, mit denen Du deine Funktionen füttern kannst (du kannst die drei Texte jeweils für alle drei Funktionen verwenden):

// const text1 = "Authoritatively incentivize excellent alignments whereas sources rapidiously.";
// const text2 = "Rapidiously incubate enterprise architectures for covalent expertise. Completely deliver cross-media core competencies through extensive technologies.";
// const text3 = "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives. Interactively exploit client-centric e-business without convergence. Intrinsicly brand open-source infomediaries vis-a-vis economically sound expertise.";

// Beispiel Aufgabe 1:
// Ergebnis: const text1 = "Authoritatively Incentivize Excellent Alignments Whereas Sources Rapidiously."

// Beispiel Aufgabe 2:
// Ergebnis: const text3 = "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives...";
