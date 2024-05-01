const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena valores.",
        "Um bloco de código reutilizável que realiza uma tarefa específica.",
        "Uma estrutura de controle de fluxo de código."
      ],
      correta: 1
    },
    {
      pergunta: "Como você comenta uma linha de código em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do console.log(5 + '5')?",
      respostas: [
        "55",
        "10",
        "'55'"
      ],
      correta: 2
    },
    {
      pergunta: "Como você verifica se duas variáveis são estritamente iguais em  JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorná-lo?",
      respostas: [
        "pop()",
        "shift()",
        "push()"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação.",
        "Uma ferramenta de desenvolvimento web.",
        "Uma interface que representa documentos HTML/XML e fornece uma maneira de interagir com eles."
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação.",
        "Uma ferramenta de desenvolvimento web.",
        "Uma interface que representa documentos HTML/XML e fornece uma maneira de interagir com eles."
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação.",
        "Uma ferramenta de desenvolvimento web.",
        "Uma interface que representa documentos HTML/XML e fornece uma maneira de interagir com eles."
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação.",
        "Uma ferramenta de desenvolvimento web.",
        "Uma interface que representa documentos HTML/XML e fornece uma maneira de interagir com eles."
      ],
      correta: 2
    }
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#Acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  //loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta


  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
    

  }

  //remover a primeira opção das respostas
  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }