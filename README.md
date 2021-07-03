# Desafio-Capgemini

# Olá, neste repositório você vai encontrar o arquivo calculadora.js. 

Nele foi feito a 1ª parte do desafio.
<br>
Para iniciar basta copiar e colar o arquivo fonte em algum ambiente com NodeJS e alterar na linha 26 o valor que está entre parênteses, logo em seguida, basta executar o codigo, ou se preferir basta editar o valor na mesma linha 26, salvar o arquivo e o executar com um terminal NodeJS. O programa vai fazer todos os cálculos e vai retornar um valor de pessoas, de cliques, compartilhamentos, novas visualizações e total de visualizações.

# Abaixo segue algumas informações da estrutura usada.


    
 
    Para utilizar a caulculadora basta colocar o valor desejado entre os parenteses na função chamada na linha 23, ex.:
    Para o valor de 5 R$: totalDeViews(5)
    Para o valor de 2,50 R$: totalDeViews(2.50) LEMBRE-SE DE TROCAR A VIRGULA POR PONTO.
    Para o valor de 0,50 R$: totalDeViews(2.50) LEMBRE-SE DE TROCAR A VIRGULA POR PONTO.

    ##################################################################################################################
     
    A declaração function define uma função com os especificados parâmetros.
    
    Você pode também definir funções usando o construtor Function  e uma function expression.
    
    Sintaxe
    function name([param,[, param,[..., param]]]) {
       [statements]
    }
    name
    O nome da função.
    param
    O nome de um argumento a ser passado para a função. Uma função pode ter atè 255 argumentos.
    statements
    As instruções que compõem o corpo da função.
    
    Para executar uma função após sua delcaração, basta chama-lá pelo seu nome com seu parâmetro se ele foi definido. Exemplo:
    
    function saudacao(mensagem){
      console.log(mensagem)
    } 
    
    
    saudacao("Olá mundo!")
    
    ou sem parâmetro com a mensagem direto na função.
    
    
    function saudacao(){
      console.log("Olá mundo!")
    }
    
    saudacao()
    

######################################################################################################
    
    Console.log()
    Exibe uma mensagem na console do navegador.
    

#######################################################################################################
 

    const
    Constantes possuem escopo de bloco, semelhantes às variáveis declaradas usando o palavra-chave let. O valor de uma constante não pode ser alterado por uma atribuição, e ela não pod ser redeclarada.
    A  declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.
    

######################################################################################################
 

    A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.
    
    // Retorna o valor 20
    x = Math.round(20.49);
    
    // Retorna o valor 21
    x = Math.round(20.5);
    
    // Retorna o valor -20
    x = Math.round(-20.5);

#########################################################################################################
     
    Template strings
    Template Strings são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.
    
    Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível.
    
    Sintaxe
    `corpo de texto`
    
    `texto linha 1
     texto linha 2`
    
    `texto string ${expression} texto string`
    
    tag `texto string ${expression} texto string`    



# Também estará disponível o arquivo cadastro.js. 

Nele foi feito a 2ª parte do desafio.
<br>
Este arquivo é mais interativo que o da calculadora, então para executar será necessário um ambiente com o motor V8 do Google, pode ser algum site com esse suporte, por exemplo:
<br>
<br>
https://replit.com/ escolha o NodeJS
<br>
https://playcode.io/new/
<br>

Ou atraves de um navegador com o motor v8 do google, como por exemplo o Chrome na opção console. Basta copiar todo o código fonte e colar na opção console do navegador.

O sistema é totalmente interativo, basta digitar o que for solicitado que ele irá cadastrar, filtrar ou imprimir todos os anúncios com todas as informações necessárias.

# Abaixo segue algumas informações da estrutura usada e que somadas as da calculadora completam a documentação das 2 atividades.


    ########################################################################################################

    A declaração return finaliza a execução de uma função e especifica os valores que devem ser retonados para onde a função foi chamada.

    ########################################################################################################

    Window.prompt() ou prompt()
    Exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário a entrada de algum texto.

    #########################################################################################################

    Window.alert() ou alert()
    O método alert() mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente especificado e um botão OK.

    #########################################################################################################

    for...of
    O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto. 

    #########################################################################################################

    if...else
    A condicional if  é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

    #########################################################################################################

    Date
    Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).
    Construtor:
    new Date();
    new Date(valor);
    new Date(dataString);
    new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

    #########################################################################################################

    .getTime()
    O método getTime() retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal.

    #########################################################################################################

    Math.ceil()

    A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".

    #########################################################################################################

    Math.abs()
    A função Math.abs(x) retorna o valor absoluto de um número "x"

    #########################################################################################################

    .split()
    O .split() é um símbolo conhecido que especifica o método que divide uma string nos índices correspondentes a uma expressão regular.
    

    Toda a documentação completa também está disponível no https://developer.mozilla.org/.

## Por fim gostaria de agradecer muito a oportunidade, não foi nada fácil, sou novata no desenvolvimento de software, mas foi muito satisfatório fazer esse desafio.
