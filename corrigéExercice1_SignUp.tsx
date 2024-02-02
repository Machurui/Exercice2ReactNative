
// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { MMKV } from 'react-native-mmkv';
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

// const storage = new MMKV();

// const SignUp : React.FC<Props> = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     if (!email || !password) {
//       Alert.alert("Erreur", "Veuillez remplir tous les champs.");
//       return;
//     }

//     // Enregistrement des données de l'utilisateur
//     storage.set(email, password);

//     // Enregistrement du compte email dans une liste de compte pour affichage ultérieur
//     const currentAccounts = JSON.parse(storage.getString('accounts') || '[]');
//     currentAccounts.push(email);
//     storage.set('accounts', JSON.stringify(currentAccounts));
    
//     // Navigation vers l'écran de connexion
//     navigation.navigate('SignIn');
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
//       <Button title="S'inscrire" onPress={handleSignUp} />
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

// export default SignUp;
