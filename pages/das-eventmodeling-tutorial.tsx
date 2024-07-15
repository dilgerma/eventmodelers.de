import Image from 'next/image'
import {Inter} from 'next/font/google'
import Card from '../components/card';
import Navigation from '../components/navigation';
import SEO from '@/components/seo';
import Link from 'next/link';
import EventModelingFeatures from '@/components/EventModelingFeatures';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={""}>
                <SEO
                    title={"Das Eventmodeling Tutorial"}
                description={"Ein komplettes Tutorial mit Schritt für Schritt Anleitung für Eventmodeling. Schnell und einfach Eventmodeling lernen auf praktsiche Art und Weise."} keywords={"Eventmodeling Tutorial, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>


                <div className="contentElement content has-text-centered">

                    <div className={"headline-divider"}/>

                    <h1 className={"has-text-centered super-big blue"}>
                        Das komplette Eventmodeling Tutorial
                    </h1>
                    <h3 className={" has-text-centered"}>
                        So entwickeln wir heutzutage Softwaresysteme. <br/>Einfach, wartbar und ohne den typischen
                        Microservice Overhead.</h3>



                </div>


            </div>
            <div className="content container bigger">
                <div className="contentElement">
                    <div className={"topBorder"}>


                        <Card
                            headline=""
                            textLeft={false} full={true}
                            image={"/assets/md2.png"}
                            id="koennen-wir-helfen"
                            shadow={false}>
                            <div>


                                <h3 className={"blue has-text-centered"}>In diesem Tutorial
                                    lernst du kostenlos, die wie du komplexe Informationssysteme modellierst und
                                    entwickelst.</h3>


                            </div>
                            <div id={"links"}>

                                <div className={"has-text-centered top-margin"}>
                                    <p className="has-text-centered">
                                        <iframe id="ytplayer" width="640" height="360"
                                                src="https://www.youtube-nocookie.com/embed/PAKQYyMJmmI?autoplay=0"
                                                frameBorder="0" allowFullScreen></iframe>
                                    </p>
                                </div>


                                <div className={"has-text-centered"}>
                                    &quot;Ich würde ein neues System oder Microservice keinesfalls ohne Eventmodeling
                                    starten. Die Zeitersparnis und die Qualität der Anforderungen war so bisher
                                    nicht möglich.&quot; - Martin Dilger
                                </div>


                                <hr/>

                                <div>
                                    <h2 className={"has-text-centered blue"}>Tooling</h2>
                                    <div className={"has-text-centered"}>
                                        Im Eventmodeling Tutorial nutzen wir das <Link href={"/eventmodeling-tooling"}>Miro Tooling</Link>.
                                        Das Plugin kann in der Community Variante kostenlos verwendet werden.
                                    </div>
                                    <div className={"padding top-margin"}>
                                    <EventModelingFeatures/>
                                    </div>
                                </div>
                                <div className="contentElement">

                                    <div className={"headline-divider"}/>

                                    <h1 className={"has-text-centered super-big blue"}>
                                        Das Eventmodell
                                    </h1>

                                    <div>
                                        <div className={"has-text-centered"}>
                                            <img width={"50%"}
                                                 src={"/assets/das-eventmodeling-tutorial/modell-tag-1.png"}/>
                                        </div>
                                        <hr/>

                                    </div>


                                </div>


                            </div>
                            <div className="content container bigger">
                                <div className="contentElement">
                                    <div className={""}>

                                        <Card
                                            headline=""
                                            textLeft={false} full={true}
                                            image={"/assets/md2.png"}
                                            id="koennen-wir-helfen"
                                            shadow={false}>
                                            <div className={"container"}>
                                                <p className={"notification is-info is-light"}>In diesem Tutorial folgen
                                                    wir einem
                                                    fiktiven Scrum Team bei der Planung & Entwicklung eines neues
                                                    Softwaresystems. Ziel
                                                    des Systems ist es, Self-Service für Kunden in Coffee-Shops zu
                                                    ermöglichen. Der
                                                    Kunde soll über eine digitale Oberfläche bestellen und anschließend
                                                    den fertigen
                                                    Kaffee möglichst ohne Wartezeit an der Theken abholen können.</p>


                                                <p>
                                                    Die Herausforderung bei der Entwicklung ist (wie immer) die
                                                    Integration in die
                                                    umliegenden Systeme. Wir haben ein Bestandssystem (Backoffice), das
                                                    die
                                                    Produktkonfigurationen bereitstellt. Zusätzlich ist die Integration
                                                    eines
                                                    Payment-Providers geplant. Der Kunde soll idealerweise digital
                                                    bezahlen.<br/> Zunächst aber betrachten wir die Anforderungen an
                                                    unser System
                                                    isoliert.
                                                </p>
                                                <p className={"has-text-centered"}>
                                                    <img src={"/assets/das-eventmodeling-tutorial/architektur.png"}
                                                         width={"50%"}/>
                                                </p>
                                                <p>Um die Anforderungen und das System besser zu verstehen schlägt
                                                    Markus, der Scrum
                                                    Master
                                                    einen <b>Eventmodeling Workshop</b> vor. Keiner der Entwickler hat
                                                    bisher von dieser
                                                    Technik gehört. Markus hat über einen bekannten Architekten davon
                                                    erfahren und nur
                                                    Gutes darüber gehört.</p>

                                                <p>Der Workshop kann komplett <i>Remote</i> abgehalten werden und so
                                                    lässt sich das Team
                                                    auf das Experiment ein. Der Workshop startet direkt am nächsten Tag.
                                                    Markus
                                                    konnte sogar kurzfristig einen externen Berater mit dazuholen, um
                                                    den Workshop
                                                    besser
                                                    zu koordinieren. </p>

                                                <p>

                                                    Markus verschickt noch am Abend den Artikel <a
                                                    href={"/blog/software-dokumentieren-mit-eventmodelling"}>Software
                                                    dokumentieren mit
                                                    Eventmodeling</a> an jeden Teilnehmer, damit sich jeder ein wenig
                                                    auf den Workshop
                                                    vorbereiten kann.
                                                    Zusätzlich gibt es die <a href={"/bessere-software-2024"}>kostenlose
                                                    Anleitung zur
                                                    Durchführung von Workshops</a>, die Markus auch gleich mit anhängt.
                                                </p>

                                                <h3 className={"blue has-text-centered"}>Events sammeln</h3>

                                                <p>Im Workshop wird mit einem einfachen Miro-Board gearbeitet. Im ersten
                                                    Schritt sammelt
                                                    das Team
                                                    alle Events. Am Workshop nimmt nicht nur das Entwicklungs-Team,
                                                    sondern auf Tipp des
                                                    Beraters sogar jeder vom Fachbereich teil, der kurzfristig Zeit
                                                    hat.</p>
                                                <p className={"has-text-centered"}><i>Im Video siehst du den ersten Teil
                                                    des
                                                    Workshops</i></p>

                                                <div className={"has-text-centered"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/4qCG6K65Es4?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Das Eventmodell erstellen.&quot;
                                                </div>


                                            </div>

                                            <p>
                                                Durch <b>Eventmodeling</b> zerteilt das Team die Software in die
                                                kleinstmöglichen
                                                vertikalen
                                                Funktionsblöcke. Wir nennen diese Blöcke &quot;Slices&quot;.

                                            </p>
                                            <p>
                                                <img src={"/assets/blog/eventmodelling/eventmodell_time.png"}/>
                                            </p>
                                            <p>
                                                Slices bestehen aus Commands (Blau), Events (Gelb) und Read Modellen
                                                (Reports) (Grün).
                                                Das
                                                Team bringt die ersten Events in eine grobe Reihenfolge und definiert
                                                direkt den
                                                ersten Slice für die <b>Anmeldung des Benutzers</b>
                                            </p>
                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/-Mz5ETZ1tNg?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Der erste Slice.&quot;
                                                </div>


                                            </div>
                                            {/*video*/}
                                            <p>Was jeden erstaunt - der Workshop ist äusserst produktiv und es werden
                                                genau die
                                                richtigen Diskussionen zwischen den Teilnehmern geführt.</p>
                                            <p>
                                                Was ist die Reihenfolge der Events?<br/>
                                                Was muss im Screen zu sehen sein?<br/>
                                                Was sind die Schritte, die nacheinander gemacht werden müssen?<br/>
                                                Wo kommen die Daten her?<br/>
                                            </p>
                                            <p>
                                                Das Team benötigt lediglich 5 Minuten um produktiv zu arbeiten. <i>Das
                                                Format ist quasi
                                                selbsterklärend</i>.
                                            </p>

                                            <h3 className={"blue has-text-centered"}>Modellvalidierung</h3>
                                            <p>Was dem Team extrem hilft ist die Echtzeitvalidierung des Modells.
                                                Fehlerhafte oder
                                                fehlende Daten werden direkt rot markiert. So ist sofort klar, welches
                                                Slice direkt
                                                fertig ist und wo noch weitergearbeitet werden muss.</p>


                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/W5T2_zlzn4g?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Modell Validierung.&quot;
                                                </div>


                                            </div>
                                            {/*video*/}
                                            <p>Im Workshop selber kommen immer wieder Fragen auf, die der Berater kurz
                                                und knapp
                                                beantwortet. Ansonsten hält sich dieser meist im Hintergrund und stellt
                                                nur
                                                Fragen, wenn Diskussionen ins Stocken geraten.</p>
                                            <p>
                                                Eine Frage, die beispielsweise mehrfach gestellt wurde ist &quot;Wie
                                                gehen wir mit
                                                generierten Werten wie beispielsweise
                                                einer <i>SessionId</i> um?&quot; Den Vorschlag des
                                                Beraters siehst du im Video.
                                            </p>
                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/oUiW05yAhso?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Generierte Werte.&quot;
                                                </div>


                                            </div>
                                            {/*video*/}
                                            <h3 className={"blue has-text-centered"}>Der erste Aha-Moment</h3>

                                            <p>
                                                Read Modelle (oder auch Reports) sind die Art und Weise wie Daten
                                                zwischen Slices
                                                weitergereicht werden. Die Read Modelle sind im Event-Modell grün
                                                markiert.
                                                Die Daten werden aus den zuvor gespeicherten Events befüllt.
                                            </p>
                                            <pre className={"has-text-centered"}>Der erste Aha-Moment</pre>
                                            <p>
                                                Hier kommen die ersten wirklichen Aha-Momente. Moritz dem Architekten
                                                wird in diesem
                                                Moment klar, was durch
                                                diese Art der Modellierung wirklich erreicht wird.
                                                Der &quot;Registrierungs-Slice&quot; ist ein
                                                in sich
                                                geschlossesenes Feature.
                                            </p>
                                            <p>
                                                Das Team hat für dieses Feature
                                                klare <b>Eingangs-</b> und <b>Ausgangsparameter</b> definiert. Das
                                                Feature könnte
                                                jetzt bereits implementiert werden, da
                                                keinerlei <i>unbekannte</i> Abhängigkeiten
                                                existieren.
                                            </p>
                                            <p>Durch die Modellierungen hat das Team einen
                                                eingebaute <b>Daten-Komplett-Check.</b>. Es
                                                kann nicht passieren, dass auf Daten zugegriffen wird, die nicht
                                                vorhanden sind. Es gibt
                                                keinerlei Annahmen, sondern nur Fakten. </p>
                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/xOAsVWB5hzE?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Read Modell (Report).&quot;
                                                </div>


                                            </div>
                                            {/*video*/}
                                            <p>Der Berater erklärt immer wieder, dass aus den Screens in den Slices
                                                eigentlich jeder
                                                dynamische Wert ersichtlich sein muss. Es sollte für einen Entwickler
                                                auf den ersten
                                                Blick ersichtlich sein, wo die Dynamik im Screen ist.</p>
                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/5CXPIT2h2Uc?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Dynamic Screens.&quot;
                                                </div>


                                            </div>
                                            <h3 className={"blue has-text-centered"}>Nachträgliche Anpassung von
                                                Features</h3>
                                            <p>Jens, ein Teilnehmer und Entwickler stellt eine wichtige Frage.<br/>
                                            </p>
                                            <pre>Haben wir nicht was vergessen? Wo kommt der Titel der Produkte her?</pre>
                                            <p>Jeder ist kurz verblüfft. Tatsächlich ist das bisher niemandem
                                                aufgefallen. Das Modell
                                                lässt sich natürlich problemlos jederzeit erweitern. </p>
                                            <p>Die Änderung ist meistens auf <i>einen</i> Slice begrenzt. Das Team muss
                                                lediglich
                                                sicherstellen, dass die notwendigen Daten verfügbar sind. Die
                                                Modellvalidierung hilft
                                                dabei enorm.</p>
                                            {/*video*/}
                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/J2Ss4l7O28I?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Screen Extension.&quot;
                                                </div>


                                            </div>
                                            {/*video*/}
                                            <p>Das Team geht jetzt Schritt für Schritt durch die einzelnen Slices. Es
                                                finden wichtige
                                                Diskussionen statt. Schritt für Schritt wird klar, welche Daten in
                                                welchem Schritt der
                                                Software benötigt werden. </p>
                                            <p>Das Team trifft zu keiner Zeit Annahmen, sondern arbeit alleine auf
                                                Fakten und Daten.</p>
                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/5C1Z8IqR21s?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Commands & Events.&quot;
                                                </div>

                                                <h3 className={"blue has-text-centered"}>Order Screen erstellen</h3>

                                            </div>
                                            <p>
                                                Während ein Teil des Teams noch die Daten für die Events und Commands
                                                definiert, kann
                                                ein
                                                weiterer Teil bereits das Screendesign für den nächsten Screen
                                                erstellen.
                                            </p>
                                            <p>Die Arbeit ist komplett parallelisierbar (hier in der Modellierung, aber
                                                auch später in
                                                der Implementierung).</p>
                                            {/*video*/}
                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/ypMkMdjnnjw?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Order Screen.&quot;
                                                </div>

                                                <h3 className={"blue has-text-centered"}>Daten aus unterschiedlichen
                                                    Events</h3>
                                                <p>Für jeden Slice untersucht das Team, wo die Daten definiert sind, die
                                                    für die
                                                    Umsetzung gebraucht werden. Die Schnittstelle
                                                    vom &quot;Backend&quot; zum &quot;Screen&quot; ist das
                                                    Read-Modell.</p>
                                                <p>Das Modell kann problemlos aus unterschiedlichen Events befüllt
                                                    werden. Die
                                                    Daten-Validierung des
                                                    Modells stellt zu jeder Zeit sicher, dass die Slices umsetzbar
                                                    sind. <i>Wenn
                                                        das Team alles richtig gemacht hat, sind die Daten für jeden
                                                        Slice <b>immer</b> verfügbar.</i></p>

                                            </div>
                                            {/*video*/}
                                            {/*video*/}
                                            <p>

                                            </p>
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/N3Yvod05eBk?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>
                                                <p></p>

                                                <div className={"has-text-centered"}>
                                                    &quot;Order Page.&quot;
                                                </div>


                                            </div>
                                            {/*video*/}
                                            <h3 className={"blue has-text-centered"}>Lego Slices - das vorerst letzte
                                                Feature.</h3>
                                            <p>
                                                Slices können zusammengesteckt werden wie Lego-Bausteine. Das Team
                                                entscheidet sich,
                                                zunächst nicht die
                                                gesamte Software zu modellieren. Alle Teilnehmer einigen sich auf eine
                                                Menge von Slices,
                                                die in einem Sprint umgesetzt werden kann.
                                            </p>
                                            <p>
                                                Das Team kann zu jeder Zeit mit der Modellierung fortfahren, ohne dass
                                                Information
                                                verloren geht.
                                            </p>
                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/CE3ygvkCf3w?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Order Submit.&quot;
                                                </div>


                                            </div>
                                            <h3 className={"blue has-text-centered"}>Swimlanes</h3>

                                            <p>
                                                Im letzten Schritt definiert das Team die ersten <b>Swimlanes</b>. Durch
                                                Swimlanes
                                                bekommen wir eine Zuordnung der Events und Daten zu den Kontexten
                                                unserer Software.
                                                Swimlanes entsprechen im <i>Domain Driven Design</i> in etwa den Bounded
                                                Kontexten. Eine
                                                Swimlane kann einen eigenen Service, ein Modul oder nur einen
                                                eigenständigen fachlichen
                                                Bereich repräsentieren.
                                            </p>
                                            {/*video*/}
                                            <div>


                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/50U0aozbZQ0?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;Swimlanes.&quot;
                                                </div>

                                            </div>
                                            <br/>
                                            <div className={"padding"}>
                                                <h3 className={"blue has-text-centered"}>State View / State Change</h3>

                                                <p>
                                                    Bevor wir in die Implementierung gehen zerlegen wir die Slices jetzt
                                                    in _State View_ und _State Changes_.

                                                    Damit definieren wir unabhängige Arbeitspakete, die in beliebiger
                                                    Reihenfolge implementiert werden können.
                                                </p>
                                                <div className={"has-text-centered top-margin"}>
                                                    <p className="has-text-centered">
                                                        <iframe id="ytplayer" width="640" height="360"
                                                                src="https://www.youtube-nocookie.com/embed/n_89JZHaqVM?autoplay=0"
                                                                frameBorder="0" allowFullScreen></iframe>
                                                    </p>
                                                </div>


                                                <div className={"has-text-centered"}>
                                                    &quot;State View / State Change.&quot;
                                                </div>

                                            </div>
                                        </Card>
                                    </div>
                                </div>

                            </div>
                            <hr/>

                            <div className={"has-text-centered top-margin"}>
                                <h3 className={"blue"}>Das Miro Tooling verwenden</h3>
                            </div>
                            <div className={"has-text-centered"}>
                                <h4>Es ist kostenlos</h4>
                                <div>Das Plugin hilft dir, schnell die wichtigen Bestandteile deiner Software zu
                                    modellieren.
                                </div>
                                <p className={"has-text-centered top-margin"}>
                                    <Link href={"/eventmodeling-tooling"}>Zum Eventmodeling Tooling</Link>
                                </p>
                            </div>

                            <div className={"has-text-centered top-margin"}>
                                <h3 className={"blue"}>Was machst du als nächstes?</h3>
                            </div>
                            <div className={"has-text-centered"}>
                                <h4>Lass dich beraten</h4>
                                <div>Lass uns über dein Vorhaben sprechen.</div>
                                <div>Wir helfen bei der Planung und Entwicklung komplexer Softwaresysteme <br/><b>mit
                                    Eventmodeling</b>, <b>mit Eventsourcing</b> und <b>mit maximal
                                    flexibler Beauftragung.</b>
                                </div>
                                <p className={"has-text-centered top-margin"}>
                                    <a target="_blank"
                                       href="https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2"
                                       className={"button is-success"}>
                                        <i className="fa-solid fa-phone padding"></i>
                                        <span className={"bigger"}>Kostenloses Beratungsgespräch vereinbaren.</span></a>
                                </p>
                            </div>

                            <div className={"top-margin has-text-centered"}>
                                <h4>Planung ist die halbe Software (oder mehr)</h4>
                                <Link href={"/schulungen/schulung-software-mit-eventmodeling-cqrs-und-eventsourcing"}>Wir planen dein System - Eventmodeling
                                    Workshop</Link>
                            </div>
                            <div className={"has-text-centered"}>
                                Jedes System sollte vor der ersten Zeile Code modelliert werden.<br/>
                                Wir führen mit euch Eventmodeling-Workshops durch und planen euer System. <br/>
                                Wir nutzen für den Workshop natürlich alle Werkzeuge aus dem Nebulit
                                Werkzeugkasten.<br/>
                            </div>
                            <div className={"top-margin has-text-centered"}>
                                <h4>Schule dein Team</h4>
                                <div>
                                    Wir bieten diese Schulungen für dein Team:
                                    <div className={"top-margin"}>
                                        <Link
                                            href={"/schulungen/eventbasierte-systeme-mit-eventmodeling-cqrs-eventsourcing"}>Eventbasierte
                                            Systeme mit Eventmodeling, CQRS und Eventsourcing</Link>
                                    </div>
                                    <div>
                                        <Link href={"/schulungen/apache-kafka-kickstarter"}>Apache Kafka™
                                            Kickstarter</Link>
                                    </div>
                                    <div>
                                        <Link href={"/schulungen/git-workshop"}>Git Profi Status für ganze
                                            Entwicklungsteams.</Link>
                                    </div>
                                </div>
                                <div className={"top-margin"}>
                                    Ich würde mich freuen, wenn wir dein Team mit unserer Expertise unterstützen dürfen.
                                </div>
                            </div>

    <div className={"has-text-centered top-margin"}>
                            <h3 className={"blue"}>Warum funktioniert diese moderne Art Software zu entwickeln eigentlich so gut?</h3>
                                               <div>Die Hintergründe erfährst du in diesem Video.
                                               </div>

                                               <div className={"has-text-centered top-margin"}>
                                                   <p className="has-text-centered">
                                                       <iframe id="ytplayer" width="640" height="360"
                                                               src="https://www.youtube-nocookie.com/embed/OA64piP1vCw?autoplay=0"
                                                               frameBorder="0" allowFullScreen></iframe>
                                                   </p>
                                               </div>
    </div>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}
