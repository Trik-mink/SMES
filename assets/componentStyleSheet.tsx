import { Platform, StyleSheet, View } from 'react-native';
import { vw, vh, vmax, vmin } from './stylesheet';
import { Component, ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const clrStyle = StyleSheet.create<any>({
    white: '#FCFCFC',
    grey1: '#CCCED5',
    grey2: '#808797',
    grey3: '#4C4C4C',
    black: '#272727',
    main1: '#2490DA',
    main2: '#BAE1FC',
    main3: '#36B77A',
    main4: '#CDF9E4',
    main5: '#3E3792',
    main6: '#DACCFF',
    main7: '#CD3B3B',
    main8: '#FCD7D7',
    main9: '#E2AE4A',
    fillBlur: 'rgba(135,135,135,0.3)',
});

export default clrStyle;
const borderWidth = vw(1)
export const componentStyle = StyleSheet.create<any>({
    outerGlowL1T1White: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: '#ccc',
        elevation: 1,
        // padding: vw(2),
        // Add platform-specific styles for Android
        ...Platform.select({
            android: {
                elevation: 10,
                shadowOffset: { width: 1, height: -1 },
                shadowOpacity: 1,
                shadowRadius: 10,

            },
        }),
    },
    upperShadow: {
        shadowOffset: { width: 0, height: -vw(2) },
        shadowOpacity: 0.05,
        shadowRadius: vw(1),
        elevation: 10,
    },

    filterShadow: {
        shadowOffset: { width: 0, height: -vw(1.5) },
        shadowOpacity: 0.3,
        shadowRadius: vw(1),
        elevation: 10,
    },

    activeMark: {
        borderColor: 'red',
        borderWidth,
        left: -borderWidth / 2,
    },
    inactiveMark: {
        borderColor: 'grey',
        borderWidth,
        left: -borderWidth / 2,
    },
});

export class Gradient1 extends Component<{ children: ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#85C5C9', '#38828F', '#285866']}
                locations={[0, 0.6, 1]}
                style={[style]}
            >
                {children}
            </LinearGradient>
        );
    }
}
