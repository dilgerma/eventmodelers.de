import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link href="/" className="navbar-item navbar-start">
                        <img height={"150px"} src="/assets/logo.png" alt="Logo" />
                    </Link>

                    {/* Burger Button für Mobilgeräte */}
                    <a
                        role="button"
                        className={`navbar-burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                {/* Navigation */}
                <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Eventsourcing & Eventmodeling lernen
                            </a>
                            <div className="navbar-dropdown">
                                <Link href="/das-eventmodeling-tutorial" className="navbar-item">
                                    Eventmodeling Tutorial
                                </Link>
                                <Link href="/eventmodeling-faq" className="navbar-item">
                                    Eventmodeling - Häufige Fragen
                                </Link>
                                <Link href="/eventmodeling-workshop-anleitung" className="navbar-item">
                                    Eventmodeling Workshop Anleitung
                                </Link>
                                <hr className="navbar-divider" />
                                <Link href="/eventsourcing-faq" className="navbar-item">
                                    Eventsourcing - Häufige Fragen
                                </Link>
                                <Link href="https://eventsourcingbook.com" className="navbar-item">
                                    Das Eventsourcing Buch
                                </Link>
                            </div>
                        </div>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Tools</a>
                            <div className="navbar-dropdown">
                                <Link href="/eventmodeling-tooling" className="navbar-item">
                                    Eventmodeling &quot;Accelerate&quot;-Tools
                                </Link>
                            </div>
                        </div>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link className="navbar-link" href="/blog">
                                Blog & Video
                            </Link>
                            <div className="navbar-dropdown">
                                <Link href="/blog/software-dokumentieren-mit-eventmodelling" className="navbar-item">
                                    Software dokumentieren mit Eventmodeling
                                </Link>
                                <Link href="/blog/dokumentieren-von-legacy-systemen-mit-eventmodeling" className="navbar-item">
                                    Legacy Systeme dokumentieren mit Eventmodeling
                                </Link>
                                <hr className="navbar-divider" />
                                <Link href="/blog" className="navbar-item">Alle Blogeinträge</Link>
                                <Link href="/videos" className="navbar-item">Alle Videos</Link>
                                <Link href="/webinare" className="navbar-item">Alle Webinare</Link>
                                <Link href="/newsletter" className="navbar-item">Alle Newsletter</Link>
                                <Link href="/podcasts" className="navbar-item">Alle Podcasts</Link>
                            </div>
                        </div>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Workshops & Kurse</a>
                            <div className="navbar-dropdown">
                                <Link href="https://nebulit.de" className="navbar-item">
                                    Direkt anfragen und weitere Infos erhalten
                                </Link>
                            </div>
                        </div>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link href="/eventmodeling-community-of-practice" className="navbar-link">
                                Community
                            </Link>
                            <div className="navbar-dropdown">
                                <Link href="/eventmodeling-community-of-practice" className="navbar-item">
                                    Community of Practice
                                </Link>
                                <Link href="https://www.eventmodeling.org" className="navbar-item">
                                    Eventmodeling.org
                                </Link>
                                <Link href="https://discord.com/invite/Sw4MvagftJ" className="navbar-item">
                                    Eventmodeling Community Discord
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
