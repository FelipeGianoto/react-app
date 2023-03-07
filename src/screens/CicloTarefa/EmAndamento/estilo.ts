import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#121212'
      },
      tituloArea: {
        marginTop: 40,
        backgroundColor: '#1F1B24',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 16,
      },
      button: {
        marginTop: 10,
        backgroundColor: '#03DAC5',
        width: '90%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#03DAC5',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20
       
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontStyle: 'normal',
        
      },
      titulo: {
        padding: 20,
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
      },
      lista: {
        flex: 1,
        width: '100%',
      },
      ultimosVistos: {
        marginBottom: 16,
        paddingVertical: 16,
      },
      tituloUltimosVistos: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginBottom: 8,
      },
      carrinhoArea: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      },
      icon: {
        fontSize: 30,
        fontWeight: 'bold',
      },
      quantidadeArea: {
        marginBottom: 15,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      quantidade: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#fff",
      },
      iconArea: {
        marginLeft: 16,
      },
      input: {
        backgroundColor: 'white',
        marginTop: 10,
        height: 200,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
      },
      inputTitulo: {
        backgroundColor: 'white',
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
      },
      itemContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        width: 300,
        height: 165
      },
      itemTitulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
      },
      itemData: {  
        textAlign: 'center',
        color: '#999',
        fontSize: 14,
        marginBottom: 17,
        marginTop: 10
      },
      itemDescricao: {
        fontSize: 16,
      },
      buttonEmAndamento: {
        marginTop: 10,
        backgroundColor: '#ffc107',
        width: '90%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ffc107',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20
      },
      buttonEmAndamentoText: {
        color: '#ffffff',
        fontSize: 17,
        fontStyle: 'normal',
      },
      buttonData: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 17,
        fontStyle: 'normal',
        marginVertical: 20,
      },
});

export default styles;