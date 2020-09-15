import { StyleSheet } from 'react-native'
import { wp } from '../../../../common/constants/_Mixins'

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
    fontSize: wp(6)
  },
  header__body: {
    flexGrow: 1
  },
  content: {
    backgroundColor: '#E6F4EE',
    elevation: 5,
    flex: 1,
    marginVertical: wp(0.5)
  },
  card__container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    width: wp(45),
    elevation: 3,
    borderRadius: wp(2),
    marginVertical: wp(2),
    marginHorizontal: wp(3.3),
    padding: wp(2)
  },
  card__image: {
    width: wp(35),
    height: wp(35),
    resizeMode: 'contain'
  },
  card__title: {
    color: "#555",
    fontWeight: 'bold',
    fontSize: wp(4.5),
  },
  card__description: {
    color: "#555",
    fontSize: wp(3.4),
    flexGrow: 1
  },
  card__bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  card__count: {
    color: "#555",
    fontSize: wp(3.4),
    flexGrow: 1
  }
})

export default styles