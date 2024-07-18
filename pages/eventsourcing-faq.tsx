import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                    title={"Die Eventsourcing FAQ"}
                    description={"Auf dieser Seite werden alle relevanten Fragen zu Eventsourcing nach und nach beantwortet. Du hast ebenfalls die Möglichkeit, eigene Fragen zu stellen, die dann für alle beantwortet werden."}
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
                                    <div className={"blue has-text-centered"}>Eventsourcing FAQ
                                    </div>
                                </h1>


                                <div className={"has-text-centered top-margin"}>
                                    <b>&quot;We achieved everything from DDD without doing DDD (Adam
                                        Dymitruk) &quot;</b>
                                </div>

                                <div className={"top-margin"}/>
                                <p>
                                    Auf dieser Seite beantworten wir die wichtigsten Fragen rund um Eventsourcing. Und
                                    das beste. <a href={"https://tally.so/r/wkZ0r1"}>Du hast die Möglichkeit, deine
                                    eigenen Fragen zu stellen und sie werden hier veröffentlicht (auf Wunsch
                                    anonym).</a>
                                </p>

                                <div className={"notification is-success is-light"}>
                                    <i className="fa-regular fa-lightbulb"></i><span className={"left-margin"}> Die Fragen werden nach und nach hier beantwortet.</span>
                                </div>
                                <div className={"top-margin"}/>

                                <div className={"marginal"}>Was ist CQRS und gehört das zwingend mit Eventsourcing?
                                </div>
                                <div className={"marginal"}>Wie funktioniert Event-Versionierung</div>
                                <div className={"marginal"}>Wie groß sollte man Events schneiden?</div>
                                <div className={"marginal"}>Wie performant ist Eventsourcing?</div>
                                <div className={"marginal"}>Wie erzeugt man Sequenzen Eventsourcing?</div>
                                <div className={"marginal"}>Wie löscht man?</div>
                                <div className={"marginal"}>Was sind Passiv-Agressive Events?</div>
                                <div className={"marginal"}>Wie implementiert man unique constraints mit event sourcing?
                                    Reservation pattern?
                                </div>
                                <div className={"marginal"}>Gibt es empfehlende Fachliteratur?</div>
                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
