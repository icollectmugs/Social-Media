import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react';
import {Button} from './components/ButtonComponent';
import {Input} from './components/InputComponent';

const RegisterScreen = () => {
    const router = useRouter()
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        title="Username"
                        placeholder="Username"
                    />
                    <Input
                        title="Email"
                        placeholder="Email"
                    />
                    <Input
                        title="Password"
                        placeholder="Password"
                    />
                </View>
                <Button
                    text="Register"
                />
                <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Already have an account?
                        </Text>
                    <TouchableOpacity onPress={() => router.push('/')}>
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
)}
export default RegisterScreen

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1,
    },

    mainContainer: {
        flex: 1,
        backgroundColor: '#E6E6FA',
        alignItems: 'center',
    },

    inputContainer: {
        padding: 16,
        width: '100%',
    },

    textContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    text: {
        fontSize: 16,
    },

    loginText: {
        color: '#1A5B0A',
        fontSize: 16,
    }
})
