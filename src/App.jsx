import styles from "./styles";
import Navbar from "./components/Navbar";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Business from "./components/Business";
import Clients from "./components/Clients";
import CallTA from "./components/CallTA";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";

const App = () => (
  <div className="w-full overflow-hidden bg-primary">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CallTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
