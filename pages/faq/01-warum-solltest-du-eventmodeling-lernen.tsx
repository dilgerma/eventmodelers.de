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
                                   title={"Warum solltest du Eventmodeling lernen?"}
                               description={"Eventmodeling bietet die eine einfache Möglichkeit, über Software und die Anforderungen an Software zu sprechen. Die Zeitinvestition lohnt sich."} keywords={"Eventmodeling FAQ, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>
            </div>
            <div className="content bigger">


                <div className="contentElement">

<div className={"big-margin-top"}/>
                    <div className={"topBorder container "}>

                       <h3 className={"has-text-centered"}>Warum solltest du Eventmodeling lernen?</h3>

                        <p>
                        Eventmodeling schließt die größte Lücke, die die IT-Industrie seit Jahrzehnten plagt: Kommunikation.
                        </p>
                        <p>
                        Eine der Herausforderungen, die bisher nicht gelöst wurde, ist die Definition einer gemeinsamen Sprache für alle Projektbeteiligten. Eventmodeling bietet genau diese Sprache und ermöglicht es, Anforderungen so klar und präzise zu beschreiben, dass sowohl die Fachseite als auch die Entwicklung genau verstehen, was gebaut werden soll.
                        </p>
                        <p>
                        Man benötigt keine speziellen Fähigkeiten, um innerhalb von einer Minute zu verstehen, welche Funktionen die TODO-App abbildet.
                        </p>
                        <p>
                            <img src={"/assets/faq/shot.png"}/>

                        </p>
                        <p>
                        Mit Eventmodeling lässt sich Software Schritt für Schritt darstellen und in kleine Teilschritte zerlegen, die nacheinander abgearbeitet werden können. Dadurch entsteht die &quot;Story&quot; des Systems, die tatsächlich von links nach rechts gelesen und schließlich auch umgesetzt werden kann.
                        </p>
                        <p>
                        Das Erstaunliche dabei ist, dass die Arbeit mit Eventmodeling sehr nah an der eigentlichen Implementierung ist, ohne jemals über konkrete Technik zu sprechen.
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
