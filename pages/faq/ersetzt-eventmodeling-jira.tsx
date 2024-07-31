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
                    title={"Ersetzt Eventmodeling Jira?"}
                    description={"Hier klären wir die Frage, ob das Evenmodell für das komplette Projektmanagement verwendet werden kann.."}
                    keywords={"Eventmodeling FAQ, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">

                    <div className={"big-margin-top"}/>
                    <div className={"topBorder container "}>

                        <h1 className={"has-text-centered"}>Ersetzt ein Eventmodell Jira?</h1>

                        <p>
                            Jira wird in vielen Unternehmen als Standardwerkzeug für agile und auch traditionelle
                            Softwareentwicklungsprojekte verwendet.
                        </p>

                        <div className={"top-margin"}/>
                        <div>
                            Egal ob mit Scrum-Boards oder Kanban-Boards, jeder Softwareentwickler ist wahrscheinlich
                            schonmal mit Jira in Berührung gekommen.
                        </div>
                        <div>
                            Immer öfter taucht allerdings die Frage auf, ob das Eventmodell alleine ausreichend
                            ist für die Projektplanung. Und natürlich geht auch das.
                        </div>
                        <div className={"top-margin"}/>

                        <div>
                            Generell aber gilt - ob auf Werkzeuge wie Jira verzichtet werden kann ist gar nicht so sehr
                            eine technische Frage, sondern hängt eher primär davon ab, welche Prozesse über Jira im
                            UNternehmen abgebildet sind. Ganz häufig hängt viel mehr daran als die einfache
                            Sprint-Planung eines agilen Teams.
                        </div>

                        <div>
                            Im Eventmodel arbeiten wir mit Slices. Slices sind sind typischerweise Schreib- und
                            Leseoperationen inklusive der UI im System. Mehr Details dazu findest du auch <Link
                            href={"/blog/software-dokumentieren-mit-eventmodelling"}>hier im Blog.</Link>
                        </div>
                        <div className={"top-margin"}/>

                        <div>Ein Slice kann prinzipiell als ein Arbeitspaket oder auch eine User Story betrachtet
                            werden, die unabhängig von allen anderen User Stories umgesetzt werden kann.
                        </div>
                        <div className={"top-margin"}/>

                        <div>Ein typisches System besteht aus hunderten von Slices. Je lägner ads Team jedoch an der
                            Software arbeitet, desto mehr kristallisiert sich eine Zahl heraus.
                        </div>

                        <div className={"top-margin"}/>
                        <div className={"huge has-text-centered"}>Slice Average Processing Time</div>
                        <div className={"top-margin"}/>
                        <div>Wie lange braucht das Team durchschnittlich um einen Slice umzusetzen? Es zeigt sich hier,
                            dass diese Zahl relativ genau ist, weil die Größe der Slices so gering ist. Kleine Dinge
                            lassen sich besser abschätzen und umsetzen. Es gibt weniger Überraschungen.
                        </div>

                        <div className={"top-margin"}/>
                        <div>Statt also mit T-Shirt Sizes oder Manntagen zu schätzen, können wir auch einfach die
                            verbleibenden Slices im System zusammenzählen und mit dem Slice-Faktor multiplizeren.
                        </div>

                        <div className={"top-margin"}/>
                        <div>Sind also 50 Slices von 100 umgesetzt, haben wir ziemlich sicher 50% der Anwendung
                            geschafft.
                        </div>
                        <p className={"has-text-centered"}>
                            <img width={"50%"} src={"/assets/faq/done.png"}
                                 alt="umgesetzte Slices"/>
                        </p>
                        <div>Umgesetzte Slices lassen sich im Eventmodell grün markieren</div>
                        <div>Der Fortschritt ist erstaunlich genau und basiert allein auf Fakten.</div>


                        <div className={"top-margin"}/>
                        <div>Dei Arbeit mit Slices erlaubt es sogar manchen Unternehmen (inklusive der <a
                            href={"https://www.nebulit.de"}>Nebulit GmbH</a>), Softwareprojekte zum Fixpreis anzubieten.
                        </div>
                        <div>Ob dies allein reicht um auf eine Task-Managemenet-Software wie Jira zu verzichten ist sicherlich Projektabhängig und bedarf weiterer Analysen, eine bessere und genauere Planbarkeit ist aber garantiert.
                        </div>
                        <div className={"top-margin"}/>
                        <div className={"has-text-centered bigger"}>
                            <Link href={"/eventmodeling-faq"}>Zurück zu den FAQ</Link>
                        </div>
                        <div className={"top-margin"}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
