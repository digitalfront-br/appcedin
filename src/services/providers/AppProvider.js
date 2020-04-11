import React, { createContext, useState, useContext, useEffect } from "react";
import {API} from '../API'
const BaseContext = createContext();

export default function MyAppProvider({ children }) {
    const [loading, setLoading] =   useState(true);
    const [temas, setTemas]   =   useState([]); 
    const [videos, setVideos]   =   useState(null); 

    return  (
    <BaseContext.Provider
        value={{
            loading, 
            setLoading,
            videos,
            setVideos,
            temas,
            setTemas,
            useTemas,
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

export function useTemas() {
    const Context = useContext(BaseContext);
    const { loading, setLoading, temas, setTemas }   =   Context

    useEffect(()=> {
        async function listaTemas() {
            const chama =   await API('/temas')
            const pega  =   await   chama.data
            const guarda =  pega.data 
            setTemas(guarda)
            setLoading(false)
        }
        listaTemas()
    }, [])
    return { loading, setLoading, temas, setTemas }
}

export function useTema(id) {
    const Context = useContext(BaseContext);
    const { loading, setLoading, videos, setVideos }   =   Context
    
    
    useEffect(()=> {
        setLoading(true)
        async function listaVideos() {
            const chama =   await API(`/temas/${id}?tipo=2`)
            const pega  =   await   chama
            const guarda =  pega.data
            setVideos(guarda)
            setLoading(false)
        }
        listaVideos()
    }, [])
    return { loading, setLoading, videos, setVideos }
}

// export function useTemas() {
//     const Context = useContext(BaseContext);
//     const { loading, setLoading, temas, setTemas }  =   Context;
//     return { loading, setLoading, temas, setTemas } 
// };
