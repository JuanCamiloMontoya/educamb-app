import { StyleSheet } from 'react-native'
import { wp } from '../../../../../common/constants/_Mixins'

const styles = StyleSheet.create({
  header_container: {
    backgroundColor: 'transparent'
  },
  header__title: {
    alignSelf: 'center',
    color: '#555',
    fontWeight: 'bold',
    fontSize: wp(6),
    flex: 3,
    textAlign: 'center'
  },
  header__body: {
    flexGrow: 3
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#E6F4EE',
    elevation: 5,
    paddingTop: wp(2),
  },
  card__container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(42.5),
    elevation: 3,
    borderRadius: wp(2),
    marginVertical: wp(2),
    marginHorizontal: wp(5),
    padding: wp(2)
  },
  card__image: {
    width: wp(38),
    height: wp(38)
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