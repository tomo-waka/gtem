import { faker } from "@faker-js/faker";
import type { CommandOptions, ProgrammableCommand } from "../../type.js";

/**
 * options
 * * min
 * * max
 */
export const intCommand: ProgrammableCommand = {
  name: "int",
  build: (commandOptions: Readonly<CommandOptions> | undefined) => {
    return () => faker.number.int(commandOptions).toString();
  },
};
