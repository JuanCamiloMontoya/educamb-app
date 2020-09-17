import { StyleSheet } from 'react-native'
import { wp } from '../../../../../../common/constants/_Mixins'

const styles = StyleSheet.create({
  header__container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(1),
    backgroundColor: '#ACE6A5',
    borderBottomWidth: 1,
    marginBottom: wp(4)
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
  loading__content: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: '100%',
    width: '100%',
  },
  loading: {
    flexGrow: 1,
    alignSelf: 'center',
  },
})

export default styles