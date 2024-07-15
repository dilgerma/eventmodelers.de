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
                                     title={"Die Eventmodeling Anleitung für Workshops"}
                                 description={"Auf dieser Seite findest du eine kostenlose Anleitung, wie du Eventmodeling Workshops bei dir im Team durchführen kannst."} keywords={"eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>


                <div className="contentElement content has-text-centered">

                    <div className={"headline-divider"}/>

                    <h1 className={"has-text-centered super-big blue"}>
                        Eventmodeling Workshop in deinem Team
                    </h1>
                    <h3 className={" has-text-centered"}>
                        Anleitung zur Durchführung</h3>

                        <div>Mit der Anleitung, die <a href={"/assets/in-8-schritten-zu-besseren-requirements.pdf"}>hier als PDF</a> herunterladen werden kann, kannst du eigenständig Eventmodeling-Workshops in deinem Team durchführen.<br/>
                        Eventmodeling-Workshops können intern im Team durchgeführt werden, um das Design eines Softwaresystems zu unterstützen, oder unternehmensweit, um komplette Systeme zu planen.</div>

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
                            <div className={"has-text-centered"}>


                                <div>
                                <img src={"/assets/anleitung/in-8-schritten-zu-besseren-requirements-01.png"}/>
                                </div>
                                Du findest hier eine Anleitung zum <a href={"/assets/in-8-schritten-zu-besseren-requirements.pdf"}>direkten Download.</a>


                            </div>

                        </Card></div>
                </div>
            </div>
        </div>
    )
}
