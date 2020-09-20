import React from 'react'
import { View, Text, StyleSheet, _Text } from 'react-native'

const FiltersScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Filters Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FiltersScreen