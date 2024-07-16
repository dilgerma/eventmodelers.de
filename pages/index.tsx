import {Inter} from 'next/font/google'
import SEO from '@/components/seo';
import Countdown from 'react-countdown';
import Link from 'next/link';
import Video from '@/components/Video';


const inter = Inter({subsets: ['latin']})

export default function Home() {


    // @ts-ignore
    return (
        <div>
            <SEO
                title={"Starthilfe für Eventmodeling und Eventsourcing"}
                description={"Auf diesen Seiten und allen Unterseiten findest du hoffentlich wertvolle Informationen zu Eventmodeling und Eventsourcing. Vor allem findest du konkrete Anleitungen und Sourcecode wir Systeme mit Eventmodeling geplant und mit Eventsourcing umgesetzt werden können."}
                keywords={"Eventmodeling, eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>

            <section className="hero is-primary is-medium">
                <div className="hero-body">
                    <div className="container">
                        <h1 className={"huge"}>Eventmodelers - Software planbar und skalierbar entwickeln mit
                            Eventmodeling.</h1>
                        <h2 className="bigger">
                            Eine &quot;Home Base&quot; für die deutsche Eventmodeling Community.<br/>
                            Business Prozesse verstehen. Software Schritt für Schritt verständlich dokumentieren und
                            umsetzen.
                        </h2>

                    </div>
                </div>
            </section>


            <section className="section">
                <div className="container content">
                    <div className="columns">
                        <div className="column is-two-thirds">

                            <section className="padding bigger">
                                            <h2>Auf dieser Seite findest du alle Informationen, um mit Eventmodeling zu starten.</h2>
                                            <div className={"top-margin"}>
                                                Einen ersten Überblick bekommst du in diesem Blogartikel: <Link
                                                href={"/blog/software-dokumentieren-mit-eventmodelling"}>Software dokumentieren mit
                                                Eventmodeling</Link>
                                            </div>
                                            <div className={"top-margin"}>
                                                Allgemeine Fragen & Antworten findest du in den <Link href={"/eventmodeling-faq"}>FAQ</Link>
                                            </div>
                                            <div className={"top-margin"}>
                                                Das <Link href={"/das-eventmodeling-tutorial"}>Eventmodeling Tutorial</Link> ist ein guter
                                                Startpunkt.
                                            </div>
                                            <div className={"top-margin"}>
                                                Beteilige dich an der <Link href={"/eventmodeling-community-of-practice"}>Community of
                                                Practice</Link>.
                                            </div>
                                            <div className={"top-margin"}>
                                                Softwaresysteme planbar und skalierbar zu entwickeln ist möglich, und zwar nicht nur einmal, sondern
                                                immer.
                                            </div>
                                        </section>

                            <div className={"big-margin-top"}>
                                <h3 className="title is-4">Letzte Posts</h3>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <Link className={"nostyle"}
                                                      href={"/blog/software-dokumentieren-mit-eventmodelling"}>
                                                    <div>
                                                        <h3><span className={"blue"}>Blog:</span> Software dokumentieren
                                                            mit
                                                            Eventmodeling</h3>
                                                        <br/>
                                                        Eventmodeling ist ein wichtiges Werkzeug zur Dokumentation und
                                                        Entwicklung komplexer Softwaresysteme, entwickelt von Adam
                                                        Dymitruk.
                                                        Es konzentriert sich auf Aktionen, Businesslogik und Reaktionen,
                                                        anstatt ein komplexes Modell zu erstellen. Die Bausteine sind
                                                        Commands, die Änderungen initiieren, Events, die die Ergebnisse
                                                        darstellen, und Read Models, die die Daten präsentieren. Die
                                                        visuelle Anordnung dieser Elemente und UI-Mockups erleichtert
                                                        die
                                                        Darstellung von Funktionsblöcken. Diese Methode bietet eine
                                                        stets
                                                        aktuelle Dokumentation, erleichtert das Onboarding und fördert
                                                        die
                                                        Zusammenarbeit im Team.


                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <Link className={"nostyle"}
                                                      href={"/blog/dokumentieren-von-legacy-systemen-mit-eventmodeling"}>
                                                    <div>
                                                        <h3><span className={"blue"}>Blog:</span> Legacy Software
                                                            dokumentieren mit Eventmodeling</h3>
                                                        <br/>
                                                        Eventmodeling eignet sich auch zur Dokumentation von
                                                        Legacy-Systemen. Es hilft, Datenflüsse zu visualisieren,
                                                        Abhängigkeiten aufzuzeigen und das Onboarding zu erleichtern. Es
                                                        lohnt sich besonders, wenn das System weiterhin genutzt und
                                                        entwickelt wird. Auch technisch komplexe Systeme können so klar
                                                        und
                                                        verständlich dokumentiert werden, um zukünftige Verbesserungen
                                                        und
                                                        technische Entscheidungen zu erleichtern. Ein kostenloser
                                                        Eventmodeling Workshop ist der erste Schritt zur Umsetzung.
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <Link href={"/blog"} className="button is-link is-fullwidth">Alle Posts</Link>
                            </div>
                        </div>

                        <div className="column content">

                            <div>
                                <h3 className="title is-4">Workshops / Webinare</h3>
                                <div className={"top-margin"}>
                                    <Link
                                        href={"https://www.linkedin.com/events/fromideatorunningsoftware-inclu7213451160878252032/comments/"}>
                                        <div className="box">
                                            <div>
                                                <h3 className={"has-text-centered"}>17.07.2024 - Webinar kostenlos - &quot;From idea to running
                                                    Software&quot;</h3>
                                                <br/>
                                                <img
                                                    src={"https://media.licdn.com/dms/image/D4D1EAQE-N3zGmNBZpw/event-background-image-crop_720_1280/0/1719826351913?e=1721631600&v=beta&t=YUhCxU9_m5yGtOClT4OmioxL4vtwlFz03N-vluwzFRg"}/>
                                                <div>

                                                    Webinar (english) - kostenlos
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className={"top-margin"}>
                                        <Link href={"/eventmodeling-2x4"}>
                                            <div className="box">
                                                <h3 className={"has-text-centered"}>Workshop - Eventmodeling Grundlagen 2x4</h3>
                                                <div className={"has-text-centered"}>
                                                    <strong>Eventmodeling Grundlagen lernen an zwei Vormittagen</strong>
                                                    <div><img src={"/assets/2x4/2x4.jpeg"}/></div>
                                                    <br/>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className={"top-margin"}/>

                            {/*<div className="box">*/}
                            {/*    <p>*/}
                            {/*        <strong>Eventsourcing Patterns</strong>*/}
                            {/*        <br/>*/}
                            {/*        <br/>*/}
                            {/*        A beginner's guide to starting with event modeling. <a href="#">Learn more</a>*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            {/*<button className="button is-primary is-fullwidth">View All Workshops</button>*/}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section is-hidden-touch">
                <div className="container">
                    <div className="columns">
                        <div className="column video">
                            <Video video={"PLGXGKi9CMzqTDw4Tjukx9ZAZZyu3AcXN8"}
                                   playlist={true}
                                   title={"Eventmodeling Playlist"}/>
                        </div>
                        <div className="column video">
                            <Video video={"2oPX5EF1jwE"} title={"Software mit Eventmodeling"}/>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h3 className="title is-4">Business Offers</h3>
                    <div className="columns">
                        <div className="column">
                            <div className="box">
                                <p>
                                    <strong>Eventmodeling FAQ</strong>
                                    <br/>
                                    Täglich eine Frage zu Eventmodeling & Eventsourcing <Link href="/eventmodeling-faq">Hier
                                    gehs zu den FAQ</Link>
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <p>
                                    <strong>Eventmodeling Tooling</strong>
                                    <br/>
                                    Mit dem Miro Plugin kannst du Softwaresysteme direkt in Miro planen. <Link
                                    href="/eventmodeling-tooling">Hier gehts zum Tooling.</Link>
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <p>
                                    <strong>Eventmodeling Community of Practice</strong>
                                    <br/>
                                    Du lernst mit Eventmodeling zu arbeiten indem du damit arbeitest. <Link
                                    href="/eventmodeling-community-of-practice">Was ist eine Community of
                                    Practice?</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
