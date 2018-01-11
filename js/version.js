$(function(){
    $('#alerta-versao').css("display","none").slideDown(800).delay(4000).slideUp(900);
})

$('#old-school').on('click',function(){
    $('#esperado').val('').hide();
    currVertion = versions[versions.length -2];
});