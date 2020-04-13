import { StyleSheet, Dimensions } from 'react-native';

export const Style = StyleSheet.create({
  container:{
    backgroundColor: '#000'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollHorizontal: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  profile:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
    backgroundColor: 'rgba(0, 195, 168, 1)'
  },
  profileText: {
    color: 'rgba(255,255,255,0.7)',
  },
  profileName: {
    fontSize: 20,
    marginVertical: 20
  },
  profileEmail: {
    fontSize: 15,
    color: '#555',
    marginBottom: 20
  },
  profileAvatar: {
    height:  Dimensions.get('window').width / 3,
    marginTop: 20,
    width:  Dimensions.get('window').width / 3,
    borderRadius:  Dimensions.get('window').width / 6,
    borderWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.3)',

    // shadowColor: "#fff",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.36,
    // shadowRadius: 6.68,

    // elevation: 11,
    
  },
  actions:{
    flexDirection: 'row',
  },
  actionsItem: {
    width: Dimensions.get('window').width / 3,
    marginVertical: 15,
  },
  actionsText: {
    color: 'rgba(255,255,255,0.7)',
  },
  page: {
    flex: 1,
    backgroundColor: '#000'
  },
  content: {
    marginHorizontal: 20,
    marginBottom: 50
  },
  contentLabel: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  contentText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 15,
    textAlign: "justify"
  },
  textBtn:{
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.7)',
  },
  banner: {
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height / 3 )* 2,
  },
  bannerTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.7)',
    marginVertical: 20,
    marginHorizontal: 20,
    width: Dimensions.get('window').width - 40,
  },
  bannerButton: {
    borderRadius: 30,
    marginVertical: 20,
    marginHorizontal: 20,
    width: Dimensions.get('window').width - 40,
    backgroundColor: 'rgba(0, 195, 168, 1)'
  },
  bannerImg: {
    position: 'absolute',
    backgroundColor: 'red',
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height / 3 )* 2,
  },
  gradientBanner: {
    position: 'absolute', 
    bottom: 0, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2, 
  },
  logoApp: {
    marginTop: 20,
    height: 45,
    width: 100,
  },
  
  gradientTop: {
    position: 'absolute', 
    top: 0, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 4, 
  },
  gradientBottom: {
    position: 'absolute', 
    bottom: 0, 
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 8, 
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 20
  },
  cardContainer: {
    marginBottom: 20,
    backgroundColor: '#000'
  },
  cardImage: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'rgba(0, 195, 168, .4)',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 3,
  },
  cardLabel: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
    marginTop: 10,
    width: Dimensions.get('window').width / 2,
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  thumbnail: {
    marginHorizontal: 10,
    width: 280,
    height: 180,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  circle: {
    marginHorizontal: 10,
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
  },
});

export default Style;