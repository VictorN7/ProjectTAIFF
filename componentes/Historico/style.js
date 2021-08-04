import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f910',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  conteudo:{
    flex: 1,
    margin: 50,
    alignItems: 'center',
  },
  dados: {
    width: 300,
    height: 170,
    backgroundColor: "#fff",
    marginVertical:8,
    borderRadius:5,

  },
  informacao:{
    fontSize:20,
    color: "#000",
    textAlign:'center',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  text: {
    color: '#F45',
    fontSize: 20,
    margin: 2
  },
  logo: {
    width: 100,
    height: 100,
  },
  botao:{
    marginTop:20,
  }
});

export default styles;