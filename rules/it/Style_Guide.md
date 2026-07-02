# Titolo della Guida di Stile (h1)

Utilizza le intestazioni h1 (`# Heading Title`) per il titolo principale del capitolo. Tutte le intestazioni hx appariranno nella barra laterale come segnalibri.

Se il titolo non è un'intestazione h1, la barra laterale mostrerà un errore di duplicazione che indica la pagina e poi l'intestazione h2 'titolo'.

---
## Intestazioni di sezione (h2)

Utilizza le intestazioni h2 (`## Section Heading`) precedute da un divisore (`---`) per ogni nuova sezione principale.

### Intestazioni di sottosezione con livello h crescente di 1

Utilizza le intestazioni h3 (`### Subsection Heading`) per ogni nuova sottosezione e le intestazioni h4 (`#### Sub-Subsection Heading`) per ogni nuova sotto-sottosezione.

### Progressione h delle sottosezioni: 2 > 3 > 4

Le sotto-intestazioni si confondono nella barra laterale se la progressione h non è gestita correttamente.

Il marcatore dell'intestazione dovrebbe aumentare di uno o rimanere invariato.

h2 seguito da h2 o h3 va bene. h3 seguito da h3 o h4 va bene anche.

### Errori delle sottosezioni
h2 seguito da h4 causa problemi. La barra laterale posiziona la sotto-intestazione da qualche parte sopra l'intestazione nell'indice.

### Riduzione dei livelli h

Questo non sembra essere un problema. Ad esempio, da h4 a h3 o h2 va bene.

---
## Convenzioni di formattazione

I seguenti stili sono la norma per questi SRD _Imperative_ in formato Markdown.

### Grassetto, Corsivo e Divisori

- Usa i doppi asterischi (`**Bold**`) per il testo in **Grassetto**.
- Usa i trattini bassi (`_Italic_`) per il testo in _Corsivo_.
  - _nb: Evita di usare singoli asterischi per il Corsivo!_
- Usa le barre rovesciate (`\_`) per 'sfuggire' un carattere: \_Non in Corsivo\_.
- Usa le virgolette angolari (``` `code` ```) per creare `code blocks`.
- Usa tre trattini (`---`) per inserire una linea divisoria orizzontale.

### Convenzioni per Grassetto e Corsivo

Cerca di attenerti ai seguenti schemi...

#### Titoli in grassetto

Usa i titoli in grassetto per descrivere incantesimi, effetti, ecc.
- **Titolo Magico:** Descrizione.

#### Titoli in corsivo

Usa i titoli in corsivo per i 'sotto-elenchi' di incantesimi varianti, ecc.
- **Magia:** Descrizione.
  - **_Variante Magica-A:_** Descrizione.
  - **_Variante Magica-B:_** Descrizione.

#### Riferimenti a titoli in corsivo

Usa i titoli in corsivo quando fai riferimento a un libro come _Mythras Imperative_ o al regolamento base di _Mythras_.

---
## Formattazione degli elenchi

### Elenchi non ordinati / Punti elenco

- Gli elenchi non ordinati sono creati con trattini.
- Gli elenchi non ordinati sono creati con trattini.
  - Aumenta il livello di rientro con 2 spazi o una tabulazione.

### Elenchi ordinati / Punti numerati

1. Gli elenchi numerati sono creati con la cifra e un punto.
2. Gli elenchi numerati sono creati con la cifra e un punto.
- Mischia con i punti elenco
	- E l'indentazione
3. Rimischia i numeri
   - E i punti elenco

### Elenchi con intestazione

Per elenchi di sotto-intestazioni correlate, metti in grassetto il titolo e i due punti.
- **Esempio 1:** Bla, bla, bla...
- **Esempio 2:** Bla, bla, bla...

### Elenchi con intestazione in corsivo

Per elenchi di sotto-intestazioni correlate, metti in grassetto e corsivo il titolo e i due punti.
- **_Esempio 1:_** Bla, bla, bla...
- **_Esempio 2:_** Bla, bla, bla...

---
## Tabelle

Dai alle tabelle una sotto-intestazione in modo che appaiano segnalate nella barra laterale, rientrate di un livello rispetto alla sezione genitore.

~Rendi la riga dell'intestazione in grassetto.~
Rendere la riga dell'intestazione in grassetto la renderà in testo normale. Il CSS predefinito ha quella riga in grassetto.

### Allineamento del testo della tabella

Usa la riga 2 per l'allineamento del contenuto: `:--`, `:-:`, o `--:`.
Questo influenzerà l'intera colonna.

#### Layout di base delle tabelle

| **Colonna 1** | **Colonna 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gamma |

### Convenzioni di allineamento del testo

- Usa l'allineamento centrale per numeri o elenchi di valori simili.
- Usa l'allineamento a sinistra per frasi di testo.

#### Esempio di tabella di allineamento

| **Numero** | **Descrizione** |
| :-: | :-- |
| 1 | Testo descrittivo |
| 2 | Testo descrittivo |
| 3 | Testo descrittivo |

#### Esempio: Tabella Intensità Fuoco

| **Intensità** | **Esempi** | **Tempo per Accendersi** | **Danno** |
| :-: | :-- | :-: | :-: |
| 1 | Candela | 1d4 | 1d2 |
| 2 | Torcia | 1d3 | 1d4 |
| 3 | Falò | 1d2 | 1d6 |
| 4 | Conflagrazione che riempie la stanza | 1d2 | 2d6 |
| 5 | Lava vulcanica | Istantaneo | 3d6 |

---
## Link

Ci sono molti usi per i link nell'SRD e solo alcuni casi principali sono trattati qui.

### Formattazione dei Link

La formattazione di un link si fa con testo tra parentesi. Usa le parentesi quadre per il testo visibile del link e le parentesi curve per l'URL di destinazione: `[Link Text](URL)`.

In questi documenti il link esterno più comune sarà il [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Link esterni vs interni

I link esterni vanno ad altre pagine tramite internet e richiederanno un URL `http://example.com` e, per impostazione predefinita, si apriranno _sempre_ in una nuova scheda del browser.

Per evitare che più schede ingombrino il documento che si sta leggendo, i link interni e i segnalibri sono formati con URL relativi che fanno riferimento ai file markdown visibili nel repository GitHub. Invece di una nuova scheda, questi link interni scorreranno rapidamente alla sezione collegata.

#### Esempi di link interni

- **Link ai capitoli:** Questi puntano all'inizio di una sezione principale (h1). Es. il capitolo [Combattimento](0005_Combat.md).

  - Formato del link: `[Combat](0005_Combat.md)`

- **Link alle sottosezioni:** Questi puntano a un'intestazione all'interno di un capitolo che fa riferimento al documento come sopra, ma aggiungendo `?id=` seguito immediatamente dall'intestazione di destinazione. Es. [Attacchi in Salto](0005_Combat.md?id=leaping-attacks)

  - Formato del link: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Link esterni a sottosezioni

Potrebbe esserci l'occasione di fare riferimento a una sezione nota di un documento esterno, ad esempio, una tabella specifica in un altro SRD. La formattazione è la stessa dei link alle sottosezioni, sopra, usando solo l'URL HTTP esterno.

Ad esempio, ecco la [tabella delle conversioni da imperiale a metrico](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) dall'[SRD di Classic Fantasy Imperative](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Elenchi di Magie e Poteri

Inizia una sezione 'pulita' con un'intestazione h2 per gli elenchi di incantesimi, poteri, ecc.; quindi h3 per ogni elemento dell'elenco.

Incantesimi e poteri sono solitamente presentati in un unico elenco piatto per tipo di magia (Magia Popolare, Teismo, ecc.) ma se l'elenco richiede le proprie sottosezioni, come specializzazioni di scuole o culti, aumenta il livello dell'intestazione in modo appropriato. Ad esempio, h2 per Elenco Miracoli del Teismo, h3 per Culto: Mithras, e h4 per ogni miracolo del culto di Mithras.

Particolarmente nel caso degli incantesimi, ma in qualsiasi descrizione che utilizzi attributi parola chiave, elencali in corsivo.

Il testo descrittivo e le regole speciali usano il testo normale.

### Formattazione dell'Elenco degli Incantesimi

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Esempio: elenco incantesimi formattato (citato in blocco) </summary>

---
> ## Descrizioni degli incantesimi
>
> ### Allontanare
> _Istantaneo, A Distanza_
>
> Allontanare viene usato per dissolvere un altro incantesimo nel raggio d'azione. Allontanare può essere lanciato reattivamente per neutralizzare gli incantesimi offensivi, usando l'Azione Reattiva Contromagia.

</details>

---
## Blocchi statistiche veicoli
Inizia una sezione 'pulita' con un'intestazione h2 per gli elenchi, quindi aumenta il livello h come al solito per categorie ed elementi dell'elenco.

Ogni esempio elencato presenta le statistiche e le descrizioni come un elenco puntato con titoli dei punti in grassetto.

### Formattazione del Blocco Statistiche Veicolo

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Esempio: blocco statistiche veicolo formattato (citato in blocco) </summary>

---
> ## Esempi di Veicoli
>
> ### Veicoli Terrestri
>
> #### Intercettore
>
> - **Scafo:** 6 (Militare Medio), 40 Struttura
>
> - **Velocità:** Veloce
>
> - **Sistemi:** 3
>
> - **Tratti:** Sedile Ejector, Prestazioni Migliorate, Maneggevolezza Superiore, Suite di Sorveglianza, Resistente, Armato
>
> - **Armi:** Dispenser di olio, dispenser di fumo, mitragliatrici medie binate
>
> - **Descrizione:** Un'auto di lusso potenziata, un'auto sportiva o simile, questa vettura è costruita per andare veloce e per difendersi bene in battaglia. Questo è il tipo di veicolo a cui le persone pensano quando qualcuno dice "auto spia".

</details>

---
## Blocchi statistiche creature
Inizia una sezione 'pulita' con un'intestazione h2 per gli elenchi. I blocchi statistiche delle creature utilizzano tabelle e sono più complessi in termini di formattazione e requisiti di spazio. Per chiarezza, evita le sottosezioni e aggiungi dei divisori tra gli elementi dell'elenco.

Ogni esempio elencato dovrebbe avere quanto segue...

- **Titolo della Creatura:** Un divisore seguito da un'intestazione h3 per il nome della creatura.

- **Voce MEG:** Un link esterno alla creatura specificata sul [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Dettagli Fondamentali:** Nome/tipo della creatura, attributi, abilità e qualsiasi descrizione speciale o nota del personaggio richiesta.

- **Dettagli Armi:** Descrizioni abbreviate con colonne per il nome dell'arma e i seguenti attributi: Dimensione (include Forza qui), Portata (include Raggio qui), Danno, AP/HP e eventuali regole speciali.

- **Localizzazioni dei Colpi e Armatura:** Le tabelle delle localizzazioni varieranno in base alla diversa anatomia delle creature, ma dovrebbero essere incluse anche per gli umanoidi tradizionali come mezzo per tracciare armatura e danni.

### Formattazione del Blocco Statistiche Creature

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

<summary>Esempio: tabelle blocco statistiche creature formattate (citato in blocco) </summary>

> ---
> ### Goblin/Orco
> [Voce MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Nome Creatura | Goblin/Orco |
> | :-- | :-- |
> | Attributi Chiave | FOR 11, COS 14, TAG 11, DES 11, INT 11, POT 11, CAR 7 |
> | Punti Azione | 2 |
> | Modificatore Danno | - |
> | Iniziativa | +11 |
> | Movimento | 6m |
> | Abilità | Visione Notturna |
> | Competenze | Atletica 52%, Forza 42%, Inganno 57%, Resistenza 48%, Schivare 62%, Percezione 61%, Corpo a Corpo 52%, Volontà 42% |
> | Stile di Combattimento | Guerriero (Spada Corta, Scudo, Lancia, Fionda) 62% |
>
> #### Dettagli Armi
>
> | Arma | Dim. | Portata | Danno | AP/PF | Speciale |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Spada Corta | M | M | 1d6 | 6/8 | |
> | Lancia | M | L | 1d8+1 | 4/5 | |
> | Fionda | L | 10/150/300 | 1d8 | 1/2 | |
> | Scudo | L | C | 1d4 | 4/9 | Protegge 3 localizzazioni per Blocco Passivo/Protezione |
>
> #### Localizzazioni dei Colpi e Armatura
>
> | **1d20** | **Localizzazione** | **AP/PF** |
> | :-: | :-- | :-: |
> | 1-3 | Gamba Destra | 1/5 |
> | 4-6 | Gamba Sinistra | 1/5 |
> | 7-9 | Addome | 1/6 |
> | 10-12 | Torace | 1/7 |
> | 13-15 | Braccio Destro | 1/4 |
> | 16-18 | Braccio Sinistro | 1/4 |
> | 19-20 | Testa | 1/5 |

</details>

---
## Errata della Comunità

### Errori di battitura e confusione

Le modifiche per 'ripulire' il testo degli autori dovrebbero essere ridotte al minimo, ma gli errori di battitura e altri sbagli dovrebbero essere semplicemente corretti in linea senza alcuna segnalazione.

### Pannelli di informazioni sull'Errata

Quando una data regola è troppo ambigua, incompleta o semplicemente sbagliata, aggiungi una nota di Errata della Comunità espandibile.

Spiega il problema in corsivo usando solo il grassetto corsivo per il titolo del problema - _nessuna intestazione h(x)!_ - per non creare voci confuse nella barra laterale.

Se viene aggiunto del testo sostitutivo, posizionalo tra virgolette in grassetto corsivo, preceduto da "_Errata della Comunità:_" in corsivo normale.

Regole aggiuntive, se richieste, dovrebbero essere presentate in testo normale.

#### Modello di formattazione dell'Errata

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Esempi di Errata

<details>

<summary>* Errata della Comunità</summary>

_**Scalare**_

_Errata della Comunità:_
_**"L'armatura indossata ostacola gli scalatori di un importo pari alla media dei Punti Armatura indossati. Trova questo valore sommando i punti armatura indossati di ogni localizzazione e dividendo quella cifra per il numero di localizzazioni."**_

_La regola così come scritta causa rapidamente problemi. Indossare un singolo pezzo di armatura da 6PA ridurrebbe un umano a Movimento 0, il che significa che un umano che indossa un elmetto d'acciaio e nient'altro sarebbe troppo sovraccarico per arrampicarsi. Questo sembra irragionevolmente restrittivo, da cui la versione modificata suggerita sopra. Questa verrà aggiornata qualora gli autori originali rivedano la regola così come scritta._

</details>

<details>

<summary>* Errata della Comunità</summary>

_**Andature: Camminare, Correre, Scattare**_

_La versione pubblicata di _Mythras Imperative_ non ha regole esplicite per muoversi a diverse Andature, sebbene siano coperte nel manuale base di Mythras. I moltiplicatori di Andatura sopra sono stati aggiunti come parte dell'Errata della Comunità._

_Se necessario, dovrebbe essere sufficiente trattare le Andature come segue:_

- _Le Andature più veloci di Camminare applicano un moltiplicatore al valore di Movimento: 3x per Correre, 5x per Scattare._

- _Mentre si è a un'Andatura di Corsa o Scatto, i personaggi non possono tentare la maggior parte delle azioni proattive come attaccare o lanciare incantesimi. Alcune eccezioni includono..._
  - _Attacchi quando si usano le regole di Carica._
  - _Sparo di armi a distanza con il tratto Schermaglia._
- _Come regola generale, qualsiasi azione consentita dovrebbe essere trattata come un Grado più difficile da eseguire in Corsa, e due Gradi più difficile in Scatto._

</details>

---
## Avvisi Vari

### Righe vuote / Ritorno a capo

Lascia una riga vuota tra diversi tipi di voci. Intestazioni, divisori, tabelle, ecc. Queste non saranno visibili in modalità lettura, ma la loro assenza può causare problemi di formattazione.

### Testo su più paragrafi in grassetto o corsivo

Ogni paragrafo deve essere contrassegnato come testo in grassetto o corsivo. La nuova riga tra i paragrafi interromperà la formattazione lasciando segni di formattazione orfani.

### Ortografia internazionale

I poteri regressivi e deplorevoli hanno ritenuto opportuno rimuovere tutte le grafie britanniche a favore delle versioni statunitensi oggettivamente più deboli. Fai attenzione alle parole britanniche con -OUR: _armour_ (armatura), _favour_ (favore), ecc.