import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                                     title={"Der Eventmodeling Workshop"}
                                 description={"Der Eventmodeling Workshop wird zusammen mit deinem Team durchgeführt. Wir entdecken gemeinsam die fachliche Domäne und lösen die Knoten, die euch daran hindern, zu skalieren."} keywords={"Workshop, Eventmodeling Training, eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>

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
                                    <div className={"blue has-text-centered"}>Eventmodeling Workshop - <br/>wir
                                        finden gemeinsam die echten Anforderungen an deine Software
                                    </div>
                                </h1>


                                <div className={"has-text-centered top-margin"}>
                                    <b>&quot;Niemand sollte mit unklaren Requirements arbeiten müssen.&quot;</b>
                                </div>


                                {/*<section style={{"padding": "15px"}} className="hero video">*/}
                                {/*    <div style={{"padding": "15px"}} className="hero-body">*/}
                                {/*        <video id="myVideo" autoPlay loop muted*/}
                                {/*               preload="none">*/}
                                {/*            <source src="/assets/flow.mp4" type="video/mp4"/>*/}
                                {/*        </video>*/}
                                {/*    </div>*/}
                                {/*</section>*/}

                                <div className={"has-text-centered top-margin"}>
                                    <div><b>Dauer:</b> 1 - 2 Tage</div>
                                    <div><b>Wo: </b>Remote- oder Vor-Ort</div>
                                    <div><b>Zielgruppe: </b>Alle</div>
                                </div>
                                <p className={"top-margin has-text-centered"}>
                                    <a target="_blank"
                                       href="https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2"
                                       className={"button is-success"}>
                                        <i className="fa-solid fa-phone padding"></i>
                                        <span className={"bigger"}>Informiere dich unverbindlich</span></a>
                                </p>

                                <p className={"top-margin has-text-centered"}>
                                    <b>Direkt anwendbares Wissen.</b><br/>
                                    Im Workshop erklären wir die grundsätzliche Idee von Eventmodeling <br/>
                                    Sie lernen die Notation und die 4 wichtigen Patterns.<br/>
                                    Es ist keinerlei technisches Know How notwendig.<br/>
                                    <b>Nach einer kurzen Einführung starten wir direkt mit Analyse des
                                        Projektes.</b><br/>
                                    Wir finden Lücken in den Anforderungen und beseitigen Unklarheiten.
                                </p>
                                <p className={"has-text-centered"}>So <b>einfach</b> hast du
                                    Softwareentwicklung wahrscheinlich noch
                                    nie gesehen.</p>

                                <div className={"padding top-margin has-text-centered"}>
                                    <p>✅ &quot;echte&quot; Anforderungen erfassen mit Eventmodeling </p>
                                    <p>✅ Notation</p>
                                    <p>✅ Miro für Requirements Engineering.</p>
                                    <p>✅ Die 4 notwendigen Pattern</p>
                                    <p>✅ Erste &quot;Aha&quot; Momente schon nach einer Stunde</p>
                                    <p>✅ Erste umsetzbare Anforderungen nach einem Tag</p>
                                </div>

                                <div className={"has-text-centered top-margin"}>
                                    <img width={"50%"} src={"/assets/training/eventmodell2.png"}/>
                                </div>

                                <p className={"top-margin has-text-centered"}>
                                    <a target="_blank"
                                       href="https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2"
                                       className={"button is-success"}>
                                        <i className="fa-solid fa-phone padding"></i>
                                        <span
                                            className={"bigger"}>Informiere dich unverbindlich.</span></a>
                                </p>


                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
