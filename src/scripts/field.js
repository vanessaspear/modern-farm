
let plants = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed) === true) {
        for (let object of seed) {
            plants.push(object);
        }
    } else {
        plants.push(seed);
    }
    
}

export const usePlants = () => {
    //return plants.map(plants => ({...plants}));
    return plants;
}