import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

enableScreens();

type RootStackParamList = {
    Home: undefined;
    Profile: { data: string } | undefined;
};

type ProfileRouteParams = {
    data?: string; // Définition du type pour les paramètres de la route Profile
};

// Définir le type pour la prop `navigation`
type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
};

const Profile: React.FC<Props> = ({ navigation }) => {
    const route = useRoute<RouteProp<RootStackParamList, 'Profile'>>();

    // Récupération des données passées en paramètre
    const data = route.params?.data;

    return (
        <View style={styles.container}>
            <Text style={{ margin: 10 }}>Data: {data}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
});

export default Profile;