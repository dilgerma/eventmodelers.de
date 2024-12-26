import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '../app/page.module.css'
import Card from '../components/card';
import Navigation from '../components/navigation';
import SEO from '@/components/seo';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className="main">
            <SEO title="Nebulit GmbH | Impressum"/>

            <Navigation/>
            <div className={"topBorder"}></div>

            <div className="content container bigger contentElement">
                <div className={"topBorder"}></div>
                <Card headline="Impressum" textLeft={true} full={true} image={"/assets/nebulit.png"} shadow={false}>
                    <div className={"has-text-centered"}>
                        <p>
                            Angaben gemäß § 5 TMG:
                        </p>
                        <p>
                            <b>Nebulit GmbH</b>
                        </p>
                        <p>
                            Postanschrift:<br/>
                            Martinistraße 7<br/>
                            83370 Seeon-Seebruck<br/>
                        </p>
                        <p>
                            Kontakt:<br/>
                            Telefon: +49 176 63134391<br/>
                            E-Mail: info@nebulit.de<br/>
                        </p>
                        <p>
                            Vertreten durch:<br/>
                            Martin Dilger<br/>
                        </p>
                        <p>
                            Umsatzsteuer ID: DE290862248
                        </p>
                        <p>
                            Eingetragen am:<br/>
                            Amtsgericht Traunstein<br/>
                            HRB 31772<br/>
                        </p>
                    </div>
                </Card>
            </div>
        </main>
    )
}
