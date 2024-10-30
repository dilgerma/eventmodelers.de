import Layout from '@/Layout/layout';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';


export default function Navigation() {

    return (
        <nav className="navbar" role="navigation" aria-label="dropdown navigation">
            <Link className={"is-hidden-touch"} href={"/"}>
                <img width={"150px"} src={"/assets/logo.png"}/>
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                    Eventsourcing & Eventmodeling lernen
                </a>
                <div className="navbar-dropdown">

                    <Link href="/das-eventmodeling-tutorial" className="navbar-item">
                        Eventmodeling Tutorial
                    </Link>
                    {/*<Link href={"/eventmodeling-lernen"} className="navbar-item">*/}
                    {/*    Eventmodeling Pattern Katalog*/}
                    {/*</Link>*/}
                    <Link href="/eventmodeling-faq" className="navbar-item">
                                           Eventmodeling - Häufige Fragen
                                       </Link>
                    <Link href="/eventmodeling-workshop-anleitung" className="navbar-item">
                        Eventmodeling Workshop Anleitung
                    </Link>
                    <hr className="navbar-divider"/>
                    {/*<Link href="/eventsourcing-lernen" className="navbar-item">*/}
                    {/*    Eventsourcing lernen*/}
                    {/*</Link>*/}
                    {/*<a className="navbar-item">*/}
                    {/*    Eventsourcing Pattern Katalog*/}
                    {/*</a>*/}
                    <Link href="/eventsourcing-faq" className="navbar-item">
                                                                                 Eventsourcing - Häufige Fragen
                                                                             </Link>
                    <Link href="/das-eventsourcing-buch" className="navbar-item">
                        Das Eventsourcing Buch
                    </Link>


                </div>
            </div>


            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                    Tools
                </a>
                <div className="navbar-dropdown">
                    <Link href="/eventmodeling-tooling" className="navbar-item">
                        Eventmodeling &quot;Accelerate&quot;-Tools
                    </Link>


                </div>
            </div>


            <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" href={"/blog"}>
                    Blog & Video
                </Link>
                <div className="navbar-dropdown">
                    <Link href="/blog/software-dokumentieren-mit-eventmodelling" className="navbar-item">
                        Software dokumentieren mit Eventmodeling
                    </Link>
                    <Link href="/blog/dokumentieren-von-legacy-systemen-mit-eventmodeling" className="navbar-item">
                        Legacy Systeme dokumentieren mit Eventmodeling
                    </Link>
                    <Link href="/blog/das-ist-das-perfekte-softwaremodell-fuer-startups" className="navbar-item">
                        Das ist das perfekte Softwaremodell für Startups
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                    </div>


                    <hr className="navbar-divider"/>
                    <Link href={"/blog"} className="navbar-item">
                        Alle Blogeinträge
                    </Link>
                    <Link href={"/videos"} className="navbar-item">
                        Alle Videos
                    </Link>
                    <Link href={"/podcasts"} className="navbar-item">
                                           Alle Podcasts
                                       </Link>
                    <Link href={"/social-media"} className="navbar-item">
                        Social-Media
                    </Link>
                </div>
            </div>


            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                    Workshops & Kurse
                </a>
                <div className="navbar-dropdown">

                    <Link href="https://training.nebulit.de/software-planen-mit-eventmodeling/" className="navbar-item">
                        Eventmodeling Workshop
                    </Link>

                </div>
            </div>


            <div className="navbar-item has-dropdown is-hoverable">
                <Link href={"/eventmodeling-community-of-practice"} className="navbar-link">
                    Community
                </Link>
                <div class="navbar-dropdown">
                    <Link href="/eventmodeling-community-of-practice" className="navbar-item">
                        Community of Practice
                    </Link>
                    <Link href="https://www.eventmodeling.org" class="navbar-item">
                        Eventmodeling.org
                    </Link>
                    <Link href="https://discord.com/invite/Sw4MvagftJ" class="navbar-item">
                        Eventmodeling Community Discord
                    </Link>
                    <div class="navbar-item has-dropdown is-hoverable">
                    </div>

                </div>
            </div>

        </nav>
    )
}
