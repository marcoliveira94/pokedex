export type PokemonListResponse = {
  count: number
  next: string
  previous: string | null
  results: Pokemon[]
}

export type Pokemon = {
  name: string
  url: string
}

export type PokemonResponse = {
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: GameIndex[]
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export type Type = {
  slot: number
  type: {
    name: TypeEnum
    url: string
  }
}

export enum TypeEnum {
  NORMAL = 'normal',
  FIGHTING = 'fighting',
  FLYING = 'flying',
  POISON = 'poison',
  GROUND = 'ground',
  ROCK = 'rock',
  BUG = 'bug',
  GHOST = 'ghost',
  STEEL = 'steel',
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  PSYCHIC = 'psychic',
  ICE = 'ice',
  DRAGON = 'dragon',
  DARK = 'dark',
  FAIRY = 'fairy',
  UNKNOWN = 'unknown',
  SHADOW = 'shadow'
}

export type Stat = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type Species = {
  name: string
  url: string
}

export type Sprites = {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
}

export type Move = {
  move: {
    name: string
    url: string
  }
}

export type MoveData = {
  name: ''
}

export type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export type Form = {
  name: string
  url: string
}

export type GameIndex = {
  game_index: number
  version: {
    name: string
    url: string
  }
}
