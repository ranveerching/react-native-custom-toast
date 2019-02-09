# react-native-custom-toast
React native custom animated toast for both Android and iOS platforms.

## Installation

```
npm install react-native-custom-toast --save
```

## Properties

```
backgroundColor: '#666666' // Background Color of Toast default is '#666666'
position: 'bottom' // Specifies the position of Toast. Only 'top', 'bottom' are allowed.
textColor: 'white' // Color of message inside Toast.
orientation: 'xAxis' // Specifies the orientation in which toast would be animated. Possible values 'xAxis' or 'yAxis'. Default is 'xAxis'.
```

## ScreenShots

![alt text](https://4.bp.blogspot.com/-4WIQ5P4ztOY/WdnqTRbpxHI/AAAAAAAAAQo/KmnmUiXPwyoMjFCALW0n06VhgNHARqnVwCLcBGAs/s640/custom-toast.gif)

## Usages Example

1. First create a new React native project:

```
react-native init CustomToast
cd CustomToast
npm install react-native-custom-toast --save
```

2. Paste the following code into your ```app.js``` file:

```
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Toast from 'react-native-custom-toast';

class App extends Component
{
  constructor()
  {
    super();
  }

  showDefaultToast()
  {
    this.refs.defaultToast.showToast('Default Toast...');
  }

  showCustomToast()
  {
    this.refs.customToast.showToast('Custom Toast...', 5000);
  }

  render()
  {
    return(
      <View style = { styles.container }>
        <TouchableOpacity onPress = { this.showDefaultToast.bind(this) } activeOpacity = { 0.8 } style = { styles.showToastBtn }>
          <Text style = { styles.btnText }>Show Default Toast</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = { this.showCustomToast.bind(this) } activeOpacity = { 0.8 } style = { styles.showToastBtn }>
          <Text style = { styles.btnText }>Show Custom Toast</Text>
        </TouchableOpacity>

        <Toast ref = "defaultToast" />
        <Toast ref = "customToast" backgroundColor = "#28a745" position = "top"/>
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  showToastBtn:
  {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignSelf: 'stretch',
    marginHorizontal: 25,
    marginVertical: 10
  },

  btnText:
  {
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }
});

module.exports = App;
```
