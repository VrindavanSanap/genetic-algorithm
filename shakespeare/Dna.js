export function random(lower, upper = 0) {
  if (upper == 0) {
    return Math.random() * lower;
  }
  return Math.random() * (upper - lower) + lower;
}
export function floor(n) {
  return Math.floor(n);
}
function randomCharacter() {
  let c = floor(random(32, 127));
  return String.fromCharCode(c);
}
let x = [];
for (let i = 0; i < 10; i++) {
  x[i] = randomCharacter()
}

export class DNA {
  constructor(length) {
    this.genes = [];
    this.fitness = 0;
    for (let i = 0; i < length; i++) {
      this.genes[i] = randomCharacter();
    }
  }
  getPhrase() {
    return this.genes.join("");
  }
  getFitness() {
    return this.fitness;
  }
  calculateFitness(target) {
    let score = 0;
    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] == target.charAt(i)) {
        score++;
      }
    }
    this.fitness = score / target.length;
  }

  crossover(partner) {
    let child = new DNA(this.genes.length);
    let midpoint = floor(random(this.genes.length));

    for (let i = 0; i < this.genes.length; i++) {
      if (i < midpoint) {
        child.genes[i] = this.genes[i];

      } else {
        child.genes[i] = partner.genes[i];
      }
    }
    return child;
  }
  mutate(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = randomCharacter();
      }
    }
  }
}
