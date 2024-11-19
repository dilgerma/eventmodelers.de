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
                            <div className={"has-text-centered nolist"}>


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
                                                desc={"Starting the podcasst. Breaking the Aggregate - with Dynamic Consistency Boundary."}
                                                video={"L9FSmSaQWuQ"} title={"Episode 1"}/>
                                            <Video
                                                desc={"Privacy and Eventsourcing. Given / When / Thens. How Vertical Slice Architectures help."}
                                                video={"EUydf8OdNDc"} title={"Episode 2"}/>
                                            <Video
                                                desc={"AI Integration. New timeline in Given / When / Thens. Security and Eventsourcing."}
                                                video={"uX4_03cbJtU"} title={"Episode 3"}/>
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
