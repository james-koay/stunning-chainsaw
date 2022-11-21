import { updateHeroLife } from '../../client/actions'

export default {
  cards: [
    {
      name: 'Amphora',
      image: 'images/amphora.png',
      effect: { target: 'HeroLife', value: 20 },
      description: 'Gain 20 life',
      order: 0,
    },
    {
      name: 'Throw Blades',
      image: 'images/assassin-pocket.png',
      effect: { target: 'enemyLife', value: -15 },
      description: 'Deal 15 Damage',
      order: 0,
    },
    {
      name: 'Axe Swing',
      image: 'images/battered-axe.png',
      effect: { target: 'enemyLife', value: -20 },
      description: 'Deal 20 Damage',
      order: 0,
    },
    {
      name: 'Sword Attack',
      image: 'images/broadsword.png',
      effect: { target: 'enemyLife', value: -20 },
      description: 'Deal 20 Damage',
      order: 0,
    },
    {
      name: 'Block',
      image: 'images/checked-shield.png',
      effect: { target: 'heroArmor', value: 10 },
      description: 'gain 10 Armor',
      order: 0,
    },
    {
      name: 'Mace Bash',
      image: 'images/flanged-mace.png',
      effect: { target: 'enemyLife', value: -20 },
      description: 'Deal 20 Damage',
      order: 0,
    },
    {
      name: 'Cleave',
      image: 'images/sharp-axe.png',
      effect: { target: 'enemyLife', value: -25 },
      description: 'Deal 25 Damage',
      order: 0,
    },
  ],
}
