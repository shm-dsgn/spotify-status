import getNowPlayingItem from "@/components/SpotifyStatus/SpotifyAPI";
import SpotifyStatus from "@/components/SpotifyStatus/SpotifyStatus";
import Link from "next/link";

export default async function Home() {
  const initialData = await getNowPlayingItem();
  return (
    <div className="mx-4 flex flex-col gap-12">
      <SpotifyStatus initialData={initialData} />
      <div className="flex flex-col gap-4">
        <Link
          href={"https://github.com/shm-dsgn/spotify-status"}
          target="_blank"
          className="text-xs underline text-neutral-400"
        >
          Source Code on Github
        </Link>
        <Link
          href={"https://sohamdutta.in"}
          target="_blank"
          className="text-xs underline text-neutral-400"
        >
          My Portfolio
        </Link>
      </div>
    </div>
  );
}
