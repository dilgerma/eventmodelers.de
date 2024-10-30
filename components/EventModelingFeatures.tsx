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
                            <li>✅ <b>Data Ownership</b> - Keinerlei Datenpersistenz & Nutzung außerhalb Miro
                            </li>
                            <li>🚫 Live Modell Validierung</li>
                            <li>🚫 Scenario Editor</li>
                            <li>🚫 Code Generierung</li>
                            <li>🚫 Love Prototyp</li>
                            <li>🚫 Data Trail & Live Modell Analyse</li>
                            <li>🚫 User Flows</li>
                            <li>🚫 Information Completeness Check</li>
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
                            <li>✅ Unlimitierte User, Boards und Modelle</li>
                            <li>✅ Eigene Code Generatoren</li>
                            <li>✅ Export zu Eventcatalog. Beispiel <a target={"_blank"}
                                                                      href={"https://eventcatalog-demo.nebulit.de/"}>hier</a>
                            </li>
                            <li>✅ Axon Framework Code Generator</li>
                            <li>✅ Information-Completeness-Check</li>
                            <li>✅ Live In-Browser Prototyp</li>
                            <li>✅ 60 Minuten Onboarding Call</li>
                            <li>✅ 14 Tage kostenloser Test</li>
                        </ul>

                        <div className={"top-margin"}/>
                        <div className={"columns"}>
                            <div className={"column has-text-centered"}>Monatliche Kosten pro Benutzer: <div
                            ><span className={"huge"}> 99 €</span> / <span className={"small"}> mtl.</span></div>
                                <div>inkl. Setup</div>
                                <div>inkl. 15 Minuten Onboarding Call</div>
                                <div>Cost-Cap bei 495,00 € / mtl. ohne Benutzerlimit</div>
                            </div>


                        </div>


                        <hr/>

                    </div>
                </div>
            </div>
        </div>
    </div>)
}
