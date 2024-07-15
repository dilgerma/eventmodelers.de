import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                    title={"Eventmodeling Schulung - Eventmodeling lernen in 8 Stunden"}
                    description={"In diesem Workshop lernst du in 8 Stunden, wie Eventmodeling funktioniert und zwar an einem konkreten Beispiel."}
                    keywords={"Eventmodeling Training, eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>

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
                            <div>


                                <h1>
                                    <div className={"blue has-text-centered"}>Eventmodeling lernen in 2x4 Stunden
                                    </div>
                                </h1>


                                <div className={"has-text-centered top-margin"}>
                                    <b>&quot;Niemand sollte mit unklaren Requirements arbeiten müssen.&quot;</b>
                                </div>


                                <div className={"has-text-centered top-margin"}>
                                    <div><b>Dauer:</b> 2 Tage, jeweils 08:00 - 12:00</div>
                                    <div><b>Wo: </b>Remote via Zoom</div>
                                    <div><b>Zielgruppe: </b>Alle</div>
                                    <div>Die Schulung wird durchgeführt der <a href={"www.nebulit.de"}>Nebulit GmbH</a>
                                    </div>
                                </div>
                                <div className={"top-margin has-text-centered"}><b>Der nächste Schulungsblock wird
                                    aktuell geplant.</b></div>
                                <p className={"top-margin has-text-centered"}>
                                    <a target="_blank"
                                       href="https://tally.so/r/3jxa94"
                                       className={"button is-success"}>
                                        <span className={"bigger"}>Hier in Warteliste eintragen</span></a>
                                </p>

                                <section className={"section top-margin"}>

                                    <p>✅ Warum Eventmodeling?</p>
                                    <p>✅ Eventmodeling in Miro (Miro Tooling)</p>
                                    <p>✅ State View / State Change</p>
                                    <p>✅ Processors & Automations</p>
                                    <p>✅ Screens & Actors</p>
                                    <p>✅ Vertical Slices</p>
                                    <p>✅ Aggregates</p>
                                    <p>✅ GWT - Given / When / Then</p>
                                    <p>✅ External Events / Systems</p>
                                    <p>✅ Praktisches Beispiel - All Hands on Miro</p>


                                </section>

                                <div className={"has-text-centered top-margin"}>
                                    <img width={"50%"} src={"/assets/training/eventmodell2.png"}/>
                                </div>


                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
