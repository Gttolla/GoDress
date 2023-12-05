import { Text, View, StyleSheet } from 'react-native'

export default function Clothes(){
    return(
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>Armário</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        marginHorizontal: 43,
        marginVertical: 50,
    },
})
