
// import React from 'react';
// import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
// import {MMKV} from 'react-native-mmkv';
// import { StackNavigationProp } from '@react-navigation/stack';
// import {enableScreens} from 'react-native-screens';
// enableScreens();

// type RootStackParamList = {
//     SignUp: undefined;
//     SignIn: undefined;
//     ViewAccounts: undefined;
// };

// // Définir le type pour la prop `navigation`
// type Props = {
//     navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
// };

// export const storage = new MMKV();
// const ViewAccounts : React.FC<Props> = ({ navigation }) => {
//   const accounts = JSON.parse(storage.getString('accounts') || '[]');

//   const handleSignOut = () => {
//     navigation.navigate('SignIn');
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={accounts}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//       />
//       <Button title="Se déconnecter" onPress={handleSignOut} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//   },
// });

// export default ViewAccounts;
