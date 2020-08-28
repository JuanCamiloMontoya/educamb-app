import Color from './Colors';
import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window')

/* export const width = size => ({
  width: wp(size),
}); */

export const wp = size => (width * size / 100)

export const paddingVertical = size => ({
  paddingVertical: (width * size / 100)
});

export const paddingHorizontal = size => ({
  paddingHorizontal: (width * size / 100)
});

/* export const marginBottom = size => ({
  marginBottom: wp(size),
});

export const marginTop = size => ({
  marginTop: wp(size),
});
export const marginLeft = size => ({
  marginLeft: wp(size),
});
export const marginRight = size => ({
  marginRight: wp(size),
});

export const height = size => ({
  height: size,
});

export const grow = size => ({
  flexGrow: size,
});

export const boxShadow = (
  color = Color.black,
  offset = { height: isIos ? 5 : 9, width: 0 },
  radius = isIos ? 3 : 20,
  opacity = isIos ? 0.24 : 1,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: 6,
  };
};

export const imageBackground = () => ({
  position: 'absolute',
  top: wp('-40%'),
  width: wp('100%'),
  height: wp('270%'),
  resizeMode: 'cover',
});

export const textShadow = () => ({
  textShadowColor: Color.shadow,
  textShadowOffset: { width: 0, height: 3 },
  textShadowRadius: 10,
});
 */