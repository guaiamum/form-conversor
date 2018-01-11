var result = "";
var versions = [];
var currVertion;

const v1 = () => {
    //outputs
    var destino = $('#destino');
    //inputs
    var plataforma = $('#plataforma'), caminho = $('#caminho'), descricao = $('#descricao');
    //auxiliares
    var ast = "*", esp = " ", ast_esp = ast + esp;

    result += ast_esp + ast + plataforma.val() + ast_esp + caminho.val() + esp + descricao.val() + '\n';

    destino.val(result);
}
versions.push(v1);

const v2 = () => {
    //outputs
    var destino = $('#destino');
    //inputs
    var plataforma = $('#plataforma'), caminho = $('#caminho'), descricao = $('#descricao'), esperado = $('#esperado');
    //auxiliares markdown
    var ast = "*", esp = " ", ast_esp = ast + esp, italico = "_", vermelho = "{color:#d04437}",verde = "{color:#8eb021}", fimCor = "{color}";

    result += ast_esp + ast + plataforma.val().toUpperCase() + ast_esp + 
        italico + caminho.val() + italico + 
        esp + vermelho + descricao.val() + fimCor + esp +
        esp + verde + esperado.val() + fimCor + '\n' + 
        "Resposta: (x) em análise" + '\n';
    
    destino.val(result);
}
versions.push(v2);

currVertion = versions[versions.length - 1];

$('#btn-convert').on('click', currVertion);
