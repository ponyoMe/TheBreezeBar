import React, { createContext, useContext, useState } from "react";

type AudioProps = {
    isPlaying : boolean,
    toggle : ()=> void
}

const AudioContext = createContext<AudioProps | null>(null)

export function AudioContextProvider({children}:{children:React.ReactNode}){

    const [isPlaying, setIsPlaying] = useState(true)

    const toggle = ()=> setIsPlaying(prev=>!prev)

    return(
        <AudioContext.Provider value={{isPlaying, toggle}}>
            {children}
        </AudioContext.Provider>
    )

}

export function useAudio(){
    const context = useContext(AudioContext)
    if (!context) throw new Error('make sure you are using AudioContextProvider')
        
    return context 
}