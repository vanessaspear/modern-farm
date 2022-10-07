
//The plants parameter is an array of seed objects

export const harvestPlants = (plants) => {  
    let seedObjects = [];
    for (let plant of plants) {
        if (plant.type === "Corn") {
            let output = plant.output / 2;
            let i = 0;
            while (i < output) {
                seedObjects.push(plant);
                i++;
            }
        }
        else {
            let i = 0; 
            while (i < plant.output) {
                seedObjects.push(plant);
                i++;
             }
        }
    }
    return seedObjects;
}
    
    