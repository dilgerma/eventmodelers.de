---
title: 'Software dokumentieren mit Eventmodeling'
date: '2023/10'
showContact: true
---

![image](/assets/blog/eventmodelling/banner.png "foo")

Ich persönlich denke, dass wir mit _Eventmodeling_ eines der wichtigsten Werkzeuge für die Dokumentation und Entwicklung von komplexen Softwaresystemen der letzten Jahre in den Händen halten.

Warum? Weil es so _einfach_ ist und trotzdem funktioniert.

Deswegen fokussiert sich die Firma NebulIT in der Entwicklung auf dieses Modell.

Das Modell wurde definiert von Adam Dymitruk und erstmals in [diesem Blog](https://eventmodeling.org/posts/what-is-event-modeling/) beschrieben.

In diesem Artikel erkläre ich, was Eventmodeling ist und warum der Ansatz meiner Ansicht nach der Richtige ist um wartbare Softwaresysteme beliebiger Größe zu dokumentieren und zu entwickeln.

### Eventmodeling - Bausteine

Eventmodeling ist zunächst eine sehr einfache Art und Weise die Funktionsweise eines Softwaresystems detailliert zu beschreiben und nimmt explizit den Faktor "Zeit" in das Modell mit auf.

Die Grundlage hierfür bildet das einfachste Modell, das jede Software beschreibt.

**Aktion => Businesslogik => Reaktion**

 ![image](/assets/blog/warum-ist-software-so-teuer/wave.png)

Oder anders dargestellt.

 ![image](/assets/blog/warum-ist-software-so-teuer/eventmodelling.png)

Statt zu versuchen, ein Modell zu definieren was unser Geschäftsmodell möglichst genau beschreibt (und trotzdem wie jedes Modell zwangsläufig falsch ist) verzichten wir zunächst komplett auf die Definition eines "Modells" und fokussieren uns auf Aktionen, Businesslogik und Reaktionen.


Die Bausteine sind _Commands_ (blau), _Events_ (orange) und _Read Models_ (grün).

<figure>
<img style="width:350px" src="/assets/blog/warum-ist-software-so-teuer/baustein.png"/>
  <figcaption>Eventmodelling Bausteine</figcaption>
</figure>

### Commands

Commands sind Aktionen, die eine Änderung im System verursachen. Jede Methode einer API kann im Prinzip als _Command_ betrachtet werden.

Änderungen im System können nur durch Commands erfolgen.

### Events

Events (Businessevents) sind _immer_ das Resultat eines _Commands_ und sind Fakten, die im System in der Vergangenheit passiert sind. Wir formulieren _Events_ daher in der Vergangenheitsform.

Beispiele sind:

**"Order Processed"**

**"Customer LoggedIn"**

**"Process Cancelled"**

### Read Models / Projektionen

Read Models sind einfache und dynamische Modelle die sich aus Events generieren.

Mit Read Models stellen wir Daten für beispielsweise eine UI oder Automatisierungen im System bereit.
Jede UI hat ein typischerweise ein eigenes leichtgewichtiges Read Model.

## Ein Beispiel

Alleine mit dieser Technik lassen sich Systeme unglaublich genau beschreiben und zwar so, dass sowohl ein Entwickler als auch die Fachseite genau versteht "was", "wann", "wo" im System geschieht.

Machen wir ein Beispiel?

In einer Ecommerce Applikation wählt der Kunde ein Produkt aus und legt es in den Warenkorb.
Das Command ist also **Add Product to Cart**

 ![image](/assets/blog/eventmodelling/command.png)

Dieses Command wird vom System verarbeitet (Businesslogik prüft ob das Produkt überhaupt existiert, ob wir es verkaufen, ob es verfügbar ist).

**Die eigentliche Implementierung spielt keine Rolle. Ob dies nun Microservices sind, Monolithen, Servelss Workloads.. der Ablauf ist immer derselbe**

Wenn das Command erfolgreich verarbeitet wurde (und nur dann), modellieren wir den "Fakt", dass ein Produkt in den Warenkorb gelegt wurde als Event (wir speichern nichts weiter als diesen Fakt im System)

 ![image](/assets/blog/eventmodelling/event.png)

Die "Reaktion" könnte jetzt wiederum die Darstellung des Carts mit dem neu hinzugefügten Produkt (und den Preisen) sein. Hierfür benötigen wir ein einfaches *Read Model* oder eine *Projektion* für den Warenkorb.

 ![image](/assets/blog/eventmodelling/Readmodel.png)

 Das Read Model "berechnet" sich aus den "Fakten" (Events) im System.

 ![image](/assets/blog/eventmodelling/events2.png)

Anhand von diesem einfachen Beispiel sehen wir, dass zwei Produkte hinzugefügt wurden, aber auch ein Produkt entfernt.
Das **Read Model** hätte also nur ein Produkt für die Darstellung.

Korrekt dargestellt hätten wir diesen Ablauf im Event-Modell.

 ![image](/assets/blog/eventmodelling/eventmodell_time.png)


**Wichtig** - das Eventmodell modelliert die Zeit. Wir können es **immer** von links nach rechts lesen. Pfeile gehen niemals zurück.

Zusätzlich zu Commands, Events und Read Models verwenden wir UI Mockups (handgezeichnet oder aus Figma)

 ![image](/assets/blog/eventmodelling/ui.png)

 Wir ordnen die Events in Swim lanes an und bekommen so eine natürliche Gruppierung (erste Hinweise auf Kontexte im System -  das Bounded Context Konzept aus Domain Driven Design)

  ![image](/assets/blog/eventmodelling/lanes.png)

Durch diese Art der Anordnung entsteht eine natürliche Aufteilung in _Slices_ oder _Funktionsblöcke_ unseres Businesses.

  ![image](/assets/blog/eventmodelling/slice.png)

  Slices bestehen meistens aus Command / Command Handler / Event und ein oder mehreren Read Models.
  Slices sind Arbeitspakete die abgearbeitet werden können.

Businessregeln modellieren wir über einfache **Given-When-Then** Policies im gleichen Modell.

Beispielsweise sehen wir hier die Regel, dass maximal 3 Produkte in den Warenkorb gelegt werden können.

  ![image](/assets/blog/eventmodelling/policies.png)

Das Eventmodell ist der einzige Ort, an dem die komplette Applikation inklusive allen Businessregeln visualisiert ist. Im Prinzip haben wir ein komplettes Ablaufdiagramm inklusive allen Seiteneffekten. Wir können das Diagramm also einfach lesen von links nach rechts.

Damit schaffen wir:

**Immer aktuelle Dokumentation**

**Eine perfekte Dokumentation für schnelle Onboardings**

**Gemeinsames Verständnis wie die Software (und das Business) funktioniert**

**Natürliche Tasks durch Slices (Slices könnten User Stories werden)**

**Dokumentation aller Business Regeln**

  ### Was fehlt?

  In diesem Artikel geht es nicht um die Implementierung des Systems, sondern nur um die Dokumentation der Funktionsweise.

  Für die Umsetzung eines ersten Use Cases reicht das Eventmodell bereits.


  Es fehlen einige Pattern die im Artikel von
 [Artikel von Adam Dymitruk](https://eventmodeling.org/posts/what-is-event-modeling/) bereits relativ detailliert beschrieben sind.

 Die Implementierung eines derartigen Systems funktioniert am einfachsten mit **Eventsourcing**, der Ablauf basiert am einfachsten auf **CQRS** (Command Query Responsibility Segregation).

 Diese Konzepte greifen nahtlos ineinander.

 In einem [eintägigen Workshop](https://nebulit.de/schulungen#eventodelling)  dokumentieren wir ein existierendes System mit allen Teilnehmern.

Wie ein derartiges System umgesetzt werden kann erfährst du im Workshop [Eventbasierte Systeme planen und umsetzen mit Eventmodeling, CQRS und Eventsourcing auf der JVM.](https://nebulit.de/schulungen#eventmodelling-eventsourcing-cqrs)

###



<div className="headline-divider"></div>

So erstellst du IT Dokumentationen die jeder lesen will. Brauchbare Ergebnisse schon nach einem Tag.
Eines hab ich in 15 Jahren in der IT Branche gelernt.
Dokumentation von IT Systemen ist immer schon schwer gewesen und das hat sich in den letzten 15 Jahren nicht geändert.

Ich kann helfen, dein IT System auf moderne Art zu dokumentieren.

- Wir nutzen ein Dokument, nicht hunderte wie Seiten in Confluence.
- Die Dokumentation beschleunigt jedes Onboarding
- Wir dokumentieren VOR der Entwicklung, nicht danach.

Willst du wissen, wie das funktioniert? Buch dir gerne einen [kostenlosen Call](https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2).

Willst du Eventmodeling live erleben kann ich dir [unsere beiden Schulungen](/schulungen#eventmodelling) zum Thema empfehlen.

[Wir entwickeln planbar komplexe Softwaresysteme](https://nebulit.de/angebot)
mit einfachen Methoden und sorgen für Transparenz bei allen Beteiligten.
