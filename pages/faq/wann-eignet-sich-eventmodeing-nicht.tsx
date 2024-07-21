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
                    title={"Wann eignet sich Eventmodeling nicht?"}
                    description={"Oft wird die Frage gestellt, für welche Arten von Systemen sich Evnetmodeling speziell eignet, oder umgekehrt, wann sich Eventmodeling überhaupt nicht eignet."}
                    keywords={"Eventmodeling FAQ, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">

                    <div className={"big-margin-top"}/>
                    <div className={"topBorder container "}>

                        <h1 className={"has-text-centered"}>Für welche Systeme eignet sich Eventmodeling nicht?</h1>

                        <p>
                            Um diese Fragen korrekt zu beantworten sollten wir einen Blick in die Natur von
                            Softwaresystemen werfen. Jedes Softwaresystem, egal wie komplex lässt sich als eine Folge
                            von Status-Änderungen beschreiben, die nacheinander ausgeführt werden.
                        </p>
                        <div className={"has-text-centered"}>
                            <img width={"50%"} src={"/assets/faq/state-changes.png"}
                                 alt="system state changes"/>
                        </div>
                        <div className={"has-text-centered"}>
                            <small><b>Jedes</b> System lässt sich als eine Folge von Statusänderungen
                                beschreiben</small>
                        </div>
                        <div className={"top-margin"}/>
                        <div>
                            Mit Eventmodeling beschreiben wir Softwaresyteme durch Aktionen und Statusänderungen in
                            einer linearen zeitlichen Abfolge.
                        </div>

                        <div>Jeder Schreibvorgang in eine Datenbank kann als Statusübergang betrachtet werden.
                            Es &quot;ändert&quot; sich etwas im System, und diese Änderung ist auch noch verfügbar, wenn
                            ads System neu gestartet wird.
                        </div>
                        <div className={"top-margin"}/>
                        <p>
                            Je komplexter das System, desto mehr Statusübergänge sind nötig. Nichtsdesto trotz kann
                            jeder Prozess als eine Folge von &quot;einfachen &qupt; Statusübergängen beschrieben werden.
                        </p>
                        <p>
                            Wenn sich aber jedes System als eine Folge von Statusübergängen beschreiben lässt, und wir
                            mit Eventmodeling Statusübergänge zeitlich geordnet beschreiben folgt daraus, dass
                            sich <b>jedes</b> System mit Eventmodeling beschreiben lässt.
                        </p>

                        <p className={"has-text-centered"}>
                            <img width={"50%"} src={"/assets/faq/state-change.png"}
                                 alt="system state change with command and event"/>
                        </p>

                        <p>
                            Durch die Hinzunahem von UX-Elementen direkt ins Modell wird oft angenommen, dass sich Eventmodeling nur für &quot;Task-based&quot;-UIs eignet, als Systeme die direkt durch Aktionen des Users gesteuert werden. Das ist allerdings nicht korrekt, denn durch die Möglichkeit der Automatisierungen können auch beliebige asynchrone Hintergrundprozesse im Eventmodell beschrieben werden.
                        </p>
                        <p>
                            Ich würde generell einfach sagen, es gibt eigentlich kein System dass nicht vom Einsatz von Eventmodeling profitiert. Eine gute Planung ist 80% des Erfolgs.
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
