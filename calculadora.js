
function totalDeViews(valor){
  
    //Temos um número fixo de 30 pessoas para cara real
    const pessoas = Math.round(30*valor);
    //Em seguida vamos saber os cliques de acordo com o numero de pessoas
    const cliques = Math.round(pessoas*0.12); //12% das pessoas clicam
    
    //Agora vamos obter o número de compartilhamento
    const compartilhado = Math.round(cliques*0.15); //15% das pessoas que clicaram compartilham
    
    //Por fim o número de novas visualizações graças aos compartilhamentos
    const novasViews = Math.round(compartilhado*40);
    
    //Math.round caso o numero não seja inteiro
    
    //Por fim a soma total de visualizações
    console.log(`\r\nO numero de pessoas que visualizam inicialmente é de ${pessoas} pessoas.\r\nO número de clique com essas pessoas é de ${cliques} cliques.\r\nO número de compartilhamento a partir desses cliques é de ${compartilhado} compartilhamento(s), e que consequentemente vão gerar novas ${novasViews} visualizações do anúncio.\r\nNo fim teremos um total de ${pessoas+novasViews} visualizações.`);
};
    
    //Insira abaixo entre parênteses o valor investido 
    totalDeViews(3.34)
    
