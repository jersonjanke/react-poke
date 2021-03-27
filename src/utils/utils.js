export const getTypeBgPokemon = (type) => {
  switch (type) {
    case `bug`: {
      return `background: green`;
    }
    case `dark`: {
      return `background: #8b73d5`;
    }
    case `dragon`: {
      return `background: #5a6abd`;
    }
    case `electric`: {
      return `background: #f6e652`;
    }
    case `fairy`: {
      return `background: #fdd5bd`;
    }
    case `grass`: {
      return `background: #249483`;
    }
    case `fire`: {
      return `background: #e65a29`;
    }
    case `fighting`: {
      return `background: #73a4a4`;
    }
    case `ghost`: {
      return `background: #8b6283`;
    }
    case `ground`: {
      return `background: #ffb13f`;
    }
    case `ice`: {
      return `background: #7bc5ff`;
    }
    case `stell`: {
      return `background: #c5cdd5`;
    }
    case `normal`: {
      return `background: #fee68b`;
    }
    case `poison`: {
      return `background: #d573ee`;
    }
    case `psychic`: {
      return `background: #f6de02`;
    }
    case `rock`: {
      return `background: #b4b49c`;
    }
    case `water`: {
      return `background: #b4e6ee`;
    }
    default:
      return `background: #eee`;
  }
};
