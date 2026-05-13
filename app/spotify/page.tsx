'use client';

import { useState } from "react";
import Image from "next/image";

type SpotifyImage = {
    url: string;
    height: number | null;
    width: number | null;
};

type SpotifyAlbum = {
    name: string;
    images: SpotifyImage[];
};

type SpotifyTrack = {
    name: string;
    album: SpotifyAlbum;
};

type SpotifyTracksResponse = {
    items: SpotifyTrack[];
};

export type SpotifyData = {
    tracks: SpotifyTracksResponse;
};

export default function Page() {
    const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function getSpotifyData() {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch("/api/spotify");

            if (!res.ok) {
                throw new Error(`Server responded with ${res.status}`);
            }

            const data: SpotifyData = await res.json();
            setSpotifyData(data);
        } catch (err) {
            console.error(err);
            setError("Failed to load data");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
            <h1>Spotify App Page</h1>

            <button
                onClick={getSpotifyData}
                className="px-4 py-2 bg-green-500 text-white rounded"
            >
                Return Spotify Data
            </button>

            {loading && <p>Loading…</p>}
            {error && <p className="text-red-500">{error}</p>}

            {spotifyData && spotifyData.tracks && (
                <div>
                    <Image
                        src={spotifyData.tracks.items[0].album.images[1].url}
                        alt={spotifyData.tracks.items[0].album.name}
                        width={300}
                        height={300}
                        className="rounded-md"
                    />
                    <span className="text-white mt-4">
                        {spotifyData.tracks.items[0].name}
                    </span>
                </div>
            )}
        </div>
    );
}
