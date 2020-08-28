/* import normalize from 'react-native-normalize';
import { Platform, StyleSheet } from 'react-native';

import { Mixins, Common, Colors } from '../../../assets/styles/utils/Index';
import Layout from '../../../common/constants/Layout';

export const loginStyless = StyleSheet.create({

	login__container: {
		position: 'absolute',
		top: normalize(Layout.isBigDevice ? 455 : Layout.isSmallDevice ? 375 : 395),
		height: normalize(236, 'height'),
		marginRight: normalize(110, 'height'),
		...Mixins.paddingHorizontal(30),
		...Common.transparent,
	},

	Login__content: {
		width: normalize(Layout.isSmallDevice ? 230 : 220),
		justifyContent: 'space-between',
		height: normalize(190, 'height')
	},

	login__container_confirmation: {
		position: 'absolute',
		top: normalize(Layout.isBigDevice ? 405 : Layout.isSmallDevice ? 350 : 395),
		height: normalize(Layout.isBigDevice || Layout.isSmallDevice ? 290 : 243, 'height'),
		paddingRight: normalize(Layout.isSmallDevice ? 200 : 110, 'height'),
		...Mixins.paddingHorizontal(30),
		...Common.transparent,
	},

	contentSpaceBetween: {
		width: '100%',
		height: '100%',
		flex: 0.9,
		justifyContent: 'space-between',
	},

	formlogin: {
		borderWidth: 1,
		borderColor: Colors.border,
		backgroundColor: Colors.white,
		...Mixins.borderRadius(5),
		...(Platform.OS === 'ios' && Mixins.boxShadow(Colors.shadow)),
		borderRadius: normalize(5),
		marginTop: normalize(Layout.isBigDevice ? 20 : 40),
		textAlign:'center',
		fontSize:normalize(20)
	},


	formloginNoMargin: {
		borderWidth: 1,
		borderColor: Colors.border,
		backgroundColor: Colors.white,
		...Mixins.borderRadius(5),
		...(Platform.OS === 'ios' && Mixins.boxShadow(Colors.shadow)),
		borderRadius: normalize(5),
	},

	contentInputMargin: {
		borderWidth: 1,
		borderColor: Colors.border,
		backgroundColor: Colors.white,
		...Mixins.borderRadius(5),
		...(Platform.OS === 'ios' && Mixins.boxShadow(Colors.shadow)),
		borderRadius: normalize(5),
		marginTop: normalize(Layout.isBigDevice ? 20 : 40),
		paddingHorizontal: normalize(10, 'height'),
	},

	contentInput: {
		borderWidth: 1,
		borderColor: Colors.border,
		backgroundColor: Colors.white,
		...Mixins.borderRadius(5),
		...(Platform.OS === 'ios' && Mixins.boxShadow(Colors.shadow)),
		borderRadius: normalize(5),
		marginTop: normalize(Layout.isBigDevice ? 20 : 40),
		paddingHorizontal: 10,
	},
	multipleInput__content: {
		...Mixins.borderRadius(5),
		marginVertical: normalize(20),
		height: normalize(50, 'height'),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		borderColor: 'transparent',
		backgroundColor: 'transparent',
	},

	multipleInput__item: {
		borderColor: 'transparent',
		...Common.row,
		backgroundColor: 'transparent'
	},


}) */