import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Text, View, Icon, Button, ListItem, Right, Radio, CheckBox } from 'native-base'
import { Bar } from 'react-native-progress'
import YoutubePlayer from "react-native-youtube-iframe"
import { useHistory, useParams, useRouteMatch } from 'react-router-native'
import { Image, TouchableOpacity, FlatList, Alert, ActivityIndicator } from 'react-native'
import { exam as examActions } from '../../../../../../services/Exam/ExamActions'

import { paddingHorizontal, paddingVertical, wp } from '../../../../../../common/constants/_Mixins'
import styles from './ExamStyles'

const Exam = (props) => {

  const match = useRouteMatch("/home/course-list/course/:courseId")

  const [video, setVideo] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
  const [itemsSelected, setItemsSelected] = useState([])

  const { getByCourse, saveExam } = examActions
  const { course } = useSelector(state => state.course)
  const { exam, loading } = useSelector(state => state.exam)

  const { examId } = useParams()


  useEffect(() => {
    dispatch(getByCourse(examId))
  }, [])

  useEffect(() => {
    if (!exam) return
    let answers = []
    for (const question of exam.questions) {
      const { id } = question.answers.find(answer => answer.correct == true)
      answers.push({ question: question.id, answer: undefined, correct: id })
    }
    setItemsSelected(answers)
  }, [exam])

  const selectAnswer = (index, answerId) => {
    let answers = itemsSelected
    answers[index].answer = answerId
    setItemsSelected(msgs => msgs.splice(answers))
  }

  const sendExam = () => {
    let correctsCount = 0
    for (const answer of itemsSelected)
      if (!answer.answer) {
        Alert.alert("Error!", "Responda todas las preguntas.")
        return
      } else if (answer.answer === answer.correct) {
        correctsCount++
      }

    const correct = correctsCount === itemsSelected.length

    const callback = correct ? sendSuccess : () => sendError(correctsCount, itemsSelected.length)

    const body = { correct, exam: exam.id, answers: itemsSelected }

    dispatch(saveExam(body, callback))
  }

  const okButton = { text: "OK", onPress: () => history.replace(match.url) }

  const sendSuccess = () => {
    Alert.alert(
      "Felicidades ✅",
      "Todas tus respuestas son correctas",
      [okButton],
      { cancelable: false }
    )
  }
  const sendError = (corrects, total) => {
    Alert.alert(
      "Oops❗️",
      `Repuestas correctas: ${corrects} de ${total}. Sigue estudiando e intentalo de nuevo.`,
      [okButton],
      { cancelable: false }
    )
  }

  const complete = exam?.examUsers?.length > 0

  return (
    <Fragment>
      <View style={styles.header__container}>
        <Button transparent style={{ flex: 1 }} onPress={() => history.goBack()}>
          <Icon name='arrow-back' style={{ color: "#555" }} />
        </Button>
        <Text style={styles.header__title}>{course?.name}</Text>
        <Right style={{ flex: 1 }} />
      </View>
      <View style={styles.content}>
        <View style={styles.content__top}>
          <Text style={{ fontSize: wp(7), fontWeight: 'bold' }}>Evaluación</Text>
        </View>
        {loading && <ActivityIndicator size="large" color="#1F8209" style={{ marginTop: wp(5) }} />}
        {!loading && <FlatList
          data={exam?.questions || []}
          ListFooterComponent={(
            <View style={{ marginBottom: wp(20), marginTop: wp(5) }}>
              {!complete && <Button
                onPress={sendExam}
                iconLeft
                success
                style={styles.content__bottom__button}
              >
                <Icon name="play" type="MaterialCommunityIcons" />
                <Text>Finalizar</Text>
              </Button>}
            </View>
          )}
          renderItem={({ item: question, index: i }) => (
            <View style={{ marginHorizontal: wp(5), marginVertical: wp(2), padding: wp(2), borderRadius: wp(2), elevation: 5, backgroundColor: '#BBFABC' }}>
              <Text style={{ fontWeight: 'bold', marginBottom: wp(3) }}>{(i + 1)}. {question.description}</Text>
              {question.answers.map((answer) => (
                <TouchableOpacity
                  style={{ flexDirection: 'row', marginVertical: wp(.7), marginLeft: wp(2), alignItems: 'center' }}
                  onPress={() => selectAnswer(i, answer.id)}
                >
                  <Radio
                    selected={!complete ? answer.id == itemsSelected[i]?.answer : answer.correct == true}
                    onPress={() => selectAnswer(i, answer.id)}
                  />
                  <Text style={{ marginLeft: wp(2), flexShrink: 1 }}>{answer.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          keyExtractor={({ id }) => id}
        />}
      </View>
    </Fragment>
  )
}

export default Exam