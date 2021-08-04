import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 20,
      paddingTop: 40,
      paddingHorizontal:20 ,
      backgroundColor: '#f910',
    },
    container2: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f910',
      borderStyle: 'solid',
      borderColor:"#4A47A3",
      borderWidth:0.4,
      borderRadius:5,
      
    },
    text:{
      color: '#099',
      fontSize:20,
    },
    logo:{
      width: 250,
      height: 200,
      marginHorizontal: 50,
      marginVertical:10,
    },
    espacologo:{
      width: 350,
      height: 220,
      marginVertical:100,
     
    },
    botoes:{
      margin: 10,
    }
  });  

export default styles;