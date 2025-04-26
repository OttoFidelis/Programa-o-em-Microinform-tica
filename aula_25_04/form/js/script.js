function validaform(){
    const nome = document.getElementById('nome_id');

    if(nome.value == ""){ window.alert("Digite o seu nome"); nome.focus(); return false }

}