# Pré-requisitos

1. Um entendimento básico da [linguagem markdown](https://www.markdownguide.org/basic-syntax/).

2. Você precisará criar uma conta [github](https://github.com/) gratuita se não tiver uma. Recomendamos que use o nome do seu RPG, pois isso fará parte do URL que as pessoas usarão para acessar o seu SRD.

3. Você pode fazer todo este processo através do navegador sem conhecer git. Embora aprender o github desktop lhe permita testar quaisquer alterações localmente antes de as implementar publicamente para o mundo ver.

> Se tiver um nome de domínio registado, pode usá-lo com este processo para criar um SRD como eu tenho https://srd.7thextinctionrpg.com

# O Processo

## Criando o Repositório no Github

1. Iniciar sessão no Github

2. Navegue até o modelo público https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Clique em "Use this template" (Usar este modelo)

![Step3](/_media/Step3.png)

4. Selecione "Create a new repository" (Criar um novo repositório)

5. Insira um nome para o repositório

![Step5](/_media/Step5.png)

6. Selecione 'Private' (Privado)

7. Selecione 'Create repository' (Criar repositório)

Levará de 5 a 30 segundos para copiar o modelo, e então você terá a sua própria cópia.

8. Certifique-se de que tem o ficheiro ".nojekyll" – este é um ficheiro vazio que é necessário ao alojar um website no Github, caso contrário, o SRD não será exibido corretamente. *(Indica ao GitHub Pages para não executar os ficheiros publicados através do Jekyll).*

## Adicionando o Seu Conteúdo

### Ficheiros *.md

Os ficheiros .md são ficheiros markdown. Markdown é uma linguagem de marcação leve que pode usar para adicionar elementos de formatação a documentos de texto simples. Dependendo do tamanho do seu conteúdo, pode colocar todas as informações do seu jogo num único ficheiro *.md, ou, como eu fiz em [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), criar ficheiros separados para cada capítulo. O "sample.md" fornece alguns exemplos de formatação.

A linguagem Markdown é muito fácil de aprender, use o link fornecido no ponto 2 em Pré-requisitos acima para uma lista completa de sintaxe.

### _Sidebar.md

Este é o seu menu, o painel de navegação no lado esquerdo do website. Depois de adicionar um ficheiro markdown ao seu repositório, precisa de adicionar o ficheiro aqui para que o seu conteúdo seja incluído. Siga a formatação existente.

## Ativar o Github Pages para Transformar o Repositório num Website

1. No seu repositório, clique em 'Settings' (Definições)

![Website-Step1](/_media/Website-Step1.png)

2. Selecione 'Pages' (Páginas) no menu do lado esquerdo

![Website-Step2](/_media/Website-Step2.png)

3. Se ainda não tornou o repositório 'public', tem duas escolhas:
    a. Tornar o repositório público, o que lhe permitirá usar o Github Pages para alojar o seu website SRD gratuitamente.
    b. Atualizar a sua conta Github (no momento em que isto foi escrito, custa $4 por mês ou uma taxa anual de $48).

4. Em 'Branch', selecione 'main' e clique em save (guardar)

5. Espere 10-20 segundos e depois atualize a página

6. Irá agora ver o seu URL, como https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Mudando Fontes

1. Edite o ficheiro /_assets/style.css

2. Na secção 'body', encontrará siteFont e headingFont

3. Altere-os para as fontes que deseja usar

## Usando o plugin Fontawesome e/ou Material Icons para exibir ícones gratuitos no seu SRD

### Fontawesome

Use o Fontawesome para obter ícones gratuitos e ícones animados. Utilizadores subscritos podem usar Ícones Pro.

1. Encontre o ícone em [Fontawesome](https://fontawesome.com/icons)
2. Selecione o ícone
3. Na janela pop-up, na aba HTML, copie tudo entre " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Coloque o texto copiado entre `:` sem espaços

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Use os Material Icons para mais ícones gratuitos

1. Encontre os ícones em [Material Icons](https://fonts.google.com/icons)
2. Copie e insira o link do web span diretamente nos seus ficheiros markdown

```markup
<span class="material-icons">face</span>
```