import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 178,
    backgroundColor: '#161127',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 4,
    borderColor: '#EA04D3',
    backgroundColor:'#EA04D3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    flex: 1,
    marginLeft: 12
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight:'bold'
  },
  subtitle: {
    color: '#FA4CCC',
    fontSize: 13
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 5,
  }

});
