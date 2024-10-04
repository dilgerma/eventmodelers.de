import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';
import Video from '@/components/Video';
import LoomVideo from '@/components/LoomVideo';

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
                                        <div className={"column is-6"}>
                                            <Video
                                                desc={"Der Information-Completeness-Check ist eine der größten Stärken von Eventmodeling."}
                                                video={"RhCNZXpRz7s"} title={"Information Completeness Check"}/>
                                        </div>
                                        <div className={"column is-6"}>
                                            <Video
                                                desc={"Wie werden Automatisierungen modelliert und wie sieht eine mögliche Umsetzung aus."}
                                                video={"owOZrP-kkPU"} title={"Eventmodeling - Automations"}/>
                                        </div>
                                        <div className={"top-margin column"}>
                                            <Video desc={"Eventmodeling Grundlagen mit State View & State Change"}
                                                   video={"MryiIgtMkMs"}
                                                   title={"Eventmodeling - State View / State Change"}/>
                                        </div>
                                        <div className={"column is-6"}>
                                            <Video
                                                desc={"Wie du mit kleinen Arbeitspaketen zu planbarer Software kommst"}
                                                video={"nLR7l_x9ay4"} title={"Kleine Arbeitspakete sind der Trick"}/>
                                        </div>
                                        <div className={"column is-6"}>
                                            <Video
                                                desc={"Grundlagen von eventsourcing basierten Systemen in weniger als 5 Minuten"}
                                                video={"zpT9H77ZPyo"} title={"Eventsourcing Grundlagen"}/>
                                        </div>

                                        <div className={"column is-6"}>
                                            <LoomVideo
                                                video={"64eb9a60bab74776a50754b3516b7c90"}
                                                desc={"Using AI to speed up planning systems"}
                                                title={"Using AI to speed up planning systems"}/>
                                        </div>

                                        <div className={"column is-6"}>
                                            <LoomVideo
                                                video={"38047c0dc3474820bbac6a0f78f3f4a6"}
                                                desc={"The Power of Given / When / Then"}
                                                title={"The Power of Given / When / Then"}/>
                                        </div>

                                        <div className={"column is-6"}>
                                            <LoomVideo
                                                video={"e200e417024b4b4b8d3a4bb58f69d823"}
                                                desc={"Building State Views and Slices for Event Handling"}
                                                title={"Building State Views and Slices for Event Handling"}/>
                                        </div>

                                        <div className={"column is-6"}>
                                            <LoomVideo
                                                video={"da9830b6903c4590b35b8cbbae3e1fa3"}
                                                desc={"Exploring Layouting in Miro Development"}
                                                title={"Exploring Layouting in Miro Development"}/>
                                        </div>

                                        <div className={"column is-6"}>
                                            <LoomVideo
                                                video={"da6b20a51f7c4338b289bbdcc3dd8936"}
                                                desc={"Configuring Elements for Plugin Integration"}
                                                title={"Configuring Elements for Plugin Integration"}/>
                                        </div>

                                        <div className={"column is-6"}>
                                            <LoomVideo
                                                video={"bf77466e592848098008928403a2b9fc"}
                                                desc={"System Boundaries Modeling"}
                                                title={"System Boundaries Modeling"}/>
                                        </div>

                                        <div className={"column is-6"}>
                                            <LoomVideo
                                                video={"c95ee1cade8e498389cbc169a93d04bb"}
                                                desc={"Introduction to Miro Tooling"}
                                                title={"Introduction to Miro Tooling"}/>
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
