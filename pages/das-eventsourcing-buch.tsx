import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                       title={"Das Eventsourcing Buch"}
                   description={"Das Buch das endlich praktisch aufzeigt, wie Eventsourcing in modernen Softwaresystemen eingesetzt werden kann."} keywords={"Eventsourcing, eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>
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
                            <div className={"has-text-centered nolist"}>


                                <h1>
                                    <div className={"blue has-text-centered"}>Das Eventsourcing Buch
                                    </div>
                                </h1>

                                <p>
                                    <img width={"50%"} src={"/assets/eventsourcing-buch/cover.png"}/>
                                </p>


                                <div className={"has-text-centered top-margin"}>
                                    <b>&quot;Stop guessing the past with Eventsourcing. Stop guessing the Future with
                                        Eventmodeling..&quot;</b>
                                </div>

                                <section className={"section has-text-centered"}>
                                    Auf dieser Seite kannst du live den Fortschritt bei der Fertigstellung des
                                    Eventsourcing Buchs verfolgen.
                                    Das Buch wird aktuell geschrieben und fertig geschriebene Kapitel sind hier
                                    durchgestrichen.
                                </section>
                                <section className={"section has-text-centered"}>
                                    <h3>Foundations</h3>
                                    <ul className={"nolist"}>
                                        <li><s>Why you should care</s></li>
                                        <li className={"blue"}>Eventsourcing - what is it? And more importantly, what is
                                            it not?
                                        </li>
                                        <li>Planning Systems using Eventmodeling</li>
                                        <li>Concurrency, Consistency and eventual Consistency</li>
                                        <li>How about DDD?</li>
                                        <li>Anatomy of an eventsourced Application</li>
                                        <li>Designing Streams</li>
                                    </ul>

                                    <h3>From Zero to running Software</h3>
                                    <ul className={"nolist"}>
                                        <li>From Zero to Running Software</li>
                                        <li>Eventsourcing with Axon</li>
                                        <li>Planning the System</li>
                                        <li>Tech Stack & Documentation</li>
                                        <li>Vertical Slicing</li>
                                        <li>The first Slice - State Change, State View</li>
                                        <li>Implementing Automations</li>
                                        <li>Distributed Transactions and how to handle them</li>
                                        <li>Example Integration with Apache Kafka and Translations</li>
                                        <li>Breaking Change is inevitable - Event Replay & Upcasting</li>
                                        <li>Putting the pieces together</li>
                                    </ul>
                                    <h3>Implementation Patterns</h3>
                                    <ul className={"nolist"}>
                                        <li>Projected Read Model</li>
                                        <li>Live Model</li>
                                        <li>The Sync / Async UI Problem</li>
                                        <li>Set Based Validations</li>
                                        <li>The “TODO List” Pattern and why I don´t use Sagas</li>
                                        <li>Closing the Books</li>
                                        <li>The Reservation Pattern</li>
                                    </ul>
                                </section>
                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
