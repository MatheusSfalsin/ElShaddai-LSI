import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const RowInteraction = ({
  onPressStart,
  onPressFinish,
  onPressCancel,
  onPressRegisterSinister,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPressStart()}
        activeOpacity={0.7}
        style={styles.buttonInteraction}
      >
        <Text style={styles.textButton}>Iniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onPressFinish()}
        activeOpacity={0.7}
        style={styles.buttonInteraction}
      >
        <Text style={styles.textButton}>Concluir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onPressCancel()}
        activeOpacity={0.7}
        style={styles.buttonInteraction}
      >
        <Text style={styles.textButton}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RowInteraction;
