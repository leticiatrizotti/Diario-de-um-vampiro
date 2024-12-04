// Dados sobre Diários de um Vampiro
const serie = {
    descricao: [
        "Diários de um Vampiro é uma série que combina romance, mistério e elementos sobrenaturais.",
        "Ela gira em torno de Elena Gilbert, uma jovem que se vê envolvida no mundo dos vampiros quando conhece os irmãos Stefan e Damon Salvatore.",
        "A trama explora triângulos amorosos, conflitos sobrenaturais e laços familiares, tudo com muita emoção e reviravoltas."
    ],
    motivosParaGostar: [
        "A mistura perfeita de romance, ação e mistério.",
        "Os personagens são complexos, cativantes e inesquecíveis.",
        "Cada episódio é emocionante, cheio de reviravoltas que deixam você preso à trama."
    ]
};

// Preenchendo a descrição na página
const descricaoList = document.getElementById("descricao");
serie.descricao.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    descricaoList.appendChild(li);
});

// Preenchendo os motivos para gostar na página
const motivosList = document.getElementById("motivos");
serie.motivosParaGostar.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    motivosList.appendChild(li);
});
