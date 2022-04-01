import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imgIcon: {
    width: 36,
    height: 36,
    margin: 15,
    padding: 10,
  },

  textBtn: {
    color: 'gray',
    fontSize: 16,
    alignSelf: 'center',
    margin: 4,
    textAlign: 'center'
  },

  // Set speed
  viewWrapSetSpeed: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewBtnSetSpeed: {
    margin: 5,
    padding: 10,
    borderRadius: 20
  },

})
