import {Inter} from 'next/font/google'
import Card from '../../components/card';
import SEO from '@/components/seo';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                                                  title={"Braucht man Eventsourcing für Eventmodeling?"}
                                              description={"Die Fragen kommt immer wieder auf. Braucht man Eventsourcing um mit Eventmodeling arbeiten zu können. Hier findest du die Antwort."} keywords={"Eventmodeling FAQ, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">

<div className={"big-margin-top"}/>
                    <div className={"topBorder container "}>

                       <h1 className={"has-text-centered"}>Braucht man Eventsourcing für Eventmodeling?</h1>

                        <p>
                        Die Antwort ist ein klares Nein.
                        </p>
                        <p>
                        Eventmodeling ist im ersten Schritt komplett technologieneutral und erlaubt es, Informationssysteme detailliert zu beschreiben, und zwar völlig unabhängig von der Implementierung.
                        </p>
                        <p>
                        Eventsourcing ist nur eine Möglichkeit, ein mit Eventmodeling modelliertes System umzusetzen.
                        </p>
                        <p className={"has-text-centered"}>
                            <img width="70%" src={"/assets/blog/legacy/cinema03.png"}/>
                        </p>
                        <p>
                            Im Blogartikel <Link href={"/blog/dokumentieren-von-legacy-systemen-mit-eventmodeling"}>Legacy-Systemen dokumentieren und verstehen mit Eventmodeling</Link> findest du eine Beschreibung, wie auch traditionelle bestehende Systeme mit Eventmodeling beschrieben werden können. Hier verwenden wir typischerweise zusätzlich zur Eventnotation die Datenbanktabellen unterhalb der Swimlane der Events, um zu skizzieren, wohin die Daten geschrieben werden.

                        </p>
                        <p>
                        Dabei ist es völlig unwichtig, ob wir es mit relationalen Tabellen oder einer MongoDB beispielsweise zu tun haben. Eventmodeling skizziert den Datenfluß und wie die Daten in unserem System verwendet werden.
                        </p>
                        <h3>Warum solltest du ein bestehendes System mit Eventmodeling dokumentieren?</h3>
                        <p>
                          Lohnt sich der Aufwand denn?
                        </p>
                        <p>
                            Eine Sache, die in den meisten Softwareprojekten fehlt ist saubere Dokumentation. Im besten Fall gibt es einige Confluence-Seiten, aber meist nicht mehr. Das erschwert Onboardings und auch Feature-Entwicklung.
                            Je nach Größe des Systems gibt es vielleicht sogar nicht mal mehr jemanden, der das ganze System überblickt.
                        </p>
                        <p>
                            Wo fängst du hier überhaupt an?
                        </p>
                        <p>
                            Mein Vorschlag - links.
                            Du fängst links an und modellierst die Software Schritt für Schritt. Mit allen, die etwas dazu beitragen können.
                        </p>
                        <p>
                            Das erstaunliche ist, es dauert gar nicht lange bis du die ersten Erfolge siehst und die ersten Flows klar herausgearbeitet sind.
                        </p>

                    </div>
                    <div className={"top-margin"}/>
                    <div className={"has-text-centered bigger"}>
                        <Link href={"/eventmodeling-faq"}>Zurück zu den FAQ</Link>
                    </div>
                    <div className={"top-margin"}/>
                </div>


            </div>
        </div>
    )
}
