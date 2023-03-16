const itens = document.querySelector("#itens")
const burguer = document.querySelector("#burguer")
function click() {
    document.addEventListener("click", (e) => {
        const el = e.target
        if (el.classList.contains('material-icons')) {

            if (itens.style.display == 'block') {
                itens.style.display = 'none'
                burguer.innerHTML = 'menu'
                burguer.style.background = '#1336fc'
                burguer.style.color = '#ffffff'
                burguer.style.border = 'none'

            } else {
                itens.style.display = 'block'
                burguer.innerHTML = 'close'
                burguer.style.background = 'white'
                burguer.style.color = '#1336fc'
                burguer.style.border = 'solid 2px #1336fc'

            }
        }
    })

}
function tela() {
    window.addEventListener("resize", (e) => {

        if (window.innerWidth >= 768) {
            itens.style.display = 'block'
        } else {
            itens.style.display = 'none'
        }
    })
}
tela()
click()