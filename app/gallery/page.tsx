'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

type File = {
  url: string;
  key: string;
  type: string;
};

function MediaTemplate({ file }: { file: File }) {
  if (file.type === 'mp4') {
    return (
      <video
        muted
        autoPlay
        loop
        className="w-full h-40 object-cover rounded-md"
      >
        <source src={file.url} />
      </video>
    );
  }

  return (
    <div className="relative w-full h-40">
      <Image
        src={file.url}
        alt={file.key}
        fill
        className="object-cover rounded-md"
      />
    </div>
  );
}


export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const res = await fetch("/api/gallery");
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);

        const data = await res.json();
        setFiles(Array.isArray(data.objects) ? data.objects : []);
      } catch (err) {
        console.error("Error fetching files:", err);
        setError("Failed to load files");
      } finally {
        setLoading(false);
      }
    }

    fetchFiles();
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

      {loading && <p>Loading files...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && files.length === 0 && <p>No files found.</p>}

      {files.map(file => (
        <MediaTemplate file={file} key={file.key} />
      ))}
    </div>
  );
}