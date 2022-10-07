console.log("Welcome to the main module")

import { addPlant } from './field.js';
import { createPlan } from './plan.js'

const yearlyPlan = createPlan();

console.log(yearlyPlan);

import { plantSeeds } from "./tractor.js"

import { usePlants } from "./field.js"

plantSeeds(yearlyPlan);

let plants = usePlants();

console.log(plants);

import { harvestPlants } from "./harvester.js";

let harvest = harvestPlants(plants);

console.log(harvest);

import { catalog } from "./catalog.js";

const parentHTMLElement = document.querySelector(".container");

parentHTMLElement.innerHTML = catalog(harvest);

catalog(harvest);





