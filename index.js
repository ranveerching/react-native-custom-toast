import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

class Toast extends Component
{
   constructor()
   {
      super();

      this.animateTranslate = new Animated.Value(-10);

      this.animateOpacity = new Animated.Value(0);

      this.state = { renderToast: false }

      this.isShownToast = false;

      this.message = '';
   }

   componentWillUnmount()
   {
      this.timerID && clearTimeout(this.timerID);
   }

   showToast( message = "Custom Toast...", duration = 3000)
   {
      if(this.isShownToast === false)
      {
         this.message = message;

         this.isShownToast = true;

         this.setState({ renderToast: true }, () =>
         {
            Animated.parallel(
            [
               Animated.timing
               (
                  this.animateTranslate,
                  { 
                    toValue: 0,
                    duration: 350
                  }
               ),

               Animated.timing
               (
                  this.animateOpacity,
                  { 
                    toValue: 1,
                    duration: 350
                  }
               )
            ]).start(this.hideToast(duration))
         });
      }
   }

   hideToast = (duration) =>
   {
      this.timerID = setTimeout(() =>
      {
         Animated.parallel(
         [
            Animated.timing
            (
               this.animateTranslate,
               { 
                 toValue: 10,
                 duration: 350
               }
            ),

            Animated.timing
            (
               this.animateOpacity,
               { 
                 toValue: 0,
                 duration: 350
               }
            )
         ]).start(() =>
            {
               this.setState({ renderToast: false });
               this.animateTranslate.setValue(-10);
               this.isShownToast = false;
               clearTimeout(this.timerID);
            })
      }, duration);      
   }

   render()
   {
      if(this.state.renderToast)
      {
         return(
            <Animated.View style = {[ styles.animatedToastView, { transform: [{ translateX: this.animateTranslate }], opacity: this.animateOpacity, top: (this.props.position == 'top') ? '10%' : '80%', backgroundColor: this.props.backgroundColor }]}>
               <Text numberOfLines = { 1 } style = {[ styles.toastText, { color: this.props.textColor }]}>{ this.message }</Text>
            </Animated.View>
         );
      }
      else
      {
         return null;
      }
   }
}

Toast.propTypes = {
   backgroundColor: PropTypes.string,
   position: PropTypes.oneOf([
      'top',
      'bottom'
   ]),
   textColor: PropTypes.string
};

Toast.defaultProps =
{
   backgroundColor: '#666666',
   textColor: 'white'
}

const styles = StyleSheet.create(
{
   animatedToastView:
   {
      marginHorizontal: 30,
      paddingHorizontal: 25,
      paddingVertical: 10,
      borderRadius: 5,
      zIndex: 9999,
      position: 'absolute',
      justifyContent: 'center'
   },

   toastText:
   {
      fontSize: 15,
      alignSelf: 'stretch',
      textAlign: 'center'
   }
});

module.exports = Toast;