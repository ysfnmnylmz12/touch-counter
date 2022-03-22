import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import CountButton from 'src/components/CountButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from 'react/cjs/react.production.min';

const Home = () => {
  const [count, setCounter] = React.useState(0);
  const [prev, setPrev] = React.useState(0);
  const [plus, setPlus] = React.useState(false);
  const [minus, setMinus] = React.useState(false);
  const upHandler = () => {
    setCounter(count + 1);
    setPrev(count);
    setPlus(true);
  };
  const downHandler = () => {
    setPrev(count);
    setCounter(count - 1);
    setMinus(true);
  };
  React.useEffect(() => {
    if (count > prev) {
      setPlus(false);
    }
    if (count < prev) {
      setMinus(false);
    }
  }, [count]);
  return (
    <View style={{ ...styles.container, backgroundColor: plus ? 'rgb(90,245,90)' : minus ? 'rgb(245,90,90)' : '#fff' }}>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.floatingButtonRight} onPress={() => upHandler()}>
        <Icon name="plus" size={15} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.floatingButtonLeft} onPress={() => downHandler()}>
        <Icon name="minus" size={15} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  actions: {},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusColor: {
    backgroundColor: 'green',
  },
  counter: {
    fontSize: 100,
  },
  floatingButtonRight: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0,3)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  floatingButtonLeft: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0,3)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    left: 15,
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
});
