
'use strict';

// Textos-modelo revisados para uma linguagem mais natural.
// Personalize-os com a produção escolar do estudante.

const redacoes = [
  {
    titulo: "A educação como caminho para transformar o futuro",
    tema: "Educação",
    texto: `Quando a gente pensa na escola, é comum lembrar das provas, dos trabalhos e das notas. Mas aprender vai muito além disso. É também descobrir como defender uma ideia, ouvir alguém que pensa diferente e encontrar maneiras de resolver problemas. Por isso, uma boa educação faz diferença não só na vida de cada aluno, mas na sociedade inteira.

O problema é que nem todos conseguem estudar nas mesmas condições. Há quem enfrente longos trajetos até a escola, não tenha internet em casa ou precise dividir o tempo entre os estudos e outras responsabilidades. E, quando as aulas parecem não ter ligação com a vida fora da sala, fica ainda mais difícil manter o interesse.

Melhorar essa realidade exige escolas bem cuidadas, materiais adequados e professores valorizados. Também faz sentido criar projetos que aproximem o conteúdo do cotidiano, como pesquisas sobre o bairro, feiras de ciências e atividades em grupo. A participação da família ajuda, especialmente quando o esforço do estudante é reconhecido.

A educação não resolve todos os problemas de uma vez, mas abre caminhos que antes pareciam distantes. Garantir que mais pessoas possam aprender com qualidade é dar a elas a chance de fazer escolhas e construir seu próprio futuro.`
  },
  {
    titulo: "A influência das redes sociais na juventude",
    tema: "Sociedade digital",
    texto: `É difícil imaginar a rotina de um adolescente sem redes sociais. Elas estão nas conversas com os amigos, nas notícias, nos vídeos e até nos estudos. Essa facilidade de se conectar tem muitas vantagens, mas também trouxe uma pressão que nem sempre é percebida.

Basta passar alguns minutos rolando a tela para encontrar viagens, festas e pessoas aparentemente felizes o tempo todo. Só que quase ninguém publica os dias ruins ou as dificuldades que enfrenta. Quando a gente esquece disso, começa a comparar a própria vida com uma versão editada da vida dos outros. Essa comparação pode causar insegurança e atrapalhar até a concentração.

Ao mesmo tempo, seria injusto dizer que as redes só fazem mal. Elas ajudam a divulgar projetos, encontrar materiais para estudar e manter contato com pessoas que estão longe. O que muda o resultado é a forma de usar: quanto tempo ficamos conectados, o que acompanhamos e se verificamos aquilo que compartilhamos.

Por isso, aprender a usar a internet com consciência deveria fazer parte da educação dos jovens. Ter momentos longe do celular, cuidar da privacidade e valorizar as amizades fora da tela são atitudes simples. As redes podem fazer parte da nossa vida sem precisar ocupar o lugar de tudo o que acontece nela.`
  },
  {
    titulo: "Sustentabilidade começa nas escolhas diárias",
    tema: "Meio ambiente",
    texto: `Quando se fala em preservar o meio ambiente, muita gente imagina ações enormes, que dependem apenas de governos e empresas. Essas medidas realmente são necessárias, mas os hábitos de cada pessoa também contam. O desperdício de água, o excesso de embalagens e o descarte incorreto do lixo fazem parte de um problema que vemos todos os dias.

Um exemplo é comprar algo novo mesmo quando o antigo ainda funciona. Parece uma decisão pequena, mas produzir e transportar mercadorias consome recursos naturais e energia. Depois, quando esses objetos são jogados fora sem cuidado, parte deles acaba poluindo ruas e rios. Isso mostra que precisamos pensar não só em como descartar, mas também no que realmente vale a pena consumir.

Na escola, esse assunto pode sair dos livros e virar prática. Uma horta, a separação de resíduos ou uma campanha contra o desperdício ajudam a perceber os resultados das escolhas. Porém, não adianta colocar toda a responsabilidade nas pessoas se a cidade não oferece coleta seletiva e outras condições básicas.

Cuidar do planeta exige esforço conjunto. Ninguém precisa mudar tudo de um dia para o outro, mas começar com atitudes possíveis e cobrar melhorias maiores já é um bom caminho. Afinal, o ambiente que deixamos amanhã depende muito do que fazemos hoje.`
  },
  {
    titulo: "O valor da leitura em um mundo acelerado",
    tema: "Literatura",
    texto: `Com tantas mensagens, vídeos e notificações aparecendo o tempo inteiro, sentar para ler um livro pode parecer uma tarefa difícil. A leitura pede atenção e paciência, duas coisas que nem sempre combinam com a pressa do dia a dia. Mesmo assim, vale a pena reservar um tempo para ela.

Um livro permite conhecer lugares, épocas e pessoas que talvez nunca encontrássemos de outra forma. Às vezes, uma história faz o leitor entender melhor um sentimento que nem sabia explicar. Em outros momentos, um texto ajuda a questionar uma ideia ou perceber que existem vários lados para o mesmo assunto.

O problema é que muitos estudantes acabam associando leitura apenas a provas e atividades obrigatórias. Para mudar isso, seria interessante dar mais espaço à escolha. Nem todo mundo vai gostar do mesmo romance, e não há nada de errado em começar por quadrinhos, crônicas, mistério ou poesia. Conversar sobre o que foi lido também torna a experiência mais interessante.

Ler não precisa ser uma competição para terminar o maior número de páginas. O importante é criar uma relação com os textos e descobrir o que eles podem oferecer. Em um mundo tão acelerado, um bom livro continua sendo uma maneira especial de parar, imaginar e pensar.`
  },
  {
    titulo: "Inteligência artificial e responsabilidade humana",
    tema: "Tecnologia",
    texto: `Hoje, a inteligência artificial aparece em aplicativos, pesquisas e ferramentas usadas para estudar. Ela consegue organizar informações, sugerir ideias e explicar assuntos em poucos segundos. É uma novidade que facilita bastante a rotina, mas usar essa tecnologia sem pensar também pode trazer problemas.

Nem toda resposta apresentada por um sistema está correta. Às vezes, a informação parece convincente e mesmo assim contém erros. Por isso, copiar tudo sem conferir pode prejudicar o aprendizado. Também precisamos ter cuidado com dados pessoais e com o que compartilhamos nessas plataformas.

Isso não significa que a inteligência artificial deva ficar fora da escola. Ela pode ajudar a entender uma matéria difícil, encontrar diferentes formas de explicar um conteúdo e organizar um plano de estudos. A diferença está em usar a ferramenta como apoio, e não como substituta do próprio raciocínio. Se o aluno recebe uma resposta pronta e não entende o assunto, perde uma parte importante da atividade.

A tecnologia vai continuar mudando, e aprender a lidar com ela é necessário. Mais do que saber fazer perguntas para uma máquina, precisamos desenvolver senso crítico, criatividade e responsabilidade. São essas capacidades que permitem aproveitar as vantagens da inteligência artificial sem deixar de pensar por conta própria.`
  },
  {
    titulo: "O respeito às diferenças fortalece a convivência",
    tema: "Cidadania",
    texto: `Em uma sala de aula, ninguém é exatamente igual. Cada estudante tem sua história, seu jeito de falar, seus gostos e suas opiniões. Essa variedade pode tornar a convivência mais interessante, desde que exista respeito. O problema começa quando alguém é tratado como inferior simplesmente por ser diferente.

Comentários que parecem brincadeira para uns podem machucar bastante quem os recebe. Apelidos ofensivos, exclusão de grupos e julgamentos pela aparência criam um ambiente em que algumas pessoas passam a ter medo de se expressar. Uma escola deveria ser justamente o contrário: um lugar onde todos se sintam seguros para aprender.

Não basta falar sobre respeito em uma palestra e esquecer o assunto no dia seguinte. Professores e alunos precisam agir quando percebem situações injustas. Ouvir o outro, evitar julgamentos apressados e conversar antes de transformar uma diferença em conflito são atitudes que ajudam muito. A escola também pode promover atividades que apresentem culturas e experiências diversas.

Respeitar não é concordar com tudo. Podemos discutir ideias e continuar tratando as pessoas com educação. Aprender isso durante a vida escolar é importante porque, fora dela, vamos conviver com muitas outras diferenças. Saber lidar com elas faz parte de crescer.`
  },
  {
    titulo: "Saúde mental e os desafios da adolescência",
    tema: "Saúde e bem-estar",
    texto: `A adolescência costuma ser lembrada como uma fase de descobertas e novas amizades. Mas ela também pode trazer inseguranças, cobranças e dúvidas sobre o futuro. Entre provas, expectativas da família e comparações com outras pessoas, nem sempre é fácil lidar com tudo ao mesmo tempo.

Muitos jovens evitam contar quando não estão bem. Alguns têm receio de parecer fracos; outros acham que ninguém vai entender. Guardar todos os sentimentos, porém, pode tornar as dificuldades ainda mais pesadas. Descansar pouco e passar o dia inteiro tentando cumprir obrigações também não ajuda.

Ter alguém disposto a ouvir faz diferença. Pode ser um familiar, um amigo de confiança ou um profissional preparado para oferecer apoio. Na escola, seria importante conversar mais sobre o assunto sem transformar cada dificuldade em motivo de julgamento. Cuidar do sono, ter momentos de lazer e manter relações saudáveis também faz parte desse cuidado.

Ninguém precisa estar feliz o tempo todo, e pedir ajuda não deveria causar vergonha. Levar a saúde mental a sério é reconhecer que o bem-estar importa tanto quanto as notas. Aprender a cuidar de si é uma lição que continua valendo muito depois da formatura.`
  },
  {
    titulo: "O futuro do trabalho e a aprendizagem contínua",
    tema: "Trabalho e profissão",
    texto: `Pensar em qual profissão seguir depois da escola pode dar um frio na barriga. Existem muitas possibilidades, mas o mercado de trabalho muda rápido. Algumas tarefas passam a ser feitas por máquinas, novas áreas aparecem e habilidades que antes pareciam suficientes precisam ser atualizadas.

Saber usar tecnologia é importante, porém não resolve tudo. Uma pessoa também precisa se comunicar bem, trabalhar com outras pessoas e encontrar soluções quando algo sai do planejado. Essas capacidades são desenvolvidas em experiências diferentes, inclusive em trabalhos escolares e projetos em grupo.

Para quem está terminando o Ensino Médio, uma boa forma de começar é pesquisar. Conversar com profissionais, conhecer cursos e observar o próprio interesse por determinadas atividades ajuda a tomar decisões. E vale lembrar que escolher um caminho agora não significa ficar preso a ele para sempre. Muita gente descobre novas áreas ao longo da vida.

Talvez ninguém consiga prever exatamente como serão as profissões daqui a alguns anos. Por isso, mais importante do que acertar uma escolha perfeita é estar disposto a aprender. Com responsabilidade, curiosidade e dedicação, fica mais fácil aproveitar as oportunidades e enfrentar as mudanças que aparecerem.`
  },
  {
    titulo: "A importância do esporte na formação dos jovens",
    tema: "Esporte e educação",
    texto: `Para muita gente, a aula de Educação Física é um dos momentos mais esperados da semana. Correr, jogar e participar de uma equipe são atividades que ajudam a sair da rotina da sala de aula. Mas o esporte oferece muito mais do que exercício físico.

Em uma partida, aprendemos que ninguém ganha sozinho. É preciso combinar estratégias, respeitar regras e confiar nos colegas. Também existem derrotas, erros e momentos de frustração. Saber lidar com essas situações é uma experiência que pode ajudar em outros desafios da vida.

Por outro lado, quando só os melhores jogadores recebem atenção, alguns estudantes acabam ficando de fora. O esporte escolar deveria dar oportunidade a todos, inclusive a quem está começando ou prefere atividades diferentes. A escola pode oferecer modalidades variadas e valorizar o esforço, não apenas o resultado final.

Praticar esportes pode melhorar a saúde, aproximar pessoas e ensinar responsabilidade. O mais importante é que a competição não faça ninguém esquecer o respeito. Afinal, as melhores lembranças de um jogo nem sempre são os gols ou os pontos, mas as pessoas com quem dividimos aquele momento.`
  },
  {
    titulo: "O combate ao bullying é responsabilidade de todos",
    tema: "Convivência escolar",
    texto: `Uma brincadeira deixa de ser engraçada quando alguém passa a sofrer com ela. Na escola, apelidos ofensivos, ameaças e exclusões repetidas podem fazer parte do bullying. O problema não deve ser ignorado, porque afeta a maneira como o estudante se sente e participa das atividades.

Quem passa por isso pode começar a evitar certos lugares, se afastar dos colegas ou perder a vontade de ir à escola. E não são apenas as agressões diretas que importam. Quando várias pessoas assistem e ninguém faz nada, quem está sendo humilhado pode sentir que não tem apoio.

É necessário que a escola tenha regras claras e leve os relatos a sério. Professores e responsáveis precisam ouvir os envolvidos, agir com cuidado e acompanhar a situação para que ela não continue. Os colegas também têm um papel importante: não espalhar mensagens ofensivas e procurar um adulto de confiança quando presenciarem uma agressão.

Combater o bullying não é tarefa de uma única pessoa. Depende de atitudes constantes e de um ambiente em que o respeito seja mais importante do que a vontade de rir de alguém. Todo estudante merece frequentar a escola sem medo.`
  },
  {
    titulo: "A cultura brasileira e a construção da identidade",
    tema: "Cultura",
    texto: `O Brasil tem uma cultura muito rica, e isso aparece em coisas simples do cotidiano: nas músicas que ouvimos, nas comidas típicas, nas festas e até nas expressões que usamos para conversar. Cada região tem suas tradições, e conhecer essas diferenças ajuda a entender melhor o país em que vivemos.

Mesmo com tanta diversidade, nem todas as manifestações culturais recebem a mesma valorização. Algumas são vistas como mais importantes, enquanto outras sofrem preconceito ou acabam esquecidas. Isso é uma perda, porque cada tradição guarda histórias e experiências de pessoas que ajudaram a formar nossa sociedade.

A escola pode aproximar os estudantes desse patrimônio. Pesquisar festas locais, conhecer artistas brasileiros e conversar com pessoas mais velhas sobre suas lembranças são maneiras de aprender fora dos livros. Visitas a museus, apresentações e projetos culturais também tornam as aulas mais interessantes.

Valorizar a cultura brasileira não significa gostar de tudo ou deixar de conhecer outros países. Significa respeitar nossas origens e reconhecer que não existe uma única maneira de ser brasileiro. Quanto mais conhecemos essas histórias, mais entendemos a diversidade que faz parte da nossa identidade.`
  },
  {
    titulo: "Desinformação e a importância do pensamento crítico",
    tema: "Informação e mídia",
    texto: `Receber notícias pelo celular virou algo comum. Em poucos segundos, uma mensagem pode chegar a milhares de pessoas, mesmo quando ninguém sabe ao certo se ela é verdadeira. Por isso, a facilidade de compartilhar informações trouxe uma responsabilidade que nem sempre é levada a sério.

Uma foto antiga pode aparecer como se tivesse sido tirada ontem. Um título exagerado pode fazer alguém acreditar em algo sem ler a notícia inteira. E, quando a mensagem combina com aquilo que já pensamos, a vontade de compartilhar pode ser ainda maior. É assim que informações erradas acabam se espalhando.

Antes de repassar qualquer conteúdo, vale conferir quem publicou, quando foi publicado e se outros veículos confiáveis apresentam os mesmos fatos. Na escola, atividades de comparação entre notícias podem ensinar essa prática de forma simples. Não se trata de desconfiar de tudo, mas de aprender a procurar provas.

Ter acesso a muita informação não significa estar bem informado. Precisamos saber escolher, interpretar e questionar o que recebemos. Esse cuidado ajuda a evitar boatos e permite participar das conversas com mais segurança e responsabilidade.`
  },
  {
    titulo: "Mobilidade urbana e qualidade de vida",
    tema: "Cidades e sociedade",
    texto: `Quem depende de ônibus ou precisa atravessar a cidade todos os dias sabe como o transporte influencia a rotina. Um trajeto demorado pode significar menos tempo para estudar, descansar ou ficar com a família. Por isso, a mobilidade urbana não é apenas uma questão de trânsito: ela interfere na qualidade de vida.

Em muitas cidades, os bairros cresceram sem que o transporte acompanhasse esse ritmo. Algumas pessoas moram longe da escola ou do trabalho e enfrentam ônibus lotados, calçadas ruins e falta de segurança. Para idosos e pessoas com deficiência, esses obstáculos podem ser ainda maiores.

Melhorar a situação exige planejamento. Transporte público mais eficiente, calçadas acessíveis e ciclovias seguras são algumas medidas possíveis. Também é importante ouvir quem usa esses serviços todos os dias, porque são essas pessoas que conhecem as dificuldades de cada trajeto.

Uma cidade bem organizada deveria permitir que seus moradores se deslocassem com segurança e sem perder tantas horas no caminho. Investir em mobilidade é facilitar o acesso ao estudo, ao trabalho e aos espaços de lazer. No fim, é uma forma de tornar a cidade melhor para todos.`
  },
  {
    titulo: "Voluntariado e participação na comunidade",
    tema: "Solidariedade",
    texto: `Nem sempre é preciso fazer algo grandioso para ajudar alguém. Às vezes, participar de uma arrecadação, colaborar com a limpeza de um espaço público ou dedicar algumas horas a uma atividade comunitária já faz diferença. O voluntariado mostra que a vida em sociedade também depende da disposição de cuidar uns dos outros.

Essas ações podem aproximar pessoas que antes nem se conheciam. Ao trabalhar em grupo, aprendemos a ouvir necessidades diferentes das nossas e a perceber problemas que passavam despercebidos. Mas ajudar de verdade também exige respeito. Não adianta decidir sozinho o que uma comunidade precisa sem conversar com quem vive nela.

A escola pode incentivar esse tipo de participação por meio de projetos ligados ao bairro. Os alunos podem pesquisar uma dificuldade local, conversar com moradores e planejar uma atividade possível. Assim, o aprendizado ganha um sentido prático e não fica limitado a uma campanha feita apenas uma vez.

Ser voluntário não significa resolver todos os problemas do mundo. Significa entender que pequenas atitudes, quando feitas com responsabilidade e continuidade, têm valor. Participar da comunidade é uma maneira de aprender cidadania na prática.`
  },
  {
    titulo: "Encerrar o Ensino Médio e começar uma nova etapa",
    tema: "Projeto de vida",
    texto: `Chegar ao último ano do Ensino Médio traz uma sensação diferente. Durante muito tempo, a escola fez parte da rotina: acordar cedo, encontrar os colegas, entregar trabalhos e esperar as férias. De repente, percebemos que essa fase está acabando e que muitas coisas vão mudar.

É normal sentir alegria pela conquista e, ao mesmo tempo, um pouco de saudade. Nem todos os dias foram fáceis. Houve provas complicadas, tarefas acumuladas e momentos em que parecia difícil acompanhar tudo. Mas também existiram conversas, risadas e experiências que ensinaram muito além das matérias.

Pensar no futuro pode causar insegurança. Escolher um curso, procurar trabalho ou começar um projeto novo são decisões importantes, e ninguém precisa ter todas as respostas imediatamente. O melhor é buscar informações, conhecer as próprias habilidades e entender que mudar de ideia faz parte do crescimento.

A formatura não apaga o que vivemos na escola. As amizades, os erros e os aprendizados continuam fazendo parte de quem somos. Encerrar o Ensino Médio é fechar um capítulo importante, mas ainda existem muitas páginas para escrever. E talvez essa seja a parte mais interessante de seguir em frente.`
  }
];

const grid = document.querySelector('#essayGrid');
const search = document.querySelector('#search');
const counter = document.querySelector('#counter');
const empty = document.querySelector('#empty');
const dialog = document.querySelector('#reader');

let current = 0;

function render() {
  const q = search.value.toLocaleLowerCase('pt-BR').trim();

  const found = redacoes
    .map((r, i) => ({ ...r, index: i }))
    .filter(r =>
      `${r.titulo} ${r.tema}`
        .toLocaleLowerCase('pt-BR')
        .includes(q)
    );

  grid.replaceChildren();

  for (const r of found) {
    const b = document.createElement('button');
    b.className = 'essay';
    b.type = 'button';

    const number = document.createElement('span');
    number.className = 'number';
    number.textContent =
      `REDAÇÃO ${String(r.index + 1).padStart(2, '0')}`;

    const h = document.createElement('h3');
    h.textContent = r.titulo;

    const cat = document.createElement('span');
    cat.className = 'category';
    cat.textContent = r.tema;

    const arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.textContent = '↗';

    b.append(number, h, cat, arrow);
    b.addEventListener('click', () => openEssay(r.index));
    grid.append(b);
  }

  counter.textContent = `${found.length} de 15 redações`;
  empty.hidden = found.length !== 0;
}

function openEssay(i) {
  current = i;
  const r = redacoes[i];

  document.querySelector('#readerNumber').textContent =
    `REDAÇÃO ${String(i + 1).padStart(2, '0')}`;

  document.querySelector('#readerTitle').textContent = r.titulo;
  document.querySelector('#readerTheme').textContent = r.tema;
  document.querySelector('#readerBody').textContent = r.texto;
  document.querySelector('#readerProgress').textContent =
    `${i + 1} / ${redacoes.length}`;

  document.querySelector('#prevEssay').disabled = i === 0;
  document.querySelector('#nextEssay').disabled =
    i === redacoes.length - 1;

  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}

search.addEventListener('input', render);

document.querySelector('#closeReader')
  .addEventListener('click', () => dialog.close());

document.querySelector('#prevEssay')
  .addEventListener('click', () => {
    if (current > 0) openEssay(current - 1);
  });

document.querySelector('#nextEssay')
  .addEventListener('click', () => {
    if (current < redacoes.length - 1) openEssay(current + 1);
  });

dialog.addEventListener('click', e => {
  if (e.target === dialog) dialog.close();
});

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

menu.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(opened));
});

nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  })
);

const theme = document.querySelector('#themeToggle');

function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  theme.textContent = dark ? '☀' : '☾';

  theme.setAttribute(
    'aria-label',
    dark ? 'Ativar tema claro' : 'Ativar tema escuro'
  );

  try {
    localStorage.setItem('tema', dark ? 'escuro' : 'claro');
  } catch {}
}

theme.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});

try {
  setTheme(localStorage.getItem('tema') === 'escuro');
} catch {
  setTheme(false);
}

render();
