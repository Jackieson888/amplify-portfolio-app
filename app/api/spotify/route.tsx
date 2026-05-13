let spotifyAccessToken: string | null = null;
let spotifyTokenExpiresAt: number | null = null;

import { genreData } from "@/app/data/spotifyGenres";


async function fetchSpotifyAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET_KEY } = process.env;

  const authString = Buffer
    .from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET_KEY}`)
    .toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();

  spotifyAccessToken = data.access_token;
  spotifyTokenExpiresAt = Date.now() + data.expires_in * 1000; // 3600s

  return spotifyAccessToken;
}

async function getValidSpotifyToken() {
  const isExpired =
    !spotifyAccessToken ||
    !spotifyTokenExpiresAt ||
    Date.now() >= spotifyTokenExpiresAt;

  if (isExpired) {
    return await fetchSpotifyAccessToken();
  }

  return spotifyAccessToken;
}

function getRandomizedSpotifyGenre() {
  const genreNames = Object.keys(genreData);
  const randomIndex = Math.floor(Math.random() * genreNames.length);
  return genreNames[randomIndex];
}

export async function GET() {
  try {
    const token = await getValidSpotifyToken();

    const randomGenre = getRandomizedSpotifyGenre();

    const res = await fetch(
      `https://api.spotify.com/v1/search?q=remaster%2520genre%3A${randomGenre}&type=track&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      return Response.json(
        { error: `Spotify API error: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    console.error("Spotify route error:", err);
    return Response.json(
      { error: "Failed to fetch Spotify data" },
      { status: 500 }
    );
  }
}
