import { StyleSheet } from 'react-native'
import { wp } from '../../../../../common/constants/_Mixins'

const styles = StyleSheet.create({
  header__container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(1)
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
    flexGrow: 1
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#E6F4EE',
    elevation: 5
  },
  content__top: {
    flexDirection: 'row',
    paddingBottom: wp(3),
    borderBottomWidth: 1
  },
  content__top__image: {
    width: wp(35),
    height: wp(35),
    marginRight: wp(2),
    resizeMode: 'contain'
  },
  content__top__description: {
    color: "#555",
    fontSize: wp(4),
    alignSelf: 'flex-start',
    marginVertical: wp(2),
    flexShrink: 1
  },
  content__bottom__button: {
    width: wp(50),
    alignSelf: 'center',
    justifyContent: 'center'
  },
})

export default styles