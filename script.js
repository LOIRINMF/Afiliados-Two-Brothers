//
function MaisAfiliados() {
  var Ponto =document.getElementById("AA");
  var Sobre =document.getElementById("AB");
  var Btn =document.getElementById("AC");

  if(Ponto.style.display === "none"){
    Ponto.style.display = "inline";
    Sobre.style.display = "none";
    Btn.innerHTML = "√Sobre nos"
  }else{
    Ponto.style.display = "none";
    Sobre.style.display = "inline";
    Btn.innerHTML = "√∆filiadøs Twø Brøthers°";
  }
}
function MudaTema() {
  document.body.classList.toggle("OutraC"); 
}
//
let CP = 1
let M = 3
let S = 5
let R = 7
let RB = 9
let RE = 11
let JT = 13
let MV = 15
let F = 17
//
var P1 = {
  Img: "banner/CuidadosComP N.webp",
  Nome: "CUIDADOS COM OS PETS",
  Preco: "R$25,00",
  
  DisAntes: "A adoção de pets tem crescido muito, e isso não é à toa, ",
  DisDepois: "já que a convivência com eles confere uma série de benefícios para a saúde física e mental, confirmados pela ciência, inclusive. Sabia que ter um pet reduz os níveis de colesterol no organismo? Interessante, não é? <br><br> Porém, nossos companheiros precisam de atenção, e é necessário ter alguns cuidados com os pets para garantir o seu bem-estar e a sua qualidade de vida. Você sabe quais são? Separei aqui os 7 que não podem ser deixados de lado.",
  
  Pontos: "PA",
  Sobre: "SA",
  Funcao: "FA",
  Btn: "BA",
  
  Compre: "https://hotm.art/CuidadosCPet"
};
var P2 = {
  Img: "banner/AprendaOS N.webp",
  Nome: "MUNDO PETS",
  Preco: "R$47,00",
  
  DisAntes: "Com mais de 10 anos de experiência no atendimento de cães,",
  DisDepois: 'este Manual surgiu para ajudar novos pais de cachorros e para "salvar" quem já tentou de tudo para educar o seu melhor amigo, mas sem sucesso. <br><br> As técnicas de treinamento aqui apresentadas já foram repetidamente aplicadas e estão 100% aprovadas por todos que as utilizaram. <br><br> Depois de ler e aplicar esse Manual, seu amigo de estimação será um companheiro bem comportado e pronto para atender aos seus comandos.',
  
  Pontos: "PB",
  Sobre: "SB",
  Funcao: "FB",
  Btn: "BB",
  
  Compre: "https://hotm.art/MundoPets"
}; 
var P3 = {
  Img: "banner/PlanilaDeT N.webp",
  Nome: "Planilha de Treino Cão Bem Resolvido",
  Preco: "ﾠR$24,00",
  
  DisAntes: "O planejador de treino cão bem resolvido,",
  DisDepois: "vai te auxiliar para ter um melhor desempenho com o seu cão durante os treinos e saber exatamente o que fazer durante a sua rotina para ter um processo mais rápido e eficaz com o seu cão.",
  
  Pontos: "PC",
  Sobre: "SC",
  Funcao: "FC",
  Btn: "BC",
  
  Compre: "https://hotm.art/PlanilhaDeTreinoCao"
};
/*var P4 = {
  Img: "",
  Nome: "",
  Preco: "ﾠﾠﾠﾠﾠR$",
  
  DisAntes: "",
  DisDepois: "",
  
  Pontos: "PD",
  Sobre: "SD",
  Funcao: "FD",
  Btn: "BD",
  
  Compre: ""
};*/
var P5 = {
  Img: "banner/Tosas N.webp",
  Nome: "TUDO SOBRE TOSAS",
  Preco: "R$9,99",
  
  DisAntes: "Todas as dúvidas em primeiros passos,",
  DisDepois: "como executar de forma ideal as tosas nos pets, cuidados essenciais com saúde e bem estar, e detalhado com alguns tópicos super importantes para o dia a dia de Pets Shops.",
  
  Pontos: "PE",
  Sobre: "SE",
  Funcao: "FE",
  Btn: "BE",
  
  Compre: "https://hotm.art/TSTosasDSPet"
};
var P6 = {
  Img: "banner/AlimentacaoN N.webp",
  Nome: "ALIMENTAÇÃO NATURAL PARA PETS",
  Preco: "ﾠR$97,00",
  
  DisAntes: "Te ensinamos a alimentar o seu pet da forma correta.",
  DisDepois: "A saúde começa na alimentação, por isso, é necessário corrigir a alimentação do seu animal para que ele fique LIVRE de doenças.<br><br> Uma AN correta fortalece o sistema imunológico, ajudando na prevenção e cura de doenças;<br><br> reduz a incidência de doenças de pele, alergias no geral; e, é uma excelente aliada na luta contra o sobrepeso!!",
  
  Pontos: "PF",
  Sobre: "SF",
  Funcao: "FF",
  Btn: "BF",
  
  Compre: "https://hotm.art/AlimentacaoNaturalPPets"
};

var Pets = [P1,P2,P3]; //P4
var Pets2 = [P5,P6];

//

/*var P7 = {
  Img: "",
  Nome: "",
  Preco: "R$ﾠ",
  
  DisAntes: "",
  DisDepois: "",
  
  Pontos: "GP",
  Sobre: "SG",
  Funcao: "FG",
  Btn: "BG",
  
  Compre: ""
};*/
var P8 = {
  Img: "banner/TudoSMarke N.webp",
  Nome: "TUDO SOBRE MARKETING",
  Preco: "ﾠR$100,00",
  
  DisAntes: "Neste ebook você vai descobrir tudo sobre o marketing digital,",
  DisDepois: "todas as estrátegias e tudo que existe por trás do marketing. <br><br> Como funciona o mercado e as formas de trabalhar, empresas famosas que usa estrátegias de marketing.",
  
  Pontos: "PH",
  Sobre: "SH",
  Funcao: "FH",
  Btn: "BH",
  
  Compre: "https://hotm.art/TSMARKETING"
};
var P9 = {
  Img: "banner/PrimeiraV.jpeg",
  Nome: "Primeira venda em 24",
  Preco: "R$19,90ﾠ",
  
  DisAntes: "Você vai aprender com uma pessoa que já trilhou o caminho das pedras e",
  DisDepois: "passou pelo processo difícil do início de qualquer jornada.<br><br> Nesse processo descobriu o que funciona e o que não funciona, para ensinar de uma forma que vai e poupar tempo e dinheiro.",
  
  Pontos: "PI",
  Sobre: "SI",
  Funcao: "FI",
  Btn: "BI",
  
  Compre: "https://sun.eduzz.com/1541419?a=75108614"
};
var P10 = {
  Img: "banner/MarketingD N.webp",
  Nome: "MARKETING",
  Preco: "R$149,00ﾠ",
  
  DisAntes: "MARKETING DE UMA EMPRESA, QUANDO BEM PLANEJADO,",
  DisDepois: "PODE LEVÁ-LA A UM CRESCIMENTO SIGNIFICATIVO E EM POUCO TEMPO. MAS A PERGUNTA MAIS IMPORTANTE É: VOCÊ SABE ELABORAR UM BOM PLANO DE MARKETING? <br><br> SABE DIVULGAR SUA MARCA, SEUS PRODUTOS E SERVIÇOS E AINDA GASTAR APENAS O ESSENCIAL? <br><br> APRENDA COM O CURSO DE MARKETING A MANEIRA CORRETA DE FAZER ESSE PLANEJAMENTO.",
  
  Pontos: "PJ",
  Sobre: "SJ",
  Funcao: "FJ",
  Btn: "BJ",
  
  Compre: "https://hotm.art/MMARKETINGG"
};

var Marketing = [P8,P9,P10]; //P7

//

var P11 = {
  Img: "banner/Emagrecer N.webp",
  Nome: "Hábitos Saudáveis",
  Preco: "ﾠR$97,00",
  
  DisAntes: "Receitas elaboradas com nutrição equilibrada, comprovada pela ciência.",
  DisDepois: "É simples. É saudável. Funciona! Receitas Criadas por Nutricionista. Nosso Plano Alimentar é fácil de seguir e as receitas simples de fazer.<br><br> Se você precisa perder muito peso ou ficar mais saudável, as nossas Receitas e o Plano Alimentar são projetados para você perder peso desde o início.",
  
  Pontos: "PK",
  Sobre: "SK",
  Funcao: "FK",
  Btn: "BK",
  
  Compre: "https://hotm.art/HabitosSaudaveisS"
};
var P12 = {
  Img: "banner/QueimaDe N.jpeg",
  Nome: "Queima de gordura",
  Preco: "ﾠR$19,90",
  
  DisAntes: "Neste e-book você vai saber Os Segredos para Dominar o seu Metabolismo.",
  DisDepois: "Qual é a chave para aprender a queimar gordura 24 horas por dia?<br><br> Aqui estão algumas dicas importantes que vamos abordar: Dicas e truques dietéticos para queimar gordura 24 horas por dia.",
  
  Pontos: "PL",
  Sobre: "SL",
  Funcao: "FL",
  Btn: "BL",
  
  Compre: "https://hotm.art/Queimegordura24h"
};
/*var P13 = {
  Img: "",
  Nome: "",
  Preco: "ﾠﾠﾠﾠR$",
  
  DisAntes: "",
  DisDepois: "",
  
  Pontos: "PM",
  Sobre: "SM",
  Funcao: "FM",
  Btn: "BM",
  
  Compre: ""  
};*/

var Saude = [P11,P12]; //P13

//

var P14 = {
  Img: "banner/ConfeitariaRe N.webp",
  Nome: "Confeitaria Renda",
  Preco: "ﾠR$19,90",
  
  DisAntes: "O E-book Confeitaria Renda,",
  DisDepois: "é composto por um conjunto de apostilas onde ensinamos todo PASSO A PASSO para você fazer os melhores doces gourmet da atualidade e iniciar seu próprio negócio lucrativo. Ensinamos nossas receitas secretas e exclusivas.",
  
  Pontos: "PN",
  Sobre: "SN",
  Funcao: "FN",
  Btn: "BN",
  
  Compre: "https://hotm.art/ConfeitariaRendaI"
};
var P15 = {
  Img: "banner/CozinhaSaudavel N.webp",
  Nome: "ﾠCOZINHA SAUDÁVEL",
  Preco: "ﾠR$50,00",
  
  DisAntes: "Ebook com receitas simples e fáceis de se fazer,",
  DisDepois: "facilitando seu dia a dia sem deixar de lado a vida saudável. <br><br> Transforme seus hábitos alimentares em uma rotina diária com ingredientes de fácil acesso.",
  
  Pontos: "PO",
  Sobre: "SO",
  Funcao: "FO",
  Btn: "BO",
  
  Compre: "https://hotm.art/CoZinhaSaudavel"
};
var P16 = {
  Img: "banner/Receitas N.jpeg",
  Nome: "RECEITAS PARA SECAﾠﾠﾠﾠﾠﾠﾠ",
  Preco: "R$47,00ﾠ",
  
  DisAntes: "Livro digital com programa de reeducação alimentar que ajuda mais de 75.000 pessoas",
  DisDepois: "em 7 países nos últimos 2 Anos que precisavam reduzir drasticamente suas GORDURAS CORPORAIS em poucos dias.",
  
  Pontos: "PP",
  Sobre: "SP",
  Funcao: "FP",
  Btn: "BP",
  
  Compre: "https://hotm.art/RReceitasParaseca"
};

var Receitas = [P14,P15,P16]

//

var P17 = {
  Img: "banner/101R N.jpeg",
  Nome: "PAPINHASﾠﾠﾠﾠﾠﾠﾠ",
  Preco: "R$37,00ﾠ",
  
  DisAntes: "Esse e-book é para você mamãe que se preocupa com a alimentação de seu bebê e quer que ele cresça saudável!",
  DisDepois: "Nesse e-book você aprenderá as melhores e nutritivas receitas de papinha para seu bebê testadas e validadas por milhares de mamães no Brasil inteiro <br><br> Este produto não substitui o parecer profissional. Sempre consulte um profissional da saúde para tratar de assuntos relativos à saúde.",
  
  Pontos: "PQ",
  Sobre: "SQ",
  Funcao: "FQ",
  Btn: "BQ",
  
  Compre: "https://bit.ly/PaPinhasparabebes"
}
var P18 = {
  Img: "banner/BabyF N.webp",
  Nome: "ﾠMUNDO DA PAPINHAS",
  Preco: "ﾠR$60,00",
  
  DisAntes: "Estes são os três sinais que sugerem que seu bebê está pronto para alimentos sólidos:",
  DisDepois: "1. Eles podem permanecer sentados e manter a cabeça erguida.<br><br> 2. Eles desenvolveram a coordenação dos olhos, mãos e boca para que possam ver o alimento, pegá-lo e colocá-lo na boca sem qualquer ajuda.<br><br> 3. Eles são capazes de engolir a comida. Os bebês que ainda não estão prontos para comer alimentos sólidos empurram os alimentos para fora da boca com a língua e os colocam no rosto em vez de colocá-los na boca.<br><br> Agora que você sabe que seu bebê está pronto para começar a comer alimentos sólidos, aqui estão 30 ótimas receitas para você começar.",
  
  Pontos: "PR",
  Sobre: "SR",
  Funcao: "FR",
  Btn: "BR",
  
  Compre: "https://hotm.art/OManualDPapinhas"
}
var P19 = {
  Img: "banner/CardapioDoB N.jpeg",
  Nome: "ﾠCARDAPIO DO BEBÊ",
  Preco: "R$47,00ﾠ",
  
  DisAntes: "Com a nossa Apostila você aprenderá:",
  DisDepois: "Uma variedade de receitas para o café da manhã Uma variedade de receitas para o lanche da tarde Mais de 100 receitas especiais Uma variedade de receitas para o Almoço e janta E mais.",
  
  Pontos: "PS",
  Sobre: "SS",
  Funcao: "FS",
  Btn: "BS",
  
  Compre: "https://hotm.art/CardapioBebes"
}

var ReceitasPBe = [P17,P18,P19]

//

var P20 = {
  Img: "banner/RendaDeR N.webp",
  Nome: "RENDA DE IMPOSTO DE RENDA",
  Preco: "ﾠR$197,00",
  
  DisAntes: "Você está diante do curso mais dinâmico e prático de declaração de imposto de renda 2023.",
  DisDepois: "O curso que ensina você a como declarar ações, bens, direitos, cálculo de preço médio, criptomoedas, declaração de ganhos, preenchimento de informações e muito mais. Totalmente atualizado com base nas normas 2023!",
  
  Pontos: "PT",
  Sobre: "ST",
  Funcao: "FT",
  Btn: "BT",
  
  Compre: "https://hotm.art/RendaDImpostoDeRenda"
}
var P21 = {
  Img: "banner/RendaEx N.webp",
  Nome: "RENDA EXTRA",
  Preco: "ﾠﾠR$49,90",
  
  DisAntes: "APOSTILA DE ESTUDO + CURSOS DE MARKETING DIGITAL",
  DisDepois: "ALGUÉM QUERENDO TRABALHAR EM CASA, USANDO APENAS UM CELULAR COM INTERNET?<br><br> MUITO FÁCIL, FALE COMIGO E ENTRE NA MINHA EQUIPE, ONDE SEU DINHEIRO PODERÁ SER RECUPERADO EM APENAS 24 HORAS OU ATÉ TRIPLICADO.",
  
  Pontos: "PU",
  Sobre: "SU",
  Funcao: "FU",
  Btn: "BU",
  
  Compre: "https://hotm.art/MRendaExtra"
}
var P22 = {
  Img: "banner/Designer N.webp",
  Nome: "ESCOLA DESIGNER DE UNHAS",
  Preco: "ﾠﾠﾠﾠﾠR$39,90",
  
  DisAntes: "Aprenda Tudo Sobre as Técnicas Mais Atuais de Alongamento de Unhas!",
  DisDepois: "Muitas alunas estão colocando em prática as TÉCNICAS ATUAIS DE ALONGAMENTO que<br><br> estão aprendendo neste EXATO MOMENTO na ESCOLA DESIGNER DE UNHAS. Só falta você.<br><br> Você vai ter acesso a 2 lindos certificados disponíveis em sua área restrita após concluir o curso. Nosso curso é associado à ABED (Associação Brasileira de Educação a Distância). Certificado com carga horária,<br><br> CNPJ e válido em todo território nacional em conformidade com o Decreto Presidencial N° 5.154.",
  
  Pontos: "PV",
  Sobre: "SV",
  Funcao: "FV",
  Btn: "BV",
  
  Compre: "https://hotm.art/EDesignerDUnhas"
}
var P23 = {
  Img: "banner/Creator N.webp",
  Nome: "CANVA CREATOR DESIGNER GRÁFICOﾠﾠﾠﾠﾠﾠﾠ",
  Preco: "R$67,90ﾠ",
  
  DisAntes: "Com o Creator Designer Gráfico você poderá criar todo o material gráfico necessário para informar, encantar e engajar sua audiência.",
  DisDepois: "No curso online Creator Designer Gráfico você vai aprender a criar materiais didáticos, <br><br> informativos e divulgação do seu trabalho de uma forma simples e descomplicada.",
  
  Pontos: "PW",
  Sobre: "SW",
  Funcao: "FW",
  Btn: "BW",
  
  Compre: "https://hotm.art/CreatorDesignerGrafico"
}

var RendaEx = [P20,P21,P22];
var RendaExx = [P23];
//

var P24 = {
  Img: "banner/Xadrex N.webp",
  Nome: "Curso de Xadrez Completo - Dominando Xadrez",
  Preco: "ﾠR$39,90",
  
  DisAntes: "Curso de Xadrez Completo - Dominando Xadrez.",
  DisDepois: "Aprenda tudo que precisa para iniciar e evoluir no Xadrez. Ganhe mais partidas com total confiança!<br><br> confiança!Muitos alunos já estão colocando em prática tudo o que estão aprendendo neste EXATO MOMENTO no curso Dominando Xadrez, Só falta você!",
  
  Pontos: "PX",
  Sobre: "SX",
  Funcao: "FX",
  Btn: "BX",
  
  Compre: "https://hotm.art/CursoDeXadrezCompleto"
}
var P25 = {
  Img: "banner/Damas N.webp",
  Nome: "COMO JOGA DAMAS",
  Preco: "ﾠR$97,00",
  
  DisAntes: "Este curso foi planejado para que você consiga sair do zero",
  DisDepois: "e comece a ganhar dos seus amigos e familiares no Jogo de Damas.<br><br> Irei te acompanhar na jornada de iniciante à nível intermediário. Aprenda de forma simples e prática como funciona a estrutura lógica do Jogo de Damas.",
  
  Pontos: "PY",
  Sobre: "SY",
  Funcao: "FY",
  Btn: "BY",
  
  Compre: "https://hotm.art/CursoDDamas"
}

var Jogos = [P24,P25];

//

var P26 = {
  Img: "banner/DeMilha N.webp",
  Nome: "DE MILHA EM MILHA",
  Preco: "ﾠﾠﾠﾠﾠﾠﾠﾠR$597,00",
  
  DisAntes: "Se você sempre quis fazer aquela viagem mas o dinheiro nunca sobrou,",
  DisDepois: "esse curso é para você! Aprenda como gerar uma renda extra sem alterar o seu consumo. Durante as 8 semanas deste curso você terá acesso:<br><br> •9 módulos gravados com LEGENDA. •Lives semanais. •Suporte personalizado. •Grupo de promoções. •Consultora de cartões Bradesco. •Suporte com a contadora do curso.",
  
  Pontos: "PZ",
  Sobre: "SZ",
  Funcao: "FZ",
  Btn: "BZ",
  
  Compre: "https://hotm.art/DeMilhaEMilha"
}
var P27 = {
  Img: "banner/Milhas N.webp",
  Nome: "ﾠUNIVERSIDADE DA VIAGEM",
  Preco: "ﾠR$997,00",
  
  DisAntes: "Descubra os segredos para você viajar mais, pagando menos,",
  DisDepois: "o Universidade da Viagem é um curso 100% online que mostra o passo a passo detalhado para você conhecer a arte e os métodos mais inteligentes e testados para você viajar muito mais,<br><br> pagando muito menos e ainda conhecer o mercado de milhas aéreas para rentabilizar suas viagens e garantir uma renda complementar.<br><br> Conquistar seus sonhos de conhecer muitos países não será mais um desafio complicado pra você.",
  
  Pontos: "PAA",
  Sobre: "SAA",
  Funcao: "FAA",
  Btn: "BAA",
  
  Compre: "https://hotm.art/UniversidadeDViagem"
}

var MilhasV = [P26,P27]

//

var P28 = {
  Img: "banner/FinancasP N.webp",
  Nome: "FINANÇAS PESSOAIS",
  Preco: "ﾠﾠR$27,00ﾠ",
  
  DisAntes: "Quer aprender a fazer seu dinheiro render mais? Então este curso é pra você!",
  DisDepois: "Neste curso, você aprenderá a elaborar uma planilha para controle dos gastos pessoais.<br><br> Demonstraremos os principais fundamentos para gestão eficaz das finanças pessoais.<br><br> Demonstraremos as técnicas para controle de gastos e análise de custos com cartão de crédito, <br><br> empréstimos e financiamentos. Apresentaremos dicas para você começar a investir e também para planejar sua aposentadoria.",
  
  Pontos: "PAB",
  Sobre: "SAB",
  Funcao: "FAB",
  Btn: "BAB",
  
  Compre: "https://hotm.art/FinanasPess"
}

var Financas = [P28]


var TodosOsP = [P1,P2,P3,P5,P6,P8,P9,P10,P11,P12,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28]; //P4,P7,P13 

function GeradorDF(){
  var Funcoes = "";
  for( var i = 0; i < TodosOsP.length; i++){
  
    Funcoes += 'function Mais'+ TodosOsP[i].Funcao +'() {var Ponto =document.getElementById("'+ TodosOsP[i].Pontos +'");var Sobre =document.getElementById("'+ TodosOsP[i].Sobre +'");var Btn =document.getElementById("'+ TodosOsP[i].Btn +'"); if(Ponto.style.display === "none") {Ponto.style.display = "inline"; Sobre.style.display = "none"; Btn.innerHTML = "√Mais sobre"; }else{ Ponto.style.display = "none"; Sobre.style.display = "inline"; Btn.innerHTML = "√Menos sobre"; } }'
    
  }
 var Js = document.getElementById("Java");
  Js.innerHTML = Funcoes
}
GeradorDF()
function BtCp(){
  let IFinal = "";
  let IFinal01 = "";
  if(CP == 2){
    
  var TelaFP1 = document.getElementById("P1");
  TelaFP1.innerHTML = IFinal
    
  var TelaFP01 = document.getElementById("P0.1");
  TelaFP01.innerHTML = IFinal01  
    CP = 1
  }else if (CP == 1){
    
  for( var i = 0; i < Pets.length; i++){  
    IFinal += '<div><figure> <img class="" src="' + Pets[i].Img + '">';
    IFinal += '<figcaption>';
    IFinal += '<h2 class="NomeEp">' + Pets[i].Nome +'     '+ Pets[i].Preco + '</h2>';
    IFinal += '<p>' + Pets[i].DisAntes + '  ' + '<span id="' + Pets[i].Pontos + '"> . . . </span><span style="display: none" id="' + Pets[i].Sobre + '">' + Pets[i].DisDepois + '</span></p>';
    IFinal += '<div class="Btn"><button onclick="Mais'+ Pets[i].Funcao +'()" id="' + Pets[i].Btn + '"> √Mais sobre </button></div>';
    IFinal += '<br><br>';
    IFinal += '<a class="Compra" target="_blank" rel="next" href="'+ Pets[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal += '</figcaption>';
    IFinal += '</figure></div>';
 
  }
  
  var TelaFP1 = document.getElementById("P1");
  TelaFP1.innerHTML = IFinal  
    
  for( var i = 0; i < Pets2.length; i++){
    IFinal01 += '<div><figure> <img class="" src="' + Pets2[i].Img + '">';
    IFinal01 += '<figcaption>';
    IFinal01 += '<h2 class="NomeEp">' + Pets2[i].Nome +'     '+ Pets2[i].Preco + '</h2>';
    IFinal01 += '<p>' + Pets2[i].DisAntes + '  ' + '<span id="' + Pets2[i].Pontos + '"> . . . </span><span style="display: none" id="' + Pets2[i].Sobre + '">' + Pets2[i].DisDepois + '</span></p>';
    IFinal01 += '<div class="Btn"><button onclick="Mais'+ Pets2[i].Funcao +'()" id="' + Pets2[i].Btn + '"> √Mais sobre </button></div>';
    IFinal01 += '<br><br>';
    IFinal01 += '<a class="Compra" target="_blank" rel="next" href="'+ Pets2[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal01 += '</figcaption>';
    IFinal01 += '</figure></div>';
 
  }
  
  var TelaFP01 = document.getElementById("P0.1");
  TelaFP01.innerHTML = IFinal01  
    CP = 2
  }
}

function BtM(){
  let IFinal2 = "";
  if(M == 4){
    
    var TelaFP2 = document.getElementById("P2");
  TelaFP2.innerHTML = IFinal2
    M = 3
  }else if (M == 3){
    
    for( var i = 0; i < Marketing.length; i++){
    IFinal2 += '<div><figure> <img class="" src="' + Marketing[i].Img + '">';
    IFinal2 += '<figcaption>';
    IFinal2 += '<h2 class="NomeEp">' + Marketing[i].Nome +'     '+ Marketing[i].Preco + '</h2>';
    IFinal2 += '<p>' + Marketing[i].DisAntes + '  ' + '<span id="' + Marketing[i].Pontos + '"> . . . </span><span style="display: none" id="' + Marketing[i].Sobre + '">' + Marketing[i].DisDepois + '</span></p>';
    IFinal2 += '<div class="Btn"><button onclick="Mais'+ Marketing[i].Funcao +'()" id="' + Marketing[i].Btn + '"> √Mais sobre </button></div>';
    IFinal2 += '<br><br>';
    IFinal2 += '<a class="Compra" target="_blank" rel="next" href="'+ Marketing[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal2 += '</figcaption>';
    IFinal2 += '</figure></div>';
 
  }
  
  var TelaFP2 = document.getElementById("P2");
  TelaFP2.innerHTML = IFinal2
    M = 4
  }
}

function BtS(){
  let IFinal3 = "";
  if(S == 6){
    
  var TelaFP3 = document.getElementById("P3");
  TelaFP3.innerHTML = IFinal3  
    S = 5
  }else if(S == 5){
    
   for( var i = 0; i < Saude.length; i++){
    IFinal3 += '<div><figure> <img class="" src="' + Saude[i].Img + '">';
    IFinal3 += '<figcaption>';
    IFinal3 += '<h2 class="NomeEp">' + Saude[i].Nome +'     '+ Saude[i].Preco + '</h2>';
    IFinal3 += '<p>' + Saude[i].DisAntes + '  ' + '<span id="' + Saude[i].Pontos + '"> . . . </span><span style="display: none" id="' + Saude[i].Sobre + '">' + Saude[i].DisDepois + '</span></p>';
    IFinal3 += '<div class="Btn"><button onclick="Mais'+ Saude[i].Funcao +'()" id="' + Saude[i].Btn + '"> √Mais sobre </button></div>';
    IFinal3 += '<br><br>';
    IFinal3 += '<a class="Compra" target="_blank" rel="next" href="'+ Saude[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal3 += '</figcaption>';
    IFinal3 += '</figure></div>';
 
  }
  
  var TelaFP3 = document.getElementById("P3");
  TelaFP3.innerHTML = IFinal3 
    S = 6
  }
}

function BtR(){
  let IFinal4 = "";
  if(R == 8){
    
  var TelaFP4 = document.getElementById("P4");
  TelaFP4.innerHTML = IFinal4  
    R = 7
  }else if(R==7){
    for( var i = 0; i < Receitas.length; i++){
    
    IFinal4 += '<div><figure> <img class="" src="' + Receitas[i].Img + '">';
    IFinal4 += '<figcaption>';
    IFinal4 += '<h2 class="NomeEp">' + Receitas[i].Nome +'     '+ Receitas[i].Preco + '</h2>';
    IFinal4 += '<p>' + Receitas[i].DisAntes + '  ' + '<span id="' + Receitas[i].Pontos + '"> . . . </span><span style="display: none" id="' + Receitas[i].Sobre + '">' + Receitas[i].DisDepois + '</span></p>';
    IFinal4 += '<div class="Btn"><button onclick="Mais'+ Receitas[i].Funcao +'()" id="' + Receitas[i].Btn + '"> √Mais sobre </button></div>';
    IFinal4 += '<br><br>';
    IFinal4 += '<a class="Compra" target="_blank" rel="next" href="'+ Receitas[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal4 += '</figcaption>';
    IFinal4 += '</figure></div>';
 
  }
  
  var TelaFP4 = document.getElementById("P4");
  TelaFP4.innerHTML = IFinal4
    R = 8
  }
}

function BtRb(){
 let IFinal5 = "";
  if(RB == 10){
    
   var TelaFP5 = document.getElementById("P5");
  TelaFP5.innerHTML = IFinal5 
    RB = 9
  }else if(RB == 9){
  for( var i = 0; i < ReceitasPBe.length; i++){
    
    IFinal5 += '<div><figure> <img class="" src="' + ReceitasPBe[i].Img + '">';
    IFinal5 += '<figcaption>';
    IFinal5 += '<h2 class="NomeEp">' + ReceitasPBe[i].Nome +'     '+ ReceitasPBe[i].Preco + '</h2>';
    IFinal5 += '<p>' + ReceitasPBe[i].DisAntes + '  ' + '<span id="' + ReceitasPBe[i].Pontos + '"> . . . </span><span style="display: none" id="' + ReceitasPBe[i].Sobre + '">' + ReceitasPBe[i].DisDepois + '</span></p>';
    IFinal5 += '<div class="Btn"><button onclick="Mais'+ ReceitasPBe[i].Funcao +'()" id="' + ReceitasPBe[i].Btn + '"> √Mais sobre </button></div>';
    IFinal5 += '<br><br>';
    IFinal5 += '<a class="Compra" target="_blank" rel="next" href="'+ ReceitasPBe[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal5 += '</figcaption>';
    IFinal5 += '</figure></div>';
 
  }
  
  var TelaFP5 = document.getElementById("P5");
  TelaFP5.innerHTML = IFinal5  
    RB = 10
  }
}

function BtRe(){
  let IFinal6 = "";
  let IFinal06 = "";
  if (RE == 12){
    
    var TelaFP6 = document.getElementById("P6");
  TelaFP6.innerHTML = IFinal6
    
    var TelaFP06 = document.getElementById("P0.6");
  TelaFP06.innerHTML = IFinal06
    RE = 11
  }else if(RE == 11){
    for( var i = 0; i < RendaExx.length; i++){
    
    IFinal06 += '<div><figure> <img class="" src="' + RendaExx[i].Img + '">';
    IFinal06 += '<figcaption>';
    IFinal06 += '<h2 class="NomeEp">' + RendaExx[i].Nome +'     '+ RendaExx[i].Preco + '</h2>';
    IFinal06 += '<p>' + RendaExx[i].DisAntes + '  ' + '<span id="' + RendaExx[i].Pontos + '"> . . . </span><span style="display: none" id="' + RendaExx[i].Sobre + '">' + RendaExx[i].DisDepois + '</span></p>';
    IFinal06 += '<div class="Btn"><button onclick="Mais'+ RendaExx[i].Funcao +'()" id="' + RendaExx[i].Btn + '"> √Mais sobre </button></div>';
    IFinal06 += '<br><br>';
    IFinal06 += '<a class="Compra" target="_blank" rel="next" href="'+ RendaExx[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal06 += '</figcaption>';
    IFinal06 += '</figure></div>';
 
  }
  
  var TelaFP06 = document.getElementById("P0.6");
  TelaFP06.innerHTML = IFinal06
    
  for( var i = 0; i < RendaEx.length; i++){
    
    IFinal6 += '<div><figure> <img class="" src="' + RendaEx[i].Img + '">';
    IFinal6 += '<figcaption>';
    IFinal6 += '<h2 class="NomeEp">' + RendaEx[i].Nome +'     '+ RendaEx[i].Preco + '</h2>';
    IFinal6 += '<p>' + RendaEx[i].DisAntes + '  ' + '<span id="' + RendaEx[i].Pontos + '"> . . . </span><span style="display: none" id="' + RendaEx[i].Sobre + '">' + RendaEx[i].DisDepois + '</span></p>';
    IFinal6 += '<div class="Btn"><button onclick="Mais'+ RendaEx[i].Funcao +'()" id="' + RendaEx[i].Btn + '"> √Mais sobre </button></div>';
    IFinal6 += '<br><br>';
    IFinal6 += '<a class="Compra" target="_blank" rel="next" href="'+ RendaEx[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal6 += '</figcaption>';
    IFinal6 += '</figure></div>';
 
  }
  
  var TelaFP6 = document.getElementById("P6");
  TelaFP6.innerHTML = IFinal6
    RE = 12
  }
}

function BtJt(){
  let IFinal7 = "";
  if (JT == 14){
    var TelaFP7 = document.getElementById("P7");
  TelaFP7.innerHTML = IFinal7
    JT =13
  }else if(JT == 13){
  for( var i = 0; i < Jogos.length; i++){
    
    IFinal7 += '<div><figure> <img class="" src="' + Jogos[i].Img + '">';
    IFinal7 += '<figcaption>';
    IFinal7 += '<h2 class="NomeEp">' + Jogos[i].Nome +'     '+ Jogos[i].Preco + '</h2>';
    IFinal7 += '<p>' + Jogos[i].DisAntes + '  ' + '<span id="' + Jogos[i].Pontos + '"> . . . </span><span style="display: none" id="' + Jogos[i].Sobre + '">' + Jogos[i].DisDepois + '</span></p>';
    IFinal7 += '<div class="Btn"><button onclick="Mais'+ Jogos[i].Funcao +'()" id="' + Jogos[i].Btn + '"> √Mais sobre </button></div>';
    IFinal7 += '<br><br>';
    IFinal7 += '<a class="Compra" target="_blank" rel="next" href="'+ Jogos[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal7 += '</figcaption>';
    IFinal7 += '</figure></div>';
  }
  var TelaFP7 = document.getElementById("P7");
  TelaFP7.innerHTML = IFinal7
    JT = 14
  }
}

function BtMv(){
  let IFinal8 = "";
 if(MV == 16) {
   
let IFinal8 = "";
  var TelaFP8 = document.getElementById("P8");
  TelaFP8.innerHTML = IFinal8
   
   MV = 15
 }else if (MV == 15){ 
   for( var i = 0; i < MilhasV.length; i++){
    
    IFinal8 += '<div><figure> <img class="" src="' + MilhasV[i].Img + '">';
    IFinal8 += '<figcaption>';
    IFinal8 += '<h2 class="NomeEp">' + MilhasV[i].Nome +'     '+ MilhasV[i].Preco + '</h2>';
    IFinal8 += '<p>' + MilhasV[i].DisAntes + '  ' + '<span id="' + MilhasV[i].Pontos + '"> . . . </span><span style="display: none" id="' + MilhasV[i].Sobre + '">' + MilhasV[i].DisDepois + '</span></p>';
    IFinal8 += '<div class="Btn"><button onclick="Mais'+ MilhasV[i].Funcao +'()" id="' + MilhasV[i].Btn + '"> √Mais sobre </button></div>';
    IFinal8 += '<br><br>';
    IFinal8 += '<a class="Compra" target="_blank" rel="next" href="'+ MilhasV[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal8 += '</figcaption>';
    IFinal8 += '</figure></div>';
   }
  var TelaFP8 = document.getElementById("P8");
  TelaFP8.innerHTML = IFinal8
   MV = 16
    }
}

function Btfinan(){
  let IFinal9 = "";
 if(F == 18) {
   
   let IFinal9 = ""; 
    var TelaFP9 = document.getElementById("P9");
  TelaFP9.innerHTML = IFinal9
   F=17
  } else if (F == 17) {
  for(var i = 0; i < Financas.length; i++){
    IFinal9 += '<div><figure> <img class="" src="' + Financas[i].Img + '">';
    IFinal9 += '<figcaption>';
    IFinal9 += '<h2 class="NomeEp">' + Financas[i].Nome +'     '+ Financas[i].Preco + '</h2>';
    IFinal9 += '<p>' + Financas[i].DisAntes + '  ' + '<span id="' + Financas[i].Pontos + '"> . . . </span><span style="display: none" id="' + Financas[i].Sobre + '">' + Financas[i].DisDepois + '</span></p>';
    IFinal9 += '<div class="Btn"><button onclick="Mais'+ Financas[i].Funcao +'()" id="' + Financas[i].Btn + '"> √Mais sobre </button></div>';
    IFinal9 += '<br><br>';
    IFinal9 += '<a class="Compra" target="_blank" rel="next" href="'+ Financas[i].Compre +'"> =Compre Aqui=ﾠ </a>';
    IFinal9 += '</figcaption>';
    IFinal9 += '</figure></div>';
     }
   
  var TelaFP9 = document.getElementById("P9");
  TelaFP9.innerHTML = IFinal9
    F = 18
  }
}
/* {
  Img: "",
  Nome: "",
  Preco: "ﾠ",
  
  DisAntes: "",
  DisDepois: "",
  
  Pontos: "PA",
  Sobre: "SA",
  Funcao: "FA",
  Btn: "BA",
  
  Compre: ""
}*/