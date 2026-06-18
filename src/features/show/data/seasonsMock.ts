import type { SeasonDTO } from "../types/season.types";

export const MOCK_SEASONS: SeasonDTO[] = [
  {
    id: 1,
    number: 1,
    episodeOrder: 13,
    premiereDate: '2013-06-24',
    endDate: '2013-09-16',
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/24/60941.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/24/60941.jpg',
    },
    summary: '',
  },
  {
    id: 2,
    number: 2,
    episodeOrder: 13,
    premiereDate: '2014-06-30',
    endDate: '2014-09-22',
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/24/60942.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/24/60942.jpg',
    },
    summary: '',
  },
  {
    id: 6233,
    number: 3,
    episodeOrder: 13,
    premiereDate: '2015-06-25',
    endDate: '',
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/182/457332.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/182/457332.jpg',
    },
    summary: '',
  },
]