import { View, Text, TouchableOpacity, Image, ImageStyle, StatusBar, SafeAreaView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import styles, { vw } from '../assets/stylesheet'
import { Helvetica19Bold, LowBtn, Nunito16Reg, Nunito18Reg, Nunito20Bold, Roboto20Med, SFproDisplay20Med } from '../assets/Class'
import { statusBarTransparency } from '../assets/component'
import clrStyle from '../assets/componentStyleSheet'
import { appleLogo, fbLogo, googleLogo } from '../assets/svgXml'
import { useNavigation } from '@react-navigation/native'
import storage, { getUserInfo } from '../data/storageFunc'

export default function LoginOpt() {
    const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserInfo().then((res) => {
                if (res?.synced && res?.dataCollect) {
                    navigation.navigate('BottomTab');
                } else if (res?.synced && !res?.dataCollect) {
                    navigation.navigate('DataCollect');
                }
            })
        });
        return unsubscribe;
    }, [])

    // TODO: Login Functionality

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: clrStyle.white }]}>
            {statusBarTransparency(false, true)}
            <View style={[styles.flex1, styles.w100vw, styles.flexColEndCenter, styles.gap1vw]}>
                <Image source={require('../assets/photos/onboard.png')} style={[styles.w80vw, styles.h40vh, { resizeMode: 'contain' }] as ImageStyle} />
                <LowBtn title='Sign In'
                    onPress={() => { navigation.navigate('Login') }}
                    CustomStyle={[styles.marginBottom4vw]}
                    FontElement={Nunito20Bold}
                />
                <View style={[styles.flexRowStartBaseline]}>
                    <Nunito16Reg style={[{ color: clrStyle.grey2 }]}>Don't have an account? </Nunito16Reg>
                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                        <Nunito16Reg style={[{ color: clrStyle.grey3, textDecorationLine: 'underline' }]}>Sign Up</Nunito16Reg>
                    </TouchableOpacity>
                </View>
                <View style={[styles.positionRelative, styles.h15vw, styles.flexColCenter]}>
                    <View style={[styles.w90vw, { borderBottomColor: clrStyle.grey1, borderBottomWidth: 1 }]} />
                    <View style={[styles.flexColCenter, styles.paddingH2vw, styles.hAuto, styles.positionAbsolute, { backgroundColor: clrStyle.white }]}>
                        <Nunito18Reg style={[{ color: clrStyle.grey2 }]}>or</Nunito18Reg>
                    </View>
                </View>
                <LowBtn title='Continue with Google'
                    onPress={() => {
                        // TODO: Google Sign In
                    }}
                    fontColor='rgba(0, 0, 0, 0.54)'
                    bgColor={clrStyle.white}
                    FontElement={Roboto20Med}
                    CustomStyle={[styles.marginBottom4vw]}
                    icon={googleLogo(vw(6), vw(6))}
                />
                {
                    Platform.OS === 'ios' ?
                        <LowBtn title='Continue with Apple'
                            onPress={() => {
                                // TODO: Apple Sign In
                            }}
                            bgColor='#000000'
                            FontElement={SFproDisplay20Med}
                            CustomStyle={[styles.marginBottom8vw]}
                            icon={appleLogo(vw(6), vw(6))}
                        /> :
                        <LowBtn title='Continue with Facebook'
                            onPress={() => {
                                // TODO: Facebook Sign In
                            }}
                            bgColor='rgba(24, 119, 242, 1)'
                            FontElement={Helvetica19Bold}
                            CustomStyle={[styles.marginBottom8vw]}
                            icon={fbLogo(vw(6), vw(6))}
                        />
                }
            </View>

        </SafeAreaView>
    )
}