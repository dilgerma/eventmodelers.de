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
                    title={"Eventmodeling und Eventsourcing Videos"}
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
                                    <div className={"blue has-text-centered"}>Eventmodeling & Eventsourcing Videos
                                    </div>
                                </h1>
                                <section className="section container content bigger">

                                    <Video video={"OA64piP1vCw"}
                                           title={"Um die alten Probleme zu lösen brauchen, wir ein paar neue Ideen."}/>
                                </section>

                                <div className={"has-text-centered top-margin"}>
                                    <b>&quot;Stop guessing the past with Eventsourcing. Stop guessing the Future with
                                        Eventmodeling..&quot;</b>
                                </div>
                                <div className={"top-margin"}/>
                                <section>
                                    <desc>Die Videos stammen teilweise aus LinkedIn Beiträgen, teilweise wurden sie
                                        direkt für diese Seite gemacht. Die Videos werden ständig aktualisiert.
                                    </desc>
                                </section>
                                <section>
                                    <div className={"columns is-multiline"}>
                                        <div className={"column"}>
                                            <Video
                                                desc={"Der Information-Completeness-Check ist eine der größten Stärken von Eventmodeling."}
                                                video={"RhCNZXpRz7s"} title={"Information Completeness Check"}/>
                                        </div>
                                        <div className={"column"}>
                                            <Video
                                                desc={"Wie werden Automatisierungen modelliert und wie sieht eine mögliche Umsetzung aus."}
                                                video={"owOZrP-kkPU"} title={"Eventmodeling - Automations"}/>
                                        </div>
                                        <div className={"top-margin column"}>
                                            <Video desc={"Eventmodeling Grundlagen mit State View & State Change"}
                                                   video={"MryiIgtMkMs"}
                                                   title={"Eventmodeling - State View / State Change"}/>
                                        </div>
                                        <div className={"column"}>
                                            <Video
                                                desc={"Wie du mit kleinen Arbeitspaketen zu planbarer Software kommst"}
                                                video={"nLR7l_x9ay4"} title={"Kleine Arbeitspakete sind der Trick"}/>
                                        </div>
                                        <div className={"column"}>
                                            <Video
                                                desc={"Grundlagen von eventsourcing basierten Systemen in weniger als 5 Minuten"}
                                                video={"zpT9H77ZPyo"} title={"Eventsourcing Grundlagen"}/>
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
