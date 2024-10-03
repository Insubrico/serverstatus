document.addEventListener('DOMContentLoaded', function() {
    var pageIdentifier = window.location.pathname; // Utilizza il percorso dell'URL come identificatore unico
    var storageKey = 'selectedState_' + pageIdentifier;

    function cambiaTesto() {
        var tendina = document.getElementById("miaTendina");
        var testo = document.getElementById("testo");
        var selectedValue = tendina.value;

        // Salva la selezione nel localStorage con una chiave unica
        localStorage.setItem(storageKey, selectedValue);

        // Aggiorna il testo e la classe
        testo.innerHTML = tendina.options[tendina.selectedIndex].text;
        testo.className = ''; // Rimuove tutte le classi
        switch (selectedValue) {
            case 'STATO NON INDICATO':
                testo.classList.add('statoNonIndicato');
                break;
            case 'SERVER CHIUSI/MANUTENZIONE PROGRAMMATA':
                testo.classList.add('serverChiusi');
                break;
            case 'SERVER CON BASSA AFFLUENZA':
                testo.classList.add('serverBassaAffluenza');
                break;
            case 'SERVER CON ALTA AFFLUENZA':
                testo.classList.add('serverAltaAffluenza');
                break;
            case 'SERVER OPERATIVI':
                testo.classList.add('serverOperativi');
                break;
            case 'SERVER CON PROBLEMI':
                testo.classList.add('serverProblemi');
                break;
            case 'SERVER CON PROBLEMI GRAVI':
                testo.classList.add('serverProblemiGravi');
                break;
            case 'SERVER IN DOWN PARZIALE':
                testo.classList.add('serverDownParziale');
                break;
            case 'SERVER IN DOWN':
                testo.classList.add('serverDown');
                break;
            case 'SERVER TUTTI IN DOWN':
                testo.classList.add('serverTuttiDown');
                break;
            case 'SERVER DISTRUTTI':
                testo.classList.add('serverDistrutti');
                break;
        }
    }

    window.onload = function() {
        var savedState = localStorage.getItem(storageKey);
        if (savedState) {
            var tendina = document.getElementById("miaTendina");
            var testo = document.getElementById("testo");

            // Imposta la selezione salvata
            tendina.value = savedState;
            testo.innerHTML = tendina.options[tendina.selectedIndex].text;
            testo.className = ''; // Rimuove tutte le classi

            // Applica la classe corretta
            switch (savedState) {
                case 'STATO NON INDICATO':
                    testo.classList.add('statoNonIndicato');
                    break;
                case 'SERVER CHIUSI/MANUTENZIONE PROGRAMMATA':
                    testo.classList.add('serverChiusi');
                    break;
                case 'SERVER CON BASSA AFFLUENZA':
                    testo.classList.add('serverBassaAffluenza');
                    break;
                case 'SERVER CON ALTA AFFLUENZA':
                    testo.classList.add('serverAltaAffluenza');
                    break;
                case 'SERVER OPERATIVI':
                    testo.classList.add('serverOperativi');
                    break;
                case 'SERVER CON PROBLEMI':
                    testo.classList.add('serverProblemi');
                    break;
                case 'SERVER CON PROBLEMI GRAVI':
                    testo.classList.add('serverProblemiGravi');
                    break;
                case 'SERVER IN DOWN PARZIALE':
                    testo.classList.add('serverDownParziale');
                    break;
                case 'SERVER IN DOWN':
                    testo.classList.add('serverDown');
                    break;
                case 'TUTTI I SERVER SONO IN DOWN':
                    testo.classList.add('serverTuttiDown');
                    break;
                case 'SERVER DISTRUTTI':
                    testo.classList.add('serverDistrutti');
                    break;
            }
        }
    }

    window.unlockDropdown = function() {
        const passwordInput = document.getElementById('passwordInput');
        const password = passwordInput.value.trim(); // Usa trim() per rimuovere spazi bianchi
        const correctPassword = '9924'; // Sostituisci con la tua password esatta

        const miaTendina = document.getElementById('miaTendina');
        if (password === correctPassword) {
            miaTendina.disabled = false;
            alert('Accesso consentito!');
        } else {
            alert('Password errata. Riprova.');
        }

        // Cancella la password nel campo di input
        passwordInput.value = '';
    }

    // Aggiungi l'evento onchange alla tendina
    document.getElementById("miaTendina").addEventListener('change', cambiaTesto);
});