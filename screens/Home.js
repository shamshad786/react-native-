import { View, Text, TouchableHighlight} from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';

const Home = () => {
  return (
    <>
    <View>
      <Text>Razorpay installed </Text>
      <Text>google map installed</Text>
    </View>

    <View>
    <TouchableHighlight onPress={() => {
    var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.jpg',
    currency: 'INR',
    key: '<YOUR_KEY_ID>',
    amount: '5000',
    name: 'Acme Corp',
    order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
    prefill: {
      email: 'gaurav.kumar@example.com',
      contact: '9191919191',
      name: 'Gaurav Kumar'
    },
    theme: {color: '#53a20e'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}}>
    </View>
    </>
  )
}
// add your google map api key in menifest file
{/* <meta-data
android:name="com.google.android.geo.API_KEY"
android:value=""/> */}

//Google map documentation
{/* https://docs.expo.dev/versions/latest/sdk/map-view/ */}

//add this in your backend node.js 
{/* 
var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

instance.orders.create({
  amount: 50000,
  currency: "INR",
  receipt: "receipt#1",
  notes: {
    key1: "value3",
    key2: "value2"
  }
})
*/}

export default Home


