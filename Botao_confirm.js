/*Definição da Variável*/
var resp;

/* Após o botão selecionado, js_resp receberá um valor lógico true ou false, capturado pelo método
confirm */ 
resp = window.confirm('Escolha uma das opções.');

/*Decisão Cindicional Composta if/else recebera um valor lógico true ou false, capturado pelo método confirm*/
if (resp == true) {
    document.write('Você escolheu o botão: <b>Ok</b>!!!');
}
else {
    document.write('Você escolheu o botão: <b>Cancelar</b>!!!');
}