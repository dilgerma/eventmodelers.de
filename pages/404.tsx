import Image from 'next/image'
import {Inter} from 'next/font/google'
import Card from '../components/card';
import Navigation from '../components/navigation';
import SEO from '@/components/seo';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <SEO title="Nebulit GmbH | Diese Seite existiert nicht."/>

            <div className="content container bigger contentElement">
                <div className={"topBorder"}></div>
                <Card headline="Sorry, diese Seite gibts (noch) nicht" textLeft={true} full={true} image={"/assets/nebulit.png"} shadow={false}>
                    <div>
                        Am besten <a href={"/"}>direkt hier zum Start springen.</a>
                    </div>
                </Card>
            </div>
        </div>
    )
}
