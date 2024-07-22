import {Inter} from 'next/font/google'
import Card from '../../components/card';
import SEO from '@/components/seo';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                                   title={"Eventmodeling Fachliteratur?"}
                               description={"Was sind die passenden Bücher für Eventmodeling."} keywords={"Eventmodeling FAQ, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>
            </div>
            <div className="content bigger">


                <div className="contentElement">

<div className={"big-margin-top"}/>
                    <div className={"topBorder container "}>

                        <h3 className={"has-text-centered"}>Welche Bücher sind als Fachliteratur zu empfehlen?</h3>

                        <p>
                            Tatsächlich gibt es für Eventmodeling selber aktuell (noch) keine Bücher.
                        </p>
                        <p>
                            <a href={"https://www.linkedin.com/in/eventmodeling/"}>Adam Dymitruk</a> hat ein Buch
                            angekündigt. Aktuell ist noch offen, wann genau es erscheinen wird.
                        </p>
                        <p>
                            Generell bieten sich Bücher über Domain-Driven-Design an, um mit dem richtigen Mindset an
                            Projekte heranzugehen.
                        </p>
                        <h3>Hier ist eine Liste ( ohne Anspruch auf Vollständigkeit )</h3>
                        <p>
                            <a href="https://www.amazon.de/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/">Eric
                                Evans - Domain Driven Design</a>
                        </p>

                        <p>
                            <a href="https://www.amazon.de/Learning-Domain-Driven-Design-Aligning-Architecture/dp/1098100131">Vlad
                                Khononov - Learning Domain Driven Design</a>
                        </p>
                        <p>
                            <a href="https://www.amazon.de/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577">Vaughn
                                Vernon - Implementing Domain Driven Design</a>
                        </p>
                        <p>
                            <a href="https://www.amazon.de/Team-Topologies-Organizing-Business-Technology/dp/1942788819">Matthew
                                Skelton - Team Topologies</a>
                        </p>
                        <p>
                            <a href="https://leanpub.com/introducing_eventstorming">Alberto Brandolini - Introducing
                                Eventstorming</a>
                        </p>
                        <p>
                            <Link href="/das-eventsourcing-buch">Martin Dilger - Understanding Eventsourcing</Link>
                        </p>


                    </div>
                    <div className={"top-margin"}/>
                    <div className={"has-text-centered bigger"}>
                        <Link href={"/eventmodeling-faq"}>Zurück zu den FAQ</Link>
                    </div>
                    <div className={"top-margin"}/>
                </div>


            </div>
        </div>
    )
}
