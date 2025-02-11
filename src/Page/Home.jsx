import About from '../Component/About';
import Contact from '../Component/Contact';
import Gallery from '../Component/Gallery';
import Head from '../Component/Head';
import Menu from '../Component/Menu';

const Home = () => {
    return (
        <div>
            <Head />
            <Menu />
            <Gallery />
            <About />
            <Contact />
        </div>
    )
}

export default Home