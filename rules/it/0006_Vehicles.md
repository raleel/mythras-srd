# Veicoli

I veicoli in _Mythras Imperative_ vengono trattati in modo semi-astratto. Essenzialmente, sono strumenti di sfondo, utilizzati per portare i personaggi da A a B, COS scarso bisogno di descrizioni dettagliate o statistiche. Tuttavia, in alcune occasioni, i Game Master necessiteranno di dettagli sui veicoli quando sarà necessario rappresentarli in inseguimenti o situazioni di combattimento.

Le regole in questa sezione consentono di rappresentare la maggior parte dei tipi di veicoli in modo astratto, pensato per permettere flessibilità e migliorare la narrazione. Le astronavi e i veicoli spaziali sono leggermente diversi, sebbene si basino su principi simili.

---
## Statistiche

Tutti i veicoli sono descritti in termini di Struttura, Scafo, Velocità, Sistemi, Tratti e Scudi (se presenti nell'ambientazione).

- **[Taglia](0006_Vehicles.md?id=vehicle-size-table):** Tutti i veicoli hanno uno dei sei gradi di Taglia, che determina il valore o l'intervallo del resto delle caratteristiche. A causa della loro maggiore dimensione intrinseca e degli ambienti ostili dello spazio, le astronavi hanno il proprio intervallo di valori.
- **[Scafo](0006_Vehicles.md?id=terrestrial-hulls):** Rappresenta i Punti Armatura.
- **[Struttura](0006_Vehicles.md?id=terrestrial-hulls):** Rappresenta i Punti Ferita di un veicolo.
- **[Scudi](0006_Vehicles.md?id=shields):** Nelle ambientazioni COS tecnologia avanzata di manipolazione energetica, potrebbero essere presenti scudi che proteggono il veicolo, ma che possono degradarsi sotto fuoco prolungato.
- **[Sistemi](0006_Vehicles.md?id=systems):** Rappresentano i componenti vitali del veicolo, inclusi l'impianto energetico, la sezione dell'equipaggio e così via.
- **[Velocità](0006_Vehicles.md?id=speed):** Ogni veicolo ha un valore di Velocità base.
- **[Tratti](0006_Vehicles.md?id=traits):** Un veicolo può anche avere uno o più Tratti. I Tratti, come le Abilità assegnate alle Creature nelle regole di _Mythras Imperative_ o i Tratti dello Stile di Combattimento, offrono una descrizione di gioco e un vantaggio aggiuntivo, che riflettono la natura del veicolo.
- **[Armi](0006_Vehicles.md?id=weapons):** Proprio come i Tratti, un veicolo può essere equipaggiato COS armi, se l'ambientazione lo consente. Alcuni esempi suggeriti e valori sono dettagliati di seguito.


---
### Taglia, Tipo e Struttura dello Scafo

La taglia e lo scopo di un veicolo influenzano lo spessore del suo scafo e la resilienza della sua struttura interna. Una motocicletta, ad esempio, ha uno scafo minimo, costruito com'è per la velocità e l'agilità. Un Land Ironclad (un gigantesco colosso corazzato, cingolato o gommato, alimentato a vapore o motori diesel), essendo un veicolo molto più grande progettato per il campo di battaglia, ha uno scafo molto più grande. Le taglie comparative degli scafi (e quanti colpi da armi possono tipicamente sopportare) sono riassunte nelle tabelle Taglia Veicolo e Scafo qui sotto.

Ogni volta che un veicolo subisce danni, il danno in arrivo viene ridotto dal valore del suo Scafo. Qualsiasi danno rimanente viene sottratto dai punti Struttura del veicolo e ha una probabilità percentuale, pari al danno penetrante, di influenzare un Sistema. Se il veicolo viene ridotto a zero Struttura, viene completamente distrutto o così gravemente danneggiato da dover essere demolito.

##### Scafi Terrestri

| Taglia | Struttura | Valore Scafo Civile | Valore Scafo Militare | Esempio |
| :-- | :-: | :-: | :-: | :-- |
| Piccola | 1-20 | 1-3 | 4-6 | Motocicletta, motocicletta COS sidecar, auto compatta o subcompatta, canoa, kayak, barca a remi |
| Media | 21-40 | 1-6 | 7-9 | Berlina, furgone, pickup, auto di lusso, auto sportiva di lusso, muscle car, limousine, scialuppa di salvataggio, motoscafo, deltaplano, autogiro |
| Grande | 41-60 | 4-9 | 10-12 | Camion, limousine allungata, SUV, autobus, monovolume, aereo personale, aliante, yacht da crociera, carro armato, elicottero, sottomarino |
| Enorme | 61-80 | 7-12 | 13-15 | Autoarticolato, aereo di linea, jet, imbarcazione della guardia costiera, yacht |
| Immensa | 81-100 | 10-15 | 16-18 | Treno, nave da crociera, nave navale |

##### Scafi di Astronavi

| Taglia | Struttura | Valore Scafo Civile | Valore Scafo Militare | Esempio |
| :-- | :-: | :-: | :-: | :-- |
| Piccola | 10-50 | 4-9 | 10-12 | Caccia monoposto |
| Media | 51-150 | 7-12 | 13-15 | Mercantile leggero, navetta |
| Grande | 151-450 | 10-15 | 16-18 | Mercantile pesante, incrociatore |
| Enorme | 451-1350 | 13-18 | 19-21 | Fregata di scorta, incrociatore da battaglia leggero |
| Immensa | 1351-4050 | 16-21 | 21-24 | Nave generazionale, incrociatore da battaglia pesante |
| Colossale | 4050-12110 | 19-24 | 24-30 | Habitat orbitale, stazione da battaglia distruggi-pianeti |


---
### Scudi

Gli scudi deflettori forniscono un ulteriore livello di protezione per quei veicoli che possono montarli. Gli scudi funzionano in modo leggermente diverso dallo Scafo, a causa della loro natura ablativa. Se il danno in arrivo è uguale o inferiore al valore degli scudi, viene completamente bloccato. Se il danno supera il valore dello scudo, l'eccesso riduce la forza dello scudo di tale ammontare.

_Ad esempio, un trasporto truppe ha una forza dello scudo energetico di 12 punti. Se il trasporto venisse colpito da un laser per 11 danni, non penetrerebbe e non avrebbe alcun effetto aggiuntivo. D'altra parte, se il trasporto venisse colpito da un'esplosione che infligge 15 danni, i tre punti in eccesso ridurrebbero la forza dello scudo a 9._

Una volta che la forza di uno scudo deflettore scende a zero, esso collassa. Qualsiasi danno rimanente si trasferisce sullo scafo.

---
### Sistemi

Ogni volta che un veicolo subisce danni che penetrano il suo scafo, c'è una probabilità, pari al danno penetrante, che un Sistema vitale sia stato colpito.

_Ad esempio, 10 danni vengono applicati a un motoscafo - un veicolo COS 3 di Scafo e 24 di Struttura. Lo Scafo conta come armatura riducendo il danno a 7. Questo viene rimosso dai 24 punti Struttura e c'è una probabilità del 7% di danneggiare uno dei Sistemi del veicolo._

Il danno che un Sistema può subire si basa puramente sulla taglia del veicolo. Questo è modellato dal numero di colpi che un Sistema può subire, piuttosto che dall'ammontare effettivo del danno. Un singolo Colpo al Sistema su un veicolo Piccolo distruggerà istantaneamente quel Sistema. Sono necessari due colpi per demolire i Sistemi di un veicolo di taglia Media, tre per un veicolo Grande, e così via. Vedi la [Tabella Danni ai Sistemi](0006_Vehicles.md?id=system-damage-table) qui sotto.

I Sistemi che sono danneggiati, ma non ancora distrutti, subiscono una perdita di funzionalità proporzionale al numero di Colpi subiti - o una riduzione percentuale o una penalità di Grado alle prove di Sistema. L'effetto specifico si basa su ciò che il sottosistema controlla, come dettagliato nella [Tabella Danni ai Componenti del Sistema](0006_Vehicles.md?id=system-component-damage-table) qui sotto. A seconda di quale Sistema viene colpito, gli effetti possono essere catastrofici.

_Ad esempio, un Land Ironclad - un veicolo Immenso COS 5 Colpi al Sistema - colpito due volte alla Propulsione perderebbe il 40% della sua potenza e ridurrebbe la sua Velocità Lenta di due Gradi portandola a Pesante. Allo stesso modo, un mercantile Grande - COS 3 Colpi al Sistema - che subisce due colpi al Sistema Motore/Carburante avrebbe una penalità di due Gradi alla Velocità oltre che all'uso dei sistemi elettronici. Un terzo colpo distruggerebbe il Sistema Motore/Carburante e COS esso la nave._


<details>

<summary>* Errata della Comunità</summary>

---

#### Danni


_Il testo originale qui era originariamente più lontano. Posto direttamente dopo la sezione Sistemi, ripeteva inutilmente il paragrafo precedente._

- _"Il danno che supera lo Scafo penetra nel veicolo, danneggiando la Struttura e possibilmente impattando su uno o più sistemi. A seconda della taglia del veicolo, il danno può essere minore o catastrofico._
- _Ad esempio, un veicolo Grande può subire fino a due colpi su un Sistema come la sua Propulsione. Il terzo colpo distrugge funzionalmente la Propulsione. Ogni volta che il sistema subisce un colpo, perde una percentuale della sua funzionalità come descritto nella colonna Perdita per Colpo della Tabella Danni ai Sistemi qui sotto o una funzione principale (come Propulsione, Pilotaggio, Comunicazioni, e così via) diventa di un Grado di Difficoltà più difficile per ogni colpo subito."_

_I paragrafi di cui sopra vengono rimossi e al loro posto viene inserita una modifica abbreviata che richiama un altro esempio di effetto di Sistema._

---

</details>

##### Tabella Danni ai Sistemi

| Taglia | Colpi al Sistema | Perdita per Colpo |
| :-- | :-: | :-- |
| Piccola | 1 | 100% - Distrutto |
| Media | 2 | 1 Grado o 50% |
| Grande | 3 | 1 Grado o 33% |
| Enorme | 4 | 1 Grado o 25% |
| Immensa | 5 | 1 Grado o 20% |
| Colossale | 6 | 1 Grado o 16% |


<details>

<summary>* Errata della Comunità</summary>

---

##### Tabella Danni ai Sistemi (Originale)

| Taglia | Colpi al Sistema | Perdita per Colpo |
| :-- | :-: | :-- |
| Piccola | 1 | 1 Grado o 50% |
| Media | 2 | 1 Grado o 33% |
| Grande | 3 | 1 Grado o 25% |
| Enorme | 4 | 1 Grado o 20% |
| Immensa | 5 | 1 Grado o 16% |
| Colossale | 6 | 1 Grado o 10% |

##### Tabella Taglia Veicolo (da [Taglia, Tipo e Struttura dello Scafo](0006_Vehicles.md?id=hull-size-type-and-structure))

| Taglia | Colpi al Sistema |
| :-- | :-: |
| Piccola | 1 |
| Media | 2 |
| Grande | 3 |
| Enorme | 4 |
| Immensa | 5 |
| Colossale | 6 |

_Le regole e gli esempi originali sono incoerenti:_
- _"I Sistemi che sono danneggiati, ma non ancora distrutti, subiscono una perdita di funzionalità. Questa è uguale alla proporzione dei colpi attuali rispetto alla sua capacità totale. Pertanto, un veicolo Immenso colpito due volte alla Propulsione perderebbe il 40% della sua potenza (2 colpi su un massimo di 5)"._ 
   - _Questo suggerisce che il veicolo Immenso mostrato COS 5 Colpi al Sistema dovrebbe perdere il 20% a ogni colpo - ma la tabella dice 16%._
- _"Ad esempio, un veicolo Grande può subire fino a tre colpi su un sistema come la sua Propulsione. Il quarto colpo distrugge funzionalmente la Propulsione."_ 
  - _"Questo suggerisce - come fa la tabella - il 25% di danno per Colpo al Sistema, ma i veicoli Grandi possono subire solo 3 Colpi al Sistema secondo la stessa tabella._
- _Sebbene non incoerente, la Tabella Taglia Veicolo era ridondante; apparendo di nuovo in forma più completa (aggiungendo la colonna Perdita per Colpo) solo poche righe dopo._

_Questo rende difficile avere una regola coerente. Per risolvere questi problemi, i valori e gli esempi sono stati modificati per corrispondere e la Tabella Taglia Veicolo è stata rimossa._

---

</details>


##### Tabella Danni ai Componenti del Sistema

| 1d10 | Sistema | Risultato Danneggiato | Risultato Distrutto |
| :-: | :-- | :-- | :-- |
| 1 | Carico | Una quantità di possedimenti o equipaggiamento stivati nella stiva, proporzionale al danno, viene distrutta. | Tutto il carico viene distrutto. |
| 2 | Comms | Le prove di Comms subiscono un Grado di Difficoltà aggiuntivo ogni volta che vengono danneggiate. | Il veicolo non può più comunicare o ingannare i sensori nemici. |
| 3 | Controlli | Le prove di Nautica, Guida o Pilotaggio subiscono un Grado di Difficoltà aggiuntivo ogni volta che vengono danneggiate; è richiesta una prova di Controllo immediata. | Il veicolo non può più essere sterzato o cambiare rotta. |
| 4 | Propulsione | Velocità ridotta di una quantità proporzionale al danno. | Il veicolo si ferma di colpo; gli aerei precipitano. |
| 5 | Equipaggio | Un numero di passeggeri proporzionale al danno diventa vittima. I colpiti subiscono una Ferita Grave e devono riuscire in una prova di Resistenza o morire istantaneamente. | Gli occupanti del veicolo muoiono. |
| 6 | Motore / Carburante | Velocità ridotta di una quantità proporzionale al danno. I sistemi elettronici sono di un Grado di Difficoltà più difficili da usare. | Il veicolo viene distrutto in un'esplosione disastrosa. |
| 7 | Sensori | Le prove di Sensori, Navigazione e attacco COS Armi subiscono un Grado di Difficoltà aggiuntivo ogni volta che vengono danneggiate. | Il veicolo viene reso cieco. |
| 8 | Armi | Un numero di sistemi d'arma proporzionale al danno diventa inoperante. | Il veicolo non può più sparare COS le armi. |
| 9-0 | Nessuno | Nessun sistema colpito; solo danni alla Struttura. | N/D |

<details>

<summary>* Errata della Comunità</summary>

---

##### Tabella Danni ai Componenti del Sistema (Motore/Carburante)

_Il risultato originale era il seguente: "La Velocità massima viene dimezzata..." Questo contraddice la regola generale delle penalità ai danni in proporzione ai danni al Sistema: 25% di danno = 25% di penalità. Inoltre, le regole complete nel Mythras Companion non menzionano questo dimezzamento della Velocità._

_Di conseguenza il testo viene sostituito COS la stessa voce dei Sistemi di Propulsione: "Velocità ridotta di una quantità proporzionale al danno."_

---

</details>


---
### Velocità

Poiché la fisica della velocità, dell'accelerazione, della resistenza e dell'inerzia (per citarne solo alcune) sono questioni complesse, è necessaria una certa semplificazione, quindi ai veicoli viene assegnato un valore di velocità astratto. La caratteristica Velocità dovrebbe essere usata solo per giudicare approssimativamente se un veicolo può superare o raggiungere un altro.

Il valore di velocità rappresenta il tasso operativo nominale di un veicolo. In situazioni di emergenza, queste prestazioni possono essere aumentate di un passo, a rischio di usura o danni ai motori. Sebbene venga utilizzata la stessa tabella per tutti i tipi di veicoli, occorre applicare il buon senso in modo che vengano confrontati solo veicoli della stessa classe. Ad esempio, se un'Astronave e un'auto sportiva hanno entrambe lo stesso tasso di accelerazione Rapido, dovrebbe essere ovvio che l'astronave è comparativamente più veloce.

Aumentare la Velocità di un veicolo oltre il suo valore standard è possibile COS una prova di Guida riuscita. Solitamente, questa velocità extra è sostenibile solo per un breve periodo – non più di 1d6 minuti prima che il veicolo debba scendere alla sua velocità standard o rischiare danni all'impianto energetico. Una prova critica di Guida consente di aumentare il periodo di velocità più elevata a 1d12 minuti.

Un guidatore può tentare di spingere la velocità di un veicolo di 2 passi, ma ciò richiede una prova Erculea di Guida e il massimo che il veicolo può sostenere a questa velocità è 1d3 minuti: un Successo Critico non estenderà la durata della velocità aumentata.

##### Tabella Gradi di Velocità

| Grado di Velocità | Velocità Max per |
| :-- | :-: |
| Pesante | Immensa |
| Lenta | |
| Lenta | Enorme |
| Mediocre | |
| Moderata | Grande |
| Moderata | |
| Rapida | Media |
| Veloce | |
| Fulminea | Piccola |


---
### Tratti

Il numero massimo di tratti che un veicolo può avere dipende dalla taglia e dal tipo di scafo.

Ogni veicolo ha un tratto intrinseco: la modalità di viaggio per cui è stato progettato principalmente. Pertanto, gli aerei possiedono intrinsecamente il tratto Aviotrasportato, le barche quello Navigabile, e così via. Questo tratto intrinseco non conta ai fini del numero di tratti disponibili. Tuttavia, se un veicolo dovesse includere una seconda modalità di viaggio – un sottomarino volante per esempio, allora il tratto Aviotrasportato dovrebbe essere preso come uno dei suoi tratti disponibili.

Alcuni tratti potrebbero non essere disponibili, a seconda del livello tecnologico dell'ambientazione; i Game Master devono prendere le proprie decisioni su quali tratti possono essere applicati.

##### Tabella Assegnazione Tratti Veicolo

| Taglia | Tratti Max |
| :-- | :-: |
| Piccola | 1 |
| Media | 2 |
| Grande | 3 |
| Enorme | 4 |
| Immensa | 5 |
| Colossale | 6 |

#### Aviotrasportato

Il veicolo è capace di volo atmosferico.

#### Ogni Terreno

Questo Tratto deve essere usato COS veicoli Terrestri. Il veicolo può attraversare terreni inospitali, difficili e ripidi, utilizzando cingoli, sospensioni e sistemi di trazione avanzati, o potenti differenziali di trazione.

#### Scavo

Il veicolo è progettato per scavare e creare tunnel attraverso il terreno. Può raggiungere una profondità massima pari al suo Grado di Scafo x 5 metri.

#### Mimetizzato

Il veicolo possiede vernice mimetica o sensori mimetici che gli consentono di confondersi COS l'ambiente circostante. I tentativi di individuare visivamente il veicolo sono di un grado più difficili.

#### Carico

Il veicolo è progettato specificamente per trasportare merci piuttosto che passeggeri. Gli scomparti passeggeri sono ridotti al minimo COS il resto dello spazio utile del veicolo dedicato al contenimento del carico COS sezioni appropriate, strumenti e persino condizionamento ambientale (come sezioni freezer per il trasporto di deperibili). Quando è carico di merci, la velocità del veicolo è inferiore di due passi rispetto a quanto la sua taglia di scafo consentirebbe normalmente.

#### Trasportatore

Il veicolo è progettato specificamente per trasportare veicoli più piccoli, COS equipaggio leggero o possibilmente controllati a distanza, di natura civile o militare. Qualsiasi veicolo che possiede questo tratto deve essere almeno Immenso. Il numero di piccole imbarcazioni trasportate può variare in base al tipo di missione e allo scopo, ma può variare da 10 fino al valore di Struttura del veicolo.

#### Costruzione

Il veicolo è equipaggiato per pesanti lavori di costruzione. Tutti i veicoli COS questo tratto hanno anche il tratto Ogni Terreno, ma la velocità è inferiore di due passi rispetto a quanto la loro taglia di scafo consentirebbe normalmente. Il veicolo è dotato di strumenti appropriati al compito come bracci di gru, benne scavatrici, cassoni ribaltabili e così via.

#### Resistente agli EMP

Il veicolo è schermato contro gli attacchi di impulso elettromagnetico.

#### Prestazioni Migliorate

Il grado di Velocità del veicolo è superiore di un passo rispetto al massimo per la sua taglia.

#### Seggiolino Eiettabile

In caso di emergenza, un seggiolino eiettabile proietta gli occupanti a diverse centinaia di metri in aria, quindi dispiega un paracadute per consentire un atterraggio sicuro. Il paracadute è opzionale. Non raccomandato per gli elicotteri (il Kamov Ka-52 Alligator è una notevole eccezione).

#### FTL

Solo Astronavi. Il veicolo è dotato di un motore più veloce della luce (che sia un iperguida, un motore a curvatura, un generatore di wormhole o simile). L'iperguida ha un grado di Velocità separato che misura essenzialmente il tasso al quale un'astronave può attraversare un singolo parsec (3,26 anni luce, o 31 trilioni di chilometri o 19 trilioni di miglia), come segue:

##### Tabella Gradi di Velocità FTL

| Grado di Velocità | Fattore per Attraversare 1 Parsec |
| :-- | :-: |
| Pesante | 10 |
| Lenta | 8 |
| Lenta | 7 |
| Mediocre | 6 |
| Moderata | 5 |
| Moderata | 4 |
| Rapida | 3 |
| Veloce | 2 |
| Fulminea | 1 |

Il tempo del fattore spetta al Game Master deciderlo, a seconda di quanto è avanzato lo sviluppo dell'FTL dell'ambientazione. Ad esempio, il fattore base potrebbe essere 1 Giorno, il che significa che una nave COS un'iperguida Pesante impiega 10 giorni per completare il viaggio, mentre un'imbarcazione COS un'iperguida Fulminea completa il viaggio in 1 giorno. Altrove, dove la tecnologia FTL è significativamente meno efficiente, il tempo del fattore potrebbe essere misurato in mesi, piuttosto che in giorni.

Si presume che la nave abbia riserve di carburante per effettuare un viaggio di ritorno o un mezzo per rifornirsi nel punto di destinazione.

Si assume che qualsiasi taglia di astronave possa essere dotata di un'iperguida, sebbene, ancora una volta, ciò dipenda dall'ambientazione.

Le iperguide non possono essere attivate entro 1,5 Unità Astronomiche da una stella (circa 225 milioni di chilometri, o 270 milioni di miglia). Ciò significa che le navi devono usare un motore subluce per spostarsi a circa la distanza di Marte prima di attivare il sistema FTL.

#### Veicolo Terrestre

Il veicolo è capace di viaggio terrestre.

#### Hover

Il veicolo si libra sopra il terreno utilizzando un cuscino d'aria o un repulsore antigravitazionale.

#### Lussuoso

Il veicolo è progettato specificamente per trasportare passeggeri a un certo livello di lusso. Lo spazio di carico in eccesso è destinato ad alloggi passeggeri lussuosi, piscine, vasche idromassaggio, equipaggio extra per soddisfare i capricci dei passeggeri, e così via.

#### Rotaie

Il veicolo si affida a un sistema di binari. I veicoli COS questo tratto possono naturalmente raggiungere un grado di Velocità superiore di tre passi rispetto a quanto la loro taglia di scafo consentirebbe normalmente, ma sono ovviamente limitati al movimento solo sul sistema di binari.

#### Resiliente

Tutti i sistemi possono resistere a un colpo aggiuntivo rispetto a quanto normalmente determinato dalla Taglia. Questo Tratto può essere cumulativo — quindi Resiliente 2 indica che i sistemi possono resistere a 2 colpi in più rispetto al solito al costo di due punti Tratto.

#### Navigabile

Il veicolo è galleggiante sull'acqua.

#### Veicolo Spaziale

Il veicolo è sigillato contro il vuoto e schermato contro le radiazioni cosmiche e può, a seconda del design, essere in grado di lasciare e rientrare nell'atmosfera, e sostenere il volo all'interno di un'atmosfera.

#### Stealth

Solo Aerei. Il veicolo è progettato per evitare il rilevamento da parte di radar e altri sistemi di sensori a lungo raggio. I tentativi di individuare il veicolo utilizzando sensori elettronici sono di un grado più difficili.

#### Sommersibile

Il veicolo è capace di immergersi sotto la superficie di un oceano fino a una profondità operativa pari al suo Grado di Scafo x 10 metri. La profondità di collasso — il massimo assoluto che il sommergibile può raggiungere senza essere schiacciato — è 1,5 volte la sua profondità operativa.

#### Manovrabilità Superiore

La manovrabilità del veicolo è classificata come Facile.

#### Suite di Sorveglianza

Il veicolo ha un computer di bordo, una stazione base per le comunicazioni, un ricevitore per i segnali dei dispositivi di ascolto e un apparato per intercettare i segnali degli smartphone vicini entro 100 metri.#### Resistente

Un veicolo civile COS questo tratto deriva il suo Scafo dalla colonna Militare e ha automaticamente la Struttura massima. Un veicolo Militare COS questo Tratto deriva il suo Scafo e la sua Struttura dalla riga immediatamente successiva.

#### Raggio Traente

Solo Astronavi. La nave è dotata di un raggio traente in grado di agganciare e attirare a sé veicoli COS un valore di scafo fino a due gradi inferiore al proprio. Pertanto, un'astronave Enorme potrebbe attrarre e trattenere uno scafo fino a una dimensione Media.

#### VTOL

Decollo/atterraggio verticale. Questo tratto è intrinseco agli elicotteri e ai veicoli simili che utilizzano una combinazione di rotori per produrre portanza. Quando applicato ad aerei ad ala fissa, indica l'uso di propulsori fissi o orientabili per controllare l'assetto, la salita e la discesa in volo.

#### Nautico

Il veicolo si propelle utilizzando gambe articolate. I veicoli camminatori hanno una velocità massima di Lieve, indipendentemente dalla loro Dimensione. Tuttavia, i Camminatori possono essere costruiti COS altezze che risulterebbero semplicemente instabili per veicoli dotati di altri mezzi di locomozione.

Questo veicolo è in grado di muoversi sott'acqua.

#### Armato

Il veicolo è stato adattato per ospitare armamenti. I sistemi d'arma sono trattati di seguito nella sezione [Armi](0006_Vehicles.md?id=weapons).


---
## Armi

Di solito, solo gli scafi militari sono progettati per ospitare armamenti (punti di aggancio, deposito munizioni, sistemi di controllo). Il Tratto "Armato" può essere scelto per veicoli civili che potrebbero avere esigenze belliche.

Il numero massimo di sistemi d'arma che un veicolo può supportare è pari a 1/10 dei suoi Punti Struttura (quindi un veicolo COS 40 Struttura potrebbe supportare 4 sistemi d'arma, se si tratta di un veicolo militare o di un veicolo civile Armato).

I sistemi d'arma dipendono dalla Dimensione del veicolo. Il tipo massimo di sistema d'arma per le diverse Dimensioni è mostrato nelle tabelle sottostanti.


##### Tabella Armi per Dimensione 

| Dimensione | Terrestre | Astronavale |
| :-- | :-- | :-- |
| Piccolo | Arma Leggera (es. Fucile d'Assalto) | Arma Media (es. Mitragliatrice, Lanciarazzi) |
| Medio | Arma Media (es. Mitragliatrice, Lanciarazzi) | Arma su Torretta/Pesante (es. Mitragliatrici Pesanti Accoppiate, Mini-Guns) |
| Grande | Arma su Torretta/Pesante (es. Mitragliatrici Pesanti Accoppiate, Mini-Guns) | Batteria d'Armi (es. Artiglieria da Campo) |
| Enorme | Batteria d'Armi (es. Artiglieria da Campo) | Armi Avanzate (es. Sistemi Missilistici) |
| Immensamente Grande | Armi Avanzate (es. Sistemi Missilistici) | Armi Montate su Spina Dorsale (solo una) |
| Colossale | ND | Armi Montate su Spina Dorsale (fino a 3) |

##### Tabella Statistiche Armi Campione 
 
| Arma | Danni | Gittata | Cadenza di Fuoco | Munizioni/Caricamento |
| :-- | :-: | :-: | :-: | :-: |
| Cannone da 50 pollici | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Razzo | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Missile Medio/Siluro | 6d10 | Gittata massima di 200km | 1 | 1/5 |
| Missile Grande/Crociera | 6d10+10 | Gittata massima di 1000km | 1 | 1/10 |
| Laser/Cannone al Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Laser Pesante/Cannone al Plasma | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Batteria di Artiglieria | 5d6+6 | Gittata massima di 50km | 1 | 1/5 |
| Batteria su Spina Dorsale | 10d6+6 | Gittata massima di 20000km | 1 | 1/10 |

_Le gittate sono espresse in metri e chilometri._

_Le cadenze di fuoco si riferiscono al colpo singolo, semiautomatico e automatico._

_Le munizioni rappresentano la capacità di fuoco prima di dover ricaricare. Il caricamento è il tempo di ricarica in Round di Combattimento, assumendo che sia disponibile un equipaggio completo._

---
## Manovrabilità e Manovre

Le manovre evasive o improvvise richiedono un tiro di Guida/Pilotaggio riuscito per garantire che il conducente o il pilota mantenga il controllo del veicolo. La maggior parte dei veicoli è progettata e costruita per resistere a sollecitazioni e tensioni occasionali, ma il Master può stabilire che una particolare manovra richieda un tiro a un grado di difficoltà superiore, a seconda di quanto sia ambiziosa. Un fallimento significa che il controllo del veicolo è perso: tirare sulla tabella Perdita di Controllo.

Si noti che la Tabella di Perdita di Controllo si applica solo ai veicoli terrestri. Effetti simili possono essere applicati ai veicoli aerei e spaziali, ma i Master dovranno adattare la motivazione per l'effetto specifico. Ad esempio, un aereo, invece di sbandare, potrebbe andare in vite.

Inoltre, la manovrabilità intrinseca di un veicolo può avere un impatto aggiuntivo sul tiro di Guida. La Manovrabilità può essere Facile, Standard, Difficile, Formidabile o Erculea e determina il punto di partenza per il tiro di Guida durante l'esecuzione di una manovra. Il grado di difficoltà della manovra viene quindi applicato alla manovrabilità per determinare la difficoltà finale.

Ad esempio, una motocicletta ad alte prestazioni ha girostabilizzatori integrati che le conferiscono una Manovrabilità Facile. Il conducente vuole eseguire una derapata a 180 gradi per seminare un inseguitore, una manovra che il Master valuta come un grado di difficoltà aggiuntivo. Il pilota deve quindi effettuare il suo tiro di Guida a livello Standard invece che Facile. Se avesse tentato la stessa manovra su una motocicletta non stabilizzata, il tiro di Guida sarebbe stato Difficile.

Manovrabilità Superiore è un Tratto. Se un veicolo non possiede questo tratto nella sua descrizione, la manovrabilità predefinita è Standard per qualsiasi veicolo di dimensione Grande e inferiore. I veicoli Enormi e Immensamente Grandi possiedono intrinsecamente il tratto di Manovrabilità Formidabile ed Erculea, rispettivamente, e il Master è libero di stabilire che alcune manovre siano semplicemente impossibili da eseguire a causa delle dimensioni del veicolo.

##### Tabella Perdita di Controllo 

| 1d100 | Risultato |
| :-: | :-- |
| 01-25 | Sbandata. La perdita di controllo è temporanea. Il veicolo riduce la sua velocità di 1 grado per 5 secondi. |
| 26-40 | Derapata. Il pilota deve lottare per mantenere il controllo. Il veicolo riduce la sua velocità di 2 gradi per 10 secondi. |
| 41-50 | Derapata Violenta. Il veicolo finisce rivolto nella direzione sbagliata e resta fermo per 15 secondi. |
| 51-60 | Ribaltamento. Il veicolo sbanda e si ribalta, subendo 3d10 danni alla sua Struttura. Gli occupanti devono superare tiri di Costituzione o subire 1d10 danni a 1d3 Zone Corporee. |
| 61-70 | Ribaltamento Violento. Come sopra, ma il veicolo subisce 3d10+10 danni e gli occupanti ricevono 1d10 danni anche se il tiro di Costituzione ha successo, e 2d10 se fallisce. |
| 71-80 | Rottamato. Come sopra, ma il veicolo viene ridotto a 0 Struttura. Gli occupanti subiscono gli stessi danni del Ribaltamento Violento. |
| 81-90 | Esplosione. Come sopra, ma il sistema di alimentazione del veicolo prende fuoco ed esplode entro 1d20+10 secondi. Se non riescono ad allontanarsi, gli occupanti subiscono ulteriori 1d6 danni da ustione a 1d6 zone. |
| 91-98 | Esplosione Immediata. Come sopra, ma l'esplosione è immediata. |
| 99-00 | Incidente Catastrofico. Gli occupanti devono superare un tiro di Costituzione o morire istantaneamente. I danni, come per la condizione Rottamato, vengono subiti a prescindere. |


---
## Veicoli Campione

---

### Veicoli Terrestri

#### Interceptor

Un'auto di lusso truccata, un'auto sportiva o qualcosa di simile, quest'auto è costruita per andare veloce e rispondere colpo su colpo in battaglia. È il tipo di veicolo a cui la gente pensa quando qualcuno dice "auto spia".

| Interceptor | |
| :- | :- |
| **Dimensione / Tipo** | Medio Militare |
| **Scafo** | 6 |
| **Struttura** | 40 |
| **Sistemi** | 2 |
| **Velocità** | Veloce |
| **Manovrabilità** | Facile |
| **Tratti** | [Sedile Eiettabile](0006_Vehicles.md?id=ejector-seat), [Prestazioni Avanzate](0006_Vehicles.md?id=enhanced-performance), [Manovrabilità Superiore](0006_Vehicles.md?id=superior-handling), [Suite di Sorveglianza](0006_Vehicles.md?id=surveillance-suite), [Armato](0006_Vehicles.md?id=weaponized) |
| **Armi** | Distributore di Macchie d'Olio, Distributore di Fumo, Mitragliatrici Medie Accoppiate (2d6+3) |

<br>

---

#### Motocicletta da Inseguimento

Leggera e veloce, progettata per inseguimenti ad alta velocità, la Motocicletta da Inseguimento porta COS sé una sorpresa: una coppia di mitragliatrici accoppiate o due razzi.

| Motocicletta da Inseguimento | |
| :- | :- |
| **Dimensione / Tipo** | Piccolo Civile |
| **Scafo** | 2 |
| **Struttura** | 12 |
| **Sistemi** | 1 |
| **Velocità** | Veloce |
| **Manovrabilità** | Facile |
| **Tratti** | [Manovrabilità Superiore](0006_Vehicles.md?id=superior-handling), [Armato](0006_Vehicles.md?id=weaponized) |
| **Armi** | Due Razzi (4d6) o Mitragliatrici Leggere Accoppiate (2d6) |

<br>

---

#### Berlina

Una berlina standard a 4 porte dotata di spazio sufficiente per ospitare comodamente un guidatore e tre passeggeri. Sacrifica lo spazio di carico per incorporare una suite di sorveglianza.

| Berlina | |
| :- | :- |
| **Dimensione / Tipo** | Medio Civile |
| **Scafo** | 4 |
| **Struttura** | 25 |
| **Sistemi** | 2 |
| **Velocità** | Rapida |
| **Manovrabilità** | Standard |
| **Tratti** | [Discreto](0006_Vehicles.md?id=unobtrusive), [Suite di Sorveglianza](0006_Vehicles.md?id=surveillance-suite) |
| **Armi** | Nessuna |

<br>

---

#### Auto Sommergibile

Un'auto per due persone in grado di passare alla modalità nautica o sommergibile per viaggiare sull'acqua o sott'acqua. Dotata di un siluro frontale e di un missile superficie-aria montato sul tetto.

| Auto Sommergibile | |
| :- | :- |
| **Dimensione / Tipo** | Medio Civile |
| **Scafo** | 6 |
| **Struttura** | 25 |
| **Sistemi** | 2 |
| **Velocità** | Veloce |
| **Manovrabilità** | Standard |
| **Tratti** | [Prestazioni Avanzate](0006_Vehicles.md?id=enhanced-performance), [Sommergibile](0006_Vehicles.md?id=submersible), [Nautico](0006_Vehicles.md?id=waterborne), [Armato](0006_Vehicles.md?id=weaponized) |
| **Armi** | Razzo (5d6), Siluro (4d10) |

<br>

---

#### Furgone di Sorveglianza

Un furgone semplice e anonimo che ospita una squadra di agenti e una serie di apparecchiature di registrazione audio-visiva.

| Furgone di Sorveglianza | |
| :- | :- |
| **Dimensione / Tipo** | Grande Civile |
| **Scafo** | 9 |
| **Struttura** | 60 |
| **Sistemi** | 3 |
| **Velocità** | Lieve |
| **Manovrabilità** | Standard |
| **Tratti** | [Suite di Sorveglianza](0006_Vehicles.md?id=surveillance-suite), [Resistente](0006_Vehicles.md?id=tough) |
| **Armi** | Nessuna |

<br>

---

#### Veicolo di Supporto Tattico

Un pickup o una jeep COS spazio per un equipaggio di due persone in cabina e un mitragliere nel cassone posteriore che aziona una Mitragliatrice Media montata su perno.

| Veicolo di Supporto Tattico | |
| :- | :- |
| **Dimensione / Tipo** | Medio Civile |
| **Scafo** | 6 |
| **Struttura** | 30 |
| **Sistemi** | 2 |
| **Velocità** | Rapida |
| **Manovrabilità** | Standard |
| **Tratti** | [Fuoristrada](0006_Vehicles.md?id=all-terrain), [Armato](0006_Vehicles.md?id=weaponized) |
| **Armi** | Mitragliatrice Media Montata (2d6) |


<br>

---

### Natanti

#### Motoscafo

Un tipico motoscafo, armato di un distributore di mine montato a poppa.

| Motoscafo | |
| :- | :- |
| **Dimensione / Tipo** | Medio Civile |
| **Scafo** | 3 |
| **Struttura** | 24 |
| **Sistemi** | 2 |
| **Velocità** | Veloce |
| **Manovrabilità** | Standard |
| **Tratti** | [Prestazioni Avanzate](0006_Vehicles.md?id=enhanced-performance), [Nautico](0006_Vehicles.md?id=waterborne), [Armato](0006_Vehicles.md?id=weaponized) |
| **Armi** | Distributore di Mine (5d6) |

<br>

---

#### Yacht

Il tipo di yacht di lusso che un oligarca potrebbe possedere. Probabilmente equipaggiato COS una suite di sorveglianza per proteggersi dai nemici che tentano di tramare qualcosa di losco.

| Yacht | |
| :- | :- |
| **Dimensione / Tipo** | Enorme Civile |
| **Scafo** | 10 |
| **Struttura** | 75 |
| **Sistemi** | 4 |
| **Velocità** | Lenta |
| **Manovrabilità** | Formidabile |
| **Tratti** | [Lussuoso](0006_Vehicles.md?id=luxurious), [Suite di Sorveglianza](0006_Vehicles.md?id=surveillance-suite), [Nautico](0006_Vehicles.md?id=waterborne) |
| **Armi** | Nessuna |


<br>

---

### Velivoli/Astronavi

#### Dirigibile (Transatlantico Civile)

Simile all'Hindenburg, questa classe di dirigibili transcontinentali è lunga 245 metri e richiede un equipaggio da 40 a 61 persone. Può tipicamente trasportare un complemento di 50-72 passeggeri in sistemazioni di lusso.

| Dirigibile | |
| :- | :- |
| **Dimensione / Tipo** | Immensamente Grande Civile |
| **Scafo** | 10 |
| **Struttura** | 85 |
| **Sistemi** | 5 |
| **Velocità** | Pesante |
| **Manovrabilità** | Erculea |
| **Tratti** | [Aereo](0006_Vehicles.md?id=airborne), [Lussuoso](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Scudi** | Nessuno |
| **Armi** | Nessuna |

<br>

---

#### Elicottero d'Assalto

Il tradizionale Elicottero d'Assalto utilizza una tecnologia di sorveglianza avanzata per intercettare segnali telefonici e internet wireless, e per tracciare individui e veicoli anche al buio, tramite FLIR. I tentativi di eludere il tracciatore tramite Furtività sono Formidabili.

| Elicottero d'Assalto | |
| :- | :- |
| **Dimensione / Tipo** | Grande Militare |
| **Scafo** | 11 |
| **Struttura** | 50 |
| **Sistemi** | 3 |
| **Velocità** | Moderata |
| **Manovrabilità** | Facile |
| **Tratti** | [Aereo](0006_Vehicles.md?id=airborne), [Prestazioni Avanzate](0006_Vehicles.md?id=enhanced-performance), [Furtività](0006_Vehicles.md?id=stealth), [Manovrabilità Superiore](0006_Vehicles.md?id=superior-handling), [Suite di Sorveglianza](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Scudi** | Nessuno |
| **Armi** | 1 Gatling (3d6), 4 Razzi (5d6) |

<br>

---

#### Caccia Multi-Ruolo

Questo caccia bimposto a base terrestre (simile al De Havilland Mosquito) è noto per le sue prestazioni e versatilità. La sua stiva per le bombe è in grado di trasportare due bombe da 250 libbre (trattarle come missili medi COS gittata 0) o un singolo siluro.

| Caccia Multi-Ruolo | |
| :- | :- |
| **Dimensione / Tipo** | Grande Militare |
| **Scafo** | 10 |
| **Struttura** | 45 |
| **Sistemi** | 3 |
| **Velocità** | Moderata |
| **Manovrabilità** | Standard |
| **Tratti** | [Aereo](0006_Vehicles.md?id=airborne), [Prestazioni Avanzate](0006_Vehicles.md?id=enhanced-performance) |
| **Scudi** | Nessuno |
| **Armi** | 4 Gatling montate sul muso (4d6+3), 1 stiva per bombe (6d10 - vedi descrizione) |

<br>

---

#### Mercantile Interstellare (Trasporto Leggero Alta Tecnologia)

Questo trasporto leggero richiede un equipaggio minimo di soli due membri, COS spazio per un massimo di altri quattro passeggeri. Qui viene riportata la versione di serie standard, tuttavia molti proprietari applicheranno le proprie "modifiche speciali" come spazio di carico occultato, Prestazioni Avanzate, Manovrabilità Superiore, Resistenza EMP, Furtività e così via.

| Mercantile Interstellare | |
| :- | :- |
| **Dimensione / Tipo** | Medio Civile Spaziale |
| **Scafo** | 10 |
| **Struttura** | 80 |
| **Sistemi** | 2 |
| **Velocità** | Rapida (Fattore Parsec di 3) |
| **Manovrabilità** | Standard |
| **Tratti** | [Aereo](0006_Vehicles.md?id=airborne), [Carico](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Astronave](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Scudi** | 8 |
| **Armi** | 2x Torrette COS Cannoni Laser Quadrupli (5d6) |


<br>

---

#### Unità di Contatto Generale (Astronave Ultra Alta Tecnologia)

Questa astronave estremamente tecnologica è la rappresentazione fisica di una Mente artificiale altamente avanzata, che assume la forma di una serie di moduli collegati dal campo, lunga due chilometri. I moduli hanno scopi individuali e includono habitat, impianti di costruzione, aree di carico, trasformazione alimentare, complessi per il tempo libero, hangar e persino alcune unità segrete di cui l'intelligenza della nave discute raramente, se non mai. Non ha bisogno di equipaggio umano, ma può supportare una popolazione di passeggeri fino a 100.000 persone COS facilità. Molti passeggeri nascono e muoiono a bordo dell'Unità di Contatto: molti sono transitori, andando e venendo a loro piacimento.

| Unità di Contatto Generale | |
| :- | :- |
| **Dimensione / Tipo** | Colossale Civile Spaziale |
| **Scafo** | 20 |
| **Struttura** | 10.000 |
| **Sistemi** | 6 |
| **Velocità** | Moderata (Fattore Parsec di 4. A questo livello tecnologico, un Fattore equivale a 1 ora) |
| **Manovrabilità** | Formidabile |
| **Tratti** | [Aereo](0006_Vehicles.md?id=airborne), [Carico](0006_Vehicles.md?id=cargo), [Portaerei](0006_Vehicles.md?id=carrier), [Costruzione](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Lussuoso](0006_Vehicles.md?id=luxurious), [Astronave](0006_Vehicles.md?id=spacecraft), [Manovrabilità Superiore](0006_Vehicles.md?id=superior-handling), [Raggio Traente](0006_Vehicles.md?id=tractor-beam) |
| **Scudi** | 30 |
| **Armi** | Nessuna di cui desideri discutere |

<br>