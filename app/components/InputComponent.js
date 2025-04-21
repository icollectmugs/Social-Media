import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const InputForm = (props) => {
  const { title, isPassword, iconName, onPress, placeholder, secureTextEntry, onChangeText} = props
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
        {
          isPassword ?
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onPress}>
              <Ionicons name={iconName} size={22} color="black" />
            </TouchableOpacity>
          </View>
          :
          null
        }
      </View>
    </View>
  )
}

export default InputForm;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 8,
  },
  titleContainer: {
    marginLeft: 16
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 8
  },
  input: {
    padding: 8,
    flex: 1,
    color: 'black'
  }
})