import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f910',
      alignItems: 'center',
      justifyContent:'space-between',
      paddingVertical: 200,
    },
    text:{
      color: '#F45',
      fontSize:20,
      margin: 2
    },
    logo:{
      width: 100,
      height: 100,
    },
    input: {
      width: 200,
      height: 40,
      margin: 12,
      borderWidth: 1,
      backgroundColor:"white",
      padding: 10
    },
    texto:{
      color: '#fff',
      fontSize:17,
      marginHorizontal: 10,
      textAlign: 'left',
      fontWeight: "900",
    },
  });  

export default styles;