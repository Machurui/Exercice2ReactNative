
// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { MMKV } from 'react-native-mmkv';
// import { StackNavigationProp } from '@react-navigation/stack';
// import {enableScreens} from 'react-native-screens';
// enableScreens();


// type RootStackParamList = {
//     SignIn: undefined;
//     SignUp: undefined;
//     ViewAccounts: undefined;
// };

// type Props = {
//     navigation: StackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// const storage = new MMKV();

// const SignIn: React.FC<Props> = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = ({ navigation }) => {
//     // Vérification des données de l'utilisateur
//     const storedPassword = storage.getString(email);
//     if (password === storedPassword) {
//       // Si le mot de passe correspond, naviguez vers l'écran de visualisation
//       navigation.navigate('ViewAccounts');
//     } else {
//       // Si le mot de passe est incorrect, affichez une alerte
//       Alert.alert("Erreur", "Email ou mot de passe incorrect.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mot de passe"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Se connecter" onPress={handleSignIn} />
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
//   input: {
//     width: '100%',
//     marginVertical: 10,
//     padding: 15,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//   },
// });

// export default SignIn;
