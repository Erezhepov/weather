export interface ICurrentWeatherState {
    loading: boolean
    error: string | null
    name: string
    temp_max: number | null
    temp_min: number | null
    temp: number | null
    feels_like: number | null
    humidity: number | null
    wind: number | null
    cloudy: number | null
    weather: {
        main: string | null
        description: string | null
        icon: string | null
    },
    isOpenSidebar: boolean
}

export interface ICurrentWeatherResponse {
    name: string
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    }
    weather: {
        description: string
        id: number
        main: string
        icon: string
    }[]
    wind: {
        deg: number
        speed: number
    }
    clouds: {
        all: number
    }
}