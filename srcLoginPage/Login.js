import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Input, Button } from './components/index.js'

const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#b2dfdb' }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'android' ? null : 'padding'}>
                <ScrollView style={{ flex: 1 }} bounces={false}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={require('./assets/cart.png')}
                            style={styles.logoStyle}
                        />
                        <Input holder={'Enter your e-mail...'} />
                        <Input holder={'Enter your password...'} />
                        
                        <Button title={'Log In'} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

export default Login;

const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        tintColor: 'teal',
        height: Dimensions.get('window').height * 0.4
    }
});

/****************************************************
  Ekranda buton ve textbox'lari olusturduktan sonra kullanici girmesi gerekenleri girdikten sonra butona basabilmesi icin ekranin kaymasi gerekir cunku klasyve acildiginda buton asagida kaldi. Bu nedenle bu durumun da duzeltilmesi gerekir. Scroll bu cozumlerden bir tanesidir.
****************************************************/

