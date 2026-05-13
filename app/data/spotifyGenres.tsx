export type GenreAttributes = {
  energy: number
  acousticness: number
  instrumentalness: number
  danceability: number
  valence: number
  tempo: number
  complexity: number
  popularity: number
}

export const genreData: Record<string, GenreAttributes> = {
  "acoustic": {
    energy: 0.30,
    acousticness: 0.95,
    instrumentalness: 0.40,
    danceability: 0.30,
    valence: 0.55,
    tempo: 0.35,
    complexity: 0.50,
    popularity: 0.75
  },
  "afrobeat": {
    energy: 0.75,
    acousticness: 0.40,
    instrumentalness: 0.30,
    danceability: 0.85,
    valence: 0.70,
    tempo: 0.75,
    complexity: 0.65,
    popularity: 0.60
  },
  "alt-rock": {
    energy: 0.75,
    acousticness: 0.25,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.50,
    tempo: 0.65,
    complexity: 0.55,
    popularity: 0.85
  },
  "alternative": {
    energy: 0.65,
    acousticness: 0.35,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.50,
    tempo: 0.60,
    complexity: 0.55,
    popularity: 0.90
  },
  "ambient": {
    energy: 0.10,
    acousticness: 0.60,
    instrumentalness: 0.95,
    danceability: 0.05,
    valence: 0.40,
    tempo: 0.20,
    complexity: 0.45,
    popularity: 0.45
  },
  "anime": {
    energy: 0.70,
    acousticness: 0.20,
    instrumentalness: 0.10,
    danceability: 0.60,
    valence: 0.75,
    tempo: 0.75,
    complexity: 0.55,
    popularity: 0.80
  },
  "black-metal": {
    energy: 0.95,
    acousticness: 0.05,
    instrumentalness: 0.40,
    danceability: 0.20,
    valence: 0.20,
    tempo: 0.90,
    complexity: 0.80,
    popularity: 0.45
  },
  "bluegrass": {
    energy: 0.55,
    acousticness: 0.95,
    instrumentalness: 0.40,
    danceability: 0.45,
    valence: 0.60,
    tempo: 0.65,
    complexity: 0.70,
    popularity: 0.55
  },
  "blues": {
    energy: 0.40,
    acousticness: 0.80,
    instrumentalness: 0.30,
    danceability: 0.35,
    valence: 0.35,
    tempo: 0.40,
    complexity: 0.60,
    popularity: 0.70
  },
  "bossanova": {
    energy: 0.35,
    acousticness: 0.85,
    instrumentalness: 0.40,
    danceability: 0.55,
    valence: 0.65,
    tempo: 0.45,
    complexity: 0.65,
    popularity: 0.50
  },
  "brazil": {
    energy: 0.60,
    acousticness: 0.55,
    instrumentalness: 0.25,
    danceability: 0.70,
    valence: 0.75,
    tempo: 0.65,
    complexity: 0.55,
    popularity: 0.65
  },
  "breakbeat": {
    energy: 0.85,
    acousticness: 0.10,
    instrumentalness: 0.70,
    danceability: 0.80,
    valence: 0.50,
    tempo: 0.85,
    complexity: 0.60,
    popularity: 0.55
  },
  "british": {
    energy: 0.55,
    acousticness: 0.40,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.55,
    tempo: 0.55,
    complexity: 0.50,
    popularity: 0.80
  },
  "cantopop": {
    energy: 0.60,
    acousticness: 0.40,
    instrumentalness: 0.10,
    danceability: 0.60,
    valence: 0.70,
    tempo: 0.60,
    complexity: 0.50,
    popularity: 0.65
  },
  "chicago-house": {
    energy: 0.85,
    acousticness: 0.05,
    instrumentalness: 0.80,
    danceability: 0.90,
    valence: 0.60,
    tempo: 0.90,
    complexity: 0.55,
    popularity: 0.55
  },
  "children": {
    energy: 0.40,
    acousticness: 0.70,
    instrumentalness: 0.10,
    danceability: 0.50,
    valence: 0.85,
    tempo: 0.50,
    complexity: 0.30,
    popularity: 0.80
  },
  "chill": {
    energy: 0.25,
    acousticness: 0.60,
    instrumentalness: 0.70,
    danceability: 0.40,
    valence: 0.55,
    tempo: 0.35,
    complexity: 0.45,
    popularity: 0.85
  },
  "classical": {
    energy: 0.20,
    acousticness: 0.95,
    instrumentalness: 0.95,
    danceability: 0.10,
    valence: 0.45,
    tempo: 0.30,
    complexity: 0.90,
    popularity: 0.75
  },
  "club": {
    energy: 0.85,
    acousticness: 0.05,
    instrumentalness: 0.60,
    danceability: 0.90,
    valence: 0.65,
    tempo: 0.90,
    complexity: 0.50,
    popularity: 0.70
  },
  "comedy": {
    energy: 0.40,
    acousticness: 0.60,
    instrumentalness: 0.05,
    danceability: 0.20,
    valence: 0.90,
    tempo: 0.40,
    complexity: 0.20,
    popularity: 0.65
  },
  "country": {
    energy: 0.55,
    acousticness: 0.75,
    instrumentalness: 0.10,
    danceability: 0.55,
    valence: 0.65,
    tempo: 0.55,
    complexity: 0.45,
    popularity: 0.90
  },
  "dance": {
    energy: 0.85,
    acousticness: 0.10,
    instrumentalness: 0.60,
    danceability: 0.90,
    valence: 0.70,
    tempo: 0.90,
    complexity: 0.50,
    popularity: 0.95
  },
  "dancehall": {
    energy: 0.75,
    acousticness: 0.30,
    instrumentalness: 0.20,
    danceability: 0.90,
    valence: 0.70,
    tempo: 0.80,
    complexity: 0.45,
    popularity: 0.70
  },
  "death-metal": {
    energy: 0.95,
    acousticness: 0.05,
    instrumentalness: 0.30,
    danceability: 0.20,
    valence: 0.15,
    tempo: 0.95,
    complexity: 0.85,
    popularity: 0.40
  },
  "deep-house": {
    energy: 0.70,
    acousticness: 0.10,
    instrumentalness: 0.80,
    danceability: 0.85,
    valence: 0.55,
    tempo: 0.80,
    complexity: 0.55,
    popularity: 0.75
  },
  "detroit-techno": {
    energy: 0.90,
    acousticness: 0.05,
    instrumentalness: 0.90,
    danceability: 0.85,
    valence: 0.50,
    tempo: 0.90,
    complexity: 0.65,
    popularity: 0.55
  },
  "disco": {
    energy: 0.75,
    acousticness: 0.30,
    instrumentalness: 0.20,
    danceability: 0.95,
    valence: 0.80,
    tempo: 0.75,
    complexity: 0.45,
    popularity: 0.85
  },
  "disney": {
    energy: 0.55,
    acousticness: 0.60,
    instrumentalness: 0.05,
    danceability: 0.50,
    valence: 0.85,
    tempo: 0.55,
    complexity: 0.35,
    popularity: 0.95
  },
  "drum-and-bass": {
    energy: 0.95,
    acousticness: 0.05,
    instrumentalness: 0.85,
    danceability: 0.85,
    valence: 0.45,
    tempo: 0.98,
    complexity: 0.70,
    popularity: 0.65
  },
  "dub": {
    energy: 0.55,
    acousticness: 0.40,
    instrumentalness: 0.70,
    danceability: 0.70,
    valence: 0.45,
    tempo: 0.60,
    complexity: 0.55,
    popularity: 0.50
  },
  "dubstep": {
    energy: 0.98,
    acousticness: 0.05,
    instrumentalness: 0.80,
    danceability: 0.75,
    valence: 0.45,
    tempo: 0.95,
    complexity: 0.65,
    popularity: 0.80
  },
  "edm": {
    energy: 0.90,
    acousticness: 0.05,
    instrumentalness: 0.70,
    danceability: 0.90,
    valence: 0.65,
    tempo: 0.90,
    complexity: 0.50,
    popularity: 0.95
  },
  "electro": {
    energy: 0.85,
    acousticness: 0.10,
    instrumentalness: 0.70,
    danceability: 0.80,
    valence: 0.55,
    tempo: 0.85,
    complexity: 0.50,
    popularity: 0.70
  },
  "electronic": {
    energy: 0.70,
    acousticness: 0.20,
    instrumentalness: 0.60,
    danceability: 0.75,
    valence: 0.55,
    tempo: 0.75,
    complexity: 0.55,
    popularity: 0.90
  },
  "emo": {
    energy: 0.60,
    acousticness: 0.35,
    instrumentalness: 0.10,
    danceability: 0.40,
    valence: 0.30,
    tempo: 0.55,
    complexity: 0.60,
    popularity: 0.75
  },
  "folk": {
    energy: 0.40,
    acousticness: 0.90,
    instrumentalness: 0.30,
    danceability: 0.40,
    valence: 0.55,
    tempo: 0.45,
    complexity: 0.60,
    popularity: 0.80
  },
  "forro": {
    energy: 0.65,
    acousticness: 0.60,
    instrumentalness: 0.20,
    danceability: 0.75,
    valence: 0.70,
    tempo: 0.70,
    complexity: 0.55,
    popularity: 0.50
  },
  "french": {
    energy: 0.55,
    acousticness: 0.45,
    instrumentalness: 0.20,
    danceability: 0.60,
    valence: 0.60,
    tempo: 0.55,
    complexity: 0.50,
    popularity: 0.75
  },
  "funk": {
    energy: 0.75,
    acousticness: 0.30,
    instrumentalness: 0.20,
    danceability: 0.90,
    valence: 0.75,
    tempo: 0.75,
    complexity: 0.60,
    popularity: 0.80
  },
  "garage": {
    energy: 0.70,
    acousticness: 0.20,
    instrumentalness: 0.40,
    danceability: 0.75,
    valence: 0.55,
    tempo: 0.75,
    complexity: 0.55,
    popularity: 0.60
  },
  "german": {
    energy: 0.60,
    acousticness: 0.40,
    instrumentalness: 0.20,
    danceability: 0.60,
    valence: 0.55,
    tempo: 0.60,
    complexity: 0.50,
    popularity: 0.70
  },
  "gospel": {
    energy: 0.50,
    acousticness: 0.60,
    instrumentalness: 0.10,
    danceability: 0.40,
    valence: 0.75,
    tempo: 0.45,
    complexity: 0.50,
    popularity: 0.80
  },
  "goth": {
    energy: 0.45,
    acousticness: 0.20,
    instrumentalness: 0.30,
    danceability: 0.45,
    valence: 0.20,
    tempo: 0.50,
    complexity: 0.60,
    popularity: 0.55
  },
  "grindcore": {
    energy: 0.98,
    acousticness: 0.05,
    instrumentalness: 0.20,
    danceability: 0.20,
    valence: 0.10,
    tempo: 0.98,
    complexity: 0.75,
    popularity: 0.35
  },
  "groove": {
    energy: 0.70,
    acousticness: 0.30,
    instrumentalness: 0.30,
    danceability: 0.80,
    valence: 0.65,
    tempo: 0.70,
    complexity: 0.55,
    popularity: 0.65
  },
  "grunge": {
    energy: 0.70,
    acousticness: 0.30,
    instrumentalness: 0.20,
    danceability: 0.45,
    valence: 0.35,
    tempo: 0.60,
    complexity: 0.55,
    popularity: 0.75
  },
  "guitar": {
    energy: 0.55,
    acousticness: 0.75,
    instrumentalness: 0.40,
    danceability: 0.45,
    valence: 0.55,
    tempo: 0.55,
    complexity: 0.60,
    popularity: 0.80
  },
  "happy": {
    energy: 0.65,
    acousticness: 0.40,
    instrumentalness: 0.20,
    danceability: 0.70,
    valence: 0.90,
    tempo: 0.70,
    complexity: 0.40,
    popularity: 0.85
  },
  "hard-rock": {
    energy: 0.85,
    acousticness: 0.10,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.45,
    tempo: 0.80,
    complexity: 0.60,
    popularity: 0.85
  },
  "hardcore": {
    energy: 0.90,
    acousticness: 0.05,
    instrumentalness: 0.20,
    danceability: 0.40,
    valence: 0.25,
    tempo: 0.90,
    complexity: 0.65,
    popularity: 0.60
  },
  "hardstyle": {
    energy: 0.98,
    acousticness: 0.05,
    instrumentalness: 0.70,
    danceability: 0.80,
    valence: 0.55,
    tempo: 0.98,
    complexity: 0.55,
    popularity: 0.70
  },
  "heavy-metal": {
    energy: 0.90,
    acousticness: 0.05,
    instrumentalness: 0.20,
    danceability: 0.40,
    valence: 0.30,
    tempo: 0.85,
    complexity: 0.70,
    popularity: 0.80
  },
  "hip-hop": {
    energy: 0.75,
    acousticness: 0.20,
    instrumentalness: 0.10,
    danceability: 0.85,
    valence: 0.60,
    tempo: 0.75,
    complexity: 0.55,
    popularity: 1.00
  },
  "holidays": {
    energy: 0.45,
    acousticness: 0.60,
    instrumentalness: 0.10,
    danceability: 0.40,
    valence: 0.85,
    tempo: 0.45,
    complexity: 0.35,
    popularity: 0.95
  },
  "honky-tonk": {
    energy: 0.55,
    acousticness: 0.80,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.65,
    tempo: 0.55,
    complexity: 0.45,
    popularity: 0.55
  },
  "house": {
    energy: 0.80,
    acousticness: 0.10,
    instrumentalness: 0.70,
    danceability: 0.90,
    valence: 0.65,
    tempo: 0.85,
    complexity: 0.50,
    popularity: 0.90
  },
  "idm": {
    energy: 0.60,
    acousticness: 0.20,
    instrumentalness: 0.90,
    danceability: 0.55,
    valence: 0.40,
    tempo: 0.70,
    complexity: 0.85,
    popularity: 0.50
  },
  "indian": {
    energy: 0.55,
    acousticness: 0.70,
    instrumentalness: 0.30,
    danceability: 0.55,
    valence: 0.60,
    tempo: 0.55,
    complexity: 0.70,
    popularity: 0.80
  },
  "indie": {
    energy: 0.55,
    acousticness: 0.50,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.55,
    tempo: 0.55,
    complexity: 0.55,
    popularity: 0.90
  },
  "indie-pop": {
    energy: 0.60,
    acousticness: 0.45,
    instrumentalness: 0.15,
    danceability: 0.65,
    valence: 0.65,
    tempo: 0.60,
    complexity: 0.45,
    popularity: 0.85
  },
  "industrial": {
    energy: 0.85,
    acousticness: 0.05,
    instrumentalness: 0.60,
    danceability: 0.55,
    valence: 0.30,
    tempo: 0.80,
    complexity: 0.70,
    popularity: 0.55
  },
  "iranian": {
    energy: 0.55,
    acousticness: 0.60,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.50,
    tempo: 0.55,
    complexity: 0.65,
    popularity: 0.40
  },
  "j-dance": {
    energy: 0.75,
    acousticness: 0.20,
    instrumentalness: 0.20,
    danceability: 0.80,
    valence: 0.70,
    tempo: 0.80,
    complexity: 0.55,
    popularity: 0.70
  },
  "j-idol": {
    energy: 0.65,
    acousticness: 0.30,
    instrumentalness: 0.10,
    danceability: 0.65,
    valence: 0.75,
    tempo: 0.70,
    complexity: 0.45,
    popularity: 0.65
  },
  "j-pop": {
    energy: 0.70,
    acousticness: 0.25,
    instrumentalness: 0.10,
    danceability: 0.70,
    valence: 0.75,
    tempo: 0.75,
    complexity: 0.50,
    popularity: 0.90
  },
  "j-rock": {
    energy: 0.75,
    acousticness: 0.20,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.50,
    tempo: 0.75,
    complexity: 0.60,
    popularity: 0.75
  },
  "jazz": {
    energy: 0.45,
    acousticness: 0.85,
    instrumentalness: 0.60,
    danceability: 0.40,
    valence: 0.55,
    tempo: 0.50,
    complexity: 0.85,
    popularity: 0.80
  },
  "k-pop": {
    energy: 0.75,
    acousticness: 0.20,
    instrumentalness: 0.05,
    danceability: 0.80,
    valence: 0.75,
    tempo: 0.80,
    complexity: 0.50,
    popularity: 1.00
  },
  "kids": {
    energy: 0.40,
    acousticness: 0.70,
    instrumentalness: 0.05,
    danceability: 0.45,
    valence: 0.90,
    tempo: 0.50,
    complexity: 0.20,
    popularity: 0.85
  },
  "latin": {
    energy: 0.75,
    acousticness: 0.40,
    instrumentalness: 0.10,
    danceability: 0.90,
    valence: 0.80,
    tempo: 0.80,
    complexity: 0.55,
    popularity: 0.95
  },
  "latino": {
    energy: 0.75,
    acousticness: 0.40,
    instrumentalness: 0.10,
    danceability: 0.90,
    valence: 0.80,
    tempo: 0.80,
    complexity: 0.55,
    popularity: 0.90
  },
  "malay": {
    energy: 0.55,
    acousticness: 0.55,
    instrumentalness: 0.20,
    danceability: 0.60,
    valence: 0.60,
    tempo: 0.55,
    complexity: 0.50,
    popularity: 0.55
  },
  "mandopop": {
    energy: 0.60,
    acousticness: 0.40,
    instrumentalness: 0.10,
    danceability: 0.60,
    valence: 0.70,
    tempo: 0.60,
    complexity: 0.45,
    popularity: 0.75
  },
  "metal": {
    energy: 0.85,
    acousticness: 0.05,
    instrumentalness: 0.20,
    danceability: 0.40,
    valence: 0.30,
    tempo: 0.85,
    complexity: 0.70,
    popularity: 0.80
  },
  "metal-misc": {
    energy: 0.85,
    acousticness: 0.05,
    instrumentalness: 0.30,
    danceability: 0.40,
    valence: 0.30,
    tempo: 0.85,
    complexity: 0.75,
    popularity: 0.55
  },
  "metalcore": {
    energy: 0.90,
    acousticness: 0.05,
    instrumentalness: 0.20,
    danceability: 0.45,
    valence: 0.25,
    tempo: 0.90,
    complexity: 0.70,
    popularity: 0.70
  },
  "minimal-techno": {
    energy: 0.70,
    acousticness: 0.05,
    instrumentalness: 0.90,
    danceability: 0.80,
    valence: 0.45,
    tempo: 0.80,
    complexity: 0.60,
    popularity: 0.55
  },
  "movies": {
    energy: 0.40,
    acousticness: 0.70,
    instrumentalness: 0.80,
    danceability: 0.10,
    valence: 0.45,
    tempo: 0.40,
    complexity: 0.70,
    popularity: 0.85
  },
  "mpb": {
    energy: 0.55,
    acousticness: 0.75,
    instrumentalness: 0.30,
    danceability: 0.55,
    valence: 0.65,
    tempo: 0.55,
    complexity: 0.60,
    popularity: 0.60
  },
  "new-age": {
    energy: 0.20,
    acousticness: 0.70,
    instrumentalness: 0.95,
    danceability: 0.10,
    valence: 0.45,
    tempo: 0.30,
    complexity: 0.50,
    popularity: 0.50
  },
  "new-release": {
    energy: 0.60,
    acousticness: 0.40,
    instrumentalness: 0.20,
    danceability: 0.60,
    valence: 0.60,
    tempo: 0.60,
    complexity: 0.40,
    popularity: 0.95
  }, "opera": {
    energy: 0.30,
    acousticness: 0.95,
    instrumentalness: 0.80,
    danceability: 0.05,
    valence: 0.45,
    tempo: 0.30,
    complexity: 0.90,
    popularity: 0.70
  },
  "pagode": {
    energy: 0.60,
    acousticness: 0.55,
    instrumentalness: 0.20,
    danceability: 0.75,
    valence: 0.75,
    tempo: 0.65,
    complexity: 0.55,
    popularity: 0.55
  },
  "party": {
    energy: 0.85,
    acousticness: 0.20,
    instrumentalness: 0.30,
    danceability: 0.95,
    valence: 0.75,
    tempo: 0.90,
    complexity: 0.40,
    popularity: 0.95
  },
  "philippines-opm": {
    energy: 0.55,
    acousticness: 0.55,
    instrumentalness: 0.10,
    danceability: 0.55,
    valence: 0.65,
    tempo: 0.55,
    complexity: 0.45,
    popularity: 0.65
  },
  "piano": {
    energy: 0.20,
    acousticness: 0.95,
    instrumentalness: 0.90,
    danceability: 0.10,
    valence: 0.45,
    tempo: 0.30,
    complexity: 0.70,
    popularity: 0.75
  },
  "pop": {
    energy: 0.65,
    acousticness: 0.35,
    instrumentalness: 0.10,
    danceability: 0.75,
    valence: 0.75,
    tempo: 0.70,
    complexity: 0.45,
    popularity: 1.00
  },
  "pop-film": {
    energy: 0.60,
    acousticness: 0.40,
    instrumentalness: 0.20,
    danceability: 0.65,
    valence: 0.70,
    tempo: 0.60,
    complexity: 0.45,
    popularity: 0.85
  },
  "post-dubstep": {
    energy: 0.75,
    acousticness: 0.10,
    instrumentalness: 0.80,
    danceability: 0.70,
    valence: 0.45,
    tempo: 0.80,
    complexity: 0.65,
    popularity: 0.55
  },
  "power-pop": {
    energy: 0.70,
    acousticness: 0.30,
    instrumentalness: 0.10,
    danceability: 0.70,
    valence: 0.75,
    tempo: 0.75,
    complexity: 0.45,
    popularity: 0.75
  },
  "progressive-house": {
    energy: 0.80,
    acousticness: 0.05,
    instrumentalness: 0.85,
    danceability: 0.85,
    valence: 0.55,
    tempo: 0.85,
    complexity: 0.65,
    popularity: 0.70
  },
  "psych-rock": {
    energy: 0.65,
    acousticness: 0.35,
    instrumentalness: 0.40,
    danceability: 0.55,
    valence: 0.50,
    tempo: 0.60,
    complexity: 0.75,
    popularity: 0.60
  },
  "punk": {
    energy: 0.85,
    acousticness: 0.10,
    instrumentalness: 0.10,
    danceability: 0.45,
    valence: 0.40,
    tempo: 0.85,
    complexity: 0.45,
    popularity: 0.75
  },
  "punk-rock": {
    energy: 0.85,
    acousticness: 0.15,
    instrumentalness: 0.10,
    danceability: 0.50,
    valence: 0.45,
    tempo: 0.85,
    complexity: 0.50,
    popularity: 0.80
  },
  "r-n-b": {
    energy: 0.60,
    acousticness: 0.40,
    instrumentalness: 0.10,
    danceability: 0.75,
    valence: 0.70,
    tempo: 0.60,
    complexity: 0.50,
    popularity: 0.95
  },
  "rainy-day": {
    energy: 0.25,
    acousticness: 0.70,
    instrumentalness: 0.70,
    danceability: 0.35,
    valence: 0.40,
    tempo: 0.35,
    complexity: 0.50,
    popularity: 0.85
  },
  "reggae": {
    energy: 0.55,
    acousticness: 0.50,
    instrumentalness: 0.20,
    danceability: 0.75,
    valence: 0.65,
    tempo: 0.55,
    complexity: 0.50,
    popularity: 0.80
  },
  "reggaeton": {
    energy: 0.75,
    acousticness: 0.30,
    instrumentalness: 0.10,
    danceability: 0.95,
    valence: 0.75,
    tempo: 0.85,
    complexity: 0.45,
    popularity: 0.95
  },
  "road-trip": {
    energy: 0.65,
    acousticness: 0.45,
    instrumentalness: 0.20,
    danceability: 0.70,
    valence: 0.70,
    tempo: 0.65,
    complexity: 0.45,
    popularity: 0.90
  },
  "rock": {
    energy: 0.70,
    acousticness: 0.30,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.50,
    tempo: 0.70,
    complexity: 0.55,
    popularity: 1.00
  },
  "rock-n-roll": {
    energy: 0.75,
    acousticness: 0.35,
    instrumentalness: 0.20,
    danceability: 0.65,
    valence: 0.70,
    tempo: 0.75,
    complexity: 0.50,
    popularity: 0.85
  },
  "rockabilly": {
    energy: 0.70,
    acousticness: 0.55,
    instrumentalness: 0.20,
    danceability: 0.75,
    valence: 0.75,
    tempo: 0.75,
    complexity: 0.45,
    popularity: 0.65
  },
  "romance": {
    energy: 0.40,
    acousticness: 0.70,
    instrumentalness: 0.20,
    danceability: 0.45,
    valence: 0.75,
    tempo: 0.45,
    complexity: 0.40,
    popularity: 0.85
  },
  "sad": {
    energy: 0.20,
    acousticness: 0.65,
    instrumentalness: 0.50,
    danceability: 0.30,
    valence: 0.15,
    tempo: 0.35,
    complexity: 0.50,
    popularity: 0.90
  },
  "salsa": {
    energy: 0.75,
    acousticness: 0.45,
    instrumentalness: 0.10,
    danceability: 0.95,
    valence: 0.80,
    tempo: 0.85,
    complexity: 0.60,
    popularity: 0.85
  },
  "samba": {
    energy: 0.70,
    acousticness: 0.55,
    instrumentalness: 0.20,
    danceability: 0.90,
    valence: 0.80,
    tempo: 0.80,
    complexity: 0.55,
    popularity: 0.70
  },
  "sertanejo": {
    energy: 0.60,
    acousticness: 0.65,
    instrumentalness: 0.10,
    danceability: 0.65,
    valence: 0.70,
    tempo: 0.60,
    complexity: 0.45,
    popularity: 0.75
  },
  "show-tunes": {
    energy: 0.50,
    acousticness: 0.60,
    instrumentalness: 0.10,
    danceability: 0.40,
    valence: 0.75,
    tempo: 0.50,
    complexity: 0.60,
    popularity: 0.80
  },
  "singer-songwriter": {
    energy: 0.40,
    acousticness: 0.85,
    instrumentalness: 0.30,
    danceability: 0.40,
    valence: 0.55,
    tempo: 0.45,
    complexity: 0.60,
    popularity: 0.85
  },
  "ska": {
    energy: 0.70,
    acousticness: 0.40,
    instrumentalness: 0.20,
    danceability: 0.80,
    valence: 0.75,
    tempo: 0.75,
    complexity: 0.50,
    popularity: 0.55
  },
  "sleep": {
    energy: 0.10,
    acousticness: 0.70,
    instrumentalness: 0.90,
    danceability: 0.05,
    valence: 0.40,
    tempo: 0.20,
    complexity: 0.40,
    popularity: 0.85
  },
  "songwriter": {
    energy: 0.40,
    acousticness: 0.85,
    instrumentalness: 0.30,
    danceability: 0.40,
    valence: 0.55,
    tempo: 0.45,
    complexity: 0.60,
    popularity: 0.80
  },
  "soul": {
    energy: 0.60,
    acousticness: 0.50,
    instrumentalness: 0.10,
    danceability: 0.70,
    valence: 0.70,
    tempo: 0.60,
    complexity: 0.55,
    popularity: 0.85
  },
  "soundtracks": {
    energy: 0.40,
    acousticness: 0.70,
    instrumentalness: 0.80,
    danceability: 0.10,
    valence: 0.45,
    tempo: 0.40,
    complexity: 0.75,
    popularity: 0.90
  },
  "spanish": {
    energy: 0.65,
    acousticness: 0.45,
    instrumentalness: 0.10,
    danceability: 0.75,
    valence: 0.70,
    tempo: 0.65,
    complexity: 0.50,
    popularity: 0.85
  },
  "study": {
    energy: 0.20,
    acousticness: 0.70,
    instrumentalness: 0.95,
    danceability: 0.15,
    valence: 0.40,
    tempo: 0.30,
    complexity: 0.40,
    popularity: 0.95
  },
  "summer": {
    energy: 0.70,
    acousticness: 0.40,
    instrumentalness: 0.20,
    danceability: 0.80,
    valence: 0.85,
    tempo: 0.75,
    complexity: 0.40,
    popularity: 0.95
  },
  "swedish": {
    energy: 0.55,
    acousticness: 0.45,
    instrumentalness: 0.20,
    danceability: 0.60,
    valence: 0.60,
    tempo: 0.55,
    complexity: 0.50,
    popularity: 0.70
  },
  "synth-pop": {
    energy: 0.70,
    acousticness: 0.10,
    instrumentalness: 0.60,
    danceability: 0.75,
    valence: 0.65,
    tempo: 0.75,
    complexity: 0.50,
    popularity: 0.85
  },
  "tango": {
    energy: 0.55,
    acousticness: 0.75,
    instrumentalness: 0.40,
    danceability: 0.60,
    valence: 0.55,
    tempo: 0.55,
    complexity: 0.70,
    popularity: 0.65
  },
  "techno": {
    energy: 0.95,
    acousticness: 0.05,
    instrumentalness: 0.90,
    danceability: 0.85,
    valence: 0.60,
    tempo: 0.90,
    complexity: 0.55,
    popularity: 0.80
  },
  "trance": {
    energy: 0.90,
    acousticness: 0.05,
    instrumentalness: 0.85,
    danceability: 0.85,
    valence: 0.60,
    tempo: 0.90,
    complexity: 0.55,
    popularity: 0.75
  },
  "trip-hop": {
    energy: 0.45,
    acousticness: 0.40,
    instrumentalness: 0.70,
    danceability: 0.55,
    valence: 0.35,
    tempo: 0.50,
    complexity: 0.70,
    popularity: 0.60
  },
  "turkish": {
    energy: 0.55,
    acousticness: 0.60,
    instrumentalness: 0.20,
    danceability: 0.55,
    valence: 0.55,
    tempo: 0.55,
    complexity: 0.60,
    popularity: 0.65
  },
  "work-out": {
    energy: 0.85,
    acousticness: 0.20,
    instrumentalness: 0.30,
    danceability: 0.90,
    valence: 0.70,
    tempo: 0.90,
    complexity: 0.40,
    popularity: 0.95
  },
  "world-music": {
    energy: 0.55,
    acousticness: 0.60,
    instrumentalness: 0.30,
    danceability: 0.60,
    valence: 0.65,
    tempo: 0.55,
    complexity: 0.60,
    popularity: 0.75
  },
  "tropical-house": {
    energy: 0.70,
    acousticness: 0.35,
    instrumentalness: 0.40,
    danceability: 0.85,
    valence: 0.75,
    tempo: 0.75,
    complexity: 0.45,
    popularity: 0.80
  },
  "uk-garage": {
    energy: 0.75,
    acousticness: 0.15,
    instrumentalness: 0.50,
    danceability: 0.85,
    valence: 0.55,
    tempo: 0.85,
    complexity: 0.60,
    popularity: 0.65
  },
  "vocal-house": {
    energy: 0.80,
    acousticness: 0.10,
    instrumentalness: 0.20,
    danceability: 0.90,
    valence: 0.75,
    tempo: 0.85,
    complexity: 0.45,
    popularity: 0.75
  },
  "world": {
    energy: 0.55,
    acousticness: 0.60,
    instrumentalness: 0.30,
    danceability: 0.60,
    valence: 0.65,
    tempo: 0.55,
    complexity: 0.60,
    popularity: 0.75
  }
}
