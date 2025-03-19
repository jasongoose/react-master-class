export type Book = {
  id: string;
  name: string;
  chapters: string[];
  characters: string[];
}

export type Author = {
  id: string;
  name: string;
  books: Book[];
}

export type MockData = Author[];

export const mockData: MockData = [
  {
    id: 'J._K._Rowling',
    name: 'J. K. Rowling',
    books: [
      {
        id: "Harry_Potter_I",
        name: "Harry Potter I",
        chapters: [
          'Chapter I',
          'Chapter II',
          'Chapter III',
          'Chapter IV',
          'Chapter V'
        ],
        characters: [
          'Good Guy A',
          'Good Guy B',
          'Bad Guy A',
          'Bad Guy B',
        ],
      },
      {
        id: "Harry_Potter_II",
        name: "Harry Potter II",
        chapters: [
          'Chapter I',
          'Chapter II',
          'Chapter III',
          'Chapter IV',
          'Chapter V'
        ],
        characters: [
          'Good Guy A',
          'Good Guy B',
          'Bad Guy A',
          'Bad Guy B',
        ],
      },
    ],
  },
  {
    id: 'J._R._R._Tolkein',
    name: 'J. R. R. Tolkein',
    books: [
      {
        id: "Lord_of_the_Rings_I",
        name: "Lord of the Rings I",
        chapters: [
          'Chapter I',
          'Chapter II',
          'Chapter III',
          'Chapter IV',
          'Chapter V'
        ],
        characters: [
          'Good Guy A',
          'Good Guy B',
          'Bad Guy A',
          'Bad Guy B',
        ],
      },
      {
        id: "Lord_of_the_Rings_II",
        name: "Lord of the Rings II",
        chapters: [
          'Chapter I',
          'Chapter II',
          'Chapter III',
          'Chapter IV',
          'Chapter V'
        ],
        characters: [
          'Good Guy A',
          'Good Guy B',
          'Bad Guy A',
          'Bad Guy B',
        ],
      }
    ],
  }
]