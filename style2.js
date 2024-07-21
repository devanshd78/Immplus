import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { StyleSheet, Platform, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20
  },
  container1: {
    width: 60,
    height: 60,
    borderRadius: 5,
    top: 50,
    left: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
  },
  container3: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    backgroundColor: '#7BD45550',
    borderRadius: 10,
  },
  container4: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    backgroundColor: '#7BD45550',
    borderRadius: 10,
  },
  container5: {
    flex: 0,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container6: {
    flex: 0,
    margin: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rectangle: {
    width: 65,
    height: 2,
    backgroundColor: 'transparent',
  },
  greenRectangle: {
    backgroundColor: '#5C9A41',
  },
  greyRectangle: {
    backgroundColor: '#D9D9D9',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'contain'
  },
  Text: {
    marginLeft: 20,
    color: '#5C9A41',
    fontFamily: 'Syne-SemiBold',
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 43,
    letterSpacing: 0,
    textAlign: 'left',
  },
  Text1: {
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontFamily: 'Syne-Regular',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 1.5,
    textAlign: 'left',
  },
  box: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box1: {
    width: 150,
    borderWidth: 1,
    borderColor: '#00000060',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: "center",
    alignContent: 'center',
    padding: 15
  },
  text: {
    bottom: 30,
    left: 54,
    marginLeft: 10,
    fontWeight: 'bold',
    fontFamily: 'Syne-Regular',
    fontSize: 16,
    lineHeight: 21,
    color: '#000',
    marginRight: 10,
  },
  text1: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 100,
    right: 55,
    alignItems: 'center'
  },
  description: {
    flex: 0,
    right: 50,
    fontSize: 12,
    marginRight: 10,
    color: "#00000099"
  },
  description1: {
    flex: 0,
    right: 37,
    fontSize: 12,
    marginRight: 10,
    color: "#00000099"
  },
  image1: {
    width: 160,
    height: 122,
    right: 40,
    resizeMode: 'contain',
  },
  image2: {
    width: 160,
    height: 122,
    right: 40,
    resizeMode: 'contain',
  },
  ageBox: {
    width: windowWidth * 0.9,
    height: 70,
    marginLeft: '5%',
    marginTop: 20,
    alignItems: 'begin',
    borderWidth: 1,
    borderColor: '#00000060',
    borderRadius: 10,
    justifyContent: 'center',
  },
  ageBoxText: {
    marginLeft: "5%",
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Syne-Regular',
    textAlign: 'left',
    color: 'black',
  },
  inputContainer: {
    margin: 20,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  inputContainer1: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000060',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    padding: 10,
    borderBottomColor: 'black',
    marginRight: 10,
  },
  diseaseListContainer: {
    flex: 1,
  },
  diseaseItemWrapper: {
    margin: 20,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#7ED957',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  diseaseItem: {
    color: 'black',
    fontSize: 12
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 120,
  },
  buttonText: {
    fontFamily: 'Syne-SemiBold',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    lineHeight: 26,
    marginTop: 13
  },
  custbutton: {
    width: 350,
    height: 50
  },
  linearGradient: {
    borderRadius: 10,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  passwordIcon: {
    marginTop: 5,
  },
  modalText: {
    fontFamily: 'Syne-SemiBold',
    color: '#5C9A41',
    fontSize: 36,
    marginBottom: 10,
  },
  modalText1: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    color: 'black'
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#00000060',
    width: 44,
    height: 44,
    paddingTop: 10,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  modalButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  map1: {
    ...StyleSheet.absoluteFillObject,
    height: "60%",
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locationText: {
    fontFamily: 'Syne',
    fontSize: 36,
    marginBottom: 10,
  },
  addressText: {
    marginBottom: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  modalContent1: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "flex-start"
  },
  container7: {
    backgroundColor: 'white',
  },
  Text2: {
    marginTop: 110,
    marginLeft: 20,
    color: '#5C9A41',
    fontFamily: 'Syne-SemiBold',
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 43,
    letterSpacing: 0,
    textAlign: 'left',
  },
  inputContainer2: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000060',
    borderRadius: 10,
  },
  input1: {
    flex: 1,
    padding: 10,
    borderBottomColor: 'black',
    marginLeft: 10,
  },
  doctorcontainer: {
    marginTop: 5,
    marginLeft: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#00000030',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth - 40,
  },
  button1: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 150,
  },
  custbutton1: {
    width: 350,
    height: 50
  },
  button2: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 240,
  },
  bottomCon: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20,
    width: windowWidth - 40,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
});

export default styles;