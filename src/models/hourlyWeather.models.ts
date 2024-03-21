export interface HourlyWeatherState extends HourlyWeatherResponse{
    loading: boolean
    error: string | null
}

export interface HourlyWeatherResponse {
    city: {
        name: string | null
    }
    message: string | null
    list: HourlyWeatherInfo[]
}

export interface HourlyWeatherInfo {
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
    dt_txt: string
}