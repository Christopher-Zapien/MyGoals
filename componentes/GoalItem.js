import { StyleSheet, View , Text, Pressable } from "react-native";

function GoalItem({itemData, OnDeLeteItem, id}){
    
    function deleteGoalHandler(){
        OnDeLeteItem(id)
        console.log('Delete Goal handeler')
    }

    return(
        <Pressable onPress={deleteGoalHandler}>
            <View style={styles.goalsItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#E65C19',
        color: 'white'
    },
    goalText: {
        color: 'white'
    }
})