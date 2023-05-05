// Functions
function mudarTamanho() {
    if (window.innerWidth >= 1200) {
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    itens.style.display = 'flex'
}

function closeMenu() {
    itens.style.display = 'none'
}