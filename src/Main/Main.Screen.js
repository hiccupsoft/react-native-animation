import React, { Component } from 'react';
import { Alert, BackHandler, Text, TouchableOpacity, View, Animated } from 'react-native';
import styles from './Main.Style';
import images from './Images';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImg: 1,
      anims: [
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1),
      ]
    };


    this.imgClicked = (value) => {
      Animated.sequence([
        Animated.spring(this.state.anims[value], {
          toValue: 1.5,
          duration: 750,
          useNativeDriver: true
        }),
        Animated.spring(this.state.anims[value], {
          toValue: 1,
          duration: 750,
          useNativeDriver: true
        })
      ]).start()
    }

    BackHandler.addEventListener('hardwareBackPress', function () {
      Alert.alert(
        'Exit app',
        'Are you sure to exit?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        {
          cancelable: false,
        },
      );
      return true;
    });
  }

  render() {

    return (
      <View style={styles.viewContainer} >
        <View style={styles.viewContainer}>
          {/*Set currentSpeed*/}
          <View style={styles.viewWrapSetSpeed}>
            <TouchableOpacity
              onPress={() => this.imgClicked(0)}
            >
              <Animated.Image
                source={images.like_static_fill}
                style={[
                  styles.imgIcon,
                  {
                    transform: [
                      {
                        scale: this.state.anims[0],
                      },
                    ],
                  },
                ]}
              />
              <Text style={styles.textBtn}>Like</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.imgClicked(1)}
            >
              <Animated.Image
                source={images.love_static}
                style={[
                  styles.imgIcon,
                  {
                    transform: [
                      {
                        scale: this.state.anims[1],
                      },
                    ],
                  },
                ]}
              />
              <Text style={styles.textBtn}>Love</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.imgClicked(2)}
            >
              <Animated.Image
                source={images.haha_static}
                style={[
                  styles.imgIcon,
                  {
                    transform: [
                      {
                        scale: this.state.anims[2],
                      },
                    ],
                  },
                ]}
              />
              <Text style={styles.textBtn}>Haha</Text>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => this.imgClicked(3)}
            >
              <Animated.Image
                source={images.wow_static}
                style={[
                  styles.imgIcon,
                  {
                    transform: [
                      {
                        scale: this.state.anims[3],
                      },
                    ],
                  },
                ]}
              />
              <Text style={styles.textBtn}>Wow</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.imgClicked(4)}
            >
              <Animated.Image
                source={images.sad_static}
                style={[
                  styles.imgIcon,
                  {
                    transform: [
                      {
                        scale: this.state.anims[4],
                      },
                    ],
                  },
                ]}
              />
              <Text style={styles.textBtn}>Sad</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.imgClicked(5)}
            >
              <Animated.Image
                source={images.angry_static}
                style={[
                  styles.imgIcon,
                  {
                    transform: [
                      {
                        scale: this.state.anims[5],
                      },
                    ],
                  },
                ]}
              />
              <Text style={styles.textBtn}>Angry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
