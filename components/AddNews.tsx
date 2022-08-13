import React, {FC} from 'react'
import {Modal, StyleSheet, Text, Button, TextInput, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {gStyle} from '../styles/style'
import {Formik} from 'formik'
import {INewsDescription} from '../types/news'

interface AddNewsProp {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  addNews: (data: INewsDescription) => void
}

const AddNews: FC<AddNewsProp> = ({visible, setVisible, addNews}) => {
  return (
    <Modal visible={visible}>
      <Ionicons
        name="close-circle"
        size={34}
        color="tomato"
        onPress={() => setVisible(false)}
        style={styles.close}
      />
      <Text style={gStyle.title}>Форма добавления статей</Text>
      <View>
        <Formik
          onSubmit={(values, action) => {
            addNews(values)
            action.resetForm()
            setVisible(false)
          }}
          initialValues={{name: '', anons: '', full: '', img: ''}}
        >
          {({values, handleChange, handleSubmit}) => (
            <View style={styles.form}>
              <TextInput
                value={values.name}
                onChangeText={handleChange('name')}
                placeholder="Ввведите название"
                style={styles.input}
              />
              <TextInput
                value={values.anons}
                multiline
                onChangeText={handleChange('anons')}
                placeholder="Ввведите анонс"
                style={styles.input}
              />
              <TextInput
                value={values.full}
                multiline
                onChangeText={handleChange('full')}
                placeholder="Ввведите статью"
                style={styles.input}
              />
              <TextInput
                value={values.img}
                onChangeText={handleChange('img')}
                placeholder="Укажите фото"
                style={styles.input}
              />
              <Button title="Добавить" onPress={() => handleSubmit()} />
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  )
}

export default AddNews

const styles = StyleSheet.create({
  close: {
    textAlign: 'right',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    marginVertical: 10,
    padding: 10,
    width: '80%',
  },
  form: {
    alignItems: 'center',
  },
})
