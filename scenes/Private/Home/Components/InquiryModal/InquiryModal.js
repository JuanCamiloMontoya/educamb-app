import React, { useState } from 'react'
import { Modal, View, Image, ScrollView, ImageBackground, Alert } from 'react-native'
import { Text, Button, CheckBox, Container, Content, Header, Title, Icon, Right, Textarea, Form } from 'native-base'
import styles from './InquiryModalStyles'
import Item from './Item/Item'
import { wp } from '../../../../../common/constants/_Mixins'
import headerBg from '../../../../../assets/images/header-bg.jpg'
import { user as userActions } from '../../../../../services/User/UserActions'
import { useDispatch } from 'react-redux'

const InquiryModal = ({ visible, setVisible }) => {

  const { saveInquiry } = userActions
  const dispatch = useDispatch()

  const [q1, setQ1] = useState('Definitivamente si')
  const [q2, setQ2] = useState('Extremadamente satisfecho/a')
  const [q3, setQ3] = useState('Extremadamente satisfecho/a')
  const [q4, setQ4] = useState('Definitivamente si')
  const [q5, setQ5] = useState('Extremadamente satisfecho/a')
  const [q6, setQ6] = useState('Extremadamente satisfecho/a')
  const [q7, setQ7] = useState('Extremadamente satisfecho/a')
  const [q8, setQ8] = useState('Excelente')
  const [q9, setQ9] = useState('Definitivamente si')
  const [q10, setQ10] = useState()

  const sendInquiry = () => {
    const body = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
    dispatch(saveInquiry(body, () => {
      Alert.alert("Evaluación exitosa", "Gracias por darnos tu opinión!")
      setVisible(false)
    }))
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Container>
        <View style={styles.header__container}>
          <Button transparent style={{ flex: 1 }} onPress={() => setVisible(false)}>
            <Icon name='arrow-back' style={{ color: "#555" }} />
          </Button>
          <Text style={styles.header__title}>Encuesta de satisfacción</Text>
          <Right style={{ flex: 1 }} />
        </View>
        <Content style={{ padding: wp(3), backgroundColor: "#E6F4EE" }}>
          <View style={{ marginBottom: wp(4), backgroundColor: '#BBFABC', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              1. ¿Considera que hay coherencia entre el contenido del software y las evaluaciones?
            </Text>
            <View style={{ marginLeft: wp(4), marginTop: wp(2) }}>
              <Item description="Definitivamente si" selected={q1 == 'Definitivamente si'} setQ={setQ1} />
              <Item description="Probablemente si" selected={q1 == 'Probablemente si'} setQ={setQ1} />
              <Item description="No lo sé" selected={q1 == 'No lo sé'} setQ={setQ1} />
              <Item description="Probablemente no" selected={q1 == 'Probablemente no'} setQ={setQ1} />
              <Item description="Seguramente no" selected={q1 == 'Seguramente no'} setQ={setQ1} />
            </View>
          </View>
          <View style={{ marginBottom: wp(4), backgroundColor: '#CFF9F9', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              2. ¿Qué tan satisfecho/a está con la facilidad de uso del software?
            </Text>
            <View style={{ marginLeft: wp(4), marginTop: wp(2) }}>
              <Item description="Extremadamente satisfecho/a" selected={q2 == 'Extremadamente satisfecho/a'} setQ={setQ2} />
              <Item description="Muy satisfecho/a" selected={q2 == 'Muy satisfecho/a'} setQ={setQ2} />
              <Item description="Algo satisfecho/a" selected={q2 == 'Algo satisfecho/a'} setQ={setQ2} />
              <Item description="No tan satisfecho/a" selected={q2 == 'No tan satisfecho/a'} setQ={setQ2} />
              <Item description="Nada satisfecho/a" selected={q2 == 'Nada satisfecho/a"'} setQ={setQ2} />
            </View>
          </View>
          <View style={{ marginBottom: wp(4), backgroundColor: '#BBFABC', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              3. ¿Qué tan satisfecho/a está con la seguridad del software?
            </Text>
            <View style={{ marginLeft: wp(4), marginTop: wp(2) }}>
              <Item description="Extremadamente satisfecho/a" selected={q3 == 'Extremadamente satisfecho/a'} setQ={setQ3} />
              <Item description="Muy satisfecho/a" selected={q3 == 'Muy satisfecho/a'} setQ={setQ3} />
              <Item description="Algo satisfecho/a" selected={q3 == 'Algo satisfecho/a'} setQ={setQ3} />
              <Item description="No tan satisfecho/a" selected={q3 == 'No tan satisfecho/a'} setQ={setQ3} />
              <Item description="Nada satisfecho/a" selected={q3 == 'Nada satisfecho/a"'} setQ={setQ3} />
            </View>
          </View>
          <View style={{ marginBottom: wp(4), backgroundColor: '#CFF9F9', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              4. ¿El software desarrolla interés en el proceso de aprendizaje?
            </Text>
            <View style={{ marginLeft: wp(4), marginTop: wp(2) }}>
              <Item description="Definitivamente si" selected={q4 == 'Definitivamente si'} setQ={setQ4} />
              <Item description="Probablemente si" selected={q4 == 'Probablemente si'} setQ={setQ4} />
              <Item description="No lo sé" selected={q4 == 'No lo sé'} setQ={setQ4} />
              <Item description="Probablemente no" selected={q4 == 'Probablemente no'} setQ={setQ4} />
              <Item description="Seguramente no" selected={q4 == 'Seguramente no'} setQ={setQ4} />
            </View>
          </View>
          <View style={{ marginBottom: wp(4), backgroundColor: '#BBFABC', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              5. ¿Qué tan satisfecho/a esta con la experiencia de configuración de cuenta de este software?
            </Text>
            <View style={{ marginLeft: wp(4), marginTop: wp(2) }}>
              <Item description="Extremadamente satisfecho/a" selected={q5 == 'Extremadamente satisfecho/a'} setQ={setQ5} />
              <Item description="Muy satisfecho/a" selected={q5 == 'Muy satisfecho/a'} setQ={setQ5} />
              <Item description="Algo satisfecho/a" selected={q5 == 'Algo satisfecho/a'} setQ={setQ5} />
              <Item description="No tan satisfecho/a" selected={q5 == 'No tan satisfecho/a'} setQ={setQ5} />
              <Item description="Nada satisfecho/a" selected={q5 == 'Nada satisfecho/a"'} setQ={setQ5} />
            </View>
          </View>
          <View style={{ marginBottom: wp(4), backgroundColor: '#CFF9F9', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              6. ¿Qué tan satisfecho/a está con la apariencia del software?
            </Text>
            <View style={{ marginLeft: wp(4), marginTop: wp(2) }}>
              <Item description="Extremadamente satisfecho/a" selected={q6 == 'Extremadamente satisfecho/a'} setQ={setQ6} />
              <Item description="Muy satisfecho/a" selected={q6 == 'Muy satisfecho/a'} setQ={setQ6} />
              <Item description="Algo satisfecho/a" selected={q6 == 'Algo satisfecho/a'} setQ={setQ6} />
              <Item description="No tan satisfecho/a" selected={q6 == 'No tan satisfecho/a'} setQ={setQ6} />
              <Item description="Nada satisfecho/a" selected={q6 == 'Nada satisfecho/a"'} setQ={setQ6} />
            </View>
          </View>
          <View style={{ marginBottom: wp(4), backgroundColor: '#BBFABC', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              7. ¿Qué tan satisfecho/a esta en cuanto al conocimiento obtenido a partir del contenido temático?
            </Text>
            <View style={{ marginLeft: wp(4), marginTop: wp(2) }}>
              <Item description="Extremadamente satisfecho/a" selected={q7 == 'Extremadamente satisfecho/a'} setQ={setQ7} />
              <Item description="Muy satisfecho/a" selected={q7 == 'Muy satisfecho/a'} setQ={setQ7} />
              <Item description="Algo satisfecho/a" selected={q7 == 'Algo satisfecho/a'} setQ={setQ7} />
              <Item description="No tan satisfecho/a" selected={q7 == 'No tan satisfecho/a'} setQ={setQ7} />
              <Item description="Nada satisfecho/a" selected={q7 == 'Nada satisfecho/a"'} setQ={setQ7} />
            </View>
          </View>
          <View style={{ marginBottom: wp(4), backgroundColor: '#CFF9F9', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              8. ¿Cómo calificaría la calidad de los cursos?
            </Text>
            <View style={{ marginLeft: wp(4), marginTop: wp(2) }}>
              <Item description="Excelente" selected={q8 == 'Excelente'} setQ={setQ8} />
              <Item description="Sobresaliente" selected={q8 == 'Sobresaliente'} setQ={setQ8} />
              <Item description="Aceptable" selected={q8 == 'Aceptable'} setQ={setQ8} />
              <Item description="Insuficiente" selected={q8 == 'Insuficiente'} setQ={setQ8} />
              <Item description="Deficiente" selected={q8 == 'Deficiente'} setQ={setQ8} />
            </View>
          </View>
          <View style={{ marginBottom: wp(4), backgroundColor: '#BBFABC', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              9. ¿Recomendaría este software a alguien más?
            </Text>
            <View style={{ marginLeft: wp(4), marginTop: wp(2) }}>
              <Item description="Definitivamente si" selected={q9 == 'Definitivamente si'} setQ={setQ9} />
              <Item description="Probablemente si" selected={q9 == 'Probablemente si'} setQ={setQ9} />
              <Item description="No lo sé" selected={q9 == 'No lo sé'} setQ={setQ9} />
              <Item description="Probablemente no" selected={q9 == 'Probablemente no'} setQ={setQ9} />
              <Item description="Seguramente no" selected={q9 == 'Seguramente no'} setQ={setQ9} />
            </View>
          </View>
          <View style={{ marginBottom: wp(4), backgroundColor: '#CFF9F9', padding: wp(2), borderRadius: wp(5), elevation: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>
              10. ¿Cómo podemos mejorar nuestro software educativo? (Opcional)
            </Text>
            <View style={{ marginHorizontal: wp(2), marginTop: wp(2), marginBottom: wp(2) }}>
              <Form>
                <Textarea
                  value={q10}
                  onChangeText={text => setQ10(text)}
                  rowSpan={5}
                  maxLength={300}
                  bordered
                  style={{ backgroundColor: '#D3FCF3', borderRadius: 5 }}
                />
              </Form>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: wp(10) }}>
            <Button rounded success onPress={sendInquiry} >
              <Text style={{ textAlign: 'center', color: "#FFF" }}>GUARDAR</Text>
            </Button>
          </View>
        </Content>
      </Container>
    </Modal>
  )
}

export default InquiryModal
