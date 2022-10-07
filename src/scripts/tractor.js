
import { addPlant } from "./field.js"

import { usePlants } from "./field.js"; 

import { createAsparagus } from "./seeds/asparagus.js"

import { createCorn } from "./seeds/corn.js"

import { createPotato } from "./seeds/potato.js"

import { createSoybean } from "./seeds/soybean.js"

import { createSunflower } from "./seeds/sunflower.js"

import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plants) => {
    //iterate through the outer array j
    for (let plant of plants) {
        //iterate through the inner array
        for (let type of plant) {
            if (type === "Asparagus") {
                //create the seed 
                let seed = createAsparagus();
                //The addPlant function is imported so that the seed can be pushed to the plants array in the field module
                addPlant(seed);
            } else if (type === "Corn") {
                let seed = createCorn();
                addPlant(seed);
            } else if (type === "Potato") {
                let seed = createPotato();
                addPlant(seed);
            } else if (type === "Soybean") {
                let seed = createSoybean();
                addPlant(seed);
            } else if (type === "Sunflower") {
                let seed = createSunflower();
                addPlant(seed);    
            } else if (type === "Wheat") {
                let seed = createWheat();
                addPlant(seed);
            }
        }
    }
}

