import sp from '../assets/images/drank-removebg-preview.png'

function AboutUs() {

  
  return (
    <div className="flex flex-col items-start  min-h-screen  gap-3">
      <div className="w-full">
        <h1 className="text-2xl font-mono text-center">Welcome to the <span className="font-mono font-semibold">Breeze Bar!</span></h1>
      </div>

      <div className="max-w-2xl mx-auto">

        <div className='flex flex-row gap-4 items-center justify-center'>
          <div>
         <h2 className="text-xl font-bold mb-4 font-serif">Swimming Pools (Drank) — The Vibe Behind It All</h2>
         <p className="text-gray-700 leading-relaxed mb-4">
           At first listen, Kendrick Lamar’s <em>Swimming Pools (Drank)</em> sounds like a party anthem — hypnotic, smooth, drink-heavy. 
           But beneath the surface, it’s a slow dive into trauma, addiction, and the pressure to numb what hurts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
           Kendrick uses the metaphor of a “pool full of liquor” to show how easy it is to drown in excess — not just in alcohol, but in 
            expectation, ego, and pain passed down. He raps from two voices — one chasing the escape, the other warning of the fall. 
            It’s catchy, but it’s cracked. Beautiful, but brutal.
           </p>
           </div>
           <img src={sp}  />
           </div> 
         <p className="text-gray-700 leading-relaxed mb-4">
             That duality is what inspired <strong>The Breeze Bar</strong>. This isn’t just a place to drink — it’s a space to feel. To pause. 
             To choose your mood. Whether you’re sipping to reflect or to forget, you’re welcome here.
          </p>
             <p className="text-gray-800 italic mb-10">
              Come thirsty — for coffee, for clarity, or for something a little deeper.
             </p>
      </div>
  
    </div>
  );
}

export default AboutUs;
