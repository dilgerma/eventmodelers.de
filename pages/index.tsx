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
                        <h1 className={"huge"}>Die moderne Art Software-Systeme zu designen</h1>
                        <h2 className="bigger">
                            Modellieren ist das neue Coden. AI Integration mit Slice-based Architekturen, Software-Modellierung und Event-Sourcing.
                        </h2>

                    </div>
                </div>
            </section>


            <section className="section">
                <div className="container content">
                    <div className="columns">
                        <div className="column is-two-thirds">

                            <section className="padding bigger">
                                <h2></h2>
                                <div className={"top-margin"}>
                                    Wie entwickelst du Softwaresysteme planbar und konstant mit hoher Qualität?
                                </div>
                                <div className={"top-margin"}>
                                    Einen ersten Überblick bekommst du in diesem Blogartikel: <Link
                                    href={"/blog/software-dokumentieren-mit-eventmodelling"}>Software dokumentieren mit
                                    Eventmodeling</Link>
                                </div>
                                <div className={"top-margin"}>
                                    Allgemeine Fragen & Antworten findest du in den <Link
                                    href={"/eventmodeling-faq"}>FAQ für Eventmodeling</Link> und den
                                    &nbsp;<Link
                                        href={"/eventsourcing-faq"}>FAQ für Eventsourcing</Link>
                                </div>
                                <div className={"top-margin"}>
                                    Das <Link href={"/das-eventmodeling-tutorial"}>Eventmodeling Tutorial</Link> ist ein
                                    guter
                                    Startpunkt.
                                </div>
                                <div className={"top-margin"}>
                                    Mit dem <Link href={"/eventmodeling-tooling"}>Eventmodeling Tooling</Link> kannst du
                                    direkt losmodellieren. Du brauchst nur einen <i>kostenlosen</i> Miro Account.
                                </div>
                                <div className={"top-margin"}>Du suchst jemanden, der dich bei der Einführung und Umsetzung unterstützt? Die <a href={"www.nebulit.de"}>Nebulit GmbH</a> ist spezialisiert auf die Arbeit mit <b>Eventmodeling</b> und bietet auch Schulungen für komplette Softwareteams.</div>

                                <div className={"top-margin"}>
                                    Softwaresysteme planbar und skalierbar zu entwickeln ist möglich, und zwar nicht nur
                                    einmal, sondern
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
                                        href={"https://training.nebulit.de/software-planen-mit-eventmodeling/"}>
                                        <div className="box">
                                            <div>
                                                <h3 className={"has-text-centered"}>Workshop: Software planen mit Eventmodeling</h3>
                                                <br/>
                                                <img
                                                    src={"/assets/webinar.png"}/>
                                            </div>
                                        </div>
                                    </Link>

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
