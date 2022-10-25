import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#67b4f0'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      position:'absolute',
      top:10,
      color:'#FFFFFF'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    row:{
      flexDirection: 'row',
      width:'100%',
      backgroundColor:'#67b4f0'
    },
    list:{
      flexDirection: 'row',
      width:'70%',
      backgroundColor:'#67b4f0',
      alignItems:'center'
    },
    listItem:{
      flexDirection: 'row',
      width:'100%',
      fontSize:25,
      color:'white',
      borderBottomWidth:1,
      borderBottomColor:'white'
    },
    image: {
      position: 'relative',
      height: 250,
      width: 250,
  
    },
    
    icon: {
      position: 'relative',
      height: 50,
      width: 50,
  
    },
    button: {
    flexDirection: 'row',
    borderRadius:5,
    padding:5,
    marginLeft:5,
    marginTop:5,
    width:'48%',
    backgroundColor:'white'
    },
    
    btnLabel:{
      fontSize: 20,
      flexGrow: 1,
      flex: 1,
    },
    header:{
      backgroundColor:'#67b4f0',
      position:'absolute',
      top:100,
    },
    headerText:{
      color:'white',
      fontSize:15
    }
   
  
   
  });
    