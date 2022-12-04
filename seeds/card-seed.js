/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cards').del()
  await knex('cards').insert([
    {
      name: 'Amphora',
      image: 'images/amphora.png',
      effect_target: 'heroLife',
      effect_value: 20,
      description: 'Gain 20 life',
    },
    {
      name: 'Throw Blades',
      image: 'images/assassin-pocket.png',
      effect_target: 'enemyLife',
      effect_value: -15,
      description: 'Deal 15 Damage',
    },
    {
      name: 'Axe Swing',
      image: 'images/battered-axe.png',
      effect_target: 'enemyLife',
      effect_value: -20,
      description: 'Deal 20 Damage',
    },
    {
      name: 'Sword Attack',
      image: 'images/broadsword.png',
      effect_target: 'enemyLife',
      effect_value: -20,
      description: 'Deal 20 Damage',
    },
    {
      name: 'Block',
      image: 'images/checked-shield.png',
      effect_target: 'heroArmor',
      effect_value: 10,
      description: 'Gain 10 Armor',
    },
    {
      name: 'Mace Bash',
      image: 'images/flanged-mace.png',
      effect_target: 'enemyLife',
      effect_value: -20,
      description: 'Deal 20 Damage',
    },
    {
      name: 'Cleave',
      image: 'images/sharp-axe.png',
      effect_target: 'enemyLife',
      effect_value: -25,
      description: 'Deal 25 Damage',
    },
  ])
}
