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
                    title={"Eventmodeling - Muss Inhalt Command = Inhalt Event sein?"}
                    description={"Wie hängen Commands und Events zusammen? "}
                    keywords={"Eventmodeling FAQ, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">

                    <div className={"big-margin-top"}/>
                    <div className={"topBorder container "}>

                        <h1 className={"has-text-centered"}>Müssen Command und Event immer identische Daten definieren?</h1>

                        <p>
                            Eine der Fragen, die immer wieder auftauchen ist, wie die definierten Felder im Command jetzt mit den definierten Feldern im Event zusammenhängen.<br/>
                            Müssen die Felddefinitionen zwangsläufig übereinstimmen?
                            Wir haben <Link href={"/faq/kann-ein-command-mehrere-events-erzeugen"}>hier</Link> bereits gelernt, dass ein Command durchaus mehrere Events erzeugen darf.
                        </p>

                        <div className={"top-margin"}/>
                        <p>
                            Damit ist eigentlich schon klar, dass die definierten Felder im Command nicht unbedingt mit den definierten Feldern im erzeugten Event übereinstimmen müssen.
                        </p>
                        <p>
                            Eine Regel ist aber wichtig. Das Command liefert <b>immer</b> alle Informationen, die für die Erstellung der Events notwendig sind. Hier hilft sicher auch der <Link href={"/faq/information-completeness-check"}>Information Completeness Check.</Link>
                        </p>
                        <p>
                            Es ist auch völlig problemlos möglich, dass ein Feld im Event komplett anders benannt ist, als das Feld im Command, solange klar ist, wie die Daten schlußendlich hergeleitet werden können.
                        </p>
                        <p>
                            Im <Link href={"/eventmodeling-tooling"}>Eventmodeling-Tooling für Miro</Link> nutzen wir hierfür Mappings.
                        </p>
                        <p>
                            <img src={"/assets/faq/mapping.png"}/>
                        </p>
                        <p>
                            Das Feld im Command heißt &quot;todo&quot;, das Feld im Event aber &quot;todoItem&quot;. Der  <Link href={"/faq/information-completeness-check"}>Information Completeness Check</Link> würde die Verbindung rot markieren. Damit das trotzdem funktioniert, definieren wir ein Mapping von &quot;todoItem&quot; auf &quot;todo&quot;
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
