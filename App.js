import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends Component {
  playSound1 = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com//mp3/cartoon-birds-2_daniel-simion.mp3',
      },
      {
        shouldPlay: true,
      }
    );
  };
  playSound2 = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com//mp3/Little_Demon_Girl_Song-KillahChipmunk-2101926733.mp3',
      },
      {
        shouldPlay: true,
      }
    );
  };
  playSound3 = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com//mp3/large_waterfall_1-daniel_simon.mp3',
      },
      {
        shouldPlay: true,
      }
    );
  };
  playSound4 = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com//mp3/Gewitter__Thunderstorm-Tim-1509815136.mp3',
      },
      {
        shouldPlay: true,
      }
    );
  };
  playSound5 = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com//mp3/alien-spaceship_daniel_simion.mp3',
      },
      {
        shouldPlay: true,
      }
    );
  };

  render() {
    return (
      <View
        style={{
          marginTop: 0,
          backgroundColor: 'yellow',
        }}>
        <Text
          style={{
            marginTop: 30,
            textAlign: 'center',
            fontFamily: 'roman',
            fontSize: 24,
            fontStyle: 'oblique',
          }}>
          Choose Your Favourite Song ........ .... ......
        </Text>

        <View
          style={{
            marginTop: 50,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              borderRadius: 100,
              width: 200,
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={this.playSound1}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontStyle: 'italic',
              }}>
              Song - 1
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              borderRadius: 50,
              width: 200,
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={this.playSound2}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontStyle: 'italic',
              }}>
              Song - 2
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'purple',
              borderRadius: 50,
              width: 200,
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontStyle: 'italic',
            }}
            onPress={this.playSound3}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontStyle: 'italic',
              }}>
              Song - 3
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 50,
              width: 200,
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={this.playSound4}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontStyle: 'italic',
              }}>
              Song - 4
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'cyan',
              borderRadius: 50,
              width: 200,
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={this.playSound5}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontStyle: 'italic',
              }}>
              Song - 5
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 50,
            marginBottom: 50,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'lime',
              borderRadius: 50,
              width: 200,
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              Audio.setIsEnabledAsync(false);
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontStyle: 'oblique',
              }}>
              STOP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return <SoundButton />;
  }
}
