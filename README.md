# Diário Digital Hacker

Um diário pessoal com estética hacker, protegido por enigmas visuais e códigos.

## Características

- Interface estilo terminal com efeitos visuais hacker
- 4 enigmas visuais que devem ser resolvidos para acessar o diário
- Efeitos de glitch e animações
- Estilo visual inspirado em terminais de computador
- Efeitos de digitação para o conteúdo do diário

## Estrutura do Projeto

```
.
├── index.html              # Página inicial com links para os enigmas
├── diario.html            # Página principal do diário
├── css/
│   └── style.css          # Estilos principais
├── js/
│   └── main.js            # Scripts principais
└── enigmas/
    ├── enigma1.html       # Enigma 1 - Código Binário
    ├── enigma2.html       # Enigma 2 - Cifra de César
    ├── enigma3.html       # Enigma 3 - Padrão Visual
    └── enigma4.html       # Enigma 4 - Senha Final
```

## Como Usar

1. Acesse `index.html` para começar
2. Resolva os 4 enigmas em sequência
3. Na página final, insira a senha "o ceifador morre só"
4. Acesse o diário pessoal

## Personalização

Para adicionar novas entradas ao diário, edite o arquivo `diario.html` e adicione novas `div`s com a classe `diary-entry` seguindo o formato:

```html
<div class="diary-entry">
    <div class="diary-date">[DATA]</div>
    <div class="diary-content typing">
        Seu texto aqui...
    </div>
</div>
```

## Tecnologias Utilizadas

- HTML5
- CSS3 (com animações e efeitos)
- JavaScript puro
- Fonte Fira Code para estilo terminal

## Observações

- Este é um projeto pessoal e privado
- Não requer backend ou banco de dados
- Todo o conteúdo é modificado diretamente no código
- Os enigmas são puramente visuais e não requerem conhecimento técnico avançado 