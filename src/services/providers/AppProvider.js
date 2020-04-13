import React, { createContext, useState, useContext, useEffect } from "react";
import {API} from '../API'
const BaseContext = createContext();

export default function MyAppProvider({ children }) {
    const [loading, setLoading] =   useState(true);
    const [temas, setTemas]   =   useState([]); 
    const [videos, setVideos]   =   useState(null); 
    const [ podcasts, setPodcasts ]   =   useState(null); 
    const [ item, setItem ]   =   useState(null); 

    return  (
    <BaseContext.Provider
        value={{
            loading, 
            setLoading,
            videos,
            setVideos,
            podcasts,
            setPodcasts,
            item,
            setItem,
            temas,
            setTemas,
            useVideos,
            usePodcasts,
            useTema
        }} >
        { children }
    </BaseContext.Provider>
    );
}


export function useLoading() {
    const Context = useContext(BaseContext);
    const { loading, setLoading }   =   Context
    return { loading, setLoading }
};

export function useVideos() {
    const Context = useContext(BaseContext);
    const { loading, setLoading, videos, setVideos }   =   Context

    useEffect(()=> {
        async function listaVideo() {
            const chama =   await API("/temas?tipo=1")
            const pega  =   await   chama.data
            const guarda =  pega.data 
            setVideos(guarda)
            setLoading(false)
        }
        listaVideo()
    }, [])
    return { loading, setLoading, videos, setVideos }
}

export function usePodcasts() {
    const Context = useContext(BaseContext);
    const { loading, setLoading, podcasts, setPodcasts }   =   Context

    useEffect(()=> {
        async function listaPodcast() {
            const chama =   await API("/temas?tipo=2")
            const pega  =   await   chama.data
            const guarda =  pega.data 
            console.log('retorno do podcast: ' ,guarda)
            setPodcasts(guarda)
            setLoading(false)
        }
        listaPodcast()
    }, [])
    return { loading, setLoading, podcasts, setPodcasts }
}

export function useTema(id) {
    const Context = useContext(BaseContext);
    const { loading, setLoading, item, setItem }   =   Context
    
    
    useEffect(()=> {
        setLoading(true)
        async function listaItem() {
            const chama =   await API(`/entidades/${id}`)
            const pega  =   await   chama
            const guarda =  pega.data
            setItem(guarda)
            setLoading(false)
        }
        listaItem()
    }, [])
    return { loading, setLoading, item, setItem }
}


// export function useVideos() {
//     const Context = useContext(BaseContext);
//     const { loading, setLoading, temas, setTemas }  =   Context;
//     return { loading, setLoading, temas, setTemas } 
// };
