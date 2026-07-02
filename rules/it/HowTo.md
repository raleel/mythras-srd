# Prerequisiti

1. Una comprensione di base del [linguaggio Markdown](https://www.markdownguide.org/basic-syntax/).

2. Dovrai creare un account [GitHub](https://github.com/) gratuito se non ne hai uno. Si consiglia di usare il nome del tuo gioco di ruolo, poiché questo diventerà parte dell'URL che le persone useranno per accedere al tuo SRD.

3. Puoi fare l'intero processo tramite browser senza conoscere Git. Tuttavia, imparare a usare GitHub Desktop ti permetterà di testare le modifiche localmente prima di pubblicarle per il mondo intero.

> Se hai un nome di dominio registrato, puoi usarlo con questo processo per creare un SRD come ho fatto io https://srd.7thextinctionrpg.com

# Il Processo

## Creare il Repository su GitHub

1. Accedi a GitHub

2. Naviga al template pubblico https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Clicca su "Use this template"

![Step3](/_media/Step3.png)

4. Seleziona "Create a new repository"

5. Inserisci un nome per il repository

![Step5](/_media/Step5.png)

6. Seleziona 'Private'

7. Seleziona 'Create repository'

Ci vorranno 5-30 secondi per copiare il template, dopodiché avrai la tua copia.

8. Assicurati di avere il file ".nojekyll"; questo è un file vuoto necessario quando si ospita un sito web su GitHub, altrimenti l'SRD non verrà visualizzato correttamente. *(Dice a GitHub Pages di non elaborare i file pubblicati tramite Jekyll).*


## Aggiungere i tuoi Contenuti

### File *.md

I file .md sono file Markdown, un linguaggio di markup leggero che puoi usare per aggiungere elementi di formattazione a documenti di testo semplice. A seconda della dimensione del tuo contenuto, puoi inserire tutte le informazioni del tuo gioco in un singolo file *.md, oppure, come ho fatto io su [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), creare file separati per ogni capitolo. Il file "sample.md" fornisce alcuni esempi di formattazione.

Il linguaggio Markdown è molto facile da imparare, usa il link fornito al punto 2 sotto Prerequisiti qui sopra per una lista completa della sintassi.

### _Sidebar.md

Questo è il tuo menu, il pannello di navigazione sul lato sinistro del sito web. Una volta aggiunto un file Markdown al tuo repository, devi aggiungerlo qui in modo che i suoi contenuti siano inclusi. Segui la formattazione esistente.


## Abilitare GitHub Pages per trasformare il Repository in un Sito Web

1. Nel tuo repository clicca su 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Seleziona 'Pages' nel menu laterale sinistro

![Website-Step2](/_media/Website-Step2.png)

3. Se non hai reso il repository 'public', hai due scelte
    a. Rendi il repository pubblico, il che ti permetterà di usare GitHub Pages per ospitare gratuitamente il tuo sito web SRD
    b. Aggiorna il tuo account GitHub (al momento della stesura di questo documento costa $4 al mese o una tariffa annuale di $48)

4. Sotto 'Branch' seleziona 'main' e clicca su salva

5. Attendi 10-20 secondi e poi aggiorna la pagina

6. Ora vedrai il tuo URL, come ad esempio https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Cambiare i Font

1. Modifica il file /_assets/style.css

2. Sotto la 'sezione body' troverai siteFont & headingFont

3. Cambiali con i font che desideri usare


## Usare il plugin Fontawesome e/o Material Icons per visualizzare icone gratuite nel tuo SRD

### Fontawesome

Usa Fontawesome per ottenere icone gratuite e animate. Gli utenti abbonati possono usare le icone Pro.

1. Trova l'icona su [Fontawesome](https://fontawesome.com/icons)
2. Seleziona l'icona
3. Nella finestra popup, sotto la scheda HTML, copia tutto ciò che è tra " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Incolla il testo copiato tra `:` senza spazi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Usa Material Icons per altre icone gratuite.

1. Trova le icone su [Material Icons](https://fonts.google.com/icons)
2. Copia e inserisci il link dello span web direttamente nei tuoi file Markdown

```markup
<span class="material-icons">face</span>
```