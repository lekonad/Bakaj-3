if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function calculate() {
    const prvnicislo = Number(document.getElementById("A").value);
    const druhecislo = Number(document.getElementById("B").value);
    const treticislo = Number(document.getElementById("C").value);

    document.getElementById("vysledek1").innerText = "X1 = " + (-druhecislo + Math.sqrt(druhecislo*druhecislo - 4 * prvnicislo * treticislo)) / (2 * prvnicislo);
    document.getElementById("vysledek2").innerText = "X2 = " + (-druhecislo - Math.sqrt(druhecislo*druhecislo - 4 * prvnicislo * treticislo)) / (2 * prvnicislo);
}