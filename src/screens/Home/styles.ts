import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: "#6B6B6B",
        fontSize: 16
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 16
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    emptyListText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    }
  });