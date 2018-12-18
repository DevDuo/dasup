import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Calendar with selectable date and arrows</Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />
        <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>
        <Calendar
          style={styles.calendar}
          current={'2018-12-16'}
          minDate={'2018-12-10'}
          maxDate={'2018-12-29'}
          firstDay={1}
          markedDates={{
            '2018-12-23': {selected: true, marked: true},
            '2018-12-24': {selected: true, marked: true, dotColor: 'green'},
            '2018-12-25': {marked: true, dotColor: 'red'},
            '2018-12-26': {marked: true},
            '2018-12-27': {disabled: true, activeOpacity: 0}
          }}
          // disabledByDefault={true}
          hideArrows={true}
        />
        <Text style={styles.text}>Calendar with custom day component</Text>
        <Calendar
          style={[styles.calendar, {height: 300}]}
          dayComponent={({date, state}) => {
            return (<View><Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text></View>);
          }}
        />
        <Text style={styles.text}>Calendar with period marking and spinner</Text>
        <Calendar
          style={styles.calendar}
          current={'2018-12-16'}
          minDate={'2018-12-10'}
          displayLoadingIndicator
          markingType={'period'}
          theme={{
            calendarBackground: '#333248',
            textSectionTitleColor: 'white',
            dayTextColor: 'red',
            todayTextColor: 'white',
            selectedDayTextColor: 'white',
            monthTextColor: 'white',
            selectedDayBackgroundColor: '#333248',
            arrowColor: 'white',
            // textDisabledColor: 'red',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            }
          }}
          markedDates={{
            '2018-12-17': {disabled: true},
            '2018-12-08': {textColor: '#666'},
            '2018-12-09': {textColor: '#666'},
            '2018-12-14': {startingDay: true, color: 'blue', endingDay: true},
            '2018-12-21': {startingDay: true, color: 'blue'},
            '2018-12-22': {endingDay: true, color: 'gray'},
            '2018-12-24': {startingDay: true, color: 'gray'},
            '2018-12-25': {color: 'gray'},
            '2018-12-26': {endingDay: true, color: 'gray'}}}
          hideArrows={false}
        />
        <Text style={styles.text}>Calendar with multi-dot marking</Text>
        <Calendar
          style={styles.calendar}
          current={'2018-12-16'}
          markingType={'multi-dot'}
          markedDates={{
            '2018-12-08': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'white'}, {key: 'massage', color: 'red', selectedDotColor: 'white'}], selected: true},
            '2018-12-09': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'red'}, {key: 'massage', color: 'red', selectedDotColor: 'blue'}], disabled: true}
          }}
          hideArrows={false}
        />
        <Text style={styles.text}>Calendar with multi-period marking</Text>
        <Calendar
          style={styles.calendar}
          current={'2018-12-16'}
          markingType={'multi-period'}
          markedDates={{
            '2018-12-16': {
              periods: [
                { startingDay: true, endingDay: false, color: '#5f9ea0' },
                { startingDay: true, endingDay: false, color: '#ffa500' },
              ]
            },
            '2018-12-17': {
              periods: [
                { startingDay: false, endingDay: true, color: '#5f9ea0' },
                { startingDay: false, endingDay: true, color: '#ffa500' },
                { startingDay: true, endingDay: false, color: '#f0e68c' },
              ]
            },
            '2018-12-18': {
              periods: [
                { startingDay: true, endingDay: true, color: '#ffa500' },
                { color: 'transparent' },
                { startingDay: false, endingDay: false, color: '#f0e68c' },
              ]
            },
          }}
          hideArrows={false}
        />
        <Text style={styles.text}>Calendar with week numbers</Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          showWeekNumbers
          markedDates={{[this.state.selected]: {selected: true}}}
        />
        <Text style={styles.text}>Custom calendar with custom marking type</Text>
        <Calendar
          style={styles.calendar}
          onDayLongPress={this.onDayLongPress}
          hideExtraDays
          current={'2018-03-01'}
          minDate={'2018-03-01'}
          markingType={'custom'}
          markedDates={{
            '2018-03-01': {
              customStyles: {
                container: {
                  backgroundColor: 'white',
                  elevation: 2
                },
                text: {
                  color: 'blue',
                },
              }
            },
            '2018-03-08': {selected: true},
            '2018-03-09': {
              customStyles: {
                container: {
                  backgroundColor: 'red',
                  elevation: 4,
                },
                text: {
                  color: 'white',
                },
              }
            },
            '2018-03-10': {disabled: true},
            '2018-03-14': {
              customStyles: {
                container: {
                  backgroundColor: 'green',
                },
                text: {
                  color: 'white',
                },
              },
            },
            '2018-03-15': {
              customStyles: {
                container: {
                  backgroundColor: 'black',
                  elevation: 2
                },
                text: {
                  color: 'yellow',
                },
              }
            },
            '2018-03-20': {
              customStyles: {
                container: {
                  backgroundColor: 'pink',
                  elevation: 4,
                },
                text: {
                  color: 'blue',
                },
              }
            },
            '2018-03-21': {disabled: true},
            '2018-03-28': {
              customStyles: {
                container: {
                  backgroundColor: 'green',
                },
                text: {
                  color: 'black',
                  fontWeight: 'bold'
                },
              },
            },
            '2018-03-29': {
              customStyles: {
                container: {
                  backgroundColor: 'white',
                  elevation: 2
                },
                text: {
                  color: 'blue',
                },
              }
            },
            '2018-03-30': {
              customStyles: {
                container: {
                  backgroundColor: 'violet',
                  elevation: 4,
                  borderColor: 'red',
                  borderWidth: 5,
                },
                text: {
                  marginTop: 3,
                  fontSize: 11,
                  color: 'yellow',
                },
              }
            },
            '2018-03-31': {
              customStyles: {
                container: {
                  backgroundColor: 'green',
                  borderRadius: 0,
                },
                text: {
                  color: 'white',
                },
              },
            }}}
          hideArrows={false}
        />
      </ScrollView>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
