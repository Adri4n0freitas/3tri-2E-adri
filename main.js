function criaCartao(categoria,pergunta,resposta){
    let container = document.getElementById("container")
    let article =document.createElement("article")
    article.className = "cartao"
    article.innerHTML = `
     <div class="cartao-conteudo">
    <h3> ${categoria}</h3>
    <div class="cartao-conteudo-pergunta">
    <p> ${pergunta}</p>
    </div>
    <div class="cartao-conteudo-resposta">
    <p> ${resposta}</p>
    </div>
     </div>
    `
    container.appendChild(article)
}
criaCartao("Biologia","Qual a função da Mitocondria?", "R:Produzir ATP (Energia).")
criaCartao("Matemática","Qual a Raiz Quadrada de 144?", "R:12.")
criaCartao("Geral","Porque o Messi é melhor do que o CR7?","R:Porque ele tem 8 bolas de ouro.")
criaCartao("Geral","Quem nasceu primeiro o ovo ou a galinha?","R:Galinha(ovo).")