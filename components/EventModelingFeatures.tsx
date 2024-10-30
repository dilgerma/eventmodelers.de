export default function EventModelingFeatures(props: {}) {
    return (<div className="content container bigger padding">
        <div className="contentElement">
            <div className={"columns"}>
                <div className={"column notification is-info is-light padding"}>
                    <h3 className={"has-text-centered"}>Community</h3>
                    <div>
                        <ul>
                            <li>
                                ✅ Kostenlos
                            </li>
                            <li>✅ Alle Features, die für die Planung von Software in
                                Miro notwendig sind.
                            </li>
                            <li>✅ Software-Modellierung mit <b>Eventmodeling</b> in Miro</li>
                            <li>✅ Scenario Editor</li>
                            <li>✅ Aktueller Dev Stand</li>
                            <li>✅ <b>Data Ownership</b> - Keinerlei Datenpersistenz & Nutzung außerhalb Miro
                            </li>
                            <li>🚫 Live Modell Validierung</li>
                            <li>🚫 Code Generierung</li>
                            <li>🚫 Branding</li>
                            <li>🚫 Max. 5 User pro Board</li>
                        </ul>
                        <div>
                            <p className={"top-margin has-text-centered"}>
                                <a target="_blank"
                                   href={"https://miro.com/marketplace/eventmodeling/"}
                                   className={"button is-info"}>
                                    <span className={"bigger"}>Jetzt kostenlos in Miro starten</span></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"column notification is-info is-light padding"}>
                    <h3 className={"has-text-centered"}>Enterprise</h3>
                    <div>
                        <ul>
                            <li>✅ Community Features inklusive</li>
                            <li>✅ Live Modell Validierung</li>
                            <li>✅ E-Mail Support</li>
                            <li>✅ Unlimitierte User</li>
                            <li>✅ Unlimitierte User</li>
                            <li>✅ Unlimitierte Teams</li>
                            <li>✅ Unlimitierte Modelle</li>
                            <li>✅ Code Generierung inklusive</li>
                            <li>✅ Export zu Eventcatalog. Beispiel <a target={"_blank"}
                                                                      href={"https://eventcatalog-demo.nebulit.de/"}>hier</a>
                            </li>
                            <li>✅ Eventsourcing Blue Print</li>
                            <li>✅ Axon Framework Integration (in Arbeit)</li>
                            <li>👷 In Browser Prototyp (in Arbeit)</li>
                            <li>👷 Typescript Live Prototyping (in Arbeit)</li>
                            <li>👷 AWS Lambda Stack (in Arbeit)</li>
                            <li>✅ 60 Minuten Onboarding Call</li>
                            <li>✅ 7 Tage kostenloser Test</li>
                        </ul>

                        <div className={"top-margin"}/>
                        <div className={"columns"}>
                            <div className={"column has-text-centered"}>Monatliche Kosten pro Benutzer: <div
                            ><span className={"huge"}> 59 €</span> / <span className={"small"}> mtl.</span></div>
                                <div>inkl. Setup</div>
                                <div>inkl. 15 Minuten Onboarding Call</div>
                            </div>
                            <div className={"column has-text-centered"}>Lieber einmal kaufen?
                                <div>Unbegrenzte Benutzer & Teams</div>
                                <div>inkl. Setup</div>
                                <div>inkl. 60 Minuten Onboarding Call</div>
                                <div>keine monatlichen Kosten</div>
                                <div className={"top-margin has-text-centered"}>
                                    <a target="_blank"
                                       href="https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2"
                                       className={"button is-success"}>
                                        <i className="fa-solid fa-phone padding"></i>
                                        <span className={"bigger"}>Jetzt informieren.</span></a>
                                </div>
                            </div>

                        </div>


                        <hr/>
                        <div>
                            <h3 className={"has-text-centered"}>Custom Code Generator</h3>
                            <div>
                                Es ist möglich einen eigenen Code-Generator zu entwickeln (ggf. mit zusätzlichen Kosten
                                verbunden). Weitere Details erhalten Sie im kostenlosen Info-Gespräch.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
