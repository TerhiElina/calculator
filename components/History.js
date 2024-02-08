import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';

export default function History({route, navigation}) {
    const {saveCalculation} = route.params;
    console.log('can you see:', {saveCalculation})


  return (
    <View>
         <View>
         {console.log('data:', {saveCalculation})}
        <FlatList data={saveCalculation} renderItem={({item}) =>
        <Text style={styles.historyItem}>{item}</Text> 
        }/>
        </View>
        <StatusBar style="auto" />
        </View>

   
  );
      }
      const styles = StyleSheet.create({
        historyItem: {
          backgroundColor: 'orange',
          fontSize:20,
          padding: 10,
          marginVertical: 5,
          borderRadius: 5,
        },
      });
