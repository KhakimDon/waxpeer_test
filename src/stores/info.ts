import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useStore = defineStore('store', () => {

    // Get Date
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
    let year = date.getFullYear()
    
    // All info blocks 
    const info = [
        {
            _id: 1,
            title: "Uptime",
            subtitle: "Uptime over the past 24 hours",
            icon: "src/assets/blockIcons/uptime.svg",
            bottom: ["97.83%", "GRAPH"],
        },
        {
            _id: 2,
            title: "Current date",
            subtitle: "Current date and time",
            icon: "src/assets/blockIcons/uptime.svg",
            bottom: [`${day}.${month}.${year}`],
        },
        {
            _id: 3,
            title: "Withdrawal status",
            subtitle: "Connected cryptocurrencies",
            icon: "src/assets/blockIcons/Subtract.svg",
            bottom: [``,``],
        },
        {
            _id: 4,
            title: "Buy items",
            subtitle: "Time from the last purchase",
            icon: "src/assets/blockIcons/dollar.svg",
            bottom: [``,`25 sec`],
        },
        {
            _id: 5,
            title: "Waxpeer pay bots",
            subtitle: "The number of avaliable bots on Wxpeer pay",
            icon: "src/assets/blockIcons/waxpeer.svg",
            bottom: [``,`259 bots`],
        },
        {
            _id: 6,
            title: "Waxpeer pay",
            subtitle: "The last successful trade",
            icon: "src/assets/blockIcons/123.svg",
            bottom: [``,`10 sec`],
        },
        {
            _id: 7,
            title: "Availability of a site",
            subtitle: "The availability of the home page of the site",
            icon: "src/assets/blockIcons/12345.svg",
            bottom: [``,``],
            status: "available",
            color: "#20CE70"
        },
        {
            _id: 8,
            title: "Server status",
            subtitle: "The status of the website servers",
            icon: "src/assets/blockIcons/cloud_queue.svg",
            bottom: [``,``],
            status: "unstable",
            color: "#EC7A2A"
        },
        {
            _id: 9,
            title: "Steam Web API",
            subtitle: "Last check June 3, 2022 02:50:16",
            icon: "src/assets/blockIcons/123456.svg",
            bottom: [``,``],
            status: "stable",
            color: "#20CE70"
        },
        {
            _id: 10,
            title: "API response",
            subtitle: "Last request 10 seconds ago",
            icon: "src/assets/blockIcons/settings.svg",
            bottom: [``,`2.856 ms`],
        },
        {
            _id: 11,
            title: "Last trade",
            subtitle: "The last trade was created 5s ago",
            icon: "src/assets/blockIcons/2214.svg",
            bottom: [``,``],
            status: "canceled",
            color: "#EF5858"
        },
        {
            _id: 11,
            title: "Login",
            subtitle: "Shows either your login is working or not",
            icon: "src/assets/blockIcons/1234.svg",
            bottom: [``,``],
            status: "active",
            color: "#20CE70"
        },
    ]

    const waxpeer_status = {
        title: "Waxpeer online & status",
        status: {
            extension: 12698,
            desktop: 5898,
            mobile: 25697
        }
    }

    return { info,waxpeer_status }
})
