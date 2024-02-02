import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

type RootStackParamList = {
    Home: undefined;
    Profile: { data: string } | undefined;
};

// Définir le type pour la prop `navigation`
type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<Props> = ({ navigation }) => {

    const handleClick = () => {
        navigation.navigate('Profile', { data: "J'adore les chiens" });
    };

    return (
        <View style={styles.container}>
            <Button
                title='Click me'
                onPress={handleClick}
            />
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

export default Home;