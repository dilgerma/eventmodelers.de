---
title: 'Software ist schwer zu schätzen. Aber einfach zu planen.'
date: '2023-12-24'
showContact: true
description: "Die genaue und verlässliche Schätzung von Software war immer schon ein großes Problem. Wir können von anderen Branchen lernen und die Methoden auf unsere Werkzeuge anwenden. Dieser Artikel gibt ein konkretes Beispiel."
finalText: Willst du wissen, wie die Planung bei dir aussehen könnte? Lass uns gerne darüber sprechen. Wir entwickeln deine Software nach genau diesem Modell und helfen dir bei der Planung und Umsetzung. Buch jetzt einfach einen kostenlosen Call und lass uns darüber sprechen, wie das Modell bei dir aussehen könnte.Auch deine Software kann funktionieren wie eine gut laufende Schreinerei
---

![image](/assets/blog/erste-schritte/stream2.jpg)

## Das Problem

>  _Ich verwende nicht das Wort Schätzung, weil wir keine Schätzung abgeben._

Houston - wir haben ein Problem. _Keiner weiß, wann unsere Software fertig ist._

Softwareprojekte sind teuer und kompliziert. So der allgemeine Tenor.
Und meistens stimmt das.

Software ist nicht statisch, sondern entwickelt sich genau wie dein Geschäftsmodell weiter.

Jede Änderung tut weh. Es müssen Anforderungen erfasst und dokumentiert werden.

Es finden Meetings statt, Diskussionen mit dem Fachbereich.

"Was sollen wir überhaupt implementieren?" kommt aus der Entwicklung.

"Das was schon da ist in besser" kommt vom Fachbereich. Für die meisten Probleme in den Unternehmensprozessen
haben sich längst Workarounds etabliert.

Änderungen am Bestandssystem sind immer teuer und aufwendig.

Viel zu viele Seiteneffekte, jeder Handgriff erfordert technisches und fachliches Know-How.
Änderungen müssen durch den kompletten QA Prozess und selbst dann ist jedes Release mit Daumendrücken verbunden.

Alles fühlt sich langsam und schwerfällig an.
Und egal, wieviele Refactorings, Code Cleanups, Technical Debt Sprints gemacht werden. Die Software wird immer teurer in der Wartung.

Etwas scheint nicht zu funktionieren an diesem Prozess.

## Die Ursache

Software basiert auf Businessanforderungen und erstellt ein möglichst präzises Modell, um diese Anforderungen abzubilden.

> It's developer's understanding, not your knowledge that becomes software
> (Alberto Brandolini)

Das Problem ist - das Modell ist niemals vollständig und bildet niemals alle Businessregeln korrekt ab. Hinzu kommt, dass sich das Business ständig weiterentwickelt.

Neue Regeln, neue Produkte, neue Prozesse, neue Ideen.

Ein Geschäftsmodell kann sich auf so viele Arten ändern.

Jetzt haben wir also ein sowieso schon unvollständiges Modell und müssen dieses noch um neue Businessregeln erweitern, die so nie vorgesehen waren. Das Ergebnis?

Workarounds und somit per Definition _Technical Debt_

Der Begriff _Technical Debt_ wird gerne verwendet, um eine verschobene Business / Technik Kurve zu erklären.
Tatsächlich durchläuft jedes Softwareprojekt diesen Zyklus.
Die Kurve zeigt die Produktivität eines Softwareteams. Je länger die Software existiert, desto unwartbarer und teurer wird die Wartung.

![image](/assets/blog/warum-ist-software-so-teuer/image.png)

Warum passiert das immer und immer wieder?

Je weniger Features in der Software sind, desto weniger Features müssen für die Implementierung von neuen Features angepasst werden. Features laufen durch die Entwicklung wie ein Fließband.

![image](/assets/blog/warum-ist-software-so-teuer/feature1.png)

Je mehr Features umgesetzt sind, desto mehr Anpassungen müssen an bestehendem Code vorgenommen werden, um neue Features umzusetzen.

![image](/assets/blog/warum-ist-software-so-teuer/feature2.png)

Der Erfolg eines Softwareprojektes ist der Grund für seinen schlußendlichen Untergang.

Nur erfolgreiche Software wird regelmäßig erweitert. Mit jeder Änderung an bestehenden Features weichen wir aber
weiter vom Modell ab, dass die ursprünglichen Businessrequirements abbildet. Per Definition bauen wir damit Technical Debt (oder besser _Product Debt_) auf.
Die Software wird immer unwartbarer.

![image](/assets/blog/warum-ist-software-so-teuer/feature3.png)

Wie kommen wir aus diesem Dilemma heraus?

Dies ist das fundamentale Problem in der Softwareentwicklung.
Und wir arbeiten mit aller Kraft dagegen an.

Gibt es überhaupt einen Ausweg?
Gehen wir einen Schritt zurück. Was macht andere Branchen so erfolgreich?

## Der Preis

Nehmen wir einen Schreiner (das Beispiel funktioniert für jede Branche.)
Was macht einen Schreiner erfolgreich?

Ein Schreiner kann relativ genau sagen, was ein bestimmtes Möbelstück kosten wird. Der Schreiner hat diese Art Möbelstück in seinen 20 Jahren als Schreiner hunderte Male hergestellt.
Jeder Handgriff sitzt, da sich die Handgriffe immer und immer wiederholen.

Die Handgriffe sind mittlerweile perfektioniert.

Der Preis des Möbelstücks ergibt sich durch diese einfache Formel:

> Price = (Time*Rate + Material)*Factor

Der Preis ergibt sich durch den eingesetzten Zeitaufwand und den Stundensatz + das Material. Am Ende multipliziert der Schreiner das mit einem Faktor und erhält so seinen Preis.

Braucht der Schreiner also 10h und arbeitet für 75€ die Stunde ergibt sich ein Zeitaufwand von 750 €.
Materialkosten von 300 € und einem Faktor von 1.3 ergibt einen Gesamtpreis von 1365 € für das Möbelstück.

Warum funktioniert das für Softwareprojekte nicht?

Die einzelnen Arbeitsschritte sind sehr individuell (auf den ersten Blick). Aus den Businessanforderungen an das System lassen sich meist grobe Anforderungen an die Software ableiten, allerdings nie genau genug um daraus einen Preis zu ermitteln.
Aus diesem Grund arbeiten viele Projekte mit T-Shirt Größen und abstrakten Storypoints. Genauer gehts halt nicht.. oder doch?

![image](/assets/blog/warum-ist-software-so-teuer/shirts.png)

Einen Preis oder auch nur den Aufwand aus einer groben Schätzung abzuleiten macht wenig Sinn.
Natürlich lässt sich aus der Velocity eines Teams grob berechnen, wie schnell ein "XL" umgesetzt werden kann. Aufgrund der Produktivitätskurve wird diese Schätzung allerdings immer schwerer zu treffen.

Der Schreiner benötigt immer ungefähr gleich lang für ein Möbelstück. Je mehr Möbelstücke hergestellt sind, desto genauer wird diese Schätzung bis sie irgendwann nahezu perfekt passt.

Diese Genauigkeit ist mit dem aktuellen Vorgehen für Softwareentwicklungsprojekte nicht zu erreichen. Die Dynamik ist einfach zu groß.

In einer idealen Welt würden wir statt der zuvor vorgestellten Produktivitätskurve eine lineare Produktivitätslinie sehen.

![image](/assets/blog/warum-ist-software-so-teuer/feature4.png)


## Agile Entwicklung löst das nicht

Unsere Industrie hat schon auf viele Weisen versucht genau dieses Problem zu lösen.

Agile Entwicklung mit Scrum und Kanban war die letzte große Revolution (KI ist wohl die nächste.)

Aber auch hier wurde dieses Problem nicht gelöst.

Wir entwickeln auch mit Scrum immer noch diesselben Modelle, die am selben fundamentalen Problem scheitern.
Mit agiler Arbeit wissen wir nur schneller, dass es nicht funktioniert und wir können ggf. Anpassungen vornehmen.
Wir zögern das unvermeidliche hinaus (ich formuliere absichtlich etwas überspitzt.)

Ist es vielleicht gar nicht lösbar?

In den meisten Projekten, die ich bisher begleiten durfte ist agile Arbeit mehr schmückendes Beiwerk als treibende Kraft.
Agile Arbeit ist gut und schön, solange wir am Ende alles liefern. Das ist per Definition höchstwahrscheinlich nicht der Fall. Mit agiler Arbeit garantieren wir nur, dass wir am Ende das Wichtigste liefern, nicht unbedingt alles davon.

Das agile Festpreisprojekt ist nach wie vor die große Ausnahme statt die Regel.
Es ist einfach schwer umzusetzen und mit enormem (finanziellen) Risiko verbunden.

## Domain Driven Design löst das nicht (komplett)

Die Bemühungen um Domain Driven Design und die Definition von **Bounded Contexten**, **Aggregates** und der **Ubiquitous Language** versucht im Prinzip die Größe dieser _falschen_ Modell zu beschränken und so die Auswirkungen auf das Gesamtsystem so minimal wie möglich zu halten.

Und dieser Ansatz ist grundsätzlich richtig.

Und die Modelle werden besser dadurch. Domain Driven Design richtig angewendet macht ein System besser, das steht fest. Aber durch die konsequente Anwendung von Domain Driven Design allein lösen wir nicht das fundamentale Problem der Softwareentwicklung.

Auch in einem _kleineren_ Context werden Modelle über die Zeit durch neue fachliche Anforderungen veralten. Auch in einem _kleineren_ Context müssen wir bestehende Features durch die Implementierung neuer Features _anpassen_ und bauen dadurch immer weiter technische Schulden auf.

Das Problem ist noch da, es ist nur besser beherrschbar.

## Was können wir besser machen?

Die Zukunft der Softwareentwicklung sieht meiner Meinung nach so aus:

![image](/assets/blog/warum-ist-software-so-teuer/zukunft.png)

Die meiste Zeit verwenden wir für die klare Modellierung der Software.
Und zwar mit einer definierten Sprache für alle Beteiligten.

Das Werkzeug hierfür ist [Eventmodeling](https://nebulit.de/blog/software-dokumentieren-mit-eventmodelling).

Das Eventmodell ist gleichzeitig komplette Dokumentation, Anforderungsdokument und Implementierungsanleitung.
Hier finden sich chronologisch alle Aktionen die unser Business ausführt um Profite zu erwirtschaften.

Und zwar eben nicht in Textform.  Wenn die letzten Jahre eines bewiesen haben, dann dass reiner Text ungeeignet ist.

### Wer erstellt das Diagramm?

Initial alle gemeinsam in einem ersten Workshop. Und das schließt CTO und / oder CEO mit ein (zumindest in Teilen.)

<figure>
<img src="/assets/blog/warum-ist-software-so-teuer/group.png"/>
  <figcaption>Das Diagramm wird von allen erstellt in 1-2 Tagen.</figcaption>
</figure>

Entwicklung, Business, Fachseite, Marketing, Redaktion. Wir brauchen alle.

Die Anforderungen an ein Softwareprojekt lassen sich in 1-2 Tagen in einem _Eventmodeling_-Workshop ermitteln.
Je nach Größe kann auch ein Nachmittag reichen, um die ersten Anforderungen in einem Detailgrad zu ermitteln, dass direkt mit der Implementierung begonnen werden kann.

> Diese Methode eignet sich auch hervorragend, um die Anforderungen an ein bestehendes System zu dokumentieren und zu validieren.  Fehler in der Modellierung werden so schnell sichtbar.

## Was steckt dahinter?

 **Jede** Software basiert auf diesem Modell.

 ![image](/assets/blog/warum-ist-software-so-teuer/wave.png)

So funktioniert die Welt und so funktioniert jedes Business.

Jede Software geht durch eine **Aktion** von einem **alten Zustand** in einen **neuen Zustand** über. Immer wieder.
 ![image](/assets/blog/warum-ist-software-so-teuer/eventmodelling.png)


 _Eventmodeling_ formalisiert dieses Format, und definiert eine einfache Sprache um dieses Modell auf ein Softwaresystem abzubilden.

Die Bausteine sind _Commands_ (blau), _Events_ (orange) und _Daten (Read Modelle)_ (grün).

<figure>
<img style="width:350px" src="/assets/blog/warum-ist-software-so-teuer/baustein.png"/>
  <figcaption>Eventmodeling Bausteine</figcaption>
</figure>

### Commands

Commands sind Aktionen, die eine Änderung im System verursachen. Jede Methode einer API kann im Prinzip als _Command_ betrachtet werden.

### Events

Events (Businessevents) sind _immer_ das Resultat eines _Commands_ und sind Fakten, die im System passiert sind. Wir formulieren _Events_ in der Vergangenheitsform, denn sie sind "passiert". Geschichte. Unveränderbar und in der Vergangenheit.

### Read Model

Read Model sind dynamische Modelle die sich aus Events generieren lassen. Im Gegensatz zum weiter oben beschriebenen Modell ist ein Read Model aber leichtgewichtig. Refactorings an Read Modellen sind selten nötig. Meistens macht ein Neuschreiben in wenigen Stunden mehr Sinn.

## Diese 3 Techniken bilden das Fundament unserer Entwicklung

Neben _Eventmodeling_ bilden die beiden etablierten Industrie-Praktiken _CQRS_ und _Eventsourcing_ die Hauptwerkzeuge unseres Werkzeugkasten.

Es gibt kein persistentes Modell. Die einzige _Visualisierung_ geschieht über das Event Model.

## Wie sieht so ein Diagramm jetzt aus?

<figure>
<img src="/assets/blog/warum-ist-software-so-teuer/modell.png"/>
  <figcaption>Ein Eventmodell für einen Onlineshop</figcaption>
</figure>

Das Event Model ist die Story unseres Systems. Und es lässt sich von links nach rechts lesen wie ein Buch. Das Modell dient als _Dokumentation_, _Anforderungsdokument_ und _Onboarding Beschleuniger_.
Stell dir vor du kommst in ein neues Projekt und bekommst das Diagramm, mit dem du dich einfach durch das System lesen kannst.

So viel besser als eine Confluence Seite.

Ist das Modell einmal definiert ist die Implementierung nur noch das abbilden des Modells in den Code.

### Was hat das jetzt mit dem Schreiner zu tun

Hier kommen wir zurück zur ursprünglichen Metapher des Schreiners. Der Schreiner kann relativ genau seinen Preis festlegen, weil er die einzelnen Arbeitsschritte hunderte Male ausgeführt hat.
Das Eventmodell zerlegt unsere Software ganz natürlich in die kleinst möglichen sinnvollen Arbeitspakete des zuvor definierten Modells. **Die Software wird in Slices zerlegt**.

<figure>
<img src="/assets/blog/warum-ist-software-so-teuer/slices.png"/>
  <figcaption>Software Slices</figcaption>
</figure>

Jeder Slice definiert einen Arbeitsschritt. Und jeder dieser Slices ist durchschnittlich ungefähr gleich groß.
Wenn wir jetzt genügend viele Slices implementiert haben, gibt uns das ein ziemlich genaues Bild darüber, wie lange wir für jeden Arbeitsschritt brauchen. _Wir werden zum Schreiner_. Zumindest was die Genauigkeit der Planung betrifft. _Ich verwende nicht das Wort Schätzung, weil wir keine Schätzung abgeben._

Und wir benötigen hierfür keine abstrakten Schätzgrößen.

Wir arbeiten auf einer klaren Basis, aber im Unterschied zur agilen Schätzung mit tatsächlich vergleichbaren Größen - den Slices.
Wir benötigen auch keine abstrakten Referenzstories. Slices sind das perfekte Werkzeug um die Planung einer Software mit erstaunlicher Präzision vorzunehmen.

Die Software ist 30% fertig, wenn ca. 30 / 100 Slices erledigt sind. Kein Bauchgefühl. Klare Zahlen und Fakten.

Glaubst du, das würde auch in deinem Projekt funktionieren?
Ich bin davon überzeugt, ich habe noch kein Projekt gefunden, in dem das nicht funktioniert.
