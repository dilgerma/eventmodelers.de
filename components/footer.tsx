export default function Footer() {
    return (
        <footer className="footer">

            <div className="level footer">

                <div className="bigger level-item has-text-centered">

                    <nav className="level">

                        <p className="level-item has-text-centered">
                            <a className={"link is-info navbar-item"}
                               href={"https://www.nebulit.de/impressum"}>Impressum</a>
                        </p>
                        <p className="has-text-centered">
                            <a className={"navbar-item"} href={"https://www.nebulit.de/datenschutz"}>Datenschutz</a>
                        </p>

                    </nav>
                </div>

            </div>
            <p className={"has-text-centered"}>
                Die Inhalte dieser Seite sind ein Angebot der <a href={"https://www.nebulit.de"}>Nebulit GmbH</a>
            </p>

        </footer>
    )
}
