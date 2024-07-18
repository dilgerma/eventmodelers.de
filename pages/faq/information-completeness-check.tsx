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
                    title={"Eventmodeling Information Completeness Check?"}
                    description={"Wie stellen wir mit Eventmodeling sicher, dass alle notwendigen Daten im Modell verfügbar sind? "}
                    keywords={"Eventmodeling FAQ, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">

                    <div className={"big-margin-top"}/>
                    <div className={"topBorder container "}>

                        <h1 className={"has-text-centered"}>Was ist der Information Completeness Check?</h1>

                        <p>
                            Was Eventmodeling bietet, ist eine klare und prägnante Sprache, die nur aus vier Mustern
                            besteht, um die einzelnen Schritte in einem Softwaresystem auf eine leicht verständliche
                            Weise zu beschreiben. Darüber hinaus stellt es automatisch ein entscheidendes Werkzeug zur
                            Überprüfung und Validierung von Annahmen bereit: den Information-Completeness-Check.
                            Was Eventmodeling bietet, ist eine klare und prägnante Sprache, die nur aus vier Patterns
                            besteht, um die einzelnen Schritte in einem Softwaresystem auf eine leicht verständliche
                            Weise zu beschreiben. Darüber hinaus stellt es automatisch ein entscheidendes Werkzeug zur
                            Überprüfung und Validierung von Annahmen bereit: der Information-Completeness-Check.
                        </p>
                        <div className={"has-text-centered"}>
                            <img width={"50%"} src={"/assets/faq/data-completeness-check.png"}
                                 alt="information completeness check"/>
                        </div>
                        <div className={"has-text-centered"}>
                            <small>Das Command liefert nicht alle Felder für das Event</small>
                        </div>
                        <div className={"top-margin"}/>
                        <p>
                            Read-Modelle basieren auf Daten die bereits im System in Form von Events gespeichert sind.
                            Dies stellt sicher, dass wir niemals davon ausgehen, dass Daten verfügbar sind, ohne zu
                            überprüfen, ob dies tatsächlich der Fall ist. Ein entscheidender Aspekt dafür, warum
                            Softwareprojekte verzögert werden, sind falsche Annahmen über Daten. Wir nehmen an, dass
                            Daten verfügbar sind, und erkennen erst bei der Implementierung des Systems, dass dies nicht
                            der Fall ist. Es ist viel zu einfach, Annahmen zu machen.
                        </p>
                        <p>
                            Der Information-Completeness-Check zwingt dazu, jedes einzelne Attribut in einem Read-Modell
                            zu betrachten und für jedes Attribut zu überprüfen, ob die Daten durch ein Event
                            bereitgestellt werden.
                        </p>
                        <p>
                            Der Information-Completeness-Check funktioniert nicht nur für Read-Modelle und
                            Zustandsansichten, sondern auch für Zustandsänderungen mit Commands. Für jedes Attribut in
                            einem Event muss automatisch sichergestellt werden, dass die Daten vom Command
                            bereitgestellt werden. Commsnds müssen alle Daten bereitstellen, die notwendig sind, um ein
                            Event zu speichern.
                        </p>
                        <p>
                            <Video title={"Information Completeness Check"} video={"RhCNZXpRz7s"}></Video>
                        </p>
                        <p>
                            Das <a href={"https://eventmodelers.de/eventmodeling-tooling"}>Nebulit
                            Miro-Tooling</a> bietet den live Information-Completeness-Check. Immer wenn Du zwei Elemente
                            verbindest, überprüft es automatisch, ob alle Daten im Ziel aus den verbundenen Quellen
                            verfügbar sind.
                        </p>
                        <p>
                            Sobald Daten fehlen, wird die Verbindung automatisch rot dargestellt. Es kann nicht mit der
                            Implementierung begonnen werden. Es ist enorm vorteilhaft, auch in einem umfangreicheren
                            Event-Modell schnell sehen zu können, dass alle Pfeile schwarz sind und Sie die Bestätigung
                            haben, dass alle Daten verfügbar sind.
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
