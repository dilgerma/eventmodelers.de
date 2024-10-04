import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';
import Video from '@/components/Video';
import React from "react";
import SocialMedia from '@/components/SocialMedia';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                    title={"Eventmodeling und Eventsourcing Social Media Entries"}
                    description={"Auf dieser Seite findest du interessante Einträge aus Social Media Plattformen wie LinkedIn, Twitter etc. inkl. Referenzen auf die originalen Posts."}
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
                                    <div className={"blue has-text-centered"}>Eventmodeling & Eventsourcing Social Media
                                    </div>
                                </h1>

                                <h3>
                                    interessante Social Media Posts aus LinkedIn, X etc.
                                </h3>

                                <div className={"top-margin"}/>

                                <section>
                                    <div className={"columns is-multiline"}>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7242786361907331073"
                                                height="1695" width="504" frameBorder="0"
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7243491175532253184"
                                                height="1155" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7245839614538579970"
                                                height="1488" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7239340090957705216"
                                                height="1214" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7247874957664280577"
                                                height="1195" width="504" frameBorder="0"
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7245367355734708224"
                                                height="1712" width="504" frameBorder="0"
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7240255818720321536"
                                                height="1562" width="504" frameBorder="0"
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>

                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7237718017248231424"
                                                height="1628" width="504" frameBorder="0"
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>

                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7235012528307617792"
                                                height="1821" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7232662802551762945"
                                                height="1968" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7229934713233174529"
                                                height="1680" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7227418313025327104"
                                                height="1711" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7226334370171617280"
                                                height="1777" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7244195645589213184"
                                                height="987" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        <div className={"column is-6"}>
                                            <iframe
                                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7222205768320577536"
                                                height="1495" width="504" frameBorder="0" 
                                                title="Eingebetteter Beitrag"></iframe>

                                        </div>
                                        ´
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
