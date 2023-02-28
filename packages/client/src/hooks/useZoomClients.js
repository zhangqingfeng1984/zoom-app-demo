import { useState, useEffect } from 'react';
import numeral from 'numeral';
import Mock from 'mockjs';

export const useZoomClients = () => {
    const [clients, setClients] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    const [timeElapsed, setTimeElapsed] = useState(0)

    const startTimeTick = () => {
        return setInterval(() => {
            setTimeElapsed(t => t + 1)
        }, 1000)
    }

    const calculateFee = () => {
        //dumy fee cost based on person/time
        const v = clients.length * 5 + (clients.length) * (timeElapsed) * 0.001;
        setTotalCost(numeral(v).format('0,000.00'))
    }

    const addMember = () => {
        const members = [...clients, Mock.mock({
            soeid: '@word(7)',
            name: "@name",
            'level|1': ['C9', 'C10', 'C11', 'C'],
            'isEmployee|1': ['YES','NO']
        })]
        setClients(members)
    }

    const removeMember = () => {
        const members = clients.slice(0,clients.length-1)
        setClients(members)
    }

    useEffect(() => {
        calculateFee()
        const interval = startTimeTick()
        return () => clearInterval(interval)
    }, [clients, timeElapsed])

    useEffect(() => {
        const arr = Mock.mock({
            'list|5': [
                {
                    soeid: '@word(7)',
                    name: '@name',
                    'level|1': ['C9', 'C10', 'C11', 'C'],
                    'isEmployee|1': ['YES','NO']
                }
            ]
        }).list;
        setClients(arr)
    }, [])

    return {
        clients,
        setClients,
        totalCost,
        setTotalCost,
        timeElapsed,
        setTimeElapsed,
        addMember,
        removeMember
    }
}