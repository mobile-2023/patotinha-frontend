import { useAppDiscpatch, useAppSelector } from '../../redux/store'
import { incremment } from '../../redux/authSlice'

import {
    Container,
    Text,
    Button
} from './styles'

type Props = {}

const Home = (props: Props) => {

    const dispatch = useAppDiscpatch()
    const number = useAppSelector(state => state.auth.number)

    return (
        <Container>
            <Text>Testando primeira página! {number}</Text>
            <Button title='Incremment' onPress={() => dispatch(incremment({}))}/>
            <Text>Commit test da develop</Text>
        </Container>
    )
}

export default Home