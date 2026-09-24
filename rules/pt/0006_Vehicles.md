# Veículos

Veículos em _Mythras Imperative_ são tratados de uma forma semi-abstrata. Essencialmente, eles são ferramentas de segundo plano, usadas para levar personagens de A a B, com pouca necessidade de descrição detalhada ou estatísticas. Ocasionalmente, porém, os Mestres de Jogo precisarão de detalhes para veículos quando for necessário representá-los em perseguições ou situações de combate.

As regras nesta seção permitem a representação da maioria dos tipos de veículos, mas de uma forma abstrata que visa permitir flexibilidade e aprimorar a narrativa. Naves estelares e espaçonaves são um pouco diferentes, embora sejam baseadas em princípios semelhantes.

---
## Estatísticas

Todos os veículos são descritos em termos de sua Estrutura, Casco, Velocidade, Sistemas, Traços e Escudos (se presentes no cenário).

- **[Tamanho](0006_Vehicles.md?id=vehicle-size-table):** Todos os veículos têm uma das seis classificações de Tamanho, que determina o valor ou a faixa do restante das características. Devido ao seu tamanho intrínseco maior e aos ambientes hostis do espaço, as naves estelares têm sua própria faixa de valores.
- **[Casco](0006_Vehicles.md?id=terrestrial-hulls):** Representa Pontos de Armadura.
- **[Estrutura](0006_Vehicles.md?id=terrestrial-hulls):** Representa os Pontos de Vida de um veículo.
- **[Escudos](0006_Vehicles.md?id=shields):** Em cenários com tecnologia avançada de manipulação de energia, podem existir escudos que protegem o veículo, mas que podem sofrer abrasão sob fogo sustentado.
- **[Sistemas](0006_Vehicles.md?id=systems):** Representam componentes vitais do veículo, incluindo a usina de energia, seção da tripulação, e assim por diante.
- **[Velocidade](0006_Vehicles.md?id=speed):** Todo veículo tem uma classificação básica de Velocidade.
- **[Traços](0006_Vehicles.md?id=traits):** Um veículo também pode ter um ou mais Traços. Traços, como as Habilidades atribuídas a Criaturas nas regras de _Mythras Imperative_ ou Traços de Estilo de Combate, oferecem uma descrição de jogo adicional e uma vantagem, refletindo a natureza do veículo.
- **[Armas](0006_Vehicles.md?id=weapons):** Assim como os Traços, um veículo pode ser equipado com armas conforme o cenário permitir. Alguns exemplos e valores sugeridos estão detalhados abaixo.


---
### Tamanho, Tipo e Estrutura do Casco

O tamanho e o propósito de um veículo afetam a espessura de seu casco e a resiliência de sua estrutura interna. Uma motocicleta, por exemplo, tem um casco mínimo, construído como é para velocidade e agilidade. Um Ironclad Terrestre (um gigante blindado maciço, sobre lagartas ou rodas, movido a vapor ou motores a diesel), sendo um veículo muito maior projetado para o campo de batalha, tem um casco muito maior. Os tamanhos comparativos dos cascos (e quantos acertos de armas eles normalmente podem suportar) estão resumidos nas tabelas de Tamanho e Casco de Veículos abaixo.

Sempre que um veículo sofre dano, o dano recebido é reduzido pelo seu valor de Casco. Qualquer dano restante é subtraído dos pontos de Estrutura do veículo e tem uma chance percentual, igual ao dano penetrante, de afetar um Sistema. Se o veículo for reduzido a zero de Estrutura, ele é completamente destruído ou tão danificado que deve ser descartado.

##### Cascos Terrestres

| Tamanho | Estrutura | Valor de Casco Civil | Valor de Casco Militar | Exemplo |
| :-- | :-: | :-: | :-: | :-- |
| Pequeno | 1-20 | 1-3 | 4-6 | Motocicleta, motocicleta com sidecar, carro compacto ou subcompacto, canoa, caiaque, barco a remo |
| Médio | 21-40 | 1-6 | 7-9 | Sedan, furgão, picape, carro de luxo, carro esportivo de luxo, muscle car, limusine, bote salva-vidas, lancha, asa-delta, autogiro |
| Grande | 41-60 | 4-9 | 10-12 | Caminhão, limusine alongada, SUV, ônibus, minivan, aeronave pessoal, planador, iate de passeio, tanque, helicóptero, submarino |
| Enorme | 61-80 | 7-12 | 13-15 | Carreta, avião comercial, jato, embarcação da guarda costeira, iate |
| Colossal | 81-100 | 10-15 | 16-18 | Trem, navio de cruzeiro, embarcação naval |

##### Cascos de Naves Estelares

| Tamanho | Estrutura | Valor de Casco Civil | Valor de Casco Militar | Exemplo |
| :-- | :-: | :-: | :-: | :-- |
| Pequeno | 10-50 | 4-9 | 10-12 | Caça monoposto |
| Médio | 51-150 | 7-12 | 13-15 | Cargueiro leve, nave de transporte |
| Grande | 151-450 | 10-15 | 16-18 | Cargueiro pesado, cruzador |
| Enorme | 451-1350 | 13-18 | 19-21 | Fragata de escolta, cruzador de batalha leve |
| Colossal | 1351-4050 | 16-21 | 21-24 | Nave geracional, cruzador de batalha pesado |
| Titânico | 4050-12110 | 19-24 | 24-30 | Habitat orbital, estação de batalha destruidora de planetas |


---
### Escudos

Escudos defletores fornecem uma camada adicional de proteção para aqueles veículos que podem montá-los. Os escudos funcionam de maneira ligeiramente diferente do Casco, devido à sua natureza ablativa. Se o dano recebido for igual ou menor que o valor dos escudos, então tudo é bloqueado. Se o dano exceder o valor do escudo, o excesso reduz a força do escudo naquela quantidade.

_Por exemplo, um transporte de tropas tem uma força de escudo de energia de 12 pontos. Se o transporte fosse atingido por um laser causando 11 de dano, ele simplesmente não penetraria e não teria efeito adicional. Por outro lado, se o transporte fosse atingido por uma explosão causando 15 de dano, os três pontos de excesso reduziriam a força do escudo para 9._

Uma vez que a força de um escudo defletor cai para zero, ele colapsa. Qualquer dano restante passa para o casco.

---
### Sistemas

Toda vez que um veículo sofre dano que penetra seu casco, há uma chance, igual ao dano penetrante, de que um Sistema vital tenha sido afetado.

_Por exemplo, 10 de dano é aplicado a uma Lancha - um veículo com 3 de Casco e 24 de Estrutura. O Casco conta como armadura, reduzindo o dano para 7. Isso é removido dos 24 pontos de Estrutura e há 7% de chance de danificar um dos Sistemas do veículo._

O dano que um Sistema pode sofrer é baseado puramente no tamanho do veículo. Isso é modelado pelo número de acertos que um Sistema pode receber, em vez da quantidade real de dano. Um único Acerto de Sistema em um veículo Pequeno destruirá instantaneamente esse Sistema. São necessários dois acertos para demolir os Sistemas de um veículo de tamanho Médio, três para um veículo Grande, e assim por diante. Veja a [Tabela de Dano de Sistema](0006_Vehicles.md?id=system-damage-table) abaixo.

Sistemas que estão danificados, mas ainda não destruídos, sofrem uma perda de função proporcional ao número de Acertos recebidos - seja uma redução percentual ou uma penalidade de Grau nas tarefas do Sistema. O efeito específico é baseado no que o subsistema controla, conforme detalhado na [Tabela de Dano de Componente de Sistema](0006_Vehicles.md?id=system-component-damage-table) abaixo. Dependendo de qual Sistema é atingido, os efeitos podem ser catastróficos.

_Por exemplo, um Ironclad Terrestre - um veículo Enorme com 5 Acertos de Sistema - atingido duas vezes na Direção perderia 40% de sua potência e reduziria sua Velocidade Lenta em dois Graus para Pesado. Da mesma forma, um cargueiro Grande - com 3 Acertos de Sistema - sofrendo dois acertos no Sistema de Motor/Combustível teria uma penalidade de dois Graus na Velocidade, bem como no uso de sistemas eletrônicos. Um terceiro acerto destruiria o Sistema de Motor/Combustível e a nave com ele._


<details>

<summary>* Errata da Comunidade</summary>

---

#### Dano

_O texto original aqui estava repetitivo. Colocado diretamente após a seção de Sistemas, ele repetia desnecessariamente o parágrafo anterior._

- _"Dano que excede o Casco penetra no veículo, danificando a Estrutura e possivelmente impactando um ou mais sistemas. Dependendo do tamanho do veículo, o dano pode ser menor ou catastrófico._
- _Por exemplo, um veículo Grande pode levar até dois acertos em um Sistema, como sua Direção. O terceiro acerto destrói funcionalmente a Direção. Cada vez que o sistema sofre um acerto, ele perde uma porcentagem de sua função conforme descrito na coluna Perda por Acerto da Tabela de Dano de Sistema abaixo ou uma função principal (como Direção, Pilotagem, Comunicação, etc.) torna-se um Grau de Dificuldade mais difícil por acerto sofrido."_

_Os parágrafos acima foram removidos e uma edição abreviada tomou seu lugar, citando outro efeito de Sistema de exemplo._

---

</details>

##### Tabela de Dano de Sistema

| Tamanho | Acertos de Sistema | Perda por Acerto |
| :-- | :-: | :-- |
| Pequeno | 1 | 100% - Destruído |
| Médio | 2 | 1 Grau ou 50% |
| Grande | 3 | 1 Grau ou 33% |
| Enorme | 4 | 1 Grau ou 25% |
| Colossal | 5 | 1 Grau ou 20% |
| Titânico | 6 | 1 Grau ou 16% |


<details>

<summary>* Errata da Comunidade</summary>

---

##### Tabela de Dano de Sistema (Original)

| Tamanho | Acertos de Sistema | Perda por Acerto |
| :-- | :-: | :-- |
| Pequeno | 1 | 1 Grau ou 50% |
| Médio | 2 | 1 Grau ou 33% |
| Grande | 3 | 1 Grau ou 25% |
| Enorme | 4 | 1 Grau ou 20% |
| Colossal | 5 | 1 Grau ou 16% |
| Titânico | 6 | 1 Grau ou 10% |

##### Tabela de Tamanho de Veículo (de [Tamanho, Tipo e Estrutura do Casco](0006_Vehicles.md?id=hull-size-type-and-structure))

| Tamanho | Acertos de Sistema |
| :-- | :-: |
| Pequeno | 1 |
| Médio | 2 |
| Grande | 3 |
| Enorme | 4 |
| Colossal | 5 |
| Titânico | 6 |

_As regras e exemplos originais são inconsistentes:_
- _"Sistemas danificados, mas não destruídos, sofrem uma perda de funcionalidade. Isso é igual à proporção de acertos atuais para sua capacidade total. Assim, um veículo Enorme atingido duas vezes na Direção perderia 40% de sua potência (2 acertos de um máximo de 5)"._ 
   - _Isso sugere que o veículo Enorme mostrado com 5 Acertos de Sistema deveria perder 20% com cada acerto - mas a tabela diz 16%._
- _"Por exemplo, um veículo Grande pode levar até três acertos em um sistema, como sua Direção. O quarto acerto destrói funcionalmente a Direção."_ 
  - _"Isso sugere - como a tabela - 25% de dano por Acerto de Sistema, mas os veículos Grandes só podem levar 3 Acertos de Sistema de acordo com a mesma tabela._
- _Embora não inconsistente, a Tabela de Tamanho de Veículo era redundante; aparecendo novamente em forma mais completa (adicionando a coluna Perda por Acerto) apenas algumas linhas depois._

_Isso torna difícil ter uma regra consistente. Para resolver esses problemas, os valores e exemplos foram alterados para corresponder e a Tabela de Tamanho de Veículo foi removida._

---

</details>


##### Tabela de Dano de Componente de Sistema

| 1d10 | Sistema | Resultado Danificado | Resultado Destruído |
| :-: | :-- | :-- | :-- |
| 1 | Carga | Uma quantidade de posses ou equipamentos armazenados no porão, proporcional ao dano, é destruída. | Toda a carga é destruída. |
| 2 | Comms | Testes de Comms sofrem um Grau de Dificuldade adicional cada vez que são danificados. | O veículo não pode mais se comunicar ou enganar sensores inimigos. |
| 3 | Controles | Testes de Navegação, Direção ou Pilotagem sofrem um Grau de Dificuldade adicional cada vez que são danificados; teste de Controle imediato necessário. | O veículo não pode mais ser dirigido ou mudar de curso. |
| 4 | Direção | Velocidade reduzida em uma quantidade proporcional ao dano. | O veículo para bruscamente; aeronaves caem. |
| 5 | Tripulação | Um número de passageiros proporcional ao dano torna-se baixas. Os afetados sofrem um Ferimento Grave e devem ter sucesso em um teste de Resiliência ou morrerão instantaneamente. | Os ocupantes do veículo morrem. |
| 6 | Motor / Combustível | Velocidade reduzida em uma quantidade proporcional ao dano. Sistemas eletrônicos um Grau de Dificuldade mais difícil de usar. | O veículo é destruído em uma explosão desastrosa. |
| 7 | Sensores | Testes de Sensores, Navegação e Ataque de Armas sofrem um Grau de Dificuldade adicional cada vez que são danificados. | O veículo fica cego. |
| 8 | Armas | Um número de sistemas de armas proporcional ao dano torna-se inoperante. | O veículo não pode mais disparar armas. |
| 9-0 | Nenhum | Nenhum sistema atingido; apenas dano à Estrutura. | N/A |

<details>

<summary>* Errata da Comunidade</summary>

---

##### Tabela de Dano de Componente de Sistema (Motor/Combustível)

_O resultado original era: "A Velocidade Máxima é reduzida pela metade..." Isso contradiz a regra geral de penalidades de dano em proporção ao dano do Sistema: 25% de dano = 25% de penalidade. Além disso, as regras completas no Mythras Companion não mencionam essa redução pela metade da Velocidade._

_Como resultado, o texto foi substituído pela mesma entrada dos Sistemas de Direção: "Velocidade reduzida em uma quantidade proporcional ao dano."_

---

</details>


---
### Velocidade

Como a física da velocidade, aceleração, arrasto e inércia (para citar apenas alguns) são questões complexas, alguma simplificação é necessária e, portanto, os veículos recebem uma classificação de velocidade abstrata. A característica Velocidade só deve ser usada para julgar grosseiramente se um veículo pode ultrapassar ou alcançar outro.

A classificação de velocidade representa a taxa operacional nominal de um veículo. Em situações de emergência, esse desempenho pode ser aumentado em um passo, com risco de desgaste ou dano aos motores. Embora a mesma tabela seja usada para todos os tipos de veículos, o bom senso deve ser aplicado para que apenas veículos da mesma classe sejam comparados. Por exemplo, se uma Naves Estelar e um carro esportivo têm a mesma taxa de aceleração de Rápido, deve ser óbvio que a nave espacial é comparativamente mais rápida.

Aumentar a Velocidade de um veículo acima de seu valor padrão é possível com um teste de Direção bem-sucedido. Normalmente, essa velocidade extra só é sustentável por um curto período – não mais que 1d6 minutos antes que o veículo deva cair para sua velocidade padrão ou arriscar danos à sua usina de energia. Um teste crítico de Direção permite que o período de maior velocidade seja aumentado para 1d12 minutos.

Um motorista pode tentar aumentar a velocidade de um veículo em 2 passos, mas isso requer um teste Hercúleo de Direção e o máximo que o veículo pode sustentar essa velocidade é 1d3 minutos: um Sucesso Crítico não estenderá a duração da velocidade aumentada.

##### Tabela de Classificação de Velocidade

| Classificação de Velocidade | Velocidade Máxima Para |
| :-- | :-: |
| Ponderado | Enorme |
| Lento | |
| Lento | Grande |
| Medíocre | |
| Gentil | Médio |
| Moderado | |
| Rápido | Pequeno |
| Veloz | |
| Frotista | |


---
### Traços

O número máximo de traços que um veículo pode ter depende do tamanho e tipo do casco.

Todo veículo tem um traço inerente: o modo de viagem para o qual foi projetado principalmente. Portanto, aeronaves possuem inerentemente o traço Aerotransportado, barcos o traço Marítimo, e assim por diante. Esse traço inerente não conta para o número disponível de traços. No entanto, se um veículo incluir um segundo modo de viagem - um submarino voador, por exemplo - então o traço Aerotransportado precisaria ser escolhido como um de seus traços disponíveis.

Alguns traços podem não estar disponíveis, dependendo do nível tecnológico do cenário; os Mestres de Jogo devem fazer seus próprios julgamentos sobre quais traços podem ser aplicados.

##### Tabela de Alocação de Traços de Veículo

| Tamanho | Traços Máximos |
| :-- | :-: |
| Pequeno | 1 |
| Médio | 2 |
| Grande | 3 |
| Enorme | 4 |
| Colossal | 5 |
| Titânico | 6 |

#### Aerotransportado

O veículo é capaz de voo atmosférico.

#### Todo Terreno

Este Traço deve ser usado com veículos Terrestres. O veículo pode atravessar terrenos inóspitos, difíceis e íngremes, usando lagartas, suspensão avançada e sistemas de tração, ou diferenciais de tração potentes.

#### Escavador

O veículo foi projetado para escavar e fazer túneis pelo solo. Ele pode atingir uma profundidade máxima igual ao seu Valor de Casco x 5 metros.

#### Camuflado

O veículo possui pintura de camuflagem ou sensores miméticos que permitem que ele se misture ao seu ambiente. Tentativas de avistar o veículo visualmente são um grau mais difíceis.

#### Carga

O veículo é projetado especificamente para transportar carga em vez de passageiros. Os compartimentos de passageiros são mantidos no mínimo, com o restante do espaço útil do veículo sendo dedicado à contenção de carga com seções apropriadas, ferramentas e até condicionamento ambiental (como seções de freezer para transporte de perecíveis). Quando carregado com carga, a velocidade do veículo é dois passos menor do que seu tamanho de casco normalmente permitiria.

#### Transportador

O veículo é projetado especificamente para transportar veículos menores, levemente tripulados ou possivelmente controlados remotamente, de natureza civil ou militar. Qualquer veículo que possua este traço deve ser pelo menos Enorme. O número de pequenas embarcações transportadas pode variar de acordo com o tipo e propósito da missão, podendo variar de 10 até o número igual ao valor de Estrutura do veículo.

#### Construção

O veículo é equipado para trabalhos pesados de construção. Todos os veículos com este traço também possuem o traço Todo Terreno, mas a velocidade é dois passos menor do que seu tamanho de casco normalmente permitiria. O veículo é equipado com ferramentas adequadas à tarefa, como lanças de guindaste, pás de escavadeira, caçambas, etc.

#### Resistente a EMP

O veículo é blindado contra ataques de pulso eletromagnético.

#### Desempenho Aprimorado

A classificação de Velocidade do veículo é um passo maior do que o máximo para seu tamanho.

#### Assento Ejetor

Em caso de emergência, um assento ejetor impulsiona os ocupantes várias centenas de metros no ar e, em seguida, abre um paraquedas para permitir um pouso seguro. Paraquedas é opcional. Não recomendado para helicópteros (o Kamov Ka-52 Alligator sendo uma notável exceção).

#### FTL

Apenas Espaçonaves. A nave é equipada com um motor mais rápido que a luz (seja hipermotor, motor de dobra, gerador de buraco de minhoca ou similar). O motor FTL tem uma classificação de Velocidade separada que mede essencialmente a taxa na qual uma nave estelar pode cruzar um único parsec (3,26 anos-luz, ou 31 trilhões de quilômetros ou 19 trilhões de milhas), como segue:

##### Tabela de Velocidade FTL

| Classificação de Velocidade | Fator para Atravessar 1 Parsec |
| :-- | :-: |
| Ponderado | 10 |
| Lento | 8 |
| Lento | 7 |
| Medíocre | 6 |
| Gentil | 5 |
| Moderado | 4 |
| Rápido | 3 |
| Veloz | 2 |
| Frotista | 1 |

O tempo do fator cabe ao Mestre de Jogo decidir, dependendo de quão avançado é o desenvolvimento FTL do cenário. Por exemplo, o fator base pode ser 1 Dia, significando que uma nave com um motor FTL Ponderado leva 10 dias para completar a jornada, enquanto uma embarcação com um motor FTL Frotista completa a viagem em 1 dia. Em outros lugares, onde a tecnologia FTL é significativamente menos eficiente, o tempo do fator pode ser medido em meses, em vez de dias.

Assume-se que a nave tem reservas de combustível para fazer uma viagem de retorno ou um meio de reabastecer no ponto de destino.

Assume-se que qualquer tamanho de nave estelar pode ser equipado com um motor FTL, embora, novamente, isso dependa do cenário.

Motores FTL não podem ser ativados a menos de 1,5 Unidades Astronômicas de uma estrela (cerca de 225 milhões de quilômetros). Isso significa que as naves devem usar um motor de sub-luz para se mover até cerca da distância de Marte antes de ativar o sistema FTL.

#### Veículo Terrestre

O veículo é capaz de deslocamento terrestre.

#### Hover (Deslizador)

O veículo paira acima do solo usando um colchão de ar ou um propulsor antigravidade.

#### Luxuoso

O veículo é projetado especificamente para transportar passageiros com um certo nível de luxo. O excesso de espaço de carga é destinado a acomodações luxuosas para passageiros, piscinas, banheiras de hidromassagem, tripulação extra para atender aos caprichos dos passageiros, e assim por diante.

#### Trilhos

O veículo depende de um sistema de trilhos. Veículos com este traço podem atingir naturalmente uma classificação de Velocidade três passos maior do que seu tamanho de casco normalmente permitiria, mas são obviamente restritos ao movimento apenas no sistema de trilhos.

#### Resiliente

Todos os sistemas podem suportar um acerto adicional além do determinado normalmente pelo Tamanho. Este Traço pode ser acumulado — portanto, Resiliente 2 indica que os sistemas podem suportar 2 acertos a mais que o normal, ao custo de dois pontos de Traço.

#### Marítimo

O veículo é flutuante na água.

#### Espaçonave

O veículo é selado contra vácuo e blindado contra radiação cósmica e pode, dependendo do projeto, ser capaz de sair e reentrar na atmosfera e sustentar voo dentro de uma atmosfera.

#### Furtivo

Apenas Aeronaves. O veículo é projetado para evitar a detecção por radar e outros sistemas de sensores de longo alcance. Tentativas de avistar o veículo usando sensores eletrônicos são um grau mais difíceis.

#### Submersível

O veículo é capaz de submergir abaixo da superfície de um oceano até uma profundidade operacional de seu Valor de Casco x 10 metros. A profundidade de colapso — o máximo absoluto que o submersível pode alcançar sem ser esmagado — é 1,5 vezes sua profundidade operacional.

#### Manuseio Superior

O manuseio do veículo é classificado como Fácil.

#### Suíte de Vigilância

O veículo possui um computador de bordo, estação base de comunicações, receptor para sinais de dispositivos de escuta e aparelhos para interceptar sinais de smartphone próximos em um raio de 100 metros.#### Resistente

Um veículo civil com este traço retira o seu Casco da coluna Militar e automaticamente tem a Estrutura máxima. Um veículo Militar com este Traço retira o seu Casco e Estrutura da linha imediatamente abaixo.

#### Raio Trator

Apenas Espaçonaves. A nave é equipada com um raio trator que pode capturar e atrair para si veículos com uma classificação de casco de até dois níveis abaixo do seu. Assim, uma espaçonave Enorme poderia atrair e segurar um casco de até tamanho Médio.

#### VTOL

Decolagem/pouso vertical. Este traço é inerente a helicópteros e veículos similares que usam uma combinação de rotores para produzir sustentação. Quando aplicado a aeronaves de asa fixa, indica o uso de propulsores fixos ou alinháveis para controlar a atitude, subida e descida em voo.

#### Aquático

O veículo propulsiona-se usando pernas articuladas. Veículos do tipo Andador têm o seu limite de Velocidade definido como Suave, independentemente do seu Tamanho. No entanto, Andadores podem ser construídos com alturas que seriam simplesmente instáveis para veículos equipados com outros meios de locomoção.

Este veículo é capaz de movimento subaquático.

#### Armado

O veículo foi adaptado para acomodar armamento. Sistemas de armas são discutidos abaixo na seção [Armas](0006_Vehicles.md?id=weapons).


---
## Armas

Geralmente, apenas cascos militares são projetados para acomodar armamento (pontos de fixação, armazenamento de munição, sistemas de controle). O Traço 'Armado' pode ser escolhido para veículos civis que possam ter requisitos de armas.

O número máximo de sistemas de armas que um veículo pode suportar é igual a 1/10 dos seus Pontos de Estrutura (portanto, um veículo com 40 de Estrutura poderia suportar 4 sistemas de armas, se for um veículo militar ou um veículo civil Armado).

Os sistemas de armas dependem do Tamanho do veículo. O tipo máximo de sistema de armas para diferentes Tamanhos é mostrado nas tabelas abaixo.


##### Tabela de Armas por Tamanho

| Tamanho | Terrestre | Espaçonave |
| :-- | :-- | :-- |
| Pequeno | Arma Leve (ex.: Fuzil de Assalto) | Arma Média (ex.: Metralhadora, Lança-foguetes) |
| Médio | Arma Média (ex.: Metralhadora, Lança-foguetes) | Arma de Torre/Pesada (ex.: Metralhadoras Pesadas Acopladas, Mini-armas) |
| Grande | Arma de Torre/Pesada (ex.: Metralhadoras Pesadas Acopladas, Mini-armas) | Bateria de Armas (ex.: Artilharia de Campo) |
| Enorme | Bateria de Armas (ex.: Artilharia de Campo) | Armas Avançadas (ex.: Sistemas de Mísseis) |
| Enormíssimo | Armas Avançadas (ex.: Sistemas de Mísseis) | Armas Montadas na Coluna Vertebral (apenas uma) |
| Colossal | N/A | Armas Montadas na Coluna Vertebral (até 3) |

##### Exemplo de Estatísticas de Armas
 
| Arma | Dano | Alcance | Cadência de Tiro | Munição/Carga |
| :-- | :-: | :-: | :-: | :-: |
| Canhão de 50 polegadas | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-arma/Metralhadora Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Foguete | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Míssil Médio/Torpedo | 6d10 | Alcance máx. de 200km | 1 | 1/5 |
| Míssil Grande/Cruzeiro | 6d10+10 | Alcance máx. de 1000km | 1 | 1/10 |
| Canhão Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Canhão Laser/Plasma Pesado | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Bateria de Artilharia | 5d6+6 | Alcance máx. de 50km | 1 | 1/5 |
| Bateria de Montagem Vertebral | 10d6+6 | Alcance máx. de 20000km | 1 | 1/10 |

_Os alcances são fornecidos em metros e quilômetros._

_As cadências de tiro são para disparo único, semiautomático e automático._

_Munição é a capacidade de disparo antes de precisar recarregar. Carga é o tempo de recarga em Rodadas de Combate, assumindo que uma tripulação completa esteja disponível._

---
## Manuseio e Manobras

Manobras evasivas ou repentinas exigem um teste bem-sucedido de Dirigir/Pilotar para garantir que o motorista ou piloto mantenha o controle do veículo. A maioria dos veículos é projetada e construída para suportar tensões e esforços ocasionais, mas o Mestre de Jogo pode decidir que uma manobra específica exige um teste com um nível de dificuldade maior, dependendo de quão ambiciosa ela seja. Falha significa que o controle sobre o veículo é perdido: role na tabela de Perda de Controle.

Observe que a Tabela de Perda de Controle aplica-se apenas a veículos terrestres. Efeitos semelhantes podem ser aplicados a veículos aéreos e espaciais, mas os Mestres de Jogo precisarão ajustar o raciocínio para o efeito específico. Por exemplo, uma aeronave, em vez de derrapar, pode entrar em um parafuso.

Além disso, o manuseio inerente de um veículo pode ter um impacto adicional no teste de Dirigir. O Manuseio é Fácil, Padrão, Difícil, Formidável ou Hercúleo e determina o ponto de partida para o teste de Dirigir ao executar uma manobra. O nível de dificuldade da manobra é então aplicado ao manuseio para determinar a dificuldade final.

Por exemplo, uma motocicleta de alto desempenho possui giroscópios embutidos que lhe conferem um Manuseio Fácil. O motorista quer realizar uma derrapagem de 180 graus para escapar de um perseguidor, uma manobra que o Mestre de Jogo classifica como sendo de um nível adicional de dificuldade. O motociclista deve, portanto, realizar o seu teste de Dirigir como Padrão em vez de Fácil. Se ele estivesse tentando a mesma manobra em uma motocicleta não estabilizada, o teste de Dirigir seria Difícil.

Manuseio Superior é um Traço. Se um veículo não tiver o traço como parte da sua descrição, o padrão é manuseio Padrão para qualquer veículo de tamanho Grande ou inferior. Veículos Enormes e Enormíssimos possuem inerentemente o traço de Manuseio Formidável e Hercúleo, respectivamente, e o Mestre de Jogo tem liberdade para decidir que certas manobras são simplesmente impossíveis de realizar devido ao tamanho do veículo.

##### Tabela de Perda de Controle

| 1d100 | Resultado |
| :-: | :-- |
| 01-25 | Desvio. A perda de controle é temporária. O veículo reduz a sua velocidade em 1 nível por 5 segundos. |
| 26-40 | Derrapagem. O motorista deve lutar para manter o veículo sob controle. O veículo reduz a sua velocidade em 2 níveis por 10 segundos. |
| 41-50 | Derrapagem Severa. O veículo acaba virado na direção errada e parado por 15 segundos. |
| 51-60 | Capotamento. O veículo derrapa e capota, sofrendo 3d10 de dano à sua Estrutura. Os ocupantes devem fazer testes bem-sucedidos de Resistência ou sofrer 1d10 de dano em 1d3 Locais de Acerto. |
| 61-70 | Capotamento Severo. Como acima, mas o veículo sofre 3d10+10 de dano e os Ocupantes recebem 1d10 de dano mesmo se o teste de Resistência for bem-sucedido, e 2d10 se falhar. |
| 71-80 | Perda Total. Como acima, mas o veículo é reduzido a 0 de Estrutura. Os ocupantes sofrem o mesmo dano que no Capotamento Severo. |
| 81-90 | Explosão. Como acima, mas o sistema de combustível do veículo entra em ignição e explode dentro de 1d20+10 segundos. Se não conseguirem sair, os ocupantes sofrem 1d6 de dano de queimadura adicional em 1d6 locais. |
| 91-98 | Explosão Imediata. Como acima, mas a explosão é imediata. |
| 99-00 | Batida Catastrófica. Os ocupantes devem passar num teste de Resistência ou morrerão instantaneamente. O dano como para Perda Total é sofrido independentemente. |


---
## Exemplos de Veículos

---

### Veículos Terrestres

#### Interceptor

Um carro de luxo turbinado, carro esportivo ou similar, este carro é construído para ser rápido e aguentar o tranco em uma batalha. Este é o tipo de veículo em que as pessoas pensam quando alguém diz "carro de espião".

| Interceptor | |
| :- | :- |
| **Tamanho / Tipo** | Médio Militar |
| **Casco** | 6 |
| **Estrutura** | 40 |
| **Sistemas** | 2 |
| **Velocidade** | Rápida |
| **Manuseio** | Fácil |
| **Traços** | [Assento Ejetor](0006_Vehicles.md?id=ejector-seat), [Desempenho Aprimorado](0006_Vehicles.md?id=enhanced-performance), [Manuseio Superior](0006_Vehicles.md?id=superior-handling), [Conjunto de Vigilância](0006_Vehicles.md?id=surveillance-suite), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Dispensador de Óleo, Dispensador de Fumaça, Metralhadoras Médias Acopladas (2d6+3) |

<br>

---

#### Motocicleta de Perseguição

Uma motocicleta leve e ágil para perseguições rápidas, a Motocicleta de Perseguição carrega uma surpresa – seja um par de metralhadoras acopladas ou dois foguetes.

| Motocicleta de Perseguição | |
| :- | :- |
| **Tamanho / Tipo** | Pequeno Civil |
| **Casco** | 2 |
| **Estrutura** | 12 |
| **Sistemas** | 1 |
| **Velocidade** | Rápida |
| **Manuseio** | Fácil |
| **Traços** | [Manuseio Superior](0006_Vehicles.md?id=superior-handling), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Dois Foguetes (4d6) ou Metralhadoras Leves Acopladas (2d6) |

<br>

---

#### Carro Sedan

Um sedan padrão de 4 portas com espaço suficiente para acomodar confortavelmente um motorista e três passageiros. Sacrifica o espaço de carga para incorporar um conjunto de vigilância.

| Carro Sedan | |
| :- | :- |
| **Tamanho / Tipo** | Médio Civil |
| **Casco** | 4 |
| **Estrutura** | 25 |
| **Sistemas** | 2 |
| **Velocidade** | Rápida |
| **Manuseio** | Padrão |
| **Traços** | [Discreto](0006_Vehicles.md?id=unobtrusive), [Conjunto de Vigilância](0006_Vehicles.md?id=surveillance-suite) |
| **Armas** | Nenhuma |

<br>

---

#### Carro Submersível

Um carro para duas pessoas que pode mudar para o modo aquático ou submersível para viajar na superfície ou debaixo d'água. Vem com um torpedo montado na frente e um míssil terra-ar montado no teto.

| Carro Submersível | |
| :- | :- |
| **Tamanho / Tipo** | Médio Civil |
| **Casco** | 6 |
| **Estrutura** | 25 |
| **Sistemas** | 2 |
| **Velocidade** | Rápida |
| **Manuseio** | Padrão |
| **Traços** | [Desempenho Aprimorado](0006_Vehicles.md?id=enhanced-performance), [Submersível](0006_Vehicles.md?id=submersible), [Aquático](0006_Vehicles.md?id=waterborne), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Foguete (5d6), Torpedo (4d10) |

<br>

---

#### Van de Vigilância

Uma van comum e sem identificação que abriga uma equipe de agentes e um conjunto de equipamentos de gravação audiovisual.

| Van de Vigilância | |
| :- | :- |
| **Tamanho / Tipo** | Grande Civil |
| **Casco** | 9 |
| **Estrutura** | 60 |
| **Sistemas** | 3 |
| **Velocidade** | Suave |
| **Manuseio** | Padrão |
| **Traços** | [Conjunto de Vigilância](0006_Vehicles.md?id=surveillance-suite), [Resistente](0006_Vehicles.md?id=tough) |
| **Armas** | Nenhuma |

<br>

---

#### Veículo de Apoio Tático

Uma picape ou jipe com espaço para uma tripulação de duas pessoas na cabine e um artilheiro em pé na parte traseira operando uma Metralhadora Média montada em suporte giratório.

| Veículo de Apoio Tático | |
| :- | :- |
| **Tamanho / Tipo** | Médio Civil |
| **Casco** | 6 |
| **Estrutura** | 30 |
| **Sistemas** | 2 |
| **Velocidade** | Rápida |
| **Manuseio** | Padrão |
| **Traços** | [Todo Terreno](0006_Vehicles.md?id=all-terrain), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Metralhadora Média Montada (2d6) |


<br>

---

### Embarcações

#### Lancha

Uma lancha típica, armada com um lançador de minas montado na traseira.

| Lancha | |
| :- | :- |
| **Tamanho / Tipo** | Médio Civil |
| **Casco** | 3 |
| **Estrutura** | 24 |
| **Sistemas** | 2 |
| **Velocidade** | Rápida |
| **Manuseio** | Padrão |
| **Traços** | [Desempenho Aprimorado](0006_Vehicles.md?id=enhanced-performance), [Aquático](0006_Vehicles.md?id=waterborne), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Dispensador de Minas (5d6) |

<br>

---

#### Iate

O tipo de iate de luxo que um oligarca poderia possuir. Provavelmente equipado com um conjunto de vigilância para se proteger contra inimigos que tentam fazer algo de errado.

| Iate | |
| :- | :- |
| **Tamanho / Tipo** | Enorme Civil |
| **Casco** | 10 |
| **Estrutura** | 75 |
| **Sistemas** | 4 |
| **Velocidade** | Lenta |
| **Manuseio** | Formidável |
| **Traços** | [Luxuoso](0006_Vehicles.md?id=luxurious), [Conjunto de Vigilância](0006_Vehicles.md?id=surveillance-suite), [Aquático](0006_Vehicles.md?id=waterborne) |
| **Armas** | Nenhuma |


<br>

---

### Aeronaves/Espaçonaves

#### Dirigível (Transatlântico Aéreo Civil)

Semelhante ao Hindenburg, esta classe de dirigível transcontinental (e outros da sua classe) tem 245 metros de comprimento e requer uma tripulação de 40 a 61 pessoas. Normalmente pode transportar um contingente de 50 a 72 passageiros em acomodações de luxo.

| Dirigível | |
| :- | :- |
| **Tamanho / Tipo** | Enormíssimo Civil |
| **Casco** | 10 |
| **Estrutura** | 85 |
| **Sistemas** | 5 |
| **Velocidade** | Ponderosa |
| **Manuseio** | Hercúleo |
| **Traços** | [Aéreo](0006_Vehicles.md?id=airborne), [Luxuoso](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Escudos** | Nenhum |
| **Armas** | Nenhuma |

<br>

---

#### Helicóptero de Assalto

O Helicóptero de Assalto tradicional usa a sua tecnologia de vigilância avançada para interceptar sinais de telefone e internet sem fio, e rastrear indivíduos e veículos mesmo no escuro, através de FLIR. Tentativas de escapar do rastreador através de Furtividade são Formidáveis.

| Helicóptero de Assalto | |
| :- | :- |
| **Tamanho / Tipo** | Grande Militar |
| **Casco** | 11 |
| **Estrutura** | 50 |
| **Sistemas** | 3 |
| **Velocidade** | Moderada |
| **Manuseio** | Fácil |
| **Traços** | [Aéreo](0006_Vehicles.md?id=airborne), [Desempenho Aprimorado](0006_Vehicles.md?id=enhanced-performance), [Furtividade](0006_Vehicles.md?id=stealth), [Manuseio Superior](0006_Vehicles.md?id=superior-handling), [Conjunto de Vigilância](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Escudos** | Nenhum |
| **Armas** | 1 Metralhadora Gatling (3d6), 4 Foguetes (5d6) |

<br>

---

#### Caça Multi-função

Este caça terrestre de dois lugares (semelhante em tipo ao De Havilland Mosquito) é bem conhecido pelo seu desempenho e versatilidade. O seu compartimento de bombas é capaz de transportar duas bombas de 250 lb. (tratadas como mísseis médios com alcance 0) ou um único torpedo.

| Caça Multi-função | |
| :- | :- |
| **Tamanho / Tipo** | Grande Militar |
| **Casco** | 10 |
| **Estrutura** | 45 |
| **Sistemas** | 3 |
| **Velocidade** | Moderada |
| **Manuseio** | Padrão |
| **Traços** | [Aéreo](0006_Vehicles.md?id=airborne), [Desempenho Aprimorado](0006_Vehicles.md?id=enhanced-performance) |
| **Escudos** | Nenhum |
| **Armas** | 4 Metralhadoras Gatling montadas no nariz (4d6+3), 1 compartimento de bombas (6d10 - ver descrição) |

<br>

---

#### Cargueiro Interestelar (Transporte Leve de Alta Tecnologia)

Este transporte leve requer uma tripulação mínima de apenas dois, com espaço para até quatro passageiros adicionais. A versão padrão de estoque é anotada aqui, no entanto, muitos proprietários aplicarão as suas próprias "modificações especiais", tais como espaço de carga oculto, Desempenho Aprimorado, Manuseio Superior, Resistência a PEM, Furtividade, e assim por diante.

| Cargueiro Interestelar | |
| :- | :- |
| **Tamanho / Tipo** | Médio Espaçonave Civil |
| **Casco** | 10 |
| **Estrutura** | 80 |
| **Sistemas** | 2 |
| **Velocidade** | Rápida (Fator de Parsec de 3) |
| **Manuseio** | Padrão |
| **Traços** | [Aéreo](0006_Vehicles.md?id=airborne), [Carga](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Espaçonave](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Escudos** | 8 |
| **Armas** | 2x Torres de Canhão Laser Quádruplas (5d6) |


<br>

---

#### Unidade de Contato Geral (Espaçonave de Tecnologia Ultra-Avançada)

Esta espaçonave de tecnologia extremamente avançada é a representação física de uma Mente artificial altamente avançada, que assume a forma de uma série de dois quilômetros de comprimento de módulos conectados por campo. Os módulos têm propósitos individuais e incluem habitats, instalações de construção, áreas de carga, processamento de alimentos, complexos de lazer, baias de hangar e até mesmo algumas unidades secretas sobre as quais a inteligência da nave raramente, ou nunca, discute. Não precisa de tripulação humana, mas pode suportar uma população de passageiros de até 100.000 pessoas com facilidade. Muitos passageiros nascem e morrem a bordo da Unidade de Contato: muitos são transitórios, indo e vindo conforme desejam.

| Unidade de Contato Geral | |
| :- | :- |
| **Tamanho / Tipo** | Colossal Espaçonave Civil |
| **Casco** | 20 |
| **Estrutura** | 10.000 |
| **Sistemas** | 6 |
| **Velocidade** | Moderada (Fator de Parsec de 4. Neste nível tecnológico, um Fator equivale a 1 hora) |
| **Manuseio** | Formidável |
| **Traços** | [Aéreo](0006_Vehicles.md?id=airborne), [Carga](0006_Vehicles.md?id=cargo), [Porta-Naves](0006_Vehicles.md?id=carrier), [Construção](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxuoso](0006_Vehicles.md?id=luxurious), [Espaçonave](0006_Vehicles.md?id=spacecraft), [Manuseio Superior](0006_Vehicles.md?id=superior-handling), [Raio Trator](0006_Vehicles.md?id=tractor-beam) |
| **Escudos** | 30 |
| **Armas** | Nenhuma que se interesse em discutir |

<br>