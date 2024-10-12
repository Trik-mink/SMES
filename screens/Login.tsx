
import { View, Text, TouchableOpacity, Image, ImageStyle, StatusBar, SafeAreaView, TextInput, Animated, Alert } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles, { vw } from '../assets/stylesheet'
import { BoardingInput, BoardingNavigation, LowBtn, Nunito18Bold, Nunito24Bold, Nunito24Reg, ProcessBarSelfMade } from '../assets/Class'
import { statusBarTransparency } from '../assets/component'
import clrStyle from '../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import { shareIcon, sharpLeftArrow, sharpRightArrow } from '../assets/svgXml'

export default function Login() {
    const navigation = useNavigation();

    const [currentStep, setCurrentStep] = React.useState(0)
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [showGoBack, setShowGoBack] = React.useState(false)

    // tf this state is for the hidden password
    const [hidePassword, setHidePassword] = React.useState(true)

    const list = [email, password,]

    function currentStepAdjust(act: boolean) {
        if (act && list[currentStep] === '') {
            Alert.alert('Please fill in all fields');
            return;
        }

        if (act && currentStep < list.length - 1) {
            setShowGoBack(false);
            setCurrentStep(currentStep + 1);
        } else if (!act && currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else if (act && currentStep === list.length - 1) {
            // TODO: do trim() for email and password
            // TODO: firebase auth
            // TODO: after auth, navigate to Onboard
            // TODO: check if have other data to collect
            navigation.navigate('Onboard');
        } else if (!act && currentStep === 0) {
            setShowGoBack(true);
            if (!act && showGoBack) {
                navigation.goBack();
            }
        }
    }

    // TODO: firebase auth

    function inputBox() {
        switch (currentStep) {
            case 0:
                return (
                    <BoardingInput
                        title='Email'
                        value={email}
                        contentType='emailAddress'
                        onChgText={setEmail as React.Dispatch<React.SetStateAction<string | number>>}
                    />)
                break;
            case 1:
                return (
                    <BoardingInput
                        title='Password'
                        value={password}
                        contentType='password'
                        onChgText={setPassword as React.Dispatch<React.SetStateAction<string | number>>}
                        hideContent={hidePassword}
                        hideContentFnc={setHidePassword as React.Dispatch<React.SetStateAction<boolean>>}
                    />)
                break;
        }
    }

    return (
        <SafeAreaView style={[styles.flex1]}>
            {statusBarTransparency(false, true)}
            <View style={[styles.flexCol, styles.flex1, styles.justifyContentSpaceBetween, styles.paddingH5vw]}>
                <Nunito24Reg style={[styles.w60vw, { color: clrStyle.main5 }]}>Let's sign you in</Nunito24Reg>

                {/* input box */}
                {inputBox()}

                <View style={[styles.flexCol, styles.gap2vw]}>
                    <ProcessBarSelfMade
                        barLength={vw(90)}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        totalStep={list.length}
                        round={vw(100)}
                        barHeight={vw(2)}
                        onStartedProcess={true}
                        bgBarColor={clrStyle.grey1}
                        bgProcessColor={clrStyle.main5} />

                    <BoardingNavigation
                        fnc={currentStepAdjust}
                        currentStep={currentStep}
                        dataLength={list.length}
                        showGoBack={showGoBack}
                        leftTitle='Go back?'
                        rightTitle='Login?'
                    />
                </View>
            </View>
        </SafeAreaView >
    )
}