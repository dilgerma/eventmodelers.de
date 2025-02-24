import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';
import Video from '@/components/Video';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                    title={"Eventmodeling und Eventsourcing Newsletter"}
                    description={"Auf dieser Seite werden alle Newsletter mit 1-2 Wochen Verzögerung geposted"}
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
                            <div className={"nolist"}>


                                <h1>
                                    <div className={"blue has-text-centered"}>Eventmodeling & Eventsourcing Weekly Newsletter
                                    </div>
                                </h1>

                                <div className={"top-margin"}/>
                                <section>
                                    <div className={"columns is-multiline"}>
                                        <div className={"column"}>
                                            <div className={"notification is-light is-info"}>
                                                <h3>Newsletter wöchentlich direkt ins Postfach?</h3>
                                                <div>Know-How zu Event Sourcing, Event Modeling & Vertical Slice Architekturen</div>
                                                <a className={"top-margin button is-info"} href={"https://newsletter.nebulit.de"}>Hier anmelden</a>
                                            </div>
                                            <a href={"https://ckarchive.com/b/8kuqhoh0877qrc3n66mnqfkwoq999f3"}>Ausgabe
                                                1 - Aggregateless Eventsourcing</a>
                                            <p>
                                                Die Seite behandelt das Konzept des aggregatlosen Event Sourcing und
                                                seine Rolle bei der Festlegung dynamischer Konsistenzgrenzen. Anstatt
                                                sich auf Aggregate zur Sicherstellung der Konsistenz zu verlassen,
                                                bietet dieser Ansatz mehr Flexibilität und Skalierbarkeit in komplexen
                                                Systemen. Die Einführung dynamischer Konsistenzgrenzen wird als Lösung
                                                für eine effektivere Handhabung verteilter Systeme dargestellt.
                                            </p>
                                            <a href="https://ckarchive.com/b/75u7h8hkg88owb6rgg7rlaw34m666cn">Ausgabe 2
                                                - Talking about Business Policies using Given / When / Then</a>
                                            <p>
                                                In dieser Ausgabe wird erläutert, wie man Geschäftsrichtlinien mit der
                                                Struktur &quot;Given / When / Then&qupt; kommuniziert. Dieses Modell hilft dabei,
                                                komplexe Geschäftslogik klar zu formulieren und fördert das Verständnis
                                                zwischen Fachabteilungen und Entwicklern. Es wird gezeigt, wie Event
                                                Modeling verwendet werden kann, um Geschäftsprozesse präzise und
                                                nachvollziehbar abzubilden.
                                            </p>
                                            <a href="https://ckarchive.com/b/v8u3hrhx5pld7clq229q5svnkpllls9">Ausgabe 3
                                                - How to model external API Calls</a>
                                            <p>
                                                Diese Ausgabe beantwortet eine Frage aus der Community zur Modellierung
                                                von externen API-Aufrufen im Event Modeling. Es werden Strategien
                                                vorgestellt, wie solche Aufrufe effektiv in Event Sourcing-Prozesse
                                                integriert werden können, um die Kommunikation zwischen internen und
                                                externen Systemen zu optimieren und Konsistenz zu gewährleisten.
                                            </p>
                                            <a href="https://ckarchive.com/b/v8u3hrhx59vz7blq229q5svnp6mllh9">Ausgabe 4
                                                - Some Learnings from our Workshop</a>
                                            <p>
                                                In dieser Ausgabe werden wichtige Erkenntnisse aus einem Workshop
                                                geteilt, der sich auf Event Modeling und Event Sourcing konzentrierte.
                                                Es werden wertvolle Erfahrungen und Best Practices aufgezeigt, die den
                                                Teilnehmern geholfen haben, das Verständnis für diese Techniken zu
                                                vertiefen und die Anwendung in der Praxis zu verbessern.
                                            </p>

                                            <a href="https://ckarchive.com/b/n4uohvhxwxwk3i7q339qeh630lkggil">Ausgabe 5
                                                - How simple should a Command Handler be?</a>
                                            <p>
                                                In dieser Ausgabe wird untersucht, wie einfach ein Command Handler sein
                                                sollte. Es werden Überlegungen angestellt, wie der Handler sowohl
                                                flexibel als auch einfach gehalten werden kann, ohne unnötige
                                                Komplexität einzuführen. Ziel ist es, den richtigen Grad an Einfachheit
                                                zu finden, um eine klare Trennung der Verantwortlichkeiten zu
                                                gewährleisten.
                                            </p>
                                            <a href="https://ckarchive.com/b/wvu2hghk9o79oc9r552rqtn38mkxxa8">Ausgabe 6
                                                - 7 Eventmodeling-&quot;Tricks&quot; I learned the hard way</a>
                                            <p>
                                                In dieser Ausgabe werden sieben wichtige Event Modeling-Tricks
                                                vorgestellt, die der Autor auf die harte Tour gelernt hat. Diese
                                                Erkenntnisse helfen dabei, häufige Fehler zu vermeiden und bewährte
                                                Methoden anzuwenden, um die Modellierung effizienter und fehlerfreier zu
                                                gestalten.
                                            </p>
                                            <a href="https://ckarchive.com/b/d0ueh0hozd28xtk4xx64otzwrkq44al">Ausgabe
                                                7.1 - A look back at 2024</a>
                                            <p>
                                                Diese Ausgabe blickt auf das Jahr 2024 zurück und reflektiert über die
                                                wichtigsten Entwicklungen und Erkenntnisse im Bereich Event Modeling und
                                                Event Sourcing. Sie fasst zentrale Ereignisse zusammen und zieht Lehren
                                                aus den vergangenen Monaten, um zukünftige Ansätze zu verbessern.
                                            </p>
                                            <a href="https://ckarchive.com/b/mvu7h5hqkv24piv5oo45wirzm30qqf3">Ausgabe
                                                7.2 - A look towards at 2025</a>
                                            <p>
                                                In dieser Ausgabe wird ein Blick auf 2025 geworfen und die zukünftigen
                                                Entwicklungen im Bereich Event Modeling und Event Sourcing diskutiert.
                                                Es werden Erwartungen und geplante Neuerungen vorgestellt, die darauf
                                                abzielen, die Praktiken und Technologien weiter zu verbessern und neue
                                                Herausforderungen zu meistern.
                                            </p>
                                            <a href="https://ckarchive.com/b/5quvh7hnp89qqhp5xxd52a9pd3l44an">Ausgabe 8
                                                - Should we re-use Aggregate-State in Projections?</a>
                                            <p>
                                                In dieser Ausgabe wird die Frage aufgeworfen, ob es sinnvoll ist, den
                                                Aggregate-Zustand in Projektionen wiederzuverwenden. Es wird diskutiert,
                                                welche Vor- und Nachteile diese Praxis mit sich bringt und wie sie die
                                                Architektur von Event Sourcing-Systemen beeinflussen kann. Ziel ist es,
                                                eine fundierte Entscheidung über die Wiederverwendbarkeit des
                                                Aggregate-Zustands zu treffen.
                                            </p>


                                            <a href="https://ckarchive.com/b/p9ueh9h2kv2mnfm6ggw6kapz49033hr">Ausgabe 9
                                                - Choreography or Orchestration? Or is there something else?</a>
                                            <p>
                                                In dieser Ausgabe wird die Frage behandelt, ob Choreografie oder
                                                Orchestrierung die bessere Methode für Event-driven-Architekturen ist
                                                oder ob ein anderer Ansatz vorteilhafter sein könnte. Es werden
                                                verschiedene Ansätze und deren Vor- und Nachteile untersucht.
                                            </p>

                                            <a href="https://ckarchive.com/b/qdu8h7h4746n5tzwnnmw7u8l5rdkkb4">Ausgabe 10
                                                - Maintaining your Models over time</a>
                                            <p>
                                                Diese Ausgabe beschäftigt sich mit der langfristigen Pflege von Event
                                                Models. Es werden Best Practices und Herausforderungen diskutiert, um
                                                sicherzustellen, dass Modelle über Zeit hinweg aktuell und funktional
                                                bleiben.
                                            </p>

                                            <a href="https://ckarchive.com/b/p9ueh9h234vvltm6ggw6kapz49033hr">Ausgabe 11
                                                - Code-Reuse - Good or Bad? Here is my answer</a>
                                            <p>
                                                In dieser Ausgabe wird die Frage erörtert, ob Code-Wiederverwendung in
                                                Event-driven-Architekturen sinnvoll oder problematisch ist. Der Autor
                                                gibt seine Meinung zu den Vor- und Nachteilen von Code-Wiederverwendung.
                                            </p>

                                            <a href="https://ckarchive.com/b/lmuehmhn07e0khd7kkm78c8rw5000tg">Ausgabe 12
                                                - How to model branches in Event Modeling</a>
                                            <p>
                                                Diese Ausgabe erklärt, wie man Verzweigungen im Event Modeling richtig
                                                modelliert, um komplexe Geschäftsprozesse effizient abzubilden. Es
                                                werden konkrete Methoden und Tipps vorgestellt.
                                            </p>

                                            <a href="https://ckarchive.com/b/27u2hoh8vm8ogb57nnw7ztgl9n444hg">Ausgabe 13
                                                - Should you model external systems?</a>
                                            <p>
                                                In dieser Ausgabe wird die Frage behandelt, ob und wie externe Systeme
                                                im Event Modeling berücksichtigt werden sollten. Es wird diskutiert, ob
                                                die Modellierung externer Systeme sinnvoll ist oder zu unnötiger
                                                Komplexität führt.
                                            </p>

                                        </div>
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
