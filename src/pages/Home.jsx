import Header from "../components/browse/Header";
import HomeHero from "../components/HomeHero";
import Faqs from "../components/faq/Faqs";
import { Features } from "../components/features/Features";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <div className="relative">
            <Header />
            <HomeHero />
            <Features />
            <Faqs />
            <Footer />
        </div>
    );
};

export default Home;
