import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppHeader from '../assets/AppHeader';
import db from './config';

export default class HomeScreen extends React.Component {
  navigateToResultScreen = (screen) => {
    this.props.navigation.navigate(screen);
  };

  updateAttendence(rollNo, content) {
    var id = '';

    if (rollNo < 10) {
      id = '0' + rollNo;
    } else {
      id = rollNo;
    }

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

    db.ref(id).update({
      [today]: content,
    });
  }

  constructor() {
    super();
    this.state = {
      // Harry
      name1: 'Harry',
      present1: 'transparent',
      absent1: 'transparent',
      color1: '#000',
      color2: '#000',

      //Hermione
      name2: 'Hermoine',
      present2: 'transparent',
      absent2: 'transparent',
      color3: '#000',
      color4: '#000',

      //Ron
      name3: 'Ron',
      present3: 'transparent',
      absent3: 'transparent',
      color5: '#000',
      color6: '#000',

      //Draco
      name4: 'Draco',
      present4: 'transparent',
      absent4: 'transparent',
      color7: '#000',
      color8: '#000',
    };
  }

  showContent = () => {
    //HARRY
    if (this.state.present1 === 'green') {
      this.updateAttendence(1, 'present');
    } else if (this.state.absent1 === 'red') {
      this.updateAttendence(1, 'absent');
    } else {
      this.updateAttendence(1, 'null');
    }

    //HERMOINE
    if (this.state.present2 === 'green') {
      this.updateAttendence(2, 'present');
    } else if (this.state.absent2 === 'red') {
      this.updateAttendence(2, 'absent');
    } else {
      this.updateAttendence(2, 'null');
    }

    //RON
    if (this.state.present3 === 'green') {
      this.updateAttendence(3, 'present');
    } else if (this.state.absent3 === 'red') {
      this.updateAttendence(3, 'absent');
    } else { 
      this.updateAttendence(3, 'null');
    }

    //JENNIE
    if (this.state.present4 === 'green') {
      this.updateAttendence(4, 'present');
    } else if (this.state.absent4 === 'red') {
      this.updateAttendence(4, 'absent');
    }else{
      this.updateAttendence(4, 'null');
    }
  };

  render() {
    return (
      <View style={[styles.view]}>
        <AppHeader />
        <LinearGradient colors={[ 'yellow','#AE0001']} style={{}}>
          <View style={[styles.view]}>
            <Text style={[styles.text]}>{this.state.name1}</Text>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: this.state.present1 },
                { marginLeft: 150 },
                { marginTop: -40 },
              ]}
              onPress={() => {
                this.setState({
                  present1: 'green',
                  absent1: 'transparent',
                  color1: 'white',
                  color2: 'black',
                });
              }}>
              <Text style={[styles.present, { color: this.state.color1 }]}>
                Present
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: this.state.absent1 },
                { marginLeft: 230 },
                { marginTop: -38 },
              ]}
              onPress={() => {
                this.setState({
                  absent1: 'red',
                  present1: 'transparent',
                  color2: 'white',
                  color1: 'black',
                });
              }}>
              <Text style={[styles.absent, { color: this.state.color2 }]}>
                Absent
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.text]}>{this.state.name2}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: this.state.present2 },
              { marginLeft: 150 },
              { marginTop: -40 },
            ]}
            onPress={() => {
              this.setState({
                present2: 'green',
                absent2: 'transparent',
                color3: 'white',
                color4: 'black',
              });
            }}>
            <Text style={[styles.present, { color: this.state.color3 }]}>
              Present
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: this.state.absent2 },
              { marginLeft: 230 },
              { marginTop: -38 },
            ]}
            onPress={() => {
              this.setState({
                absent2: 'red',
                present2: 'transparent',
                color4: 'white',
                color3: 'black',
              });
            }}>
            <Text style={[styles.absent, { color: this.state.color4 }]}>
              Absent
            </Text>
          </TouchableOpacity>

          <Text style={[styles.text]}>{this.state.name3}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: this.state.present3 },
              { marginLeft: 150 },
              { marginTop: -40 },
            ]}
            onPress={() => {
              this.setState({
                present3: 'green',
                absent3: 'transparent',
                color5: 'white',
                color6: 'black',
              });
            }}>
            <Text style={[styles.present, { color: this.state.color5 }]}>
              Present
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: this.state.absent3 },
              { marginLeft: 230 },
              { marginTop: -38 },
            ]}
            onPress={() => {
              this.setState({
                absent3: 'red',
                present3: 'transparent',
                color6: 'white',
                color5: 'black',
              });
            }}>
            <Text style={[styles.absent, { color: this.state.color6 }]}>
              Absent
            </Text>
          </TouchableOpacity>

          <Text style={[styles.text]}>{this.state.name4}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: this.state.present4 },
              { marginLeft: 150 },
              { marginTop: -40 },
            ]}
            onPress={() => {
              this.setState({
                present4: 'green',
                absent4: 'transparent',
                color7: 'white',
                color8: 'black',
              });
            }}>
            <Text style={[styles.present, { color: this.state.color7 }]}>
              Present
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: this.state.absent4 },
              { marginLeft: 230 },
              { marginTop: -38 },
            ]}
            onPress={() => {
              this.setState({
                absent4: 'red',
                present4: 'transparent',
                color8: 'white',
                color7: 'black',
              });
            }}>
            <Text style={[styles.absent, { color: this.state.color8 }]}>
              Absent
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: '#ff0000' },
              { marginLeft: 230 },
            ]}>
            <Text
              style={[
                styles.text,
                { fontFamily: 'Candara' },
                { fontSize: 17 },
                { padding: 10 },
                { color: '#fff' },
                { marginTop: 0 },
                { marginLeft: 0 },
              ]}
              onPress={() => {
                this.navigateToResultScreen('screen2');
                this.showContent();
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  button: {
    marginTop: 20,
    width: 75,
    borderRadius: 15,
  },
  text: {
    fontFamily: 'Viner Hand ITC',
    fontSize: 25,
    marginTop: 30,
    marginLeft: 10,
    fontWeight:'bold',
  },
  present: {
    padding: 10,
    fontFamily: 'Candara',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 70,
  },
  absent: {
    padding: 10,
    fontFamily: 'Candara',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 70,
  },
});
