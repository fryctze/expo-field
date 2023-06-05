import {Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from "react-native";
import { useState} from "react";
import { useNavigation} from "@react-navigation/native";

export default function LoginScreen() {
    const { navigate, replace } = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignups = () => {
        setEmail('');
        setPassword('');
        navigate('Register' as any);
    }

    const handleSignIn = () => {
        setEmail('');
        setPassword('');
        replace('Home' as any);
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}/>
                <TextInput secureTextEntry
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={'Login'} onPress={ handleSignIn }/>
                <Button title={'Register'} onPress={ handleSignups }/>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        marginTop: 48,
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingHorizontal: 16,
        paddingVertical: 8,
    }
});
