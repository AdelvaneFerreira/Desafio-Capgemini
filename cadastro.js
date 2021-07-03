
//Primeiro foi declarado um array para receber os objetos, em seguida foram feitas 2 funões, uma para cadastrar o objeto, outra para receber os valores que vem do prompt no console. 
let anuncios = []


//Função para cadastrar o objeto
let inserir = function cadastrarAnuncio (nome, cliente, dataInicio, dataTermino, investimentoDia){
  

console.log(`\r\n\r\nNovo anuncio inserido com sucesso. Veja as indormações abaixo:

    nomeDoAnuncio: ${nome}
    cliente: ${cliente}
    dataDeInicio: ${dataInicio}
    dataDeTermino: ${dataTermino}
    investimentoPorDia: ${investimentoDia}
  
  `)

  return anuncios.push({
    nomeDoAnuncio: nome,
    cliente: cliente,
    dataDeInicio: dataInicio,
    dataDeTermino: dataTermino,
    investimentoPorDia: investimentoDia
  })  

};

// Variáveis que vão guardar as informações
let nome = ""
let cliente =""
let dataInicio = ""
let dataTermino = ""
let investimentoDia = 0


function inserirDados(){

  let n = prompt("Nome do anúncio:")
  let c = prompt("Cliente:")
  let d = prompt("Data de início:")
  let d2 = prompt("Data de término:")
  let i = prompt("Investimento por dia")

  return  nome = n,
          cliente = c,
          dataInicio = d,
          dataTermino = d2,
          investimentoDia = i
}


//Estrutura da primeira interação para receber os valores
let primeiraOpcao = prompt("Olá, seja bem vindo, Digite 1 para cadastrar anúncio, ou enter para continuar:\r\n\r\n");

if(primeiraOpcao == 1){
  // A função é chamada para receber os dados vindo do console 
  inserirDados()
  // A função inserir é executada automáticamente para incluir todas as informações recebidas em um objeto e em seguida inserir o objeto no array anuncios.
  inserir(nome, cliente, dataInicio, dataTermino, investimentoDia)
}


// A função abaixo fica responsável por receber a opção após a primeira interação.
function fNewConfirm (){
  return newConfirm = prompt("Caso deseje cadastrar um novo anúncio digite 1, caso queira pesquisar um anúncio por data digite 2, caso queira um relatório com todos os anúncios digite 3, caso já tenha terminado, digite 4\r\n\r\n");
}

// Variável que vai guardar a escolha
let newConfirm = 0

// A função que recebe a opção do cliente é chamada para guardar o numero digitado na variável newConfirm
fNewConfirm()


// A Função abaixo ficará responsável por pesquisar os anuncios pelos nomes dos clientes
function pesquisaNome(obj){

  let nome = prompt("Digite o nome que deseja pesquisar em letras minúsculas")
  let achou = false
    // Estrutura de repetição para guardar as informações do objeto, manipular os valores para ter os cálculos e em seguida imprimir tudo.
    for(let i of obj){
    
    let d3 = formataData(i.dataDeInicio)
    let d4 = formataData(i.dataDeTermino)
    let total = (diasTotal(d3,d4))*i.investimentoPorDia
    const pessoas = Math.round(30*total)
    const cliques = Math.round(pessoas*0.12)
    const compartilhado = Math.round(cliques*0.15)

    if(nome == i.cliente){
      achou = true
      console.log(`
      
      Nome do anúncio: ${i.nomeDoAnuncio}
      cliente: ${i.cliente}
      Data de início: ${i.dataDeInicio}
      Data de término: ${i.dataDeTermino}
      Investimento por Dia: ${i.investimentoPorDia}
      Valor total investido: ${total}
      Quantidade máxima de visualizações ${(Math.round(compartilhado*40))+pessoas}
      Quantidade máxima de cliques: ${cliques}
      Quantidade máxima de compartilhamentos: ${compartilhado} \r\n\r\n `)
  }
  }
  // Caso naõ seja encontrado nenhum anúncio com o parâmetro passado, será informado a seguinte mensagem.
  if(!achou){
      console.log("\r\n\r\nNenhum anúncio encontrado\r\n\r\n")
    }
}


// A Função abaixo ficará responsável por pesquisar os anuncios pelas datas.
function pesquisaData(obj){

  let dataInicioPesquisa = prompt("Digite a data no seguinte formato dia/mes/ano ex: 18/10/2021");
  let dataTerminoPesquisa = prompt("Digite a data no seguinte formato dia/mes/ano ex: 18/10/2021");
  let achou = false
  
    // Estrutura de repetição para guardar as informações do objeto, manipular os valores para ter os cálculos e em seguida imprimir tudo.
  for(let i of obj){
    
    let d1 = formataData(dataInicioPesquisa)
    let d2 = formataData(dataTerminoPesquisa)
    let d3 = formataData(i.dataDeInicio)
    let d4 = formataData(i.dataDeTermino)
    let total = (diasTotal(d3,d4))*i.investimentoPorDia
    const pessoas = Math.round(30*total)
    const cliques = Math.round(pessoas*0.12)
    const compartilhado = Math.round(cliques*0.15)

    if(new Date(d3).getTime() >= new Date(d1).getTime() && new Date(d3).getTime() <= new Date(d2).getTime()){
      achou = true
      console.log(`
      
      Nome do anúncio: ${i.nomeDoAnuncio}
      cliente: ${i.cliente}
      Data de início: ${i.dataDeInicio}
      Data de término: ${i.dataDeTermino}
      Investimento por Dia: ${i.investimentoPorDia}
      Valor total investido: ${total}
      Quantidade máxima de visualizações ${(Math.round(compartilhado*40))+pessoas}
      Quantidade máxima de cliques: ${cliques}
      Quantidade máxima de compartilhamentos: ${compartilhado} \r\n\r\n `)
  }
  }
  
  // Caso naõ seja encontrado nenhum anúncio com o parâmetro passado, será informado a seguinte mensagem.
  if(!achou){
      console.log("\r\n\r\nNenhum anúncio encontrado\r\n\r\n")
    }

}

// A Função abaixo ficará vai imprimir todos os anúncios.
function imprimirTudo(obj){
  if(obj[0] != undefined) {
    
    // Estrutura de repetição para guardar as informações do objeto, manipular os valores para ter os cálculos e em seguida imprimir tudo.
    for(let i of obj){

    let d3 = formataData(i.dataDeInicio)
    let d4 = formataData(i.dataDeTermino)
    let total = (diasTotal(d3,d4))*i.investimentoPorDia
    const pessoas = Math.round(30*total)
    const cliques = Math.round(pessoas*0.12)
    const compartilhado = Math.round(cliques*0.15)

    console.log(`
      
    Nome do anúncio: ${i.nomeDoAnuncio}
    cliente: ${i.cliente}
    Data de início: ${i.dataDeInicio}
    Data de término: ${i.dataDeTermino}
    Investimento por Dia: ${i.investimentoPorDia}
    Valor total investido: ${total}
    Quantidade máxima de visualizações ${(Math.round(compartilhado*40))+pessoas}
    Quantidade máxima de cliques: ${cliques}
    Quantidade máxima de compartilhamentos: ${compartilhado} \r\n\r\n `)
    }
  } else {
    
    // Caso naõ seja encontrado nenhum anúncio com o parâmetro passado, será informado a seguinte mensagem.
    console.log("\r\n\r\nNenhum anúncio encontrado\r\n\r\n")
  }

}

//A função abaixo faz o calculo do número de dias a partir de uma data de início e término.
function diasTotal(inicio, termino){
  
  const now = new Date(termino); // Data mais atual
  const past = new Date(inicio); // Outra data mais antiga
  const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
  return days
}

//A função abaixo faz a conversão do padrão de data usada no brasil para a data nos EUA para dai repassar os valores para a função que calcula o número de dias.
function formataData(data) {
  var dia  = data.split("/")[0];//Retira os caracteres da estring data, até o primeiro separador /, em seguida guarda isso na váriável dia.
  var mes  = data.split("/")[1];
  var ano  = data.split("/")[2];

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);// Retorna uma nova string mas de trás para frente com os valores das Variáveis.
}


// É feito um laço de repetição para que o ambiente continue executável até que o cliente escolha sair.
for(let i = 0; i == 0;i){
  if(newConfirm == 1){

    alert("Insira novamente as informações do novo anúncio!\r\n\r\n")
    inserirDados();
    inserir(nome, cliente, dataInicio, dataTermino, investimentoDia);
    fNewConfirm();
  } else if( newConfirm == 2){

    let pesquisaPor = prompt("Se deseja pesquisar por nome digite 1, se deseja por data digite 2")
    console.log(pesquisaPor)
    if(pesquisaPor == 2){
    pesquisaData(anuncios)
    fNewConfirm();
    } else if( pesquisaPor == 1){
      pesquisaNome(anuncios)
      fNewConfirm();
    }
  } else if (newConfirm == 3){

    imprimirTudo(anuncios);
      fNewConfirm();
   }else if(newConfirm == 4){

    console.log("Até mais tarde!")
    i = 1
  } else {

  console.log("opção inválida, digite 1 ou 2!");
  fNewConfirm();
  }
}




/*

    ##################################################################################################################

    A declaração return finaliza a execução de uma função e especifica os valores que devem ser retonados para onde a função foi chamada.

    ##################################################################################################################

    Window.prompt() ou prompt()
    Exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário a entrada de algum texto.

    ##################################################################################################################

    Window.alert() ou alert()
    O método alert() mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente especificado e um botão OK.

    ##################################################################################################################

    for...of
    O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto. 

    ##################################################################################################################

    if...else
    A condicional if  é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

    ##################################################################################################################

    Date
    Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).
    Construtor:
    new Date();
    new Date(valor);
    new Date(dataString);
    new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

    ##################################################################################################################

    .getTime()
    O método getTime() retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal.

    ##################################################################################################################

    Math.ceil()

    A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".

    ##################################################################################################################

    Math.abs()
    A função Math.abs(x) retorna o valor absoluto de um número "x"

    ##################################################################################################################

    .split()
    O .split() é um símbolo conhecido que especifica o método que divide uma string nos índices correspondentes a uma expressão regular. 

    */