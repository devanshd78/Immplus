import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { StyleSheet } from 'react-native';
const colors = {
  background: '#5C9A41',
  primary: 'rgba(0, 0, 0, 0.7)',
  secondary: 'rgba(0, 0, 0, 0.5)',
  secondaryLight: 'rgba(0, 0, 0, 0.2)'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row'
  },
  greenCon: {
    backgroundColor: colors.background,
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  locationImg: {
    width: 30,
    height: 30,
    objectFit: 'contain'
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  mr10: {
    marginRight: 10
  },
  ml10: {
    marginLeft: 10
  },
  subHeading: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '600'
  },
  location: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600'
  },
  downArrow: {
    width: 14,
    height: 14,
    objectFit: 'contain'
  },
  justifyContentBetween: {
    justifyContent: 'space-between'
  },
  userConHome: {
    borderColor: colors.secondaryLight,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userPicHome: {
    width: 24,
    height: 24,
    objectFit: 'contain'
  },
  flex: {
    flex: 1,
    backgroundColor: 'black'
  },
  paddingHor20: {
    paddingHorizontal: 20
  },
  heading: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    paddingLeft: 20,
    marginBottom: 20
  },
  tab: {
    borderColor: colors.secondaryLight,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  selectedTab: {
    borderColor: colors.background,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: colors.background,
    color: 'white'
  },
  selectedTabText: {
    color: 'white'
  },

  tabIcon: {
    width: 30,
    height: 30,
    objectFit: 'contain'
  },
  tabText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 10
  },
  marginLeft20: {
    marginLeft: 20
  },
  firstRow: {
    width: '48%',
    gap: 10
  },
  shadowBox: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    elevation: 5,
    borderRadius: 10
  },
  shadowBoxImg1: {
    width: 88,
    objectFit: 'contain',
    height: 140,
    marginTop: 30,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  shadowHeading: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '500',
  },
  shadowSubHeading: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '400',
    marginTop: 4
  },
  shadowBoxImg2: {
    width: 85,
    objectFit: 'contain',
    height: 64,
    marginTop: -6,
    marginLeft: 'auto'
  },
  shadowBoxImg3: {
    width: 65,
    objectFit: 'contain',
    height: 88,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  shadowBoxImg4: {
    width: 102,
    objectFit: 'contain',
    height: 102,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  banner: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 110
  },
  bannerCon: {
    marginTop: 30
  },
  seeMoreBtn: {
    fontSize: 14,
    color: '#7ED957',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  alignCenter: {
    alignItems: 'center'
  },
  startBg: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: -40,
    marginBottom: -40
  },
  whiteHeading: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  smallIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  greyText: {
    fontSize: 12,
    color: '#ffffff60',
    fontWeight: '300',
  },
  greenConSer: {
    backgroundColor: '#7ED95720',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  serviceImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10
  },
  footerImg: {
    width: '90%',
    height: 280,
    resizeMode: 'contain',
  },
  footer: {
    backgroundColor: '#09472210',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
  footerText: {
    width: '90%',
    color: '#00000050',
    fontSize: 16
  },
  bigHeading: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '800',
    marginTop: 20,
    paddingLeft: 20,
    marginBottom: 20
  },

  // DocterDesc

  headerCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10
  },
  HomeheaderCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  backBtn: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  backBtnCon: {
    position: 'absolute',
    left: 0,
  },
  headerText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  bigBoldHeading: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '600',
  },
  secondaryHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00000080',
    fontStyle: 'italic',
  },
  bigGreyText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#00000060',
  },
  greenRoundCon: {
    backgroundColor: '#7ED95720',
    padding: 14,
    borderRadius: 50,

  },
  mediumIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain'
  },
  ratingCon: {
    backgroundColor: '#54B42B',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  rating: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
  },
  totalRating: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  gradientBtnCon:{
    padding: 16,
    position: 'absolute', 
    bottom: 40, 
    alignSelf: 'center',
    borderRadius: 10
  },
  gradientBtnText:{
    zIndex: 2,
    fontSize: 20,
    color:'white',
    fontWeight:'600',
    textAlign:'center'
  },

  //PharmacyHome
  bigGreenText:{
    fontSize: 40,
    color:colors.primary,
    fontWeight:'600',
  },
  greyBoldText:{
    fontSize: 14,
    color:colors.secondary,
    fontWeight:'600',
  },
  greyRoundCon:{
    borderColor:'#00000020',
    borderWidth: 1,
    borderStyle:'solid',
    borderRadius: 30,
    padding: 10
  },
  searchCon:{
    borderColor:'#00000050',
    borderWidth: 1,
    borderStyle:'solid',
    paddingVertical:16,
    paddingHorizontal: 10,
    borderRadius: 16,
    flexDirection: 'row'
  },
  searchInput:{
  marginLeft: 10,
  fontSize: 14,
  width:' 100%'
},
productsBanner: {
  borderRadius: 10,
  overflow: 'hidden',
},

greenHelpBanner:{
  overflow:'hidden',
  borderRadius: 10,
  height:190,
  resizeMode:'cover',
  marginTop: 20
},
yellowTab:{
  borderColor: colors.secondaryLight,
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 6,
  paddingVertical: 10,
  paddingHorizontal: 18,
  alignItems: 'center',
  justifyContent: 'center'
},
selectedYellowTab:{
  backgroundColor:"#FF9D1A"
},
greenLightCon:{
  borderColor: colors.secondaryLight,
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 8,
  paddingVertical: 14,
  paddingHorizontal: 20,
},
selectedGreenLightCon:{
  borderColor: colors.primary,
  backgroundColor:"#7ED95720"
}
});

export default styles;