import { StyleSheet } from 'react-native'
import { wp } from '../../../common/constants/_Mixins'

const styles = StyleSheet.create({
  header__container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(2.5),
  },
  header__title: {
    alignSelf: 'center',
    color: '#555',
    fontWeight: 'bold',
    fontSize: wp(6)
  },
  header__body: {
    flexGrow: 1
  },
  content: {
    backgroundColor: '#E6F4EE',
    elevation: 5,
    flex: 1,
  },
  card__container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C3F5D1',
    width: wp(45),
    elevation: 3,
    borderRadius: wp(2),
    marginVertical: wp(2),
    marginHorizontal: wp(3.3),
    padding: wp(2)
  },
  card__image: {
    width: wp(38),
    height: wp(38),
    resizeMode: 'contain'
  },
  card__title: {
    color: "#555",
    fontWeight: 'bold',
    fontSize: wp(4.5),
    textAlign: 'center',
    marginBottom: wp(2)
  }
})

export default styles