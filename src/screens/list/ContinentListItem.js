import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default ContinentListItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onContinentItemPressed(props.continent)}>
            <View style={styles.continentTextWrapper}>
                <Text>{props.continent}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    continentListItemHandler: {
        flex: 1
    },
    continentTextWrapper: {
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        paddingTop: 20,
        paddingLeft: 10,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    }
});