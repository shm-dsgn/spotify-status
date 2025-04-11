import getNowPlayingItem from "@/components/SpotifyStatus/SpotifyAPI";
import SpotifyStatus from "@/components/SpotifyStatus/SpotifyStatus";

export default async function Home() {
  const initialData = await getNowPlayingItem();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SpotifyStatus initialData={initialData}/>
    </div>
  );
}
