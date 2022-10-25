import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import navigation from '../navigation';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import styles from '../constants/Styles';


export default function RestaurantsScreen({ navigation }: RootStackScreenProps<'Restaurants'>) {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants partenaires </Text>

      <View style={styles.header}>
        <Text style={styles.headerText}>Tous les restaurants partenaires avec le bateau Thibault</Text>
        <Text style={styles.headerText}>06.63.99.99.78</Text>
        <Text style={styles.headerText}>lebateaudethibault@gmail.com</Text>
        <Text style={styles.headerText}>www.facebook.com/lebateaudethibault</Text>
      </View>
      <View style={styles.row}>

        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Details', { title: 'Bistrot des Gascons', image: require('../assets/images/photos/desGascons.png') })
        }>          <Image
            source={require('../assets/images/icones/desGascons_icon.png')}
            style={styles.icon}
          />
          <Text style={styles.btnLabel}>Bistrot des<br></br>Gascons</Text></Pressable>

        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Details', { title: 'Les fous de l\'ile', image: require('../assets/images/photos/fousDeLIle.png') })}>
          <Image
            source={require('../assets/images/icones/fousDeLIle_icon.png')}
            style={styles.icon} />
          <Text style={styles.btnLabel}>Les fous de<br></br>l'Île</Text>
        </Pressable>

      </View>

      <View style={styles.row}>

        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Details', { title: 'Bistrot Landais', image: require('../assets/images/photos/bistrotLandais.png') })}>
          <Image
            source={require('../assets/images/icones/bistrotLandais_icon.png')}
            style={styles.icon} />
          <Text style={styles.btnLabel}>Bistrot<br></br>Landais</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Details', { title: 'Villa 9-Trois', image: require('../assets/images/photos/villa9Trois.png') })}>
          <Image
            source={require('../assets/images/icones/villa9Trois_icon.png')}
            style={styles.icon} />
          <Text style={styles.btnLabel}>Villa 9-Trois</Text>
        </Pressable>
      </View>


      <View style={styles.row}>

        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Details', { title: 'Bistrot du Sommelier', image: require('../assets/images/photos/duSommelier.png') })}>
          <Image
            source={require('../assets/images/icones/duSommelier_icon.png')}
            style={styles.icon} />
          <Text style={styles.btnLabel}>Bistrot du<br></br>Sommelier</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Details', { title: 'Le bateau de Thibault', image: require('../assets/images/photos/TIG.png') })}>
          {/* <Image
    source={require('../assets/images/icones/poisson.png')}
    style={styles.image}/> */}
          <Text style={styles.btnLabel}>Devenez<br></br>partenaire!</Text>
        </Pressable>
      </View>
    </View>


  );
}

