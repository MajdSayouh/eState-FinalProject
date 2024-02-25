import { Fragment } from "react";
import "./landingPage.css";
import HeroSection from "./heroSection/HeroSection";
import CategorySection from "./categorySection/CategorySection";
import RentSection from "../RentSection/RentSection";
import SaleSection from "../SaleSection/SaleSection";

const LandingPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <CategorySection />
      <RentSection />
      <SaleSection />
    </Fragment>
  );
};

export default LandingPage;
