import { Text, View, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, senha);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Falha no login: ' + error.message)
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, senha);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Falha em se registrar: ' + error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
                <View style={{ display: 'flex', alignItems: 'center', marginBottom: 50 }}>
                    <Text style={{ fontSize: 40, fontWeight: "bold" }}>Olá</Text>
                    <Text>Bem vindo a GoDress</Text>
                </View>


                <View style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 30 }}>
                    <TextInput value={email} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)} style={styles.input} />
                    <TextInput secureTextEntry={true} value={senha} placeholder="Senha" autoCapitalize="none" onChangeText={(text) => setSenha(text)} style={styles.input} />
                </View>

                {loading ? <ActivityIndicator size="large" color="#0000ff" /> :
                    <View style={{display: 'flex', gap: 10}}>
                        <Button title="Login" onPress={signIn} color={'#000'}/>
                        <Button title="Registrar-se" onPress={signUp} color={'#000'}/>
                    </View>
                }
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 210,
        marginHorizontal: 43,
    },
    input: {
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },

});
