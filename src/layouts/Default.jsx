import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './main.scss'

export default function Layout({ children }) {
    return (
        <div className={'layout'}>
            <Header />
            <main className={'main'}>
                {children}
            </main>
            <Footer />
        </div>
    );
}