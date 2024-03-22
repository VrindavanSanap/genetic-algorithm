import random
import string


def random_char():
    c = random.randint(32, 126)  # Adjusted range to match JavaScript's 32-127
    return chr(c)


class DNA:

    def __init__(self, length):
        self.genes = [];
        self.fitness = 0;
        for i in range(length):
            self.genes.append(random_char())
    def get_phrase(self):
        return "".join(self.genes)
    def calculate_fitness(self, target):
        score = 0
        for i in range(len(target)):
            if target[i] == self.genes[i]:
                score += 1
        self.fitness = score / len(target)

    def crossover(self, partner):
        child = DNA(len(self.genes))
        midpoint = random.randint(0, len(self.genes))
        child.genes[:midpoint] = self.genes[:midpoint]
        child.genes[midpoint:] = partner.genes[midpoint:]
        return child

    def mutate(self, rate):
        for i in range(len(self.genes)):
            if random.random() < rate:
                self.genes[i] = random_char()
