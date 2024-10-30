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
                                    <div className={"blue has-text-centered"}>Understanding Eventsourcing
                                    </div>
                                </h1>
                                <h3>Das erste Buch das Eventmodeling, Eventsourcing und Vertical-Slice Architekturen zu
                                    einem konsistenten Software-Prozess zusammenführt.</h3>

                                <p>
                                    <img width={"50%"} src={"/assets/eventsourcing-buch/cover.png"}/>
                                </p>

                                <p>
                                    <a href={"https://leanpub.com/eventmodeling-and-eventsourcing"}>Das
                                        Eventsourcing-Buch ist jetzt auf LeanPub verfügbar</a>.
                                </p>


                                <div className={"has-text-centered top-margin"}>
                                    <b>&quot;Stop guessing the past with Eventsourcing. Stop guessing the Future with
                                        Eventmodeling..&quot;</b>
                                </div>

                                <div className={"top-margin notification is-info is-light"}>
                                    &quot;This is not just another technical book—it’s a roadmap to more predictable,
                                    maintainable, and successful software projects. Martin Dilger has created an
                                    invaluable resource that I believe will influence how we approach software
                                    development for years to come.&quot; - Gabriel. N. Schenker
                                </div>
                                <div className={"top-margin notification is-info is-light"}>
                                    &quot;By reading this book, you won’t just learn new techniques — you’ll transform the
                                    way you approach software development. You’ll gain clear, actionable steps to solve
                                    problems, communicate with unprecedented clarity, and estimate projects more
                                    accurately. In essence, you’ll be equipped to dismantle complexity and foster
                                    collaboration like never before.&quot; - Adam Dymitruk
                                </div>
                                <div className={"top-margin notification is-info is-light"}>


                                    &quot;Focusing on a practical implementaion really worked for me. I appreciate the work
                                    you have done here.&quot; - Gary Craine

                                </div>
                                <div className={"top-margin notification is-info is-light"}>


                                    &quot;Highly recommended reading&quot; - Michael Plagge

                                </div>
                                <div className={"top-margin notification is-info is-light"}>


                                    &quot;Thanks for writing the book, it will save me so much time and toil. I really like
                                    the Todo pattern to simplify the Saga. Also using an aggregate for uniqueness check
                                    is very nice.&quot; - William Power
                                </div>

                                <section>
                                    <a href={"https://leanpub.com/eventmodeling-and-eventsourcing"}
                                       className={"button is-success"}>Jetzt auf LeanPub kaufen</a>
                                </section>

                                <section className={"section has-text-centered"}>

                                    <h2>Part I - Foundations</h2>
                                    <ul className={"nolist"}>
                                        <li>Foreword by Adam Dymitruk</li>
                                        <li>Foreword by Gabriel N. Schenker</li>
                                        <li>Why I care</li>
                                        <li>Why you should care</li>
                                        <li>Event Sourcing - what is it?</li>
                                        <li>Planning Systems using Event Modeling</li>
                                        <li>CQRS, Concurrency, (eventual) Consistency</li>
                                        <li>Internal versus external data</li>
                                        <li>The Anatomy of an event-sourced Application</li>
                                        <li>Event Streaming, Event Sourcing and Stream Design</li>
                                        <li>Domain Driven Design</li>
                                        <li>Sagas - Handling transactions in distributed systems</li>
                                        <li>Vertical Slicing</li>
                                    </ul>

                                    <h2>Part II - Modelling the System</h2>
                                    <ul className={"nolist"}>
                                        <li>Brainstorming</li>
                                        <li>Modeling Use Cases with Wireframes</li>
                                        <li>Given / When / Then Scenarios</li>
                                        <li>Use Case: Clear Cart</li>
                                        <li>Use Case: Submit Cart</li>
                                        <li>Use Case: Inventory Changed</li>
                                        <li>Use Case: Price Changed</li>
                                        <li>Structuring an Event Model</li>
                                    </ul>

                                    <h2>Part III - From Zero to Running Software</h2>
                                    <ul className={"nolist"}>
                                        <li>Technology Stack</li>
                                        <li>Brief introduction to Axon</li>
                                        <li>Implementing the first slice - &quot;Add Item&quot;</li>
                                        <li>Implementing state view slices using Live-Projections</li>
                                        <li>Implementing Remove-Item and Clear-Cart</li>
                                        <li>Example Integration with Apache Kafka and Translations</li>
                                        <li>Implementing a database projection for inventories</li>
                                        <li>Implementing Automations</li>
                                        <li>Submitting the Cart</li>
                                        <li>Handling breaking changes</li>
                                    </ul>

                                    <h2>Part IV - Implementation Patterns</h2>
                                    <ul className={"nolist"}>
                                        <li>What this part is about</li>
                                        <li>Pattern: Database Projected Read Model</li>
                                        <li>Pattern: Live Model</li>
                                        <li>Pattern: The (partially) synchronous Projection</li>
                                        <li>Pattern: The Logic Read Model</li>
                                        <li>Pattern: Snapshots</li>
                                        <li>Pattern: Processor-TODO-List - Pattern</li>
                                        <li>Pattern: The Reservation Pattern</li>
                                        <li>Where to go from here?</li>
                                        <li>Notes</li>
                                    </ul>

                                </section>
                                <section>
                                    <a href={"https://leanpub.com/eventmodeling-and-eventsourcing"}
                                       className={"button is-success"}>Jetzt auf LeanPub kaufen</a>
                                </section>
                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
