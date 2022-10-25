import React from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styles from '../constants/Styles';


export default function ProductsScreen({ navigation }: RootTabScreenProps<'Products'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez vos produits</Text>






      <Pressable style={styles.button} onPress={() =>
          navigation.navigate('ProductList', { category: 0 })
        }>        <Image
          source={require('../assets/images/icones/poisson.png')}
          style={styles.icon} />
       <Text style={styles.btnLabel}>Poissons</Text></Pressable>





      <Pressable  style={styles.button} onPress={() =>
          navigation.navigate('ProductList', { category: 1 })
        }>        <Image
          source={require('../assets/images/icones/poisson.png')}
          style={styles.icon} />
       <Text style={styles.btnLabel}>Coquillages</Text></Pressable>





      <Pressable  style={styles.button} onPress={() =>
          navigation.navigate('ProductList', { category: 2 })
        }>        <Image
          source={require('../assets/images/icones/poisson.png')}
          style={styles.icon} />
        <Text style={styles.btnLabel}>Crustacés</Text></Pressable>





      <Pressable  style={styles.button} onPress={() =>
          navigation.navigate('ProductList')
        }>
        <Image
          source={require('../assets/images/icones/poisson.png')}
          style={styles.icon} />
        <Text style={styles.btnLabel}>Promos</Text></Pressable>







    </View>
  );
}
