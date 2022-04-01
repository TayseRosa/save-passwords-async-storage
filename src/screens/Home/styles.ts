import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282238',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f2f2f2'
  },
  listHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  listCount: {
    color: '#f5f5f5',
    fontSize: 13
  },
  list: {
    flex: 1,
    width: '100%'
  },
  listContent: {
    padding: 24,
    paddingBottom: 150
  },
  footer: {
    width: '100%',
    marginBottom: getBottomSpace()
  }
});
