import { useState, useEffect } from 'react';

export const useZoomClients = () => {
    const [clients, setClients] = useState([])
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 20; i++) {
            arr.push({ soeid: `xz900${i}`, name: `people${i}`, level: `c9` })
        }
        setClients(arr)
    },[])
    return { clients }
}