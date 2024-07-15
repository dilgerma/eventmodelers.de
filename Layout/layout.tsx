import Footer from '../components/footer';
import Navigation from '@/components/navigation';

export const metadata = {
    title: 'Nebulit GmbH',
    description: '',
}

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (

        <div className={"flexbox-container"}>
            <Navigation/>
            <div className={"main"}>
                {children}
                <div>
                    <Footer/>
                </div>
            </div>

        </div>
    )
}
