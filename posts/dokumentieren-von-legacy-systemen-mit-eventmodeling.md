---
title: 'eventmodelling'
date: '2023-10'
showContact: true
---
![image](/assets/blog/legacy/banner.png)

Eine einfache Beschreibung wie Eventmodeling zur Dokumentation von Softwaresytemen findest du [hier](/blog/software-dokumentieren-mit-eventmodelling)


Eventmodeling eignet sich hervorragend zur Dokumentation von Eventsourcing basierten Systemen.
Aber lassen sich auch Bestandssysteme damit dokumentieren?

Zunächst klären wir einmal eine der wichtigsten Fragen

## Lohnt sich der Aufwand?

Ein Bestandssytem von Grund neu dokumentieren? Der Aufwand rechnet sich doch nicht, oder?

Die Antwort ist diesselbe wie immer.. _hängt davon ab_

Wie lange planst du das System noch länger als 12 Monate zu warten und weiterzuentwickeln?

Dauert das Onboarding neuer Mitarbeiter viel länger als es sollte?

Ist auf absehbare Zeit geplant, dass Teile des Systems neu entwickelt werden und ggf. sogar als eigene Services aus dem Bestandssystem herausgelöst werden?

Ist die Antwort auf nur einer dieser Fragen "Ja" ist die Wahrscheinlichkeit groß, dass sich der initiale Aufwand für eine Dokumentation des Systems schnell rechnet.

## Was sind die Vorteile

#### Information Completeness

Das ist der wichtigste Grund, wieso ich für jedes System eine (nach)dokumentation mit Eventmodeling ins Auge fassen würde.
Eventmodeling erlaubt es auf einfache Art und Weise in jedem Schritt zu prüfen, welche Daten verwendet werden, woher die Daten kommen und wie die Daten weitergereicht werden.

> Die eine Sache die du richtig machen musst ist absolute Klarheit über die Datenflüsse in deinem System

#### Dokumentation von Abhängigkeiten

Du siehst auf einen Blick, woher die Daten kommen, mit denen du arbeitest und auch an welchen Stellen die Kapselung
nicht stimmt, weil du vielleicht auf Tabellen zugreifst, die anderen Systemen gehören.

#### Einfaches Onboarding

Wie immer mit Eventmodeling gilt - auch für Bestandssyteme dokumentieren wir die Funktionalität lesbar wie eine Geschichte, wie ein Buch von Anfang bis Ende.

## Wie dokumentierst du Legacy Applikationen?

Das grundsätzliche Vorgehen hat Adam Dymitruk bereits in (3) beschrieben. Das Ziel der Beschreibung ist es, die Datenflüsse so zu dokumentieren, dass sie verständlich aufbereitet sind.

Wie Adam es so schön beschreibt:
> Wir dokumentieren das was bleibt, wenn wir den Stecker im System ziehen.

Die Dokumentation kann in eine Handvoll Pattern aufgeteilt werden.

Zur Auffrischung noch einmal die bekannten Pattern aus _Eventmodeling_

<figure>
<img style="width:80%" src="/assets/blog/legacy/modeling-patterns.png"/>
  <figcaption>Kinokarten kaufen</figcaption>
</figure>


Da alle Systeme mit diesen Patterns beschrieben werden können funktioniert das auch für Bestandssyteme.

Statt aber die Events als Persistenzmedium zu verwenden arbeiten die meisten Bestandssyteme mit einer (relationalen) Datenbank oder einem verteilten Messagebroker wie _Apache Kafka_

Einfaches Beispiel - Ein Softwaresystem für den Betrieb eines Kinos.

Erster Use Case - die Software sollte es erlauben, Kinokarten zu kaufen.

<figure>
<img style="width:40%" src="/assets/blog/legacy/cinema01.png"/>
  <figcaption>Kinokarten kaufen</figcaption>
</figure>

Wichtig ist hier, dass wir neben den Pattern dokumentieren, wie die Datem im System gespeichert werden.
Wir könnten uns also eine "Reservations"-Tabelle denken.

<figure>
<img style="width:40%" src="/assets/blog/legacy/cinema02.png"/>
  <figcaption>Kinokarten kaufen mit Tabellen</figcaption>
</figure>

Allein aus diesem Diagramm bekommen wir schon wertvolle Informationen.
Wir speichern scheinbar für jeden Sitz eines Kinosaals eine eigene Reservierung inkl. Datum der
Reservierung und einem Flag ob bezahlt oder nicht.

Nehmen wir an das externe Zahlungsssystem bestätigt die Kartenzahlung.
Danach wird das Flag in der Datenbank auf "1" gesetzt. Die Reservierung wird zum Kauf.
Allerdings wurde nur eine Zahlung bestätigt.

<figure>
<img style="width:80%" src="/assets/blog/legacy/cinema03.png"/>
  <figcaption>Bezahlprozess</figcaption>
</figure>

Zusätzlich haben wir einen Hintergrundprozess, der periodisch die Reservierungen auf ihr Verfallsdatum prüft.
Reservierungen gelten für 30 Minuten.
Wir sehen hier auch, dass die Reservierungen bei Verfall direkt gelöscht werden.
Keine Chance also, die Karten noch zu bekommen nach Verfall.

<figure>
<img style="width:80%" src="/assets/blog/legacy/cinema04.png"/>
  <figcaption>Reservierungsprozess</figcaption>
</figure>

Diese Regeln lassen sich über Policies im Eventmodell abbilden um klar zu machen, welche Regeln gelten.
Für jede dieser Policies **muss** es einen Unit Test geben. Hier lebt die Businesslogik.


<figure>
<img style="width:40%" src="/assets/blog/legacy/cinema05.png"/>
  <figcaption>Policies</figcaption>
</figure>

Neben dem Kaufprozess gibt es aber scheinbar weitere Systeme, die auf die _Reservations_-Tabelle zugreifen, beispielsweise das _Reporting_.

Für das Reporting wird aus der Gesamtkapazität eines Kinosaals (_Rooms_-Table) und den bezahlten Reservierungen (_Reservations_-Table) die Performance pro Vorstellung berechnet.

<figure>
<img style="width:60%" src="/assets/blog/legacy/cinema06.png"/>
  <figcaption>Reporting</figcaption>
</figure>

## Fazit

Auch für Bestandssysteme lässt sich mit überschaubarem Aufwand ein Eventmodell erstellen.
Dabei spielt es keine Rolle, wie das System technisch aufgebaut ist.
Das Eventmodell ist erstmal Technologieneutral.

Das Modell erlaubt es aber, _einfach_ über das System nachzudenken.

Wir sehen, wie die Daten durch das System fließen.

Und wir haben bereits die Landkarte um Verbesserungen vorzunehmen.
Statt beispielsweise für das Reporting die bezahlten Reservierungen zu aggregieren könnte es sinnvoll sein, nachdem eine Vorstellung beendet ist ein "MovieScreeningReportGenerated" Event bereitzustellen, dass die notwendigen Informationen bereits vorberechnet. (Und das darf natürlich vorerst auch gern in einer eigenen _Reporting_-Table gespeichert sein.)

<div className="headline-divider"></div>

Ich kann dir helfen, deine Bestandssyteme zu dokumentieren und wichtige technische Entscheidungen vorzubereiten.

Der erste Schritt ist ein einfacher Eventmodeling Workshop.

Buch jetzt einen kostenlosen 15 Minuten Call und ich zeige dir, welche Möglichkeiten wir haben.
Ich freue mich dich kennenzulernen.


<p className="top-margin has-text-centered">
                                                            <a target="_blank"
                                                               href="https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2"
                                                               className="button is-success">
                                                                <i className="fa-solid fa-phone padding"></i>
                                                                <span className="bigger">Jetzt mehr über Eventmodeling  erfahren</span></a>
                                                        </p>

## Links

(1) [Software dokumentieren mit Eventmodeling](/blog/software-dokumentieren-mit-eventmodelling)

(2) [Was ist Eventmodeling?](https://eventmodeling.org/posts/what-is-event-modeling/) von Adam Dymitruk

(3) [Eventmodeling Traditional Systems?](https://eventmodeling.org/posts/event-modeling-traditional-systems/) von Adam Dymitruk
