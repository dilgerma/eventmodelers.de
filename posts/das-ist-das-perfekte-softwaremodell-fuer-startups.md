---
title: 'Das ist das perfekte Softwaremodell für Startups'
date: '2023/10'
showContact: true
---

![image](/assets/blog/startups/banner.png)

Softwaresysteme zu entwickeln ist teuer und benötigt Zeit und Budget.
Und das ist ok, solange der Return on Invest dafür stimmt.

Die Software muss mehr einbringen als sie kostet, und dann spielt es auch keine Rolle ob sie intern oder extern entwickelt wird.

Wo ist das Problem?

Business Requirements ändern sich und speziell im Startup Umfeld mit dynmischen Geschäftsmodellen, dynamischen Kunden und alles im Fluß ist das eine der großen Herausforderungen für Softwareprojekte.

> Software ist eine in Code festgehaltene Momemtaufnahme deines Businessmodells.

Wenn sich die Anforderungen an die Software ändern, weil sich der Markt oder dein Businessmodells ändert passt das Modell der Software nicht mehr zum Business.

Das Ergebnis sind Change Requests, Workarounds und damit Technical Debt. Im schlimmsten Fall ein Rewrite der gesamten Software mit massiven Kosten.

## Das Problem

Die Software passt sich nicht dynamisch an das Geschäftsmodell an.

Ein neues Feature das nicht zum ursprünglichen Modell passt verursacht Änderungen in vielen bestehenden Features.

_Rework_ der Software, also Anpassung bereits bestehender Features verursacht einen Großteil der Kosten (nicht die initiale Entwicklung).

Das wird sofort an einem einfachen Beispiel klar.

Unsere Software kennt _User_. _User_ haben **eine** Adresse.
Das war unsere Annahme als dieses Feature implementiert wurde.
Wir speichern User und Adressen in zwei Tabellen die über einen Foreign-Key verknüpft sind.

![image](/assets/blog/startups/user.png "Usermodellierung")

Die meisten Entwickler würden das so abbilden, so funktioniert Software üblicherweise.
Damit haben wir unsere Annahme "ein User hat **eine** Adresse" (unser Modell) implizit in der Software festgehalten.

Jedes weitere Feature baut auf dieser Annahme auf, beispielsweise die UI im Checkout (und viele weitere).

![image](/assets/blog/startups/user2.png "Checkout")

Eines Tages kommt diese "kleine" User Story, geschätzt mit _einem_ Story Point.

"Als User möchte ich über eine DropDown auswählen können, welches meine Lieferadresse ist."

Damit ändert sich unsere Annahme, dass User nur eine Adresse haben. Unser Modell ist nicht mehr länger richtig und diese Änderung muss in allen Ebenen unserer Software nachgezogen werden. An manchen Stellen ist das vielleicht gar nicht so ohne weiteres möglich sein, und wir werden _vorübergehend_ beispielsweise immer die erste Adresse auswählen. (**Technical Debt**)

- Das Tabellendesign ändert sich und es muss zumindest eine Mapping Table eingezogen werden.
- Das "Adresse" Attribut an der User Klasse ändert sich, und es muss eine Liste werden.
- Alle UI Elemente ändern sich, da der User plötzlich mehrere Adressen hat.

Dieses "kleine" Feature verurscht massive Kosten. Und jemand der nicht weiß wie Software funktioniert wird das kaum verstehen.

_Ich will doch nur ein Drop Down?_


## Faktenbasierte Software

Faktenbasierte Software (oder eventbasierte Software) verzichtet auf die explizite Abbildung **eines** Modells im Code.
Stattdessen ist die Implementierung darauf ausgelegt, die Dinge die passiert sind zu modellieren (als "Event" oder "Fakt")

Statt die Beziehung zwischen User und Adresse als Tabellen zu modellieren hätten wir folgende Fakten im System:

- User created
- Address Added

_Irgendwann_ wurde ein User angelegt, und _irgendwann_ wurde dem User eine Adresse zugeordnet.

Aus diesen Fakten lassen sich jetzt Use Case spezifische Modelle (_Read Model_) erzeugen.

![image](/assets/blog/startups/eventmodell.png "Eventmodell")

Statt also jetzt für die neue Anforderung Änderungen im kompletten Stack vorzunehmen ändern wir nur _spezifisch_ die
_Read Modelle_ die an dieser Information interessiert sind.

![image](/assets/blog/startups/eventmodell2.png "Spezifisches Rework")

Die _Read Modelle_ sind _by design_ leichtgewichtig und statt diese zu refactoren macht es oft Sinn, sie einfach neu zu schreiben.

Aus den **Fakten** im System lassen sich beliebige _Read Modelle_ erzeugen. Statt also nur die UI für den Checkout darzustellen könnten diesselben Fakten verwendet werden um eine Reporting Datenbank zu befüllen oder die Historie des Users in SAP anzuzeigen.

![image](/assets/blog/startups/readmodels.png "Read Modell")

Keiner dieser Use Cases wird jemals von _Rework_ durch ein anderes Feature betroffen sein. Die _Read Modelle_ basieren alleine auf den Fakten im System die sich nicht ändern.

## Warum ist das für Startups und kleine Unternehmen so interessant?

Gerade in Startups müssen Dinge ausprobiert werden. Wir brauchen _Experimente_ um das beste Produkt zu finden. Das Geschäftsmodell ist in Bewegung und dafür brauchen wir flexible Software.

**Fakten-** oder Eventbasierte Software ist ideal dafür geeignet, denn meistens ändern sich nicht die Fakten, sondern nur deren Darstellung oder wie sie verwendet werden.

> 🤯 A/B Tests sind auch einfach nur zwei _Read Modelle_ für dasselbe Feature

Software so zu entwickeln ist natürlich.

Wir suchen aktuell kleine Unternehmen für drei Case Studies, die mit uns gemeinsam den ersten Schritt in Richtung dieser Architektur machen und mit uns gemeinsam **kostenlos** ein [**Eventmodell**](/blog/software-dokumentieren-mit-eventmodelling) erstellen.
Wenn das für dich interessiert, [lass uns gerne darüber sprechen.](https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2).

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
