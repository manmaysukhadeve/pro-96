import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Homescreen';
import { LinearGradient } from 'expo-linear-gradient';
import db from './config';

export default class ResultScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      presentS: [],
      absentS: [],
    };
  }

  getAttendence = () => {
    var absentS = [];
    var presentS = [];

    db.ref('/').on('value', (data) => {
      console.log('----------------------------------------------------------');
      var allStudents = data.val();
      console.log(allStudents);

      // TODAY
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }

      today = dd + '-' + mm + '-' + yyyy;

      for (var student in allStudents) {
        if (allStudents[student][today] === 'present') {
          console.log(student + ' : Present : ' + allStudents[student]['name']);

          allStudents[student]['naam'] = allStudents[student]['name'];

          presentS.push(allStudents[student]);
          this.setState({ presentS: presentS });
        }

        if (allStudents[student][today] === 'absent') {
          console.log(student + ' : Absent : ' + allStudents[student]['name']);

          allStudents[student]['naam'] = allStudents[student]['name'];

          absentS.push(allStudents[student]);
          this.setState({ absentS: absentS });
        }

        if (allStudents[student][today] === 'null') {
          console.log(student + ' : Null : ' + allStudents[student]['name']);
        }
      }

      console.log(presentS);
      console.log(absentS);
    });

    absentS = [];
    presentS = [];
  };

  componentDidMount() {
    this.getAttendence();
  }

  render() {
    return (
      <View style={styles.view}>
      <LinearGradient colors={[ 'yellow','#AE0001']}>
      <Text style={styles.text}>PRESENTEES</Text>
        {this.state.presentS.map((student) => (
          <Text style={styles.present}>{student.name}</Text>
        ))}

        <Text style={styles.text}>ABSENTEES</Text>
        {this.state.absentS.map((student) => (
          <Text style={styles.absent}>{student.name}</Text>
        ))}
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  
  text: {
    fontFamily: 'Viner Hand ITC',
    fontSize: 25,
    marginTop: 30,
    marginLeft: 10,
    fontWeight: 'bold', 
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  present: {
    color:'#fff', 
    padding: 10,
    fontFamily: 'Candara',
    fontWeight:'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    textAlign: 'center',
    fontSize:20,
  },
  absent: {
    color:'#fff',
    padding: 10,
    fontFamily: 'Candara',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
     textAlign: 'center',
     fontWeight:'bold',
     fontSize:20,
  },
});
