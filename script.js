const WHATSAPP_FONE = "5511999999999"; 

const produtos = [
    {nome:"Piso Carvalho Hanover", marca:"durafloor", img: "pisohanover.jpg", desc:"Este laminado tem catedrais e tom de mel queimado que traz um movimento de cores ao ambiente."},
    {nome:"Piso Amêndola Curação", marca:"durafloor", img: "AmendolaCuraçao.jpg", desc:"Tonalidade quente e aconchegante para ambientes criativos."},
    // Adicione os outros aqui...
];

function carregar(lista) {
    const grid = document.getElementById("produtos");
    if (!grid) return;
    grid.innerHTML = lista.map(p => `
        <div class="card" onclick="abrirDetalhes('${p.nome}')">
            <img src="imagens/${p.img}" onerror="this.src='imagens/logomorumbisul.png'">
            <h3>${p.nome}</h3>
            <small>${p.marca}</small>
        </div>
    `).join('');
}

function abrirDetalhes(nome) {
    const p = produtos.find(i => i.nome === nome);
    if(!p) return;

    document.getElementById("modal-img-grande").src = `imagens/${p.img}`;
    document.getElementById("modal-titulo").innerText = p.nome;
    document.getElementById("modal-marca").innerText = p.marca.toUpperCase();
    document.getElementById("modal-descricao").innerText = p.desc;
    
    const link = `https://wa.me/${WHATSAPP_FONE}?text=Interesse no produto: ${p.nome}`;
    document.getElementById("modal-link-whats").href = link;

    document.getElementById("modal-produto").style.display = "block";
    document.body.style.overflow = "hidden";
}

function fecharProduto() {
    document.getElementById("modal-produto").style.display = "none";
    document.body.style.overflow = "auto";
}

function filtrarMarca(m) { carregar(produtos.filter(p => p.marca === m)); }
function mostrarTodos() { carregar(produtos); }