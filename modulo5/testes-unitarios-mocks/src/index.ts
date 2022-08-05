import { Character } from "./model/Character";

export const validateCharacter = (character: Character): boolean => {

  if(!character.name || character.life === undefined || character.defense === undefined || character.strength === undefined) {
    return false
  }

  if(character.life <= 0 || character.defense <= 0 || character.strength <= 0) {
    return false
  }

  return true
}

export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
  ) => {

  if(!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character")
  }

  if(attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense
  }
}

