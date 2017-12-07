var result;
$('#btn-convert').on('click', function(){
    //outputs
    var destino = $('#destino');
    //inputs
    var plataforma = $('#plataforma'), caminho = $('#caminho'), descricao = $('#descricao');
    //auxiliares
    var ast = "*", esp = " ", ast_esp = ast + esp;

    result += ast_esp + ast + plataforma.val() + ast_esp + caminho.val() + esp + descricao.val() + '\n';
    
    destino.val(result);
})