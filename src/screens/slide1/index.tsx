import {styles} from './styles'
import {Botao} from '../../components/Botao'
import { Ipage} from '../../../App'
import { ImageBackground } from 'react-native'
 export function Slide1(){
    return(
        <ImageBackground style={styles.container} source={slide}
        <Text styles={styles.titulo}>Titulo</Text>
        < Botao onPress={() => setPage(1)} />
        < Botao onPress={() => setPage(2)} />
        <ImageBackground/>
    )
 }