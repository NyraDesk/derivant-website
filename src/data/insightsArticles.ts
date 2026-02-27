export interface InsightArticle {
  slug: string;
  title: string;
  date: string;
  dateFormatted: string;
  author: string;
  excerpt: string;
  readingTime: string;
  image?: string;
  content: string;
}

export const insightsArticles: InsightArticle[] = [
  {
    slug: 'smetti-di-scrivere-prompt-inizia-a-costruire-sistemi',
    title: 'Smetti di scrivere prompt. Inizia a costruire sistemi.',
    date: '2026-02-26',
    dateFormatted: '26 Febbraio 2026',
    author: 'Marco Conte',
    excerpt: 'La maggior parte delle persone usa l\'AI nel modo sbagliato. Non è un problema di prompt — è un problema di sistema.',
    readingTime: '6 min',
    image: '/blog-ai/article-cover.webp',
    content: `La maggior parte delle persone usa l'AI così:

Apre una chat vuota. Scrive una domanda. Ottiene una risposta mediocre. Riscrive la domanda. Ancora mediocre. Aggiunge più dettagli. Leggermente migliore. Cerca "migliori prompt per X". Copia il framework di qualcun altro. Nessun risultato.

Poi conclude: "L'intelligenza artificiale non è ancora così buona."

No. L'intelligenza artificiale è buona. Il problema è come la stai usando.

---

## Il vero problema viene prima del prompt

Prima ancora di scrivere qualcosa nella chat, la maggior parte delle persone salta due passaggi fondamentali.

**Non ha un obiettivo chiaro.** Apre la chat e scrive la prima cosa che gli viene in mente. "Scrivimi un post per LinkedIn." Ok — su cosa? Per chi? Con quale scopo? Se tu non lo sai, l'AI non può saperlo al posto tuo. Il risultato è generico perché la richiesta è generica.

**Non ha un piano.** Vuole "usare l'AI per il marketing" ma non ha deciso cosa fare prima, cosa dopo, cosa misurare. L'AI è uno strumento potente, ma se non sai dove stai andando, ti porta da nessuna parte più velocemente.

**Non dà un ruolo all'AI.** C'è una differenza enorme tra chiedere "scrivimi un'email" e dire "sei il mio copywriter senior, specializzato in email B2B per il settore food. Scrivi come se parlassi a un direttore acquisti." Senza un ruolo, l'AI risponde come un assistente generico. Con un ruolo, risponde come un esperto.

Questi non sono problemi tecnici. Sono problemi di pensiero. E nessun prompt magico li risolve.


---

## I tre problemi tecnici che nessuno ti spiega

Anche quando sai cosa vuoi, che tu usi ChatGPT, Claude, Gemini o Grok, hai sempre gli stessi tre problemi:

**1. Non ricorda chi sei.**
Ogni volta che apri una nuova chat, l'AI parte da zero. Non sa cosa fai, per chi lavori, qual è il tuo tono di voce. Devi rispiegare tutto. Ogni. Singola. Volta.

**2. Non segue le tue istruzioni.**
Gli dici "scrivi in modo professionale ma non formale" e ti risponde come un comunicato stampa. Perché? Perché non ha un riferimento. Non ha i tuoi esempi. Non ha il tuo contesto.

**3. Ha allucinazioni.**
Ti inventa dati, fonti, statistiche. Non perché sia stupida — perché non ha accesso a informazioni verificate sul tuo settore. Lavora a memoria, e la memoria a volte mente.

---

## La soluzione esiste già. Si chiama "Progetto."

I Progetti (su Claude) e le Gem (su Gemini) sono spazi di lavoro dedicati. Li imposti una volta. L'AI li ricorda per sempre.

Dentro un Progetto puoi mettere tre cose:

**Istruzioni personalizzate** che si applicano a ogni conversazione. Non devi più riscrivere "sono un consulente marketing che lavora con PMI italiane" ogni volta. Lo scrivi una volta. L'AI lo sa per sempre.

**File di riferimento** che l'AI consulta ogni volta che risponde. Il tuo listino prezzi. La tua proposta tipo. Il tuo tono di voce con esempi reali. L'AI non inventa più — legge i tuoi documenti.

**Un contesto che cresce nel tempo.** Ogni conversazione dentro il Progetto aggiunge informazioni. Dopo un mese, l'AI ti conosce meglio del tuo stagista.

---

## Come farlo in 5 minuti

### Passo 1: Crea il Progetto

- **Su Claude** (claude.ai): clicca "Projects" nella sidebar → "Create Project"
- **Su Gemini** (gemini.google.com): clicca "Gems" → "Create Gem"
- **Su ChatGPT**: clicca "Explore GPTs" → "Create" (si chiama "Custom GPT" ma il concetto è lo stesso)

![Creazione progetto su Claude, Gemini e ChatGPT](/blog-ai/crea-progetto-claude-gemini-chatgpt.webp)

### Passo 2: Carica 3 file chiave

Non servono 50 documenti. Ne bastano 3:

1. **Chi sei** — una pagina che descrive la tua attività, i tuoi valori, il tuo posizionamento. Non il sito web. Un documento scritto come lo spiegheresti a un collega nuovo.

2. **Cosa offri** — i tuoi servizi o prodotti, con prezzi, benefici, e per chi sono. Concreto. Se un cliente ti chiede "cosa fai?", questa è la risposta.

3. **Come parli** — 3-5 esempi reali di testi che hai scritto e che ti rappresentano. Email, post, presentazioni. L'AI impara il tuo stile da questi.

![Sezione file di un Progetto su Claude](/blog-ai/file-progetto-claude.webp)

### Passo 3: Dai un ruolo e un'istruzione fissa

Nelle istruzioni del Progetto, scrivi due cose:

**Il ruolo:**
> Sei un consulente marketing senior specializzato in [il tuo settore]. Hai 15 anni di esperienza. Parli in modo diretto, concreto, senza fuffa.

**Le regole:**
> Rispondi sempre basandoti sui file caricati. Se non trovi l'informazione nei file, dillo. Non inventare mai dati, prezzi o caratteristiche. Usa il tono di voce degli esempi forniti. Scrivi in italiano.

Questo è il tuo sistema. L'AI sa chi è, cosa può fare e cosa no.

![Campo istruzioni di un Progetto compilato con ruolo e regole](/blog-ai/istruzioni-progetto-ruolo-regole.webp)

---

## Il risultato

L'AI smette di dare risposte generiche. Smette di inventare. Smette di sembrare un chatbot.

Inizia a rispondere come il tuo miglior consulente — uno che ha letto tutti i tuoi documenti, conosce i tuoi clienti, e parla come te.

La differenza non è nel prompt.
La differenza è nel sistema.

![Risposta dell'AI dentro un Progetto — specifica e nel tono giusto](/blog-ai/risposta-ai-progetto.webp)

---

*Ogni settimana condivido come uso l'AI per lavorare meglio. Seguimi per non perderteli.*`
  }
];

export const getInsightBySlug = (slug: string): InsightArticle | undefined => {
  return insightsArticles.find(article => article.slug === slug);
};
