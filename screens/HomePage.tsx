import React from 'react';
import { Pressable, StyleSheet, Image, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styles from '../constants/Styles';

const image = { uri: "../assets/images/background" };
export default function HomePage({ navigation }: RootTabScreenProps<'Homepage'>) {


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <Text style={styles.title}>Le bateau de Thibault</Text>
      <View style={styles.header}>

        <Text style={styles.headerText}>Vente en direct de notre bateau</Text>
        <Text style={styles.headerText}>Produits selon la saison, Livraison sur Paris</Text>
        <Text style={styles.headerText}>06.63.99.99.78</Text>
        <Text style={styles.headerText}>lebateaudethibault@gmail.com</Text>
        <Text style={styles.headerText}>www.facebook.com/lebateaudethibault</Text>
      </View>


      <Pressable style={styles.button}
        onPress={() => navigation.navigate('Products')}>
        <Image
          source={require('../assets/images/icones/poisson.png')}
          style={styles.icon} />
        <Text style={styles.btnLabel}>Produits et<br></br>promotions</Text>
      </Pressable>

      {/* <CustomButton path="Products" img="../assets/images/icones/poisson.png" title="Produits et promotions"/> */}



      <View style={styles.row}>



        <Pressable style={styles.button}
          onPress={() => navigation.navigate('Bateaux')}>
          <Image source={require('../assets/images/icones/ancre.png')}
            style={styles.icon} />
          <Text style={styles.btnLabel}>
            Bateaux
          </Text>
        </Pressable>



        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Restaurants')
        }>        <Image
            source={require('../assets/images/icones/restaurant.png')}
            style={styles.icon} />
          <Text style={styles.btnLabel}>Restaurants</Text></Pressable>
      </View>


      <View style={styles.row}>


        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Recettes')}>        <Image
            source={require('../assets/images/icones/recette.png')}
            style={styles.icon} />

          <Text style={styles.btnLabel}>Recettes</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('Details', { title: 'Le bateau de Thibault', image: require('../assets/images/photos/TIG.png') })}>        <Image
            source={require('../assets/images/icones/tourteau.png')}
            style={styles.icon} />

          <Text style={styles.btnLabel}>Contact</Text>
        </Pressable>
      </View>


    </View>
  );
}
