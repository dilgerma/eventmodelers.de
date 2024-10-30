import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '../app/page.module.css'
import Card from '../components/card';
import Navigation from '../components/navigation';
import Layout from '@/Layout/layout';
import SEO from '@/components/seo';
import Banner from '@/components/banner';
import Link from 'next/link';
import EventModelingFeatures from '@/components/EventModelingFeatures';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={""}>
                <SEO
                    title={"Eventmodeling Accelerate-Tools"}
                    description={"Eventmodeling und Miro passen perfekt zusammen. Die kollaborative Arbeit auf dem Whiteboard erlaubt es, schnell und effektiv zusammenzuarbeiten. Mit unserem Miro Tooling könnnen einfach Eventmodelle beliebiger Größe erstellt und weiterverareitet werden."}
                    keywords={"eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>

                <div className="contentElement  content">

                    <div className={"headline-divider"}/>

                    <h1 className={"has-text-centered super-big blue"}>
                        Software planen und umsetzen mit Eventmodeling
                    </h1>

                    <div className={"bigger has-text-centered blue"}>
                        Miro Tooling installieren.
                    </div>
                    <div className={"bigger has-text-centered blue"}>
                        Abteilungsübergreifend Software planen.
                    </div>
                    <div className={"bigger has-text-centered blue"}>
                        Mit echten Requirements arbeiten.
                    </div>
                    <div className={"bigger has-text-centered blue"}>
                        Test-First Development mit generierten Tests direkt aus dem Eventmodell
                    </div>
                    <div className={"bigger has-text-centered blue"}>
                        Generierte Dokumentation mit Eventcatalog
                    </div>
                    <div className={"bigger has-text-centered blue"}>
                        80% weniger manuell geschriebener Code
                    </div>
                </div>


            </div>
            <div className={"padding"}/>

            <div className={"padding small-top-margin"}/>

            <div className={"content"}>
                <EventModelingFeatures/>

                <div className="container contentElement">
                    <div className={"topBorder"}>

                        <Card
                            headline=""
                            textLeft={false} full={true}
                            image={"/assets/md2.png"}
                            id="koennen-wir-helfen"
                            shadow={false}>
                            <div className={"has-text-centered"}>
                                <h3 className={" has-text-centered"}>
                                    Warum Miro?
                                </h3>
                                <div className={"small-top-margin"}>
                                    Miro ist in den meisten Unternehmen bereits vorhanden und <b>jeder kann damit
                                    umgehen</b>. Es ist riskant, die komplette Planung & Entwicklung eines
                                    Softwareprojektes in ein externes Tool auszulagern.
                                    Durch die Verwendung von Miro bleibt Ihre Softwareabteilung flexibel und vermeidet
                                    einen ungewollten <i>Vendor Lock-In</i>.
                                </div>
                                <div className={"small-top-margin"}>

                                </div>
                                <h3 className={" has-text-centered"}>
                                    Installation
                                </h3>

                                <div>
                                    <div>
                                        Mit dem Link haben Sie die Möglichkeit, das Plugin direkt einem Team zuzuordnen.
                                    </div>

                                    <img src={"/assets/tooling/tooling-01.png"} width={"30%"}/>
                                </div>

                                <div className={"small-top-margin"}>
                                    Über die Toolbar kann dann direkt das Plugin &quot;Eventmodeling&quot; installiert
                                    werden.
                                </div>


                                <div className={"padding  top-margin"}>
                                    <h3>Fragen / Diskussionen</h3>
                                    Fragen / Diskussionen zum Tooling können <a
                                    href={"https://github.com/Nebulit-GmbH/miro-eventmodeling-discussions/discussions"}>direkt
                                    auf Github geführt werden.</a>
                                </div>

                                <div>
                                    Nach der Installation kann das Plugin direkt verwendet werden.
                                    Wir empfehlen für den Start auf einem leeren Board anzufangen um die Funktionen
                                    kennenzulernen. Der &quot;Demo&quot; Modus über die Checkbox rechts oben gibt
                                    einige weitere
                                    Hinweise direkt im Plugin.
                                </div>
                                <img className={"top-margin"} src={"/assets/tooling/tooling-03.png"} width={"50%"}/>

                                <div className={"top-margin"}/>


                                <div className={"top-margin"}/>
                                <div>
                                    <h3>14-Tage Enterprise Trial</h3>
                                    <div>Sie haben grundsätzliche die Möglichkeit, das Plugin und die Code Generierung
                                        14 Tage lang völlig kostenlos und unverbindlich in der <b>Enterprise
                                            Version</b> auszuprobieren.
                                    </div>
                                    <div className={"top-margin"}/>
                                    <div>Bei Interesse vereinbaren Sie direkt ein kurzes 15-Minuten Beratungsgespräch
                                        für ein kurzes Onboarding in das Tooling (alternativ E-Mail an info@nebulit.de)
                                    </div>
                                    <div className={"notification"}>
                                        Sie erhalten Token für das Plugin und den Token für die Codegenerierung in der
                                        ersten E-Mail.
                                    </div>
                                </div>
                                <div>
                                    <img className={"top-margin"} src={"/assets/tooling/token.png"} width={"30%"}/>

                                </div>

                                <div className={"has-text-centered top-margin"}>
                                    <h3>Elemente View</h3>
                                    <div>
                                        Der Elemente-View wird zur Platzierung neuer Elemente auf dem Board verwendet.
                                        Außerdem besteht die Möglichkeit, manuell außerhalb des Plugins angelegte
                                        Elemente
                                        in Plugin-kompatible Elemente zu konvertieren.
                                    </div>
                                    <p className="padding top-margin has-text-centered">
                                        <iframe id="ytplayer" width="640" height="360"
                                                src="https://www.youtube-nocookie.com/embed/Q2xrLV7i1l8?autoplay=0"
                                                frameBorder="0" allowFullScreen></iframe>
                                    </p>
                                    <h3>Actors</h3>
                                    <div>
                                        Mit Actor- und Actor-Lanes werden die Benutzer der Software modelliert.
                                    </div>
                                    <p className="padding top-margin has-text-centered">
                                        <iframe id="ytplayer" width="640" height="360"
                                                src="https://www.youtube-nocookie.com/embed/fb-Q8i3XUEo?autoplay=0"
                                                frameBorder="0" allowFullScreen></iframe>
                                    </p>
                                    <h3>Aggregates</h3>
                                    <div>
                                        Aggregates definieren die Zugehörigkeit eines Events zur einer fachlichen
                                        Domäne.
                                    </div>
                                    <p className="padding top-margin has-text-centered">
                                        <iframe id="ytplayer" width="640" height="360"
                                                src="https://www.youtube-nocookie.com/embed/phdEgx_Ve2E?autoplay=0"
                                                frameBorder="0" allowFullScreen></iframe>
                                    </p>
                                </div>

                                <div className={"has-text-centered top-margin"}>
                                    <h3>Daten-View</h3>
                                    <div>
                                        Im Daten-View können einzelne Elemente bearbeitet werden. Hierzu zählt u.a. der
                                        Typ eines Elementes, die Felder und die Datentypen.
                                    </div>
                                    <p className="top-margin has-text-centered">
                                        <iframe id="ytplayer" width="640" height="360"
                                                src="https://www.youtube-nocookie.com/embed/jVtopwoE41M?autoplay=0"
                                                frameBorder="0" allowFullScreen></iframe>
                                    </p>
                                </div>

                                <div className={"has-text-centered top-margin"}>
                                    <h3>Slice-View</h3>
                                    <div>
                                        Mit dem Slice-View können neue Slices angelegt oder vorhandene Elemente in
                                        Slices konvertiert werden.
                                    </div>
                                    <p className="top-margin has-text-centered">
                                        <iframe id="ytplayer" width="640" height="360"
                                                src="https://www.youtube-nocookie.com/embed/gn5TFxaWe30?autoplay=0"
                                                frameBorder="0" allowFullScreen></iframe>
                                    </p>
                                </div>

                                <div className={"has-text-centered top-margin"}>
                                    <h3>Scenario-View</h3>
                                    <div>
                                        Im Scenario-View können Testcases für das Modell definiert werden. Die Testcases
                                        folgen der &quot;Given&quot; / &quot;When&quot; / &quot;Then&quot; Semantik.
                                    </div>
                                    <p className="top-margin has-text-centered">
                                        <iframe id="ytplayer" width="640" height="360"
                                                src="https://www.youtube-nocookie.com/embed/PLz_mqbRXZk?autoplay=0"
                                                frameBorder="0" allowFullScreen></iframe>
                                    </p>
                                </div>

                                <div className={"has-text-centered top-margin"}>
                                    <h3>Code-View</h3>
                                    <div>
                                        Der Code-View erlaubt es, eine JSON Konfiguration (config.json) aus dem Modell
                                        zu extrahieren
                                        und herunterzuladen. Das Modell kann so zur Code Generierung verwendet werden.
                                    </div>
                                    <p className="top-margin has-text-centered">
                                        <iframe id="ytplayer" width="640" height="360"
                                                src="https://www.youtube-nocookie.com/embed/7rH4t1IFiX8?autoplay=0"
                                                frameBorder="0" allowFullScreen></iframe>
                                    </p>
                                    <h4>Kontext</h4>
                                    <div>
                                        Über Kontexte ist es möglich, mehrere Modelle auf einem Board zu definieren
                                        und nur ganz bestimmte Kontexte für die Code-Generierung auszuwählen.
                                    </div>
                                    <div>
                                        <p className="padding top-margin has-text-centered">
                                            <iframe id="ytplayer" width="640" height="360"
                                                    src="https://www.youtube-nocookie.com/embed/x6XqdBaTzng?autoplay=0"
                                                    frameBorder="0" allowFullScreen></iframe>
                                        </p>
                                    </div>
                                </div>


                                <hr/>
                                <h3>Code Generierung</h3>
                                <div>Für die Code Generierung erhalten Sie einen Token für den Zugriff auf die Code
                                    Generatoren über Docker.
                                </div>


                                <div>
                                    Für die Code Generierung benötigen Sie einen Token. Diesen erhalten Sie in der
                                    E-Mail für das Onboarding.

                                    Der Token hat eine Gültigkeit von 30 Tagen.<br/>

                                    Um den Code Generator zu laden benötigen Sie den Token aus der E-Mail.<br/>

                                    Loggen Sie sich zunächst in der Docker Registry ein.

                                    (der Token ist das Passwort)
                                </div>

                                <div className={"top-margin"}/>

                                <pre>
                                    docker login -u USERNAME ghcr.io
                                </pre>

                                <div className={"top-margin"}/>
                                <div>
                                    Das Modell kann im Plugin im “Code” Reiter als JSON exportiert werden.<br/>
                                    <b>Achtung - der Reiter ist erst aktiv, wenn der Token aktiviert wurde.</b><br/>

                                    <div className={"top-margin"}/>

                                    Achtung - der Export wird idealerweise für einen zuvor definierten Modell-Kontext
                                    gemacht (hiermit
                                    vermeiden wir eine Stunden-Sperre auf Miro aufgrund der Rate Limits auf großen
                                    Boards)<br/>

                                    Mehr Informationen finden Sie im Anleitungsmodus.<br/>
                                </div>

                                <div className={"has-text-centered"}>
                                    <img src={"/assets/tooling/tooling-06.png"} width={"30%"}/>
                                </div>

                                <div className={"top-margin"}/>

                                <div>
                                    <h3>Code Generierung durchführen</h3>
                                    <div>
                                        Starten Sie den Code Generator mit diesem Docker-Kommando.<br/>
                                        <pre>
                                            docker run -ti -v $PWD/config.json:/app/config.json -v $PWD:/app ghcr.io/dilgerma/nebulit-spring-boot-generator
                                        </pre>
                                        <div>
                                            <div className={"top-margin"}/>

                                            Starten Sie den Prozess im Verzeichnis, indem Sie die *config.json* abgelegt
                                            haben.<br/>

                                            Der Parameter “-v $PWD:/app” definiert das Zielverzeichnis für den
                                            generierten Code. Standardmäßig wird das aktuelle Verzeichnis
                                            verwendet.<br/>
                                        </div>
                                        <div>
                                            Folgende Generatoren stehen zur Verfügung:

                                            <div>
                                                <div className={"top-margin"}/>
                                                <h4>Spring Boot</h4>

                                                Spring Boot Setup inkl. Postgres als Eventstore

                                                <div className={"top-margin"}/>
                                                <h4>Spring Boot / Axon (demnächst) </h4>

                                                <div className={"top-margin"}/>
                                                <h4>TypeScript Prototype (Work in Progress)</h4>

                                                Generierung eines Live “In Browser” Prototypen aus dem Eventmodell

                                                <div className={"top-margin"}/>
                                                <h4>Eventcatalog</h4>

                                                Eine Eventcatalog Instanz befüllt mit den Daten aus dem Eventmodell.

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <hr/>
                            <div className={"top-margin"}>
                                <h3>Beispiel Implementierung: Spring Boot</h3>

                                <div className={"top-margin"}>
                                    Code: <a href={"https://github.com/dilgerma/eventsourcing-with-code"}>GitHub</a>
                                </div>
                                <div className={"top-margin"}>
                                    <pre>
                                        docker-compose up -d db<br/>
                                        mvn clean package<br/>
                                        mvn spring-boot:run
                                    </pre>
                                    <div>

                                        <img className={"top-margin"} src={"/assets/tooling/flow.gif"} width={"100%"}/>

                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}
