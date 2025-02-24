import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';
import Video from '@/components/Video';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                    title={"Eventmodeling und Eventsourcing Podcasts"}
                    description={"Auf dieser Seite werden alle Videos geposted, die nach und nach auf den verschiedenen Kanälen entstehen. Die Seite wird ständig aktualisiert."}
                    keywords={"Eventmodeling, eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">


                    <div className={"topBorder container"}>

                        <Card
                            headline=""
                            textLeft={false} full={true}
                            image={"/assets/md2.png"}
                            id="eventmodelling"
                            shadow={false}>
                            <div className={"nolist"}>


                                <h1>
                                    <div className={"blue has-text-centered"}>Eventmodeling & Eventsourcing Podcasts
                                    </div>
                                </h1>

                                <div className={"top-margin"}/>
                                <section>
                                    <div className={"columns is-multiline"}>
                                        <div className={"column"}>
                                            <h3>Eventmodeling & Eventsourcing Podcast mit Adam Dymitruk</h3>
                                            <Video
                                                desc={"Starting the podcast. Breaking the Aggregate - with Dynamic Consistency Boundary."}
                                                video={"L9FSmSaQWuQ"} title={"Episode 1"}/>
                                            <p className={"top-margin"}>
                                                In der ersten Episode unseres Podcasts haben wir verschiedene Themen
                                                angesprochen und möchten künftige Folgen kompakt und praxisnah halten –
                                                ideal für den Weg zur Arbeit oder zwischendurch. Ein spannendes Thema
                                                für die nächste Episode ist das Design von „Given-When-Then“ für
                                                Automatisierung, ein Bereich, der zuletzt intensiv in unserem Discord
                                                diskutiert wurde. Wir werden beleuchten, ob und wann Read-Models
                                                notwendig sind und wie man Testfälle für automatisierte Workflows
                                                effizient und wiederholbar gestaltet. Falls ihr Themenvorschläge habt,
                                                schreibt sie gerne in unseren Discord. Je nach Aktivität richten wir
                                                einen eigenen Kanal ein oder markieren relevante Diskussionen. Zukünftig
                                                könnten auch Interviews mit Gästen folgen – bleibt also dran!
                                            </p>
                                            <ul className={"nolist"}>
                                                <li><strong>Kompakte Episoden:</strong> Der Podcast soll kurz und
                                                    praxisnah sein, ideal für den Weg zur Arbeit.
                                                </li>
                                                <li><strong>Thema der nächsten Folge:</strong> „Given-When-Then“ für
                                                    Automatisierung – eine aktuelle Diskussion aus dem Discord.
                                                </li>
                                                <li><strong>Herausforderungen:</strong> Braucht man Read-Models? Wie
                                                    gestaltet man Testfälle effizient und wiederholbar?
                                                </li>
                                                <li><strong>Community-Beteiligung:</strong> Themenvorschläge können im
                                                    Discord eingereicht werden.
                                                </li>
                                                <li><strong>Zukunftsausblick:</strong> Mögliche Interviews mit Experten
                                                    in späteren Episoden.
                                                </li>
                                            </ul>

                                            <Video
                                                desc={"Privacy and Eventsourcing. Given / When / Thens. How Vertical Slice Architectures help."}
                                                video={"EUydf8OdNDc"} title={"Episode 2"}/>
                                            <p className={"top-margin"}>
                                                In dieser Podcast-Episode diskutieren die Hosts die Vor- und Nachteile
                                                von Event Modeling, Event Sourcing und traditionellen
                                                Git-Entwicklungspraktiken. Sie vergleichen trunk-basierte Entwicklung
                                                mit Feature-basierter Entwicklung und erläutern, wie Event Sourcing
                                                Entwickler dabei unterstützt, Konflikte zu minimieren und die Qualität
                                                des Codes zu wahren. Es wird auch auf die Bedeutung von isolierten
                                                &quot;Slices&quot; eingegangen, die es Teams ermöglichen, parallel und effizient
                                                zu arbeiten, ohne sich gegenseitig zu behindern.
                                            </p>
                                            <ul className={"nolist"}>
                                                <li><strong>Event Sourcing und Event Modeling</strong> bieten eine
                                                    strukturierte Möglichkeit, Konflikte zu vermeiden, indem Entwickler
                                                    in isolierten &quot;Slices&quot; arbeiten.
                                                </li>
                                                <li><strong>Trunk-basierte Entwicklung</strong> kann zu Problemen
                                                    führen, insbesondere bei der Verwendung von Feature-Toggles und
                                                    unvollständigem Code in Produktion.
                                                </li>
                                                <li><strong>Git-Branches und Feature-Branches</strong> sind nach wie vor
                                                    wichtig für die Qualitätssicherung und verhindern, dass Änderungen
                                                    unerwünschte Auswirkungen haben.
                                                </li>
                                                <li><strong>Event Modeling und Event Sourcing</strong> bieten eine
                                                    flexible Möglichkeit, Feature-Toggles durch Subscription-basierte
                                                    Implementierungen zu ersetzen, was die Codequalität verbessert.
                                                </li>
                                                <li><strong>Event Modeling</strong> fördert eine einheitliche
                                                    Entwicklungskultur und reduziert Konflikte, indem es klare
                                                    Richtlinien für die Systemstruktur vorgibt.
                                                </li>
                                                <li><strong>Trunk-based Entwicklung</strong> kann als ineffizient
                                                    angesehen werden, da es Code in Produktion gibt, der noch nicht
                                                    fertig ist. <strong>Event Sourcing</strong> bietet eine bessere
                                                    Möglichkeit, dies zu handhaben.
                                                </li>
                                            </ul>


                                            <Video
                                                desc={"AI Integration. New timeline in Given / When / Thens. Security and Eventsourcing."}
                                                video={"uX4_03cbJtU"} title={"Episode 3"}/>
                                            <p className={"top-margin"}>
                                                In dieser Podcast-Episode wird das Thema Event Modeling aus praktischer
                                                Sicht behandelt. Der Gastgeber erklärt, wie Event Modeling erfolgreich
                                                in verschiedenen Bereichen wie Tests, UI-Design und Security angewendet
                                                werden kann. Besonders wird auf die Bedeutung von Sicherheitsmodellen,
                                                wie Role-Based Access Control (RBAC), eingegangen, die gut mit Event
                                                Sourcing kombiniert werden können, um Transparenz und
                                                Nachvollziehbarkeit zu gewährleisten. Zudem wird erörtert, wie man Event
                                                Modeling in Sicherheitsfragen gezielt einsetzen kann, um die
                                                Kommunikation zwischen Technik- und Business-Teams zu verbessern.
                                            </p>
                                            <ul className="nolist">
                                                <li>Event Modeling ist effektiv zur Generierung von Templates
                                                    für <strong>Tests und UI-Mock-ups.</strong></li>
                                                <li><strong>Modellierung von Security</strong> sollte sich auf
                                                    geschäftsrelevante Elemente konzentrieren und technische Rollen
                                                    vermeiden.
                                                </li>
                                                <li><strong>Event Sourcing bietet eine hervorragende Grundlage für die
                                                    Nachvollziehbarkeit von Sicherheitsereignissen wie
                                                    Zugriffskontrollen.</strong></li>
                                                <li><strong>Transparenz und Zusammenarbeit</strong> zwischen Business
                                                    und Technik
                                                    wird durch Event Modeling in Sicherheitsfragen gefördert.
                                                </li>

                                            </ul>


                                            <Video
                                                desc={"Keeping things simple"}
                                                video={"EOPh8rTg_dA"} title={"Episode 4"}/>
                                            <p className={"top-margin"}>
                                                In dieser Podcast-Episode diskutieren Adam und Martin die praktischen
                                                Anwendungen von Event Modeling und Event Sourcing. Sie erläutern, wie
                                                Event Modeling als Kommunikationsbrücke zwischen technischen und
                                                nicht-technischen Teams fungiert, und teilen Einblicke, wie man mit
                                                bestehenden Systemen und Technologien, wie z.B. Sagas, umgehen kann. Die
                                                Episode betont, dass der Erfolg oft in der Einfachheit der Modelle und
                                                deren flexibler Anpassung an die Kundenanforderungen liegt.
                                            </p>
                                            <ul className="nolist">
                                                <li><strong>Event Modeling funktioniert als Brücke zwischen technischen
                                                    und nicht-technischen Teams</strong>, da es keine
                                                    Implementierungsdetails enthält.
                                                </li>
                                                <li>Es ist möglich, bestehende Technologien
                                                    wie <strong>Sagas</strong> zu integrieren, ohne die grundlegenden
                                                    Prinzipien von Event Modeling zu gefährden.
                                                </li>
                                                <li><strong>Die einfache Kommunikation von Systemprozessen</strong> ohne
                                                    technische Jargon ist entscheidend für das Verständnis der
                                                    Geschäftsseite.
                                                </li>
                                                <li>Erfahrene Teams können durch Zusammenarbeit und Unterstützung von
                                                    Experten Fehler vermeiden und schneller Lösungen implementieren.
                                                </li>
                                                <li>Die Event-Sourcing-Technologie und -Methoden bieten eine gute
                                                    Grundlage, um auch bei bereits etablierten Systemen effizient zu
                                                    arbeiten.
                                                </li>
                                            </ul>


                                            <Video
                                                desc={"A case against Upcasters"}
                                                video={"W7mpfjW7nhw"} title={"Episode 5"}/>
                                            <p className={"top-margin"}>
                                                In dieser Episode diskutieren Adam und Martin spannende Erkenntnisse aus
                                                einem Event-Sourcing-Workshop. Sie gehen auf die Herausforderungen der
                                                Versionierung von Events ein, insbesondere wie man mit veralteten Events
                                                umgeht und welche Vor- und Nachteile Upcasters mit sich bringen. Ein
                                                besonderer Fokus liegt auf der Flexibilität, die Event
                                                Systeme komplett umschreiben zu müssen. Zudem teilen sie ihre
                                                persönlichen Erfahrungen und Einsichten, wie man alte und neue
                                                Event-Versionen in einem Event-Sourcing-Setup sinnvoll behandelt.
                                            </p>
                                            <ul className="nolist">
                                                <li><strong>Verwendung von Upcasters</strong>: Sie ermöglichen es, alte
                                                    Events in neue Versionen zu konvertieren, ohne dass die gesamte
                                                    Logik für ältere Events angepasst werden muss.
                                                </li>
                                                <li><strong>Flexibilität von Event-Sourcing</strong>: Das System
                                                    ermöglicht es, alte Events weiter zu verwenden, ohne große
                                                    Refaktorisierungen vorzunehmen.
                                                </li>
                                                <li><strong>Verantwortung für historische Daten</strong>: Event-Sourcing
                                                    hilft, die Historie von Ereignissen transparent und nachvollziehbar
                                                    zu halten, ohne diese zu verbergen oder zu entfernen.
                                                </li>
                                                <li><strong>Offenheit für neue Erkenntnisse</strong>: Auch nach
                                                    jahrelanger Erfahrung in Event-Sourcing gibt es immer noch Raum für
                                                    Verbesserung und Weiterentwicklung der Methoden.
                                                </li>
                                                <li><strong>Vermeidung von unnötiger Komplexität</strong>: Durch das
                                                    Offenhalten alter Event-Versionen in der Systemlogik kann die
                                                    Komplexität minimiert werden, ohne wichtige Geschäftsinformationen
                                                    zu verlieren.
                                                </li>
                                            </ul>
                                            <Video
                                                desc={"Event Modeling Scope and more"}
                                                video={"JZWHv-V7Xeg"} title={"Episode 6"}/>
                                            <p className={"top-margin"}>
                                                In dieser Episode von Adam & Martin&apos;s Podcast geht es um die Bedeutung
                                                der Vermeidung unnötigen Couplings in Softwarearchitekturen. Sie
                                                diskutieren, wie durch sorgfältige Modellierung und die Schaffung
                                                klarer, entkoppelter Komponenten das Wachstum und die Wartbarkeit von
                                                Systemen langfristig gesichert werden können. Der Fokus liegt darauf,
                                                wie Teams durch richtig strukturierte, unabhängige Datenstrukturen und
                                                Prozesse die Komplexität reduzieren und teure Fehler vermeiden können.
                                                Ein Muss für alle, die Event Modeling und Event Sourcing effektiv
                                                einsetzen wollen.
                                            </p>
                                            <ul className="nolist">
                                                <li><strong>Unnötiges Coupling vermeiden</strong> – Verbindungen
                                                    zwischen Komponenten sollten vermieden werden, da sie zu langfristig
                                                    höheren Kosten und Wartungsaufwand führen.
                                                </li>
                                                <li><strong>Grüne Boxen für klare Abgrenzungen</strong> – Durch die
                                                    Verwendung unabhängiger Komponenten (grüne Boxen) kann die
                                                    Komplexität reduziert und das System flexibler gestaltet werden.
                                                </li>
                                                <li><strong>Schnelle Anpassung durch klare Slices</strong> –
                                                    Arbeitsbereiche sollten klar definiert und abgegrenzt werden, um
                                                    schnelle und zielgerichtete Änderungen zu ermöglichen.
                                                </li>
                                                <li><strong>Die rote Pille der Architektur</strong> – Wer einmal die
                                                    Vorteile von klar strukturierten, entkoppelten Systemen erlebt hat,
                                                    möchte nie wieder zurück zu komplexen, miteinander verknüpften
                                                    Systemen.
                                                </li>
                                            </ul>
                                            <Video
                                                desc={"Pure Command Handlers and Sparse Timelines"}
                                                video={"F02n6qntPAA"} title={"Episode 7"}/>
                                            <p className={"top-margin"}>
                                                In dieser Episode des Event Modeling Podcasts sprechen Adam und Martin
                                                über die Kernaspekte und die Herausforderungen der Implementierung von
                                                Event Modeling und Event Sourcing in Unternehmen. Sie erläutern
                                                praxisnahe Ansätze, wie diese Methoden zur Verbesserung von Systemen und
                                                Prozessen eingesetzt werden können, und beleuchten häufige
                                                Stolpersteine, die in der Praxis auftreten. Wenn du mehr über Event
                                                Modeling lernen und erfahren möchtest, wie du es in deinem Unternehmen
                                                erfolgreich umsetzen kannst, ist diese Episode genau das Richtige für
                                                dich.
                                            </p>
                                            <ul className="nolist">
                                                <li><strong>Event Modeling</strong> ist eine Methode zur Modellierung
                                                    von Geschäftsprozessen, die speziell für verteilte Systeme geeignet
                                                    ist.
                                                </li>
                                                <li>Wichtig für die Implementierung von Event Sourcing ist die Kenntnis
                                                    über die **Komplexität und die zugrunde liegende Architektur**.
                                                </li>
                                                <li>Die Wahl der richtigen **Tools und Frameworks** spielt eine
                                                    entscheidende Rolle für den Erfolg.
                                                </li>
                                                <li>**Fehlerbehandlung und -protokollierung** sind in verteilten
                                                    Systemen besonders wichtig.
                                                </li>
                                                <li>Erfolgreiche Integration von Event Sourcing erfordert eine enge
                                                    Zusammenarbeit zwischen **Technik und Business**.
                                                </li>
                                            </ul>
                                            <Video
                                                desc={"Event Sourcing Frameworks and more"}
                                                video={"e_IzVh15unc"} title={"Episode 8"}/>
                                            <p className={"top-margin"}>In dieser Episode sprechen Adam und Martin über die praktischen
                                                Anwendungen von Event Sourcing und der Slice-Methode, und wie diese
                                                Techniken dabei helfen, effiziente und skalierbare Systeme zu bauen. Sie
                                                teilen Erfahrungen aus der Praxis und zeigen, wie man mit Hilfe von Fake
                                                Events und der Event-Sourcing-Technologie schnell funktionsfähige
                                                Systeme aufbauen kann, selbst wenn noch nicht alle Teile des Systems
                                                vollständig implementiert sind. Es geht auch darum, wie die Kombination
                                                von Event Sourcing und der Slice-Methode die Entwicklungsarbeit
                                                vereinfacht und die Zusammenarbeit zwischen Teams verbessert.</p>
                                            <ul className="nolist">
                                                <li><strong>Fake Events</strong> ermöglichen es, Teile eines Systems
                                                    unabhängig zu entwickeln und zu testen, auch wenn andere Teile noch
                                                    nicht fertig sind.
                                                </li>
                                                <li>Die Verwendung von <strong>Slices</strong> fördert eine klare
                                                    Trennung der Systemfunktionen und sorgt für eine einfache
                                                    Nachvollziehbarkeit von Zustand und Daten.
                                                </li>
                                                <li><strong>Event Sourcing</strong> bietet eine klare Dokumentation der
                                                    Systemhistorie, was die Entwicklung und Wartung von Software
                                                    erheblich vereinfacht.
                                                </li>
                                                <li>Durch die Kombination von Event Sourcing und der Slice-Methode
                                                    entsteht ein flexibles, skalierbares System, das Entwicklern hilft,
                                                    fokussiert zu bleiben und schnell Ergebnisse zu erzielen.
                                                </li>
                                                <li>Die Podcast-Episode betont, dass Event Sourcing auch für Einsteiger
                                                    zugänglich sein kann, ohne dass tiefgehende Erfahrung notwendig ist.
                                                </li>
                                            </ul>
                                            <Video
                                                desc={"Maintaining Event Models and more"}
                                                video={"uUVHR75ORl4"} title={"Episode 9"}/>
                                            <p className={"top-margin"}>
                                                Im Podcast von Adam & Martin wird die rasante Entwicklung der Event
                                                Modeling Community thematisiert, die sich immer mehr selbst organisiert.
                                                Die zweite Ausgabe der Veranstaltung, die dieses Jahr in München
                                                stattfinden soll, wird eine hervorragende Gelegenheit bieten, sich mit
                                                Praktikern auszutauschen und die Fortschritte im Bereich Event Modeling
                                                zu feiern. Die Bedeutung der Community und die zunehmende Unabhängigkeit
                                                von Event Modeling wurden besonders hervorgehoben. 2025 verspricht ein
                                                spannendes Jahr mit einer Vielzahl an Podcasts, die mehr Einblicke in
                                                diese dynamische Bewegung bieten.
                                            </p>
                                            <ul className="nolist">
                                                <li><strong>Event Modeling entwickelt sich zunehmend
                                                    selbstständig</strong> und wird nicht mehr nur von wenigen
                                                    vorangetrieben.
                                                </li>
                                                <li>Die zweite Event Modeling Veranstaltung in München wird eine
                                                    wichtige Gelegenheit zum Austausch für Praktiker sein.
                                                </li>
                                                <li>2025 wird ein Jahr mit vielen neuen Podcasts sein, die die Community
                                                    weiter stärken.
                                                </li>
                                                <li>Die Unterstützung durch Experten wie Alexander und andere ist
                                                    entscheidend für den Erfolg der Community.
                                                </li>
                                                <li>Die Veranstaltung bietet auch eine Plattform für das Wachstum der
                                                    Event Modeling Bewegung in Deutschland.
                                                </li>
                                            </ul>

                                            <Video
                                                desc={"Avoiding the Pattern Soup"}
                                                video={"-m9hXz_wQXk"} title={"Episode 10"}/>
                                            <p className={"top-margin"}>In dieser Episode des Podcasts diskutieren Adam & Martin, wie Event
                                                Modeling hilft, Teams durch konkrete Beispiele und praxisorientierte
                                                Ansätze zu vereinen. Sie heben hervor, wie wichtig es ist, klare,
                                                greifbare Konzepte zu schaffen, die eine enge Zusammenarbeit fördern und
                                                Missverständnisse vermeiden. Besonders wird betont, dass Event Modeling
                                                als zentralisierte Praxis viele gängige Herausforderungen löst, die
                                                sonst durch verstreute Tools und Prozesse entstehen würden.</p>
                                            <ul className="nolist">
                                                <li><strong>Event Modeling fördert die Zusammenarbeit</strong> und sorgt
                                                    dafür, dass alle Teammitglieder aktiv am Prozess beteiligt sind.
                                                </li>
                                                <li>Es wird empfohlen, <strong>Beispiele statt abstrakte
                                                    Diagramme</strong> zu verwenden, um komplexe Prozesse verständlich
                                                    zu machen.
                                                </li>
                                                <li><strong>Ein zentralisierter Ansatz</strong> (wie Event Modeling)
                                                    spart Zeit und reduziert die Notwendigkeit für verschiedene Tools.
                                                </li>
                                                <li><strong>Der Wert von Workshops</strong> wird hervorgehoben, da sie
                                                    komprimiertes Wissen und praxisnahe Erfahrung bieten.
                                                </li>
                                                <li>Event Modeling hilft dabei, ein gemeinsames Verständnis für <strong>geschäftliche
                                                    Prozesse</strong> zu entwickeln und zu sichern.
                                                </li>
                                            </ul>
                                            <Video
                                                desc={"No Code Reviews"}
                                                video={"D84blR0TVno"} title={"Episode 11"}/>
                                            <p className={"top-margin"}>
                                                In dieser Episode von Adam & Martin geht es um zentrale Themen im
                                                Bereich Domain-Driven Design (DDD) und Event Sourcing. Es wird
                                                diskutiert, wie Aggregates richtig verwendet werden sollten, um
                                                Konsistenz zu gewährleisten und warum Code-Wiederverwendung mit Vorsicht
                                                betrachtet werden sollte, besonders in komplexen Systemen. Die Episode
                                                beleuchtet auch, wie das Verständnis von DDD im Laufe der Zeit gewachsen
                                                ist und wie aktuelle Technologien wie Event Sourcing den Ansatz
                                                verändern. Wenn du dich für sauberen Code, DDD und Event Sourcing
                                                interessierst, ist diese Folge genau das Richtige für dich.
                                            </p>
                                            <ul className="nolist">
                                                <li><strong>Aggregates:</strong> Aggregates sollten nur zur Validierung
                                                    und Ausführung von Kommandos verwendet werden und nicht zur Anzeige
                                                    von Informationen.
                                                </li>
                                                <li><strong>Strategisches vs. Taktisches DDD:</strong> Viele
                                                    Diskussionen drehen sich um das strategische DDD, da das taktische
                                                    DDD oft missverstanden wird und unklar bleibt.
                                                </li>
                                                <li><strong>Code-Wiederverwendung:</strong> Code-Wiederverwendung sollte
                                                    mit Vorsicht gehandhabt werden, insbesondere in Bereichen, die keine
                                                    Konsistenzgrenzen definieren, um unnötige Kopplung zu vermeiden.
                                                </li>
                                                <li><strong>Abstrakte Basisklassen:</strong> Die Verwendung von
                                                    abstrakten Basisklassen sollte vermieden werden, da sie zu starker
                                                    Kopplung führen und Probleme im realen Projektalltag verursachen.
                                                </li>
                                                <li><strong>Event Sourcing:</strong> Event Sourcing wird immer
                                                    relevanter und bietet mehr Möglichkeiten, insbesondere mit
                                                    günstigeren Datenhaltungsmöglichkeiten und neuen Technologien.
                                                </li>
                                            </ul>

                                            <Video
                                                desc={"Slice, Slice Baby"}
                                                video={"cwQgRqmEvqs"} title={"Episode 12"}/>
                                            <p className={"top-margin"}>
                                                In dieser Folge diskutieren Adam & Martin über den Umgang mit Fehlern in
                                                Event Sourcing-Systemen und wann Fehler als Events persistiert werden
                                                sollten. Sie betonen die Bedeutung von Audit-Logs und
                                                Nachvollziehbarkeit, weisen aber auch auf Risiken wie
                                                Denial-of-Service-Angriffe hin. Zudem gibt es Einblicke in Webinare und
                                                die Community rund um Event Sourcing. Abschließend kündigen sie das
                                                nächste Webinar an, das sich mit Prozessen und Automatisierung
                                                beschäftigen wird.
                                            </p>
                                            <ul className="nolist">
                                                <li><b>Fehler als Event oder nicht?</b> – Nur wenn ein Fehler eine
                                                    Nachverfolgbarkeit erfordert (z. B. für Audits), sollte er als Event
                                                    gespeichert werden.
                                                </li>
                                                <li><b>Denial-of-Service-Risiken</b> – Event Sourcing-Systeme müssen
                                                    sich vor unkontrollierten Eingaben schützen, um Speicherüberlauf zu
                                                    vermeiden.
                                                </li>
                                                <li><b>Webinare & Community</b> – Martin veranstaltet monatliche
                                                    Webinare zu Event Sourcing, die über LinkedIn angekündigt werden.
                                                </li>
                                                <li><b>Nächstes Thema: Prozesse & Automatisierung</b> – Das nächste
                                                    Webinar wird sich intensiv mit Prozessen und Automatisierungen
                                                    beschäftigen.
                                                </li>
                                            </ul>
                                            <Video
                                                desc={"Stop, Collaborate and listen"}
                                                video={"7MPi2PqTuME"} title={"Episode 13"}/>
                                            <p className={"top-margin"}>
                                                In dieser Episode sprechen Adam und Martin über die Herausforderungen
                                                bei der Modellierung von optionalen Feldern und der Verwendung von
                                                mehreren Ereignissen für ein einziges Kommando, insbesondere in
                                                Szenarien wie einer Buchung mit einer optionalen Raucherzimmer-Option.
                                                Sie diskutieren, wie man solche Szenarien mit Event Modeling und Event
                                                Sourcing modellieren kann, und welche Überlegungen dabei eine Rolle
                                                spielen. Das Thema wird vertieft, indem sie den Einsatz von Künstlicher
                                                Intelligenz (KI) in der Code-Generierung und der Ereignismodellierung
                                                erkunden, wobei sie betonen, dass ein präzises und detailliertes
                                                Modellieren für geschäftsspezifische Anforderungen unerlässlich ist.
                                            </p>
                                            <ul className="nolist">
                                                <li><strong>Optionalfelder und mehrere Ereignisse:</strong> Es ist
                                                    möglich, ein Kommando zu verwenden, das mehrere Ereignisse erzeugt,
                                                    aber es hängt vom Fall ab, ob dies sinnvoll ist.
                                                </li>
                                                <li><strong>Komplexität bei Transaktionen:</strong> Wenn eine Option
                                                    (wie das Raucherzimmer) fehlschlägt, stellt sich die Frage, ob die
                                                    Buchung weiterhin bestehen bleibt oder auch rückgängig gemacht wird.
                                                </li>
                                                <li><strong>Einfachheit bevorzugen:</strong> Bei der Modellierung sollte
                                                    man immer auf einfache Lösungen setzen und nicht unnötig komplexe
                                                    Muster wie Sagas einführen.
                                                </li>
                                                <li><strong>AI in der Code-Generierung:</strong> KI kann helfen, das
                                                    Ereignismodell und den Code zu generieren, wobei eine präzise
                                                    Modellierung notwendig ist, um ein genaues System zu erstellen.
                                                </li>
                                                <li><strong>Wichtigkeit von temporalen Daten:</strong> KI funktioniert
                                                    besonders gut bei der Modellierung von zeitlich geordneten
                                                    Ereignissen, da sie eine lineare Erzählstruktur benötigt.
                                                </li>
                                            </ul>

                                            <Video
                                                desc={"AI Nightmares and Expert Help"}
                                                video={"7MPi2PqTuME"} title={"Episode 14"}/>
                                            <p className={"top-margin"}>
                                                In dieser Episode teilen Adam und Martin ihre Einsichten zu Event
                                                Modeling und Event Sourcing, wobei sie besonders auf die Bedeutung
                                                dieser Methoden in einer sich schnell verändernden Branche eingehen. Sie
                                                sprechen über die Herausforderungen, denen Unternehmen gegenüberstehen,
                                                und wie Event Sourcing als eine Art „Sicherheitsnetz“ dienen kann, um
                                                die Entwicklung in turbulenten Zeiten zu unterstützen. Zudem werden
                                                Themen wie der Einfluss von Künstlicher Intelligenz und die
                                                Notwendigkeit von Expertenrat behandelt. Hören Sie rein, wenn Sie lernen
                                                möchten, wie Sie mit Event Modeling und Event Sourcing den Überblick
                                                behalten und Ihre Projekte effektiv vorantreiben können.
                                            </p>
                                            <ul className="nolist">
                                                <li><strong>Event Modeling und Event Sourcing</strong> bieten
                                                    Unternehmen ein robustes Set an &quot;Schutzmaßnahmen&quot; in unsicheren
                                                    Zeiten.
                                                </li>
                                                <li><strong>Der Einfluss von Künstlicher Intelligenz</strong> wird
                                                    zunehmend spürbar, und Unternehmen sollten sich nicht von den
                                                    Veränderungen lähmen lassen.
                                                </li>
                                                <li>Expertenrat ist entscheidend, um in der turbulenten, sich schnell
                                                    verändernden Technologiebranche nicht den Anschluss zu verlieren.
                                                </li>
                                                <li><strong>Experten helfen dabei, Event Modeling und Event
                                                    Sourcing</strong> effektiv zu implementieren und dabei die
                                                    Komplexität zu beherrschen.
                                                </li>
                                                <li><strong>Verlässliche Methoden</strong> wie Event Sourcing bieten
                                                    Orientierung und eine klare Struktur für Softwareentwicklungsteams.
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </section>
                                <section>
                                    <div className={"columns is-multiline"}>
                                        <div className={"column"}>
                                            <h3>Working Draft Podcast 606</h3>
                                            <p>
                                                Dev, Business, Design & Marketing effektiv vereint
                                            </p>
                                            <p>
                                                Martin identifiziert das Ermitteln und Kommunizieren von Requirements
                                                als das größte Problem im Software-Engineering und stellt seinen
                                                Event-Modelling-Ansatz als Lösungsvorschlag vor. Mit uns spielt er einen
                                                entsprechenden Workshop durch, der alle Stakeholder an einen Tisch holt
                                                und die umzusetzende Software als eventgetriebenes System planen lässt.
                                                Von der Philosophie des Ansatzes über Parallelen zu Domain Driven Design
                                                (siehe Revision 556) bis hin zur Weiterentwicklung des Modells über die
                                                Zeit wird keine Plaungsphase außer acht gelassen.
                                            </p>
                                            <p>
                                                <a href={"https://workingdraft.de/606/"}>Zum Podcast</a>
                                            </p>
                                        </div>

                                    </div>
                                </section>

                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
