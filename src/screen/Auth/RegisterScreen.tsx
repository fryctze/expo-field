import {Button, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {
    const { navigate } = useNavigation();

    return (
        <View style={{flex: 1}}>
            <Text>Register desu</Text>
            <Button title={"Back to login"} onPress={() => {
                navigate('Login' as any);
            }}/>
        </View>
    );
}

export default RegisterScreen;