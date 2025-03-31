import type {
  ComingSoonMoviesResponse,
  MovieDetail,
  NowPlayingMoviesResponse,
  PopularMoviesResponse
} from './api.types.ts';

const BASE_URL = 'https://movies-api.nomadcoders.workers.dev';

export function fetchPopular(): Promise<PopularMoviesResponse> {
  return fetch(`${BASE_URL}/popular`).then((r) => r.json());
}

export function fetchNowPlaying(): Promise<NowPlayingMoviesResponse> {
  return fetch(`${BASE_URL}/now-playing`).then((r) => r.json());
}

export function fetchComingSoon(): Promise<ComingSoonMoviesResponse> {
  return fetch(`${BASE_URL}/coming-soon`).then((r) => r.json());
}

export function fetchMovie(id: string | number): Promise<MovieDetail> {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((r) => r.json());
}

// https://developer.themoviedb.org/docs/image-basics

export function makeImagePath(imageUrl: string) {
  return `https://image.tmdb.org/t/p/w500${imageUrl}`;
}

export function makeBgPath(imageUrl: string) {
  return `https://image.tmdb.org/t/p/original${imageUrl}`;
}
