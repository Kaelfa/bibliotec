const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const statusRetirada = document.querySelectorAll(".status-livro");

checkboxes.forEach((caixinha, indice, lista) => {

    // console.log("caixinha: ", caixinha);
    // console.log("indice: ", indice);
    // console.log("lista: ", lista);
    
    
    caixinha.addEventListener("change", () => {
        if(caixinha.checked){
            statusRetirada[indice].classList.remove("livro-aguardo");
            statusRetirada[indice].classList.add("livro-retirado");
            statusRetirada[indice].textContent = "Retirado";
        }
        else {
                        statusRetirada[indice].classList.remove("livro-retirado");
            statusRetirada[indice].classList.add("livro-aguardo");
            statusRetirada[indice].textContent = "Aguardando retirada";
        }
    })
})