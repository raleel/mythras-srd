# Título do Guia de Estilo (h1)

Use cabeçalhos h1 (`# Heading Title`) para o título principal do capítulo. Todos os cabeçalhos hx aparecerão na barra lateral como marcadores.

Se o título não for um cabeçalho h1, a barra lateral terá um erro de duplicação mostrando a página e depois o cabeçalho h2 'título'.

---
## Títulos de seção (h2)

Use cabeçalhos h2 (`## Section Heading`) precedidos por um divisor (`---`) para cada nova seção principal.

### Títulos de subseção aumentando o nível h em 1

Use cabeçalhos h3 (`### Subsection Heading`) para cada nova Subseção e cabeçalhos h4 (`#### Sub-Subsection Heading`) para cada nova sub-subseção.

### Progressão h da subseção: 2 > 3 > 4

Os subtítulos ficam misturados na barra lateral se a progressão h não for tratada corretamente.

O marcador de cabeçalho deve aumentar em um ou nada.

h2 seguido por h2 ou h3 está bem. h3 seguido por h3 ou h4 também está bem.

### Erros de Subseção
h2 seguido por h4 causa problemas. A barra lateral coloca o subtítulo em algum lugar acima do título no índice.

### Redução dos níveis h

Isso não parece ser um problema. Ex: h4 para h3 ou h2 está bem.

---
## Convenções de formatação

Os seguintes estilos são a norma para estes SRDs _Imperativos_ em formato Markdown.

### Negrito, Itálico e Divisores

- Use asteriscos duplos (`**Bold**`) para texto em **Negrito**.
- Use sublinhados (`_Italic_`) para texto em _Itálico_.
   - _obs: Evite usar asteriscos únicos para Itálico!_
- Use barras invertidas (`\_`) para 'escapar' um caractere: \_Não Itálico\_.
- Use aspas angulares (``` `code` ```) para fazer `code blocks`.
- Use três hífens (`---`) para inserir uma linha divisória horizontal.

### Convenções para Negrito e Itálico

Procure seguir os seguintes padrões...

#### Títulos em Negrito

Use títulos em negrito ao descrever feitiços, efeitos etc.
- **Título Mágico:** Descrição.

#### Títulos em Itálico

Use títulos em itálico para 'sublistas' de feitiços variantes etc.
- **Magia:** Descrição.
  - **_Magia Variante-A:_** Descrição.
  - **_Magia Variante-B:_** Descrição.

#### Referências de Títulos em Itálico

Use títulos em itálico ao referenciar um livro como _Mythras Imperative_ ou o conjunto de regras _Mythras_ principal.

---
## Formatação de listas

### Listas não ordenadas / Marcadores

- Listas não ordenadas são feitas com hífens.
- Listas não ordenadas são feitas com hífens.
  - Aumente o nível de recuo com 2 espaços ou uma tabulação.

### Listas ordenadas / Itens numerados

1. Listas numeradas são feitas com o dígito e um ponto final.
2. Listas numeradas são feitas com o dígito e um ponto final.
- Misturar com marcadores
	- E indentação
3. Misturar números de volta
   - E marcadores

### Listas com cabeçalho

Para listas de subtítulos relacionados, coloque o título e os dois pontos em negrito.
- **Exemplo 1:** Bla, bla, bla...
- **Exemplo 2:** Bla, bla, bla...

### Listas com cabeçalho em itálico

Para listas de subtítulos relacionados, coloque o título e os dois pontos em negrito e itálico.
- **_Exemplo 1:_** Bla, bla, bla...
- **_Exemplo 2:_** Bla, bla, bla...

---
## Tabelas

Dê às tabelas um subtítulo para que apareçam marcadas na barra lateral, com um nível de recuo em relação à seção pai.

~Coloque a linha do cabeçalho em negrito.~
Colocar a linha do cabeçalho em negrito na verdade a renderiza em texto normal. O CSS padrão já a deixa em negrito.

### Alinhamento do texto da tabela

Use a linha 2 para alinhamento do conteúdo: `:--`, `:-:`, ou `--:`.
Isso afetará a coluna inteira.

#### Layout Básico de Tabelas

| **Coluna 1** | **Coluna 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gama |

### Convenções de alinhamento de texto

- Use alinhamento central para números ou listas de valores semelhantes.
- Use alinhamento à esquerda para frases de texto.

#### Tabela de Exemplo de Alinhamento

| **Número** | **Descrição** |
| :-: | :-- |
| 1 | Texto descritivo |
| 2 | Texto descritivo |
| 3 | Texto descritivo |

#### Exemplo: Tabela de Intensidade de Fogo

| **Intensidade** | **Exemplos** | **Tempo para Acender** | **Dano** |
| :-: | :-- | :-: | :-: |
| 1 | Vela | 1d4 | 1d2 |
| 2 | Tocha | 1d3 | 1d4 |
| 3 | Fogueira | 1d2 | 1d6 |
| 4 | Conflagração que preenche a sala | 1d2 | 2d6 |
| 5 | Lava vulcânica | Instantâneo | 3d6 |

---
## Links

Existem muitos usos para links no SRD e apenas alguns casos principais são abordados aqui.

### Formatação de Links

A formatação de um link é feita com texto entre colchetes. Use colchetes retos para o texto visível do link e colchetes curvos para o URL de destino: `[Link Text](URL)`.

Nesses documentos, o link externo mais comumente usado será o [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Links Externos vs. Internos

Links externos levam a outras páginas via internet e precisarão de um URL `http://example.com` e, por padrão, eles _sempre_ abrirão em uma nova aba do navegador.

Para evitar que várias abas poluam o documento sendo lido, links internos e marcadores são formados com URLs relativas referenciando os arquivos markdown visíveis no repositório GitHub. Em vez de uma nova aba, esses links internos rolarão rapidamente para a seção vinculada.

#### Exemplos de links internos

- **Links de capítulo:** Apontam para o início de uma seção principal (h1). Ex: o capítulo de [Combate](0005_Combat.md).

  - Formato do link: `[Combat](0005_Combat.md)`

- **Links de subseção:** Apontam para um cabeçalho dentro de um capítulo, referenciando o documento como acima, mas anexando `?id=` seguido imediatamente pelo cabeçalho de destino. Ex: [Ataques de Salto](0005_Combat.md?id=leaping-attacks)

  - Formato do link: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Links externos para subseções

Pode haver ocasiões para referenciar uma seção conhecida de um documento externo, por exemplo, uma tabela específica em outro SRD. A formatação é a mesma dos links de subseção, acima, usando apenas o URL HTTP externo.

Como exemplo, aqui está a [tabela de conversões Imperial para Métrica](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) do [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Listas de Magias e Poderes

Comece uma seção 'limpa' com um cabeçalho h2 para listas de magias, poderes etc.; depois h3 para cada item da lista.

Magias e poderes são geralmente apresentados em uma única lista plana por tipo de magia (Magia Popular, Teísmo, etc), mas se a lista exigir suas próprias subseções, como especializações de escola ou culto, aumente o nível do cabeçalho apropriadamente. Por exemplo, h2 para Lista de Milagres do Teísmo, h3 para Culto: Mithras, e h4 para cada milagre do culto de Mithras.

Particularmente no caso de magias, mas em qualquer descrição usando atributos de palavra-chave, liste-os em texto itálico.

Texto descritivo e regras especiais usam texto normal.

### Formatação da Lista de Feitiços

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Exemplo: lista de feitiços formatada (em bloco citado) </summary>

---
> ## Descrições de feitiços
>
> ### Desviar
> _Instantâneo, À Distância_
>
> Desviar é usado para dissipar outro feitiço dentro do alcance. Desviar pode ser lançado reativamente para neutralizar feitiços ofensivos, usando a Ação Reativa de Contra-Magia.

</details>

---
## Blocos de estatísticas de veículos
Comece uma seção 'limpa' com um cabeçalho h2 para as listagens, depois aumente o nível h como de costume para categorias e itens da lista.

Cada exemplo listado tem as estatísticas e descrições apresentadas como uma lista de pontos com títulos de pontos em negrito.

### Formatação do Bloco de Estatísticas de Veículos

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Exemplo: bloco de estatísticas de veículo formatado (em bloco citado) </summary>

---
> ## Veículos de Exemplo
>
> ### Veículos Terrestres
>
> #### Interceptador
>
> - **Casco:** 6 (Militar Médio), 40 Estrutura
>
> - **Velocidade:** Rápida
>
> - **Sistemas:** 3
>
> - **Traços:** Assento Ejetor, Desempenho Aprimorado, Manuseio Superior, Pacote de Vigilância, Resistente, Armado
>
> - **Armas:** Dispensador de óleo, dispensador de fumaça, metralhadoras médias duplas
>
> - **Descrição:** Um carro de luxo tunado, carro esportivo ou similar, este carro é construído para ir rápido e se sair bem em uma batalha. É o tipo de veículo em que as pessoas pensam quando alguém diz "carro de espião".

</details>

---
## Blocos de estatísticas de criaturas
Comece uma seção 'limpa' com um cabeçalho h2 para as listagens. Blocos de estatísticas de criaturas usam tabelas e são mais complexos em termos de formatação e requisitos de espaço. Para clareza, evite subseções e adicione divisores entre os itens da lista.

Cada exemplo listado deve ter o seguinte...

- **Título da Criatura:** Um divisor seguido por um cabeçalho h3 para o nome da criatura.

- **Entrada MEG:** Um link externo para a criatura especificada no [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Detalhes Principais:** Nome/tipo da criatura, atributos, habilidades e quaisquer descrições especiais ou notas de personagem conforme necessário.

- **Detalhes de Arma:** Descrições abreviadas com colunas para o nome da arma e os seguintes atributos: Tamanho (inclua Força aqui), Alcance (inclua Distância aqui), Dano, AP/HP, e quaisquer regras especiais.

- **Locais de Acerto e Armadura:** As tabelas de localização variarão com base nas diferentes anatomias das criaturas, mas devem ser incluídas mesmo para humanoides tradicionais como um meio de rastrear armadura e dano.

### Formatação do Bloco de Estatísticas de Criaturas

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Attributes | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Other notes | Values and details | 
```

<details>

<summary>Exemplo: tabelas de blocos de estatísticas de criaturas formatadas (em bloco citado) </summary>

> ---
> ### Goblin/Orc
> [Entrada MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Nome da Criatura | Goblin/Orc |
> | :-- | :-- |
> | Atributos Chave | FOR 11, CON 14, TAM 11, DES 11, INT 11, POD 11, CAR 7 |
> | Pontos de Ação | 2 |
> | Modificador de Dano | - |
> | Iniciativa | +11 |
> | Movimento | 6m |
> | Habilidades | Visão Noturna |
> | Perícias | Atletismo 52%, Força Bruta 42%, Enganação 57%, Resistência 48%, Esquiva 62%, Percepção 61%, Desarmado 52%, Força de Vontade 42% |
> | Estilo de Combate | Guerreiro (Espada Curta, Escudo, Lança, Funda) 62% |
>
> #### Detalhes da Arma
>
> | Arma | Tamanho | Alcance | Dano | AP/HP | Especial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Espada Curta | M | M | 1d6 | 6/8 | |
> | Lança | M | L | 1d8+1 | 4/5 | |
> | Funda | L | 10/150/300 | 1d8 | 1/2 | |
> | Escudo | G | P | 1d4 | 4/9 | Protege 3 locais para Bloqueio/Guarda Passiva |
>
> #### Locais de Acerto e Armadura
>
> | **1d20** | **Localização** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Perna Direita | 1/5 |
> | 4-6 | Perna Esquerda | 1/5 |
> | 7-9 | Abdômen | 1/6 |
> | 10-12 | Peito | 1/7 |
> | 13-15 | Braço Direito | 1/4 |
> | 16-18 | Braço Esquerdo | 1/4 |
> | 19-20 | Cabeça | 1/5 |

</details>

---
## Errata da Comunidade

### Erros de digitação e confusão

Edições para 'limpar' o texto dos autores devem ser mantidas mínimas, mas erros de digitação e outras falhas devem ser alterados diretamente sem qualquer sinalização.

### Painéis de Informação de Errata

Quando uma determinada regra é muito ambígua, incompleta ou simplesmente errada, adicione uma nota de Errata da Comunidade recolhível.

Explique o problema em itálico usando apenas itálico em negrito para o título do problema - _sem cabeçalhos h(x)!_ - para não criar entradas confusas na barra lateral.

Se for adicionado texto de substituição, coloque-o entre aspas duplas em negrito itálico, precedido por "_Errata da Comunidade:_" em itálico de peso normal.

Regras adicionais, se necessárias, devem ser apresentadas em texto de peso normal.

#### Modelo de Formatação de Errata

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Exemplos de Errata

<details>

<summary>* Errata da Comunidade</summary>

_**Escalar**_

_Errata da Comunidade:_
_**"A armadura usada dificulta os escaladores em uma quantidade igual à média dos Pontos de Armadura usados. Encontre isso somando os pontos de armadura usados de cada localização e dividindo esse valor pelo número de localizações."**_

_A regra como escrita rapidamente causa problemas. Usar uma única peça de armadura de 6 AP reduziria um humano a Movimento 0, significando que um humano usando um capacete de aço e nada mais estaria sobrecarregado demais para escalar. Isso parece excessivamente restritivo, daí a versão editada sugerida acima. Isso será atualizado caso os autores originais revisem a regra como escrita._

</details>

<details>

<summary>* Errata da Comunidade</summary>

_**Passos: Andar, Correr, Sprintar**_

_A versão publicada de _Mythras Imperative_ não possui regras explícitas para se mover em diferentes Passos, embora elas sejam abordadas no livro de regras principal do Mythras. Os multiplicadores de Passos acima foram adicionados como parte da Errata da Comunidade._

_Onde necessário, deve ser suficiente tratar os Passos da seguinte forma:_

- _Passos mais rápidos que Andar aplicam um multiplicador à taxa de Movimento: 3x para Correr, 5x para Sprintar._

- _Enquanto em um Passo de Correr ou Sprintar, os personagens não podem tentar a maioria das ações proativas, como atacar ou conjurar feitiços. Algumas exceções incluem..._
  - _Ataques ao usar as regras de Carga._
  - _Disparar armas de longo alcance com o traço de Escaramuça._
- _Como regra geral, quaisquer ações permitidas devem ser tratadas como um Grau mais difíceis de realizar em uma Corrida, e dois Graus mais difíceis em um Sprint._

</details>

---
## Advertências Diversas

### Linhas em branco / Retorno de Carro

Deixe uma linha em branco entre diferentes tipos de entrada. Cabeçalhos, divisores, tabelas etc. Estes não serão visíveis na visualização de leitura, mas sua ausência pode causar problemas de formatação.

### Texto em negrito ou itálico de múltiplos parágrafos

Cada parágrafo deve ser marcado como texto em negrito ou itálico. A nova linha entre os parágrafos quebrará a formatação, deixando marcas de formatação órfãs.

### Ortografia internacional

Os poderes regressivos e deploráveis julgaram por bem remover todas as grafias britânicas em favor das versões americanas objetivamente mais fracas. Fique atento às palavras britânicas com -OUR: _armour_, _favour_, etc.