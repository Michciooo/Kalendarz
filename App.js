import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList,Agenda } from 'react-native-calendars';
import { useState } from 'react';
export default function App() {
  const [selecteddate,setselecteddate]=useState('')
  function selecteddatehandler(day){
    setselecteddate(day.dateString)
  }
  const wydarzenia = {
    '2023-04-21':[{opis:'opis' , czas:'11:00'}],
    '2023-04-18':[{opis:'opis',czas:'22:00'}],
  }
  function renderWydarzenia(wyd){
    return (
      <View>
        <Text>{wyd.czas}</Text>
        <Text>{wyd.opis}</Text>
      </View>
    )
    }

  function renderPustaData(wyd){
    return (
      <View>
        <Text>Pusto</Text>
      </View>
    )
  }
  return (
    <View>
      <Agenda style={{width:500}}
        items={wydarzenia}
        renderItem={renderWydarzenia}
        renderEmptyData={renderPustaData}
      />
     <CalendarList /*Calendar*/
     current='2023-01-01'
     minDate='2022-01-01'
     maxDate='2029-12-31'
     onDayPress={selecteddatehandler}
      markedDates={
        {
        [selecteddate]:{selected:true,selectedColor:'green'},
        '2023-04-15':{marked:true},
        '2023-04-10':{marked:true , dotColor:'red'},
        '2023-04-18':{selected:true , selectedColor:'red'},
        }
      }
    
     />

    </View>
  );
}