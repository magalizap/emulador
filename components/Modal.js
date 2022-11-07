import { StyleSheet, Text, View, Pressable, Modal as NewModal} from 'react-native'
import React from 'react'

const Modal = ({isVisible, actionDeleteItem}) => {
  //const {isVisible} = props
  return (
    <NewModal animationType='fade' transparent={true} visible={isVisible}> 
    <View style={styles.centeredView}>
        <Text>Querés eliminar este elemento?</Text>
        <Pressable style={styles.pressable} onPress={() => actionDeleteItem()}>
          <Text style={{color: '#fff'}}>Eliminar</Text>
        </Pressable>
    </View>
  </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
    centeredView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 350,
      },
      pressable:{
        marginTop: 15,
        height: 35,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: 'purple',
    
      }
})