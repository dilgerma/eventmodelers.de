import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                    title={"Die Eventmodeling FAQ"}
                    description={"Auf dieser Seite werden alle relevanten Fragen zu Eventmodeling nach und nach beantwortet. Du hast ebenfalls die Möglichkeit, eigene Fragen zu stellen, die dann für alle beantwortet werden."}
                    keywords={"Eventmodeling, eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">

                    <div className={"notification is-info is-light has-text-centered"}>
                        Du hast eine Frage, die du hier veröffentlichen möchtest? Stell die Frage <a
                        href={"https://tally.so/r/wkZ0r1"}>hier</a>
                    </div>

                    <div className={"topBorder container"}>

                        <Card
                            headline=""
                            textLeft={false} full={true}
                            image={"/assets/md2.png"}
                            id="eventmodelling"
                            shadow={false}>
                            <div className={"has-text-centered nolist"}>


                                <h1>
                                    <div className={"blue has-text-centered"}>Eventmodeling FAQ
                                    </div>
                                </h1>


                                <div className={"has-text-centered top-margin"}>
                                    <b>&quot;We achieved everything from DDD without doing DDD (Adam
                                        Dymitruk) &quot;</b>
                                </div>

                                <div className={"top-margin"}/>
                                <p>
                                    Auf dieser Seite beantworten wir die wichtigsten Fragen rund um Eventmodeling. Und
                                    das beste. <a href={"https://tally.so/r/wkZ0r1"}>Du hast die Möglichkeit, deine
                                    eigenen Fragen zu stellen und sie werden hier veröffentlicht (auf Wunsch
                                    anonym).</a>
                                </p>

                                <div className={"top-margin"}/>
                                <div>
                                    <Link className={"left-margin"}
                                                                                  href={"/faq/01-warum-solltest-du-eventmodeling-lernen"}>Warum
                                    sollte ich Eventmodeling lernen?</Link>
                                </div>
                                <div className={"marginal"}>
                                <Link href={"/faq/braucht-man-eventsourcing-fuer-eventmodeling"}
                                      className={"top-margin"}>
                                    Braucht
                                    man Eventsourcing für Eventmodeling?
                                </Link>
                                </div>
                                <div className={"marginal"}>Was heißt der andere Ausdruck der Projektion? Also der
                                    systemschreibende Vorgang?
                                </div>
                                <div>
                                    <Link href={"/faq/muss-inhalt-command-inhalt-event-sein"}
                                          className={"top-margin"}>
                                        Muss Inhalt Command = Inhalt Event sein?</Link></div>
                                <div className={"marginal"}>
                                    <Link href={"/faq/information-completeness-check"}
                                          className={"top-margin"}>Was ist der Information Completeness Check?</Link>
                                </div>

                                <div>
                                    <Link href={"/faq/kann-ein-command-mehrere-events-erzeugen"}
                                          className={"top-margin"}>
                                        Kann ein Command mehrere Events erzeugen?</Link></div>
                                <div className={"marginal"}>Wie werden Features im Eventmodell definiert?</div>
                                <div className={"marginal"}><Link href={"/faq/wann-eignet-sich-eventmodeing-nicht"}>Für
                                    welche Art von Anwendungen eignet sich
                                    Event-Modeling <b>nicht</b>?</Link>
                                </div>
                                <div className={"marginal"}>Wie sind Deine Erfahrungen zum Thema Event Modeling in Deutsch oder Englisch?
                                </div>
                                <div className={"marginal"}>
                                    <Link href={"/faq/ersetzt-eventmodeling-jira"}>Ersetzt Eventmodeling Jira?</Link></div>
                                <div className={"marginal"}><Link href={"/faq/neue-software-uebernehmen"}>Was machst du wenn du bestehende Software übernimmst?</Link></div>
                                <div className={"marginal"}><Link href={"/faq/fachliteratur"}>Gibt es empfehlende Fachliteratur?</Link></div>
                                <div className={"marginal"}>Was sind die schlimmsten Hürden beim Event Modeling?</div>
                                <div className={"marginal"}>Wie modelliert man die Reaktion auf ein Event in Modeling?
                                    Man sieht immer nur Reaktionen auf State.
                                </div>


                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
