import {Inter} from 'next/font/google'
import Card from '../../components/card';
import SEO from '@/components/seo';
import Link from 'next/link';
import Video from '@/components/Video';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                    title={"Was machst du wenn du neue Software übernimmst?"}
                    description={"Wie hilft Eventmodeling dabei, neue Softwaresysteme zu übernehmen? "}
                    keywords={"Eventmodeling FAQ, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">

                    <div className={"big-margin-top"}/>
                    <div className={"topBorder container "}>

                        <h1 className={"has-text-centered"}>Was machst du, wenn du neue Software übernimmst?</h1>

                        <p>
                            Die Frage kam in einem der letzten Webinare auf und der Teilnehmer wollte wissen, wie
                            Eventmodeling hilft, wenn bestehende Softwaresysteme übernommen werden. Egal ob es nur um
                            Wartung oder auch Weiterentwicklung geht.
                        </p>

                        <div className={"top-margin"}/>
                        <p>
                            Typischerweise gibt es kaum oder nur veraltete Dokumentation für bestehende Softwaresysteme
                            (Ausnahmen bestätigen die Regel). Das bedeutet, wir fangen meist bei null an. Der erste
                            Schritt besteht darin, den Status Quo zu erfassen.
                        </p>
                        <p>
                            Im Idealfall habe ich Zugriff auf die Stakeholder und Know-How-Träger. Dann besteht der
                            erste Schritt darin, ein #Eventmodell zu definieren. Je nach Größe des Systems kann
                            dies in wenigen Tagen geschehen.
                        </p>
                        <p>
                            Meist gibt es nicht die eine Person, die das komplette Wissen hat.
                            Stattdessen versuchen wir, das kollektive Wissen über das System zu erfassen.
                        </p>

                        <p>
                            Folgende Fragen versuchen wir dabei zu klären:
                            <ul>
                                <li>Was macht das System?</li>
                                <li>Wie groß ist das System?</li>
                                <li>Mit wem kommuniziert das System?</li>
                                <li>Wie sieht die <a target={"_blank"}
                                                     href={"https://github.com/ddd-crew/context-mapping"}>Kontextmap</a> des
                                    Systems aus?
                                </li>
                                <li>Wer sind die Stakeholder des Systems?</li>
                            </ul>
                        </p>
                        <p>
                            Ab hier zoomen wir in bestimmte Module und verfeinern das Modell. Nicht alle Beteiligten
                            müssen hierbei immer dabei sein. Wir bleiben so lange wie möglich im Modell und gehen nur in
                            den Code, wenn es Wissenslücken gibt. Code in alten Systemen ist schwer zu lesen und sagt
                            wenig darüber aus, was das System wirklich tut.
                        </p>

                        <h3>Wie lange dauert die Modellierung?</h3>
                        <p>
                            Das lässt sich nicht pauschal beantworten. Meistens sehen wir aber schon nach wenigen
                            Sessions bedeutende Ergebnisse. Je nach Struktur des Systems können wir beispielsweise Modul
                            für Modul modellieren.
                        </p>
                        <h3>Was haben wir durch die Modellierung gewonnen?</h3>
                        <p>
                            Jetzt haben wir einen ziemlich guten Überblick über das System und die einzelnen Bausteine.
                            Jetzt können die weiteren Schritte geplant werden:

                            <ul>
                                <li>Sollen Teile extrahiert werden?</li>
                                <li>Sollen Module weiterentwickelt werden?</li>
                                <li>Wie aufwändig wird es, neue Features hinzuzufügen?</li>
                            </ul>

                        </p>
                        <p>
                            Diese Fragen lassen sich jetzt viel besser beantworten, da wir ein gemeinsames Verständnis
                            über das System erlangt haben. Es ist keine Blackbox mehr. Wir sehen es im Eventmodell.
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
