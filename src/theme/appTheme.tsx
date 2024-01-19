import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
  },
  resultSmall: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 18,
  },
  screenCalculator: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
});
