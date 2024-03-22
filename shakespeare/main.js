
import { DNA, random, floor } from './Dna.js'
// Mutation rate
let mutationRate = 0.001;
// Population Size
let populationSize = 150;

// Population array
let population = [];

// Target phrase
let target = "to be or not to be";


//{!3} Step 1: Initialize Population
for (let i = 0; i < populationSize; i++) {
  population[i] = new DNA(target.length);
  console.log(population[i].getPhrase())
}

function random_elm(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }


  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var counter = 10;
while (counter < 1000000) {

  counter++;
  console.clear()
  for (let phrase of population) {
    phrase.calculateFitness(target);


    console.log(phrase.getPhrase());
  }

  let matingPool = [];

  for (let phrase of population) {
    let n = floor(phrase.fitness * 100);
    for (let j = 0; j < n; j++) {
      matingPool.push(phrase);
    }
  }

  for (let i = 0; i < population.length; i++) {
    let partnerA = random_elm(matingPool);
    let partnerB = random_elm(matingPool);

    let child = partnerA.crossover(partnerB);
    child.mutate(mutationRate);
    population[i] = child;
  }


}
