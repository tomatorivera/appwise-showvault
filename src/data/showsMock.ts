import type { ShowDTO } from "../services/shows/show.types";

export const MOCK_SHOWS: ShowDTO[] = [
  {
    id: 1,
    name: 'Under the Dome',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    status: 'Ended',
    premiered: '2013-06-24',
    rating: { average: 6.6 },
    network: { name: 'CBS' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/610/1525272.jpg',
    },
    summary:
      'A small town is suddenly sealed off from the world by a mysterious transparent dome.',
  },
  {
    id: 2,
    name: 'Person of Interest',
    type: 'Scripted',
    language: 'English',
    genres: ['Action', 'Crime', 'Science-Fiction'],
    status: 'Ended',
    premiered: '2011-09-22',
    rating: { average: 8.8 },
    network: { name: 'CBS' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
    },
    summary:
      'A former CIA agent and a billionaire use a surveillance AI to prevent violent crimes.',
  },
  {
    id: 3,
    name: 'Bitten',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Horror', 'Romance'],
    status: 'Ended',
    premiered: '2014-01-11',
    rating: { average: 7.4 },
    network: { name: 'CTV Sci-Fi Channel' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
    },
    summary:
      "Elena Michaels struggles with being the world's only female werewolf.",
  },
  {
    id: 4,
    name: 'Arrow',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Science-Fiction'],
    status: 'Ended',
    premiered: '2012-10-10',
    rating: { average: 7.4 },
    network: { name: 'The CW' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/143/358967.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/143/358967.jpg',
    },
    summary: 'Oliver Queen returns home and secretly becomes a vigilante hero.',
  },
  {
    id: 5,
    name: 'True Detective',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime', 'Thriller'],
    status: 'Running',
    premiered: '2014-01-12',
    rating: { average: 8.1 },
    network: { name: 'HBO' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/490/1226764.jpg',
    },
    summary:
      'Anthology crime drama following troubled detectives and complex investigations.',
  },
  {
    id: 6,
    name: 'The 100',
    type: 'Scripted',
    language: 'English',
    genres: ['Action', 'Adventure', 'Science-Fiction'],
    status: 'Ended',
    premiered: '2014-03-19',
    rating: { average: 7.7 },
    network: { name: 'The CW' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/477/1194981.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/477/1194981.jpg',
    },
    summary:
      "A group of juvenile prisoners is sent back to Earth to test if it's habitable.",
  },
  {
    id: 7,
    name: 'Homeland',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Thriller', 'Espionage'],
    status: 'Ended',
    premiered: '2011-10-02',
    rating: { average: 8.2 },
    network: { name: 'Showtime' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/498/1245275.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/498/1245275.jpg',
    },
    summary:
      'A CIA officer suspects a rescued war hero may be a national security threat.',
  },
  {
    id: 8,
    name: 'Glee',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Music', 'Romance'],
    status: 'Ended',
    premiered: '2009-05-19',
    rating: { average: 6.7 },
    network: { name: 'FOX' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg',
    },
    summary:
      'A musical comedy about a group of ambitious and talented high school students.',
  },
  {
    id: 9,
    name: 'Revenge',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Thriller', 'Mystery'],
    status: 'Ended',
    premiered: '2011-09-21',
    rating: { average: 7.8 },
    network: { name: 'ABC' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/82/206879.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/82/206879.jpg',
    },
    summary:
      "Emily Thorne returns to The Hamptons seeking revenge for her father's death.",
  },
  {
    id: 10,
    name: 'Grimm',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime', 'Supernatural'],
    status: 'Ended',
    premiered: '2011-10-28',
    rating: { average: 8.4 },
    network: { name: 'NBC' },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/69/174906.jpg',
    },
    summary:
      "A homicide detective discovers he's descended from a line of supernatural hunters.",
  },
]
