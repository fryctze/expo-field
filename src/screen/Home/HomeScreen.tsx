import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const { navigate, replace, push } = useNavigation();

    const handleSignOut = () => {
            //navigate('Login');
        replace('Login' as any);
    }

    const handleDetail = () => {
        navigate('Detail' as any);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>Email</Text>
            <Button
                title={"Back to login page"}
                onPress={ () => {navigate('Login' as any)} }
            />
            <Button
                title={"Log out"}
                onPress={ handleSignOut }
            />
            <Button
                title={"Detail"}
                onPress={ handleDetail }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default HomeScreen;