import React, { useEffect } from 'react';
import { View } from 'react-native';
import RoutesPrivate from './routes.private';
import RoutesNoPrivate from './routes.no.private';


export default function Routes() { 
    const isLogado: boolean = true;
 
    return isLogado ? <RoutesPrivate /> : <RoutesNoPrivate />
 
}
