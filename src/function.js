function sortHeroesByHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}

// eslint-disable-next-line no-undef
module.exports = { sortHeroesByHealth };