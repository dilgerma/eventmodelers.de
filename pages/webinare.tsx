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
                    title={"Eventmodeling und Eventsourcing Webinare"}
                    description={"Auf dieser Seite werden alle Webinare der Nebulit GmbH geposted"}
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
                            <div className={"content"}>
                                <h1>
                                    <div className={"blue has-text-centered"}>Eventmodeling & Eventsourcing Webinare
                                    </div>
                                </h1>
                                <div className={"has-text-centered notification is-info is-light"}>
                                    Live mit dabei? Ich mache ein Webinar pro Monat immer angekündigt auf <a target={"_blank"} href={"https://www.linkedin.com/in/martindilger/"}>LinkedIn</a>.
                                    <div><i className="fa-solid fa-bell"></i>&nbsp;Folge mir am beste noch heute</div>
                                </div>

                                <section>
                                    <p className={"has-text-centered"}>
                                        Am Anfang des Webinars wählen wir ein Thema und modellieren es dann in einem
                                        realistischen Szenario gemeinsam.
                                    </p>
                                    <Video loom={true} video={"d80574f0a2c3491bb9ed3ea2bb44f548"}
                                           title={"Event Model your own domain"}/>

                                </section>
                                <section>
                                    <p className={"has-text-centered"}>
                                        120 Minuten Live-Modelling inkl. Code Generierung, Prototyping und Dokumentation.
                                    </p>
                                    <Video video={"CO9kMv35FwQ"} title={"Event Modeling - from idea to production"}/>
                                </section>

                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
