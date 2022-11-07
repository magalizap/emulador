import { useState } from 'react'
import {  Button, StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity} from 'react-native'
import Modal from './components/Modal'
export default function App() {

  const [textItem, setTextItem] = useState('')
  const [list, setList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})


  const onHandleChangeItem = (t) => setTextItem(t)
  

  const addItem = () => {
    setList(currentItems => [
      ...currentItems, 
      {id: Math.random().toString(), value:textItem}
    ])
    setTextItem('')
    console.log('hola  browser console!')
  }

  const selectedItem  = (id) => {
    setItemSelected(list.filter((item) => item.id === id) [0])
    setModalVisible(true)
  }

  const deleteItem = () => {
    setList(currentState => currentState.filter((item) => item.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(false)
  }
  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => selectedItem(item.id)}>
        <Text style={styles.text}>🐬 {item.value}</Text>
      </TouchableOpacity>
  )



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List 🛍️</Text>
      <View style={styles.itemContainer}>
        <TextInput value={textItem} placeholder={'agregar item a la lista'} style={styles.imputItem} onChangeText={onHandleChangeItem}/>
        <Button title='Agregar' color='purple' onPress={addItem}/>
      </View>
      <View>
        <FlatList  // LISTA
        data={list} // de donde Flatlist obtiene los datos (origen de los datos)
        renderItem={renderItem}  // como queremos que se vea cada item
        keyExtractor={(item) => item.id}
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem}/>
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#53edeb",
    alignItems: "center",
    paddingTop: 100,

  },
  title:{
    fontSize:30,
  },
  itemContainer:{
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems:'center', 
    paddingTop:50
  },
  imputItem:{
    borderBottomColor: 'purple',
    marginRight:10,
    borderBottomWidth:2, 
    width:200
  },
  text:{
    justifyContent: 'flex-start',
    marginTop: 30,
    fontSize:25,
    padding:3,
  },

})



/**
 *      <View>
          {itemList.map((item) => (
            <Text style={styles.text}>{item.value}</Text>
          ))}
      </View>
 */