import yellow from "./assets/amarelo.png";
import blue from "./assets/azul.png";
import white from "./assets/branco.png";
import purple from "./assets/lilas.png";
import brown from "./assets/marrom.png";
import pink from "./assets/rosa.png";
import rosso from "./assets/rosso.png";
import turquoise from "./assets/turquesa.png";
import green from "./assets/verde.png";
import garance from "./assets/garance.png";
import urucum from "./assets/urucum.png";
import yellowPalletTexture from "./assets/paleta-amarela.png";
import pinkPalletTexture from "./assets/paleta-rosa.png";
import grayPalletTexture from "./assets/paleta-cinza.png";

import paleta120 from "./assets/paleta120.png";
import paleta121 from "./assets/paleta121.png";
import paleta20 from "./assets/paleta20.png";
import paleta21 from "./assets/paleta21.png";
import paleta60 from "./assets/paleta60.png";
import paleta61 from "./assets/paleta61.png";

export const cases = [
  {
    id: 1,
    size: 2,
    price: 100,
    images: [paleta20, paleta21],
    colors: [
      {
        name: "Yellow",
        image: yellowPalletTexture,
      },
      {
        name: "Pink",
        image: pinkPalletTexture,
      },
      {
        name: "Gray",
        image: grayPalletTexture,
      },
    ],
  },
  {
    id: 2,
    size: 6,
    price: 140,
    images: [paleta60, paleta61],
    colors: [
      {
        name: "Yellow",
        image: yellowPalletTexture,
      },
      {
        name: "Pink",
        image: pinkPalletTexture,
      },
      {
        name: "Gray",
        image: grayPalletTexture,
      },
    ],
  },
  {
    id: 3,
    size: 12,
    price: 240,
    images: [paleta120, paleta121],
    colors: [
      {
        name: "Yellow",
        image: yellowPalletTexture,
      },
      {
        name: "Pink",
        image: pinkPalletTexture,
      },
      {
        name: "Gray",
        image: grayPalletTexture,
      },
    ],
    extensions: [
      {
        name: "Pink",
        image: pinkPalletTexture,
        price: 100,
      },
      {
        name: "Gray",
        image: grayPalletTexture,
        price: 100,
      },
    ],
  },
];

export const colors = [
  {
    id: 1,
    name: "Yellow",
    color: "#e6c235",
    price: 25,
    image: yellow,
    units: 0,
  },
  {
    id: 2,
    name: "Blue",
    color: "#325cd9",
    price: 25,
    image: blue,
    units: 0,
  },
  {
    id: 3,
    name: "White",
    color: "#ffffff",
    price: 25,
    image: white,
    units: 0,
  },
  {
    id: 4,
    name: "Purple",
    color: "#944dd7",
    price: 25,
    image: purple,
    units: 0,
  },
  {
    id: 5,
    name: "Brown",
    color: "#502121",
    price: 25,
    image: brown,
    units: 0,
  },
  {
    id: 6,
    name: "Pink",
    color: "#e438bc",
    price: 25,
    image: pink,
    units: 0,
  },
  {
    id: 7,
    name: "Rosso",
    color: "#651515",
    price: 25,
    image: rosso,
    units: 0,
  },
  {
    id: 8,
    name: "Turquoise",
    color: "#1c8ddd",
    price: 25,
    image: turquoise,
    units: 0,
  },
  {
    id: 9,
    name: "Green",
    color: "#2d4722",
    price: 25,
    image: green,
    units: 0,
  },
  {
    id: 10,
    name: "Garance",
    color: "#760e0c",
    price: 25,
    image: garance,
    units: 0,
  },
  {
    id: 11,
    name: "Urucum",
    color: "#910805",
    price: 25,
    image: urucum,
    units: 0,
  },
];
