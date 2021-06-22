import Geolocation from '@react-native-community/geolocation';  

interface LocationUser {
    longitude: number;
    latitude: number;
}

export default function locationUser(): LocationUser {
    let longitude: number = 0;
    let latitude: number = 0;

    Geolocation.getCurrentPosition(
        (position) => {
            longitude = position.coords.longitude
            latitude = position.coords.latitude
        }, (error) => {
            console.log(error.message)
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

    let data: LocationUser = {
        longitude,
        latitude
    }

    return data;
}