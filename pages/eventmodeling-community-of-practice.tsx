import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                       title={"Eventmodeling Community of Practice"}
                   description={"So beteiligst du dich an der Eventmodeling Community"} keywords={"Eventmodeling, Community, Eventmodeling lernen"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">


                    <div className={"topBorder container"}>

                        <h1 className={"has-text-centered"}>Eventmodeling Community of Practice</h1>

                        <div className={"top-margin"}>EventModeling ist eine Methodik, die den Fokus auf das Verständnis
                            und die Modellierung von Ereignissen legt, um komplexe Geschäftsprozesse effektiv zu
                            erfassen und zu kommunizieren. Obwohl theoretisches Wissen eine wichtige Grundlage bildet,
                            kann EventModeling nur durch praktische Anwendung wirklich erlernt werden. Aus diesem Grund
                            ist es unerlässlich, dass wir als Community zusammenarbeiten und uns gegenseitig
                            unterstützen.
                        </div>

                        <div className={"top-margin"}>
                            Unsere Community of Practice bietet eine Plattform für den Austausch von Erfahrungen,
                            Herausforderungen und Erfolgen beim EventModeling. Hier können Mitglieder voneinander
                            lernen, Best Practices teilen und gemeinsam an Lösungen für häufige Probleme arbeiten.
                        </div>

                        <div className={"top-margin"}>
                            Indem wir unsere Erkenntnisse und Techniken teilen, helfen wir uns nicht nur gegenseitig,
                            sondern tragen auch zur Weiterentwicklung und Verbreitung von EventModeling bei. Jede
                            Teilnahme, sei es durch das Teilen eigener Erfahrungen oder durch das Stellen von Fragen,
                            bereichert die Community und stärkt unser gemeinsames Wissen. Die schlechte Ruf der
                            Softwareindustrie ist nicht gerechtfertigt. Wir können das besser.
                        </div>


                        <div className={"top-margin"}>
                            Die EventModeling Community of Practice von der Teilnahme jedes einzelnen. Wir bauen ein
                            starkes Netzwerk von Praktikern, das durch Zusammenarbeit und gemeinsames Lernen wächst.
                        </div>

                        <div className={"top-margin"}>
                            <h3>Wie kannst du teilnehmen?</h3></div>

                        <div className={"top-margin"}>
                            Beteilige dich an Diskussionen im <a href={"https://discord.com/invite/Sw4MvagftJ"}>Community
                            Discord</a>
                        </div>
                        <div className={"top-margin"}>
                            <a href={"https://tally.so/r/wkZ0r1"}>Stell Fragen</a> für die FAQ
                        </div>
                        <div className={"top-margin"}>
                            <Link href={"https://tally.so/r/wzeWjR"}>Schreibe einen Artikel für Eventmodelers.de</Link>
                        </div>
                    </div>
            </div>


        </div>
</div>
)
}
