import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import {mensShoesPage1} from "../../../Data/shoes";
import {mens_shirt} from "../../../Data/Men/men_shirt";
import {sareePage1} from "../../../Data/Saree/page1";
import {dressPage1} from "../../../Data/dress/page1";
import {mensPantsPage1} from "../../../Data/pants/men_page1";

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className="relative px-4 sm:px-6 lg:px-8 ">
        <HomeSectionCarousel data={mens_kurta} section={"Men's Kurta"} />
        <HomeSectionCarousel data={mensShoesPage1} section={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_shirt} section={"Men's Shirt"} />
        <HomeSectionCarousel data={mensPantsPage1} section={"Men's Pants"} />
        <HomeSectionCarousel data={sareePage1} section={"Women's Saree"} />
        <HomeSectionCarousel data={dressPage1} section={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
