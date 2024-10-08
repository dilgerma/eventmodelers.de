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
                    description={"Das Buch das endlich praktisch aufzeigt, wie Eventsourcing in modernen Softwaresystemen eingesetzt werden kann."}
                    keywords={"Eventsourcing, eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>
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

                                <p>
                                    <a href={"https://leanpub.com/eventmodeling-and-eventsourcing"}>Das Buch wird hier
                                        bei LeanPub geschrieben</a>. Du kannst dich dort eintragen, um dich über Updates
                                    benachrichtigen zu lassen.
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
                                    <ul className={"nolist"}>
                                        <h3><s>Foundations</s></h3>
                                        <ul className={"nolist"}>
                                            <li><s>Notes</s></li>
                                            <li><s>Why you should care</s></li>
                                            <li><s>Eventsourcing - what is it? And more importantly, what is it...</s>
                                            </li>
                                            <li><s>Planning Systems using Eventmodeling</s></li>
                                            <li><s>CQRS, Concurrency, Consistency and eventual Consistency</s></li>
                                            <li><s>Internal / External Data</s></li>
                                            <li><s>The Anatomy of an eventsourced Application</s></li>
                                            <li><s>Event Streaming, Eventsourcing and Stream Design</s></li>
                                            <li><s>How about DDD?</s></li>
                                        </ul>
                                        <h3>Modelling the System</h3>
                                        <ul className={"nolist"}>
                                            <li><s>Brainstorming</s></li>
                                            <li><s>Modeling Use Cases with Wireframes</s></li>
                                            <li><s>“Given/When/Then” Scenarios</s>
                                        </li>
                                        <li><s>Use Case: Clear Cart</s></li>
                                        <li><s>Use Case: Submit Cart</s></li>
                                        <li><s>Use Case: Inventory Changed</s></li>
                                            <li><s>Use Case: Price Changed</s></li>
                                    </ul>
                                    <h3>From Zero to Running Software</h3>
                                    <ul className={"nolist"}>
                                        <li><s>Brief introduction to Axon</s></li>
                                        <li><s>Project Setup</s></li>
                                        <li><s>The first Slice - State Change, State View</s></li>
                                        <li  className={"blue"}>Implementing State Views Slices using Projections</li>
                                        <li>Vertical Slicing</li>
                                        <li>Implementing Automations</li>
                                        <li>Example Integration with Apache Kafka and Translations</li>
                                        <li>Breaking Change is inevitable</li>
                                        <li>Putting the pieces together</li>
                                    </ul>
                                    <h3>Implementation Patterns</h3>
                                    <ul className={"nolist"}>
                                        <li>Projected Read Model</li>
                                        <li>Live Model</li>
                                        <li>The Sync / Async UI Problem</li>
                                        <li>Set Based Validations</li>
                                        <li>The “TODO List” Pattern and why I don’t use Sagas</li>
                                        <li>Closing the Books</li>
                                        <li>The Reservation Pattern</li>
                                    </ul>
                                    <h3>Appendix</h3>
                                    <ul className={"nolist"}>
                                        <li>Tech Stack & Documentation</li>
                                        <li>Brief introduction to Axon</li>
                                        <li>Eventstores</li>
                                        <li>Axon Server</li>
                                        <li>EventstoreDB</li>
                                    </ul>
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
