from math import floor
from Dna import DNA
import random
mutation_rate = 0.002
pop_size = 150

population = []
target = "to be or not to be"

for i in range(pop_size):
    population.append(DNA(len(target)))

counter = 0
while(counter < 1000000):
    counter+=1
    for p in population:
        p.calculate_fitness(target)
        print(p.get_phrase(), counter)
    mating_pool = []
    for p in population:
        n = floor(p.fitness * 100)
        for i in range(n):
            mating_pool.append(p)
    for i in range(len(population)):
        p1 = random.choice(mating_pool)
        p2 = random.choice(mating_pool)
        child = p1.crossover(p2)
        child.mutate(mutation_rate)
        population[i] = child
