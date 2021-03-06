import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  ImageBackground, 
  ScrollView,
  Dimensions } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const banner = { uri: "https://images.wallpaperscraft.com/image/savannah_sunset_landscape_147138_2560x1600.jpg" };
  const bg = { uri: "https://wallpapertag.com/wallpaper/full/c/3/9/438169-cool-orange-backgrounds-2560x1600-for-meizu.jpg" };


  return (
    <View style={styles.container}>
       <LinearGradient colors={['#8d4429', '#f69a00', '#5a3730']} style={styles.bodyBg}>
      <View style={rotate === 'portrait'? styles.nav: styles.narLandscape}>
        {/* Nav bar */}
      <ScrollView 
        horizontal={true}
        showHorizontalScrollIndicator={false}>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>Home</Text>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>About</Text>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>Portfolio</Text>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>Services</Text>
              <Text style={rotate === 'portraid'? styles.navText : styles.navTextLandS}>Contact</Text>
      </ScrollView>
      </View>
    
      {rotate === "portrait" ? 
      <View style={ styles.bannerBorder}>
        {/* Banner image */}
        <ImageBackground source={banner}
          style={styles.bannerBg}>
         </ImageBackground>
      </View>: null}

      <View style={styles.bodyBorder }>
        {/* Body */}
        <ImageBackground source={bg} 
        style={rotate === 'portrait'? styles.bodyImageBg : styles.bodyImageBg2}>
        <ScrollView style={rotate === 'portrait'? styles.content : styles.bodyLandscape}>
          <Text style={styles.head}>High Definition Monochrome</Text>
              <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
              
              <Text style={styles.quote}>This is a block quote, use it to include quotes from yourself or others. All you have to do to include this element is wrap some text around blockquote tags</Text>
              
          <Text style={styles.head}>Titles are H1 Tags</Text>
              <Text style={styles.bodyText}>Since the titles are H1 tags, try to include your keywords in them as search engines will look at them as being important content.</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
              <Text style={styles.bodyText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
              
          <Text style={styles.head}>Yet Another One!</Text>
              <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
              <Text style={styles.bodyText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
        </ScrollView>
        </ImageBackground>
      </View>
      </LinearGradient>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    
  },
  bodyBg:{
    height: '100%',
    width: '100%',
    padding: 10
  },
  nav: {
    flex: 0.1,
    marginLeft: '20@s',
    marginTop: '35@mvs',
    marginBottom: '5@s',
    paddingHorizontal: '10@mvs'
    
  },
  narLandscape: {
    width: '100%',
    alignItems: 'center'
  },
  navText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '20@mvs0.3',
    marginHorizontal: '10@mvs0.1',
  },
  navTextLandS:{
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '20@mvs0.3',
    marginHorizontal: '35@mvs',
  },
  bannerBorder:{
    borderWidth: '4@s',
    width: '330@s',
    marginTop: '-35@s',
    alignSelf: 'center'
  },
  bannerBg: {
    width: '100%',
    height: '100@s',
    resizeMode: "cover",
  },
  bannerHead:{
    fontFamily: 'Georgia',
    fontSize: '25@mvs',
    paddingHorizontal: '10@s',
    paddingTop: '10@s'
  },
  bannerSubHead:{
    fontFamily: 'Georgia',
    fontSize: '13@mvs',
    color: '#1F1603',
    paddingHorizontal: '10@s'
  },

  bodyBorder:{
    flex: 1,
    borderWidth: '4@s',
    marginTop: '15@mvs',
    alignSelf: 'center'  
  },
  bodyImageBg:{
    width: '320@s',
    height: '100%',
    resizeMode: 'stretch'
  },
  bodyImageBg2: {
    width: '690@s',
    height: '100%',
  },
  bodyLandscape: {
    width: '670@s',
    padding: '20@s',
   
  },
  content:{
    width: '320@s',
    flex: 1,
    padding: 15,
   
  },
  head:{
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontSize: '20@mvs0.5',
    color: '#1F1603',
    marginBottom: 10
  },
  bodyText: {
    fontFamily: 'Georgia',
    fontSize: '14@mvs0.5',
    marginVertical: 10, 
    lineHeight: '25@mvs0.2',
  },

  quote:{
    width: '75%',
    fontFamily: 'Helvetica',
    lineHeight: '22@mvs',
    
    padding: '15@mvs',
    borderWidth: '1@mvs',
    borderStyle: 'dashed',
    marginVertical: '20@mvs',
    marginLeft: '10@mvs'
  }
  
});
