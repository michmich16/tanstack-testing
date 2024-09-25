export const singleFilm = `query Film($filmId: ID) {
    film(id: $filmId) {
      id
      producers
      title
    }
  }`;
