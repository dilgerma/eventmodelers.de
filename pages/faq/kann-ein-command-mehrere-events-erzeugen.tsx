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
                    title={"Kann ein Command mehrere Events erzeugen?"}
                    description={"Auch diese Frage kommt immer wieder auf. Kann und darf ein Command mehrere Events erzeugen? "}
                    keywords={"Eventmodeling FAQ, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">

                    <div className={"big-margin-top"}/>
                    <div className={"topBorder container "}>

                        <h1 className={"has-text-centered"}>Kann ein Command mehrere Events erzeugen?</h1>

                        <p>
                            Die Antwort ist einfach - natürlich.
                        </p>
                        <p>
                           Zugegeben, meistens gibt es eine direkte Zuordnung von einem Command zu einem Event. Aktion und Ergebnis. Manchmal ist diese Zuordnung aber nicht so eindeutig und es ist durchaus möglich, dass ein Command mehrere Events erzeugt.
                        </p>
                        <p>
                            Nehmen wir ein konkretes Beispiel. Angenommen wir verwalten eine Kundendatenbank. Jeder Kunde hat eine oder mehrere Adressen. Sobald ein Kunde neu angelegt wird könnte sowohl der Fakt registriert werden, dass der Kunde angelegt wurde ( &quot;Customer Created&quot; ), aber auch dass die initiale Adresse zugewiesen wurde ( &quot;Address Assigned&quot; )
                        </p>

                        <p className={"has-text-centered"}>
                            <img width="70%" src={"/assets/faq/multiple-events.png"}/>
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
