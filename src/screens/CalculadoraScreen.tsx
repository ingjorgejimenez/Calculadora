import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {Button} from '../components/Button';
import {useCalculator} from '../hook/useCalculator';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    clear,
    positiveNegative,
    btnDel,
    dividir,
    sumar,
    armarNumero,
    multiplicar,
    restar,
    result,
  } = useCalculator();

  return (
    <View style={styles.screenCalculator}>
      <View style={stylesScreen.result}>
        {numeroAnterior !== '0' && (
          <Text style={styles.resultSmall}>
            {parseInt(numeroAnterior).toLocaleString()}
          </Text>
        )}
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
          {numero}
        </Text>
      </View>
      <View style={stylesScreen.buttonContainer}>
        <View style={styles.row}>
          <Button onPress={clear} text="C" color="#9B9B9B" />
          <Button onPress={positiveNegative} text="+/-" color="#9B9B9B" />
          <Button onPress={btnDel} text="Del" color="#9B9B9B" />
          <Button onPress={dividir} text="/" color="#FF9427" />
        </View>
        <View style={styles.row}>
          <Button onPress={armarNumero} text="7" />
          <Button onPress={armarNumero} text="8" />
          <Button onPress={armarNumero} text="9" />
          <Button onPress={multiplicar} text="x" color="#FF9427" />
        </View>
        <View style={styles.row}>
          <Button onPress={armarNumero} text="4" />
          <Button onPress={armarNumero} text="5" />
          <Button onPress={armarNumero} text="6" />
          <Button onPress={restar} text="-" color="#FF9427" />
        </View>
        <View style={styles.row}>
          <Button onPress={armarNumero} text="1" />
          <Button onPress={armarNumero} text="2" />
          <Button onPress={armarNumero} text="3" />
          <Button onPress={sumar} text="+" color="#FF9427" />
        </View>
        <View style={{...styles.row, ...stylesScreen.container}}>
          <Button
            onPress={armarNumero}
            style={stylesScreen.buttonLarge}
            variant="large"
            text="0"
          />
          <Button
            onPress={armarNumero}
            style={stylesScreen.buttonNormal}
            text="."
          />
          <Button
            onPress={result}
            style={stylesScreen.buttonNormal}
            text="="
            color="#FF9427"
          />
        </View>
      </View>
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonLarge: {
    flex: 2,
    alignItems: 'flex-start',
  },
  buttonNormal: {
    flex: 1,
    alignItems: 'center',
    padding: 0,
    // flexGrow: 1,
  },
  result: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 3,
    paddingTop: 20,
  },
});
