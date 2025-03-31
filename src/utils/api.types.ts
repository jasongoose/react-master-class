// 영화 정보를 위한 타입
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// API 응답 전체 구조를 위한 타입
export type PopularMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// 현재 상영 중인 영화 API 응답 전체 구조를 위한 타입
export type NowPlayingMoviesResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// 개봉 예정 영화 API 응답 전체 구조를 위한 타입
export type ComingSoonMoviesResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// 영화 장르 타입
type Genre = {
  id: number;
  name: string;
};

// 제작 회사 타입
type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

// 제작 국가 타입
type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

// 언어 타입
type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

// 특정 영화 상세 정보 API 응답을 위한 타입
export type MovieDetail = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  };
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
