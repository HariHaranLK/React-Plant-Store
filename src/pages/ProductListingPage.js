import React from 'react';
import CategoryGallery from '../components/CategoryGallery';
import './ProductListingPage.css';

// Import images directly
import AloeVera from '../assets/AloeVera.jpg';
import AsparagusFern from '../assets/AsparagusFern.jpg';
import BarrelCactus from '../assets/BarrelCactus.jpg';
import BirdsNestFern from '../assets/BirdsNestFern.jpg';
import BostonFern from '../assets/BostonFern.jpg';
import ChristmasCactus from '../assets/ChristmasCactus.jpg';
import Echeveria from '../assets/Echeveria.jpg';
import JadePlant from '../assets/JadePlant.jpg';
import MaidenhairFern from '../assets/MaidenhairFern.jpg';
import Opuntia from '../assets/Opuntia.jpg';
import PandaPlant from '../assets/PandaPlant.jpg';
import PricklyPear from '../assets/PricklyPear.jpg';
import SaguaroCactus from '../assets/SaguaroCactus.jpg';
import StaghornFern from '../assets/StaghornFern.jpg';
import ZebraCactus from '../assets/ZebraCactus.jpg';

const plants = {
  'Category 1': [
    { id: 1, name: 'Aloe Vera', price: 10, thumbnail: AloeVera },
    { id: 2, name: 'Asparagus Fern', price: 15, thumbnail: AsparagusFern },
    { id: 3, name: 'Barrel Cactus', price: 20, thumbnail: BarrelCactus },
    { id: 4, name: 'Bird\'s Nest Fern', price: 12, thumbnail: BirdsNestFern },
    { id: 5, name: 'Boston Fern', price: 18, thumbnail: BostonFern },
  ],
  'Category 2': [
    { id: 6, name: 'Christmas Cactus', price: 14, thumbnail: ChristmasCactus },
    { id: 7, name: 'Echeveria', price: 22, thumbnail: Echeveria },
    { id: 8, name: 'Jade Plant', price: 25, thumbnail: JadePlant },
    { id: 9, name: 'Maidenhair Fern', price: 16, thumbnail: MaidenhairFern },
    { id: 10, name: 'Opuntia', price: 19, thumbnail: Opuntia },
  ],
  'Category 3': [
    { id: 11, name: 'Panda Plant', price: 11, thumbnail: PandaPlant },
    { id: 12, name: 'Prickly Pear', price: 21, thumbnail: PricklyPear },
    { id: 13, name: 'Saguaro Cactus', price: 30, thumbnail: SaguaroCactus },
    { id: 14, name: 'Staghorn Fern', price: 27, thumbnail: StaghornFern },
    { id: 15, name: 'Zebra Cactus', price: 17, thumbnail: ZebraCactus },
  ],
};

const ProductListingPage = () => {
  return (
    <div className="product-listing-page">
      <h1>Product Listing</h1>
      <CategoryGallery plants={plants} />
    </div>
  );
};

export default ProductListingPage;
