import { useAudio } from "../context/AudioContext"


function Player(){

    const context = useAudio()

    return (
    <div className="fixed bottom-5 right-5 w-80 bg-zinc-900 p-3 rounded-xl shadow-lg z-[9999]">
      {context.isPlaying && (
        <iframe
          className="w-full h-20 rounded-xl"
          src="https://open.spotify.com/embed/track/3VYzbU22BooAROigHHwycs?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}

      <button
        onClick={context.toggle}
        className="mt-3 w-full px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
      >
        {context.isPlaying ? 'Hide Player' : 'Show Player'}
      </button>
    </div>
  );

}

export default Player