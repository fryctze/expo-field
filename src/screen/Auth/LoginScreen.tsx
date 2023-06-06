import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { auth, app } from "../../../firebase";

export default function LoginScreen() {
    const { navigate, replace } = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                replace("Home");
            }
        });
    });

    const handleSignups = () => {
        navigate('Register' as any);
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                setEmail('');
                setPassword('');
                console.log(user.email);
                //setMe(user.email);
            })
            .catch(error => alert(error.message));

        setEmail('');
        setPassword('');
        //replace('Home' as any);
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
