import seedrandom from 'seedrandom';
import { Config } from './unique-names-generator.constructor';
import { uniqueNamesGenerator } from './unique-names-generator';

export const uniqueNamesGeneratorFactory = (options: Config, seed?: string): (() => string) => {
  const myRandom = seedrandom(seed);

  return (): string => {
    return uniqueNamesGenerator({ ...options, randomGenerator: myRandom });
  };
};
