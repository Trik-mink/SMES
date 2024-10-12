import React, { Children, Component, ComponentType, useRef, useState } from 'react';
// system import
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, useColorScheme, TouchableOpacity, ImageBackground, Image, Animated, TextInput, Easing, SafeAreaView, StatusBar, FlatList, } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh, vmax, vmin } from './stylesheet';

// component import
import { marginBottomForScrollView } from './component';

// svg import
import { compareIcon, compareIconActive, homeIcon, homeIconActive, searchIcon, settingIcon, settingIconActive, sharpLeftArrow, sharpRightArrow, userIcon, userIconActive } from './svgXml';
import clrStyle from './componentStyleSheet';

// ____________________END OF IMPORT_______________________

// UNIVESAL CLASS SECTION


/**
 * Component that renders a view with a colored status bar.
 *
 * @component
 * @example
 * // Usage:
 * <SaveViewWithColorStatusBar
 *   StatusBarColor="#FF0000"
 *   StatusBarLightContent={true}
 *   SameColorBottom={true}
 *   StatusBarMargin={true}
 *   bgColor="#FFFFFF"
 *   StatusBarTranslucent={false}
 * >
 *   // Content goes here
 * </SaveViewWithColorStatusBar>
 *
 * @param {React.ReactNode} children - The content to be rendered inside the component.
 * @param {string} StatusBarColor - The color of the status bar.
 * @param {boolean} StatusBarLightContent - Determines if the status bar content should be light or dark.
 * @param {boolean} SameColorBottom - Determines if the bottom of the view should have the same color as the status bar.
 * @param {boolean} StatusBarMargin - Determines if a margin should be added to the top of the view to accommodate the status bar.
 * @param {string} bgColor - The background color of the view.
 * @param {boolean} StatusBarTranslucent - Determines if the status bar should be translucent.
 *
 * @returns {React.ReactNode} The rendered component.
 */
export class SaveViewWithColorStatusBar extends Component<{ children?: React.ReactNode, StatusBarColor?: string, StatusBarLightContent?: boolean, SameColorBottom?: boolean, StatusBarMargin?: boolean, bgColor?: string, StatusBarTranslucent?: boolean }> {
    render() {
        const { children, bgColor, SameColorBottom, StatusBarColor, StatusBarLightContent, StatusBarMargin, StatusBarTranslucent } = this.props;
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <SafeAreaView style={[styles.flex1, { backgroundColor: SameColorBottom ? StatusBarColor : bgColor }]}>
                {StatusBarColor ? <View style={[styles.w100vw, styles.h50vh, styles.positionAbsolute, { backgroundColor: StatusBarColor }]} /> : null}
                <View>
                    <StatusBar barStyle={StatusBarLightContent ? 'light-content' : 'dark-content'}
                        backgroundColor={StatusBarColor ? StatusBarColor : 'rgba(0,0,0,0)'}
                        translucent={StatusBarTranslucent ? true : false}
                    />
                    {StatusBarMargin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
                </View>
                <View style={[styles.flex1, { backgroundColor: bgColor ? bgColor : 'rgb(242,242,242)' }]}>
                    {children}
                </View>
            </SafeAreaView>
        )
    }
}

export class BottomBar extends Component<{ navFnc: any, currentScreen: string, bgColor?: string, shadow?: boolean }> {
    render() {
        const { navFnc, currentScreen, bgColor, shadow } = this.props;

        // change style
        interface CustomStyle {
            font?: React.ComponentType<{ children: React.ReactNode, style?: any }>,
            fontActive?: React.ComponentType<{ children: React.ReactNode, style?: any }>,
            showText?: boolean,
            textColor?: string,
            textActiveColor?: string,
        }

        interface BottomBarItem {
            title: string,
            icon: any,
            iconActive: any,
            screen: string,
        }

        // change resource
        const itemList: BottomBarItem[] = [
            { title: 'Home', icon: homeIcon(vw(6), vw(6)), iconActive: homeIconActive(vw(6), vw(6)), screen: 'Home' },
            { title: 'User', icon: userIcon(vw(6), vw(6)), iconActive: userIconActive(vw(6), vw(6)), screen: 'User' },
            { title: 'Compare', icon: compareIcon(vw(6), vw(6)), iconActive: compareIconActive(vw(6), vw(6)), screen: 'Compare' },
            { title: 'Settings', icon: settingIcon(vw(6), vw(6)), iconActive: settingIconActive(vw(6), vw(6)), screen: 'Settings' },
        ]

        const customStyle: CustomStyle = {
            font: Nunito12Reg,
            fontActive: Nunito12Bold,
            showText: true,
            textColor: clrStyle.grey2,
            textActiveColor: clrStyle.main5,
        }

        return (
            // custom style if u want to
            <View style={[styles.w100vw, styles.flexRowEvenlyCenter, styles.alignContentCenter,
            {
                height: 'auto',
                backgroundColor: bgColor ? bgColor : 'white',
                shadowColor: shadow ? 'black' : 'transparent',
                shadowOffset: { width: 0, height: -vw(2) },
                shadowOpacity: 0.1,
                shadowRadius: vw(1),
                elevation: 10,
            }]}>
                {itemList.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}
                            onPress={() => { navFnc().navigate(item.screen) }}
                            style={[styles.flexColCenter, styles.paddingV3vw, { width: (vw(80) / (itemList.length + 1)) }]}>
                            {currentScreen === item.screen ? item.iconActive : item.icon}
                            {customStyle.showText && customStyle.font ? currentScreen === item.screen && customStyle.fontActive ?
                                <customStyle.fontActive style={{ color: customStyle.textActiveColor }}>{item.title}</customStyle.fontActive> :
                                <customStyle.font style={{ color: customStyle.textColor }}>{item.title}</customStyle.font>
                                : null}
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

export class BannerSliderWithCenter extends Component<{
    data: any[],
    renderBanner: ({ item, index }: { item: any, index: number }) => React.ReactNode,
    currentIndex: number,
    setCurrentIndex: (value: number) => void,
    itemWidth?: number,
    snapToCenter?: boolean,
    customStyle?: any,
    customContainerStyle?: any,
}> {
    render() {
        const { data, renderBanner, currentIndex, setCurrentIndex, itemWidth, snapToCenter, customStyle, customContainerStyle } = this.props;
        const width = itemWidth ?? 1;
        return (
            <FlatList
                data={data}
                renderItem={renderBanner}
                snapToInterval={width}
                snapToAlignment={snapToCenter ? 'center' : 'start'}
                // time to snap to the center
                decelerationRate='fast'
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                // pagingEnabled={false}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width))
                }}
                style={customStyle}
                contentContainerStyle={[styles.flexRowStartCenter, customContainerStyle]}
            />
        )
    }
}

// END OF UNIVERSAL CLASS SECTION

// FONT SECTION
export class Nunito12Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito10Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(2.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito12Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito24Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito12Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito20Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito22Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(5.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito24Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14ExBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Nunito-ExtraBold', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika20Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Signika-Bold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika22Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Signika-Bold', fontSize: vw(5.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika24Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Signika-Bold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika28Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Signika-Bold', fontSize: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class SonsieOne100 extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'SonsieOne-Regular', fontSize: vw(25), color: '#85C5C9' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika20SemiBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Signika-SemiBold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika22SemiBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Signika-SemiBold', fontSize: vw(5.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika24SemiBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Signika-SemiBold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Roboto20Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Roboto-Medium', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Roboto16Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Roboto-Bold', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Roboto20Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Roboto-Bold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class SFproDisplay20Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'SF-Pro-Display-Medium', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Helvetica19Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Helvetica', fontSize: vw(4.75), fontWeight: 'bold' }, style]}>
                {children}
            </Text>
        );
    }
}

// FNC COMPONENT SECTION
export class LowBtn extends Component<{
    title: string,
    onPress: () => void,
    bgColor?: string,
    fontColor?: string,
    icon?: any,
    round?: number,
    CustomStyle?: any,
    FontElement?: ComponentType<{ children: React.ReactNode }>,
}> {
    render() {
        const { title, onPress, bgColor, fontColor, icon, round, CustomStyle, FontElement } = this.props;
        const Font = FontElement ? FontElement : Roboto16Bold;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.flexRowCenter, styles.gap3vw, styles.borderRadius100, styles.shadowW0H1Black, styles.w90, styles.alignSelfCenter, { backgroundColor: bgColor ? bgColor : clrStyle.main5, padding: vw(3.75), borderRadius: round ? round : vw(1000) }, CustomStyle ? CustomStyle : null]}>
                {icon ? icon : null}
                <Font style={{ color: fontColor ? fontColor : clrStyle.white, }}>{title}</Font>
            </TouchableOpacity>
        );
    }
}

export class BoardingInput extends Component<{
    title: string,
    supFncTitle?: string,
    supFncTitleColor?: string,
    supFnc?: () => void,
    subTitle?: string,
    placeholder?: string,
    value: string | number,
    isNumber?: boolean,
    onChgText: (value: string | number) => void,
    CustomStyleClass?: any,
    CustomStyleText?: any,
    CustomStyleInput?: any,
    contentType?: string
    hideContent?: boolean,
    hideContentFnc?: (value: boolean) => void,
    autoCap?: 'none' | 'characters' | 'words' | 'sentences',
    maxLength?: number,
}> {

    render() {
        const { title, placeholder, value, onChgText, CustomStyleClass, CustomStyleInput, CustomStyleText, contentType, subTitle, supFnc, supFncTitle, hideContent, hideContentFnc, autoCap, maxLength, supFncTitleColor } = this.props;
        const isNumber = this.props.isNumber ? this.props.isNumber : false;

        function changFnc(value: string | number) {
            if (isNumber) {
                onChgText(parseInt(value as string));
            } else {
                onChgText(value);
            }
        }

        return (
            <View style={[styles.flexColCenter, styles.gap4vw, styles.positionRelative, CustomStyleClass]}>
                {title ?
                    <Nunito24Bold style={[{ color: clrStyle.main5 }, CustomStyleText]}>{title}</Nunito24Bold>
                    : null}
                <TextInput
                    placeholder={placeholder ? placeholder : 'Type here'}
                    value={value ? value.toString() : ''}
                    onChangeText={changFnc}
                    placeholderTextColor={clrStyle.grey2}
                    secureTextEntry={hideContent ? hideContent : false}
                    keyboardType={isNumber ? 'numeric' : 'default'}
                    autoCapitalize={autoCap ? autoCap : 'sentences'}
                    textContentType={contentType}
                    maxLength={maxLength ? maxLength : undefined}
                    style={[styles.w100, styles.border1, styles.textCenter, { borderColor: value ? clrStyle.main5 : clrStyle.grey2, padding: vw(2.5), fontFamily: value ? 'Nunito-Bold' : 'Nunito-Regular', fontSize: vw(4.5), borderRadius: vw(2), color: value ? clrStyle.main5 : clrStyle.grey2 }, CustomStyleInput]} />
                {hideContentFnc ?
                    <TouchableOpacity
                        onPress={() => { hideContentFnc && hideContentFnc(!hideContent) }}
                        style={[styles.padding2vw, styles.positionAbsolute, { bottom: -vw(12) }]}>
                        <Nunito14Reg style={{ color: clrStyle.grey3 }}>{hideContent ? `Show ${contentType}` : `Hide ${contentType}`}</Nunito14Reg>
                    </TouchableOpacity>
                    : null}
                {subTitle ?
                    <View style={[styles.flexRowCenter]}>
                        <Nunito16Reg style={[{ color: clrStyle.grey2 }]}>{subTitle}</Nunito16Reg>
                        <TouchableOpacity onPress={supFnc}><Nunito16Reg style={[styles.textUnderline, { color: supFncTitleColor ? supFncTitleColor : clrStyle.grey3 }]}>{supFncTitle}</Nunito16Reg></TouchableOpacity>
                    </View>
                    : null
                }
            </View>
        );
    }
}

export class ProcessBarSelfMade extends Component<{
    barLength: number,
    currentStep: number,
    setCurrentStep: (value: number) => void,
    totalStep: number,
    barHeight?: number,
    bgBarColor?: string,
    bgProcessColor?: string,
    customBarStyle?: any,
    customProcessStyle?: any,
    round?: number,
    onStartedProcess?: boolean,
}> {
    render() {
        const { barLength, currentStep, setCurrentStep, totalStep, bgBarColor, bgProcessColor, customBarStyle, customProcessStyle, barHeight, onStartedProcess, round } = this.props;
        const process = (currentStep + (onStartedProcess ? 1 : 0)) / totalStep - (onStartedProcess ? 0 : 1);
        const animation = new Animated.Value(process);
        const inputRange = Array.from({ length: totalStep - (onStartedProcess ? 0 : 1) }, (_, i) => i / (totalStep - 1));
        const outputRange = Array.from({ length: totalStep - (onStartedProcess ? 0 : 1) }, (_, i) => i * barLength / (totalStep - 1));

        const processAnimationRange = animation.interpolate({
            inputRange: inputRange,
            outputRange: outputRange,
        });

        function extendAnimate() {
            Animated.timing(animation, {
                toValue: process,
                duration: 1000,
                useNativeDriver: false,
                easing: Easing.inOut(Easing.ease),
            }).start()
        }
        extendAnimate()

        return (
            <View style={[styles.overflowHidden, { width: barLength, backgroundColor: bgBarColor ? bgBarColor : 'gray', borderRadius: round }, customBarStyle]}>
                <Animated.View style={[styles.w100, { width: processAnimationRange, height: barHeight ? barHeight : vw(3), backgroundColor: bgProcessColor ? bgProcessColor : 'black', borderRadius: round, }, customProcessStyle]} ></Animated.View>
            </View>
        )
    }
}

export class BoardingNavigation extends Component<{
    fnc: (value: boolean) => void,
    leftTitle: string,
    rightTitle: string,
    showGoBack: boolean,
    currentStep: number,
    dataLength: number,
}> {
    render() {
        const { fnc, leftTitle, rightTitle, showGoBack, currentStep, dataLength } = this.props;

        return (
            <View style={[styles.flexRowBetweenCenter, styles.marginTop2vw, styles.marginBottom8vw]}>
                <TouchableOpacity
                    onPress={() => { fnc(false) }}>
                    <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep > 0 ? clrStyle.main6 : clrStyle.grey1 }]}>
                        {showGoBack ?
                            <Nunito16Reg style={[styles.textUpperCase, styles.paddingH2vw, { color: clrStyle.grey3 }]}>{leftTitle}</Nunito16Reg>
                            :
                            sharpLeftArrow(vw(6), vw(6), currentStep > 0 ? clrStyle.main5 : clrStyle.grey2)}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { fnc(true) }}>
                    <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep < dataLength - 1 ? clrStyle.main6 : clrStyle.main5 }]}>
                        {currentStep < dataLength - 1 ?
                            sharpRightArrow(vw(6), vw(6), currentStep < dataLength - 1 ? clrStyle.main5 : clrStyle.grey2)
                            :
                            <Nunito16Bold style={[styles.textUpperCase, styles.paddingH2vw, { color: clrStyle.white }]}>{rightTitle}</Nunito16Bold>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export class BoardingPicking extends Component<{
    data: string[],
    selected: string[],
    setSelected: (value: string[]) => void,
    maxLength?: number | undefined,
    deleteFromOriginal?: string[],
    deleteFromOtherSelected1?: string,
    deleteFromOriginalFnc?: (value: string[]) => void,
    deleteFromOtherSelectedFnc1?: (value: string) => void,
    originalData?: string[],
}> {
    render() {
        const { data, selected, setSelected, maxLength, originalData, deleteFromOriginal, deleteFromOriginalFnc, deleteFromOtherSelected1, deleteFromOtherSelectedFnc1 } = this.props;
        const length = maxLength ? maxLength : data.length;
        return (
            <View style={[styles.flexRowStartCenter, styles.flexWrap, styles.gap4vw]}>
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                if (selected.includes(item)) {
                                    setSelected(selected.filter((value) => value !== item))
                                    if (deleteFromOriginal && deleteFromOriginalFnc && !originalData?.includes(item)) {
                                        deleteFromOriginalFnc(deleteFromOriginal.filter((value) => value !== item))
                                    }
                                    if (deleteFromOtherSelected1 && deleteFromOtherSelectedFnc1) {
                                        if (deleteFromOtherSelected1.includes(`${item},`)) {
                                            deleteFromOtherSelectedFnc1(deleteFromOtherSelected1.replace(`${item},`, ''))
                                        } else {
                                            deleteFromOtherSelectedFnc1(deleteFromOtherSelected1.replace(item, ''))
                                        }
                                    }
                                } else {
                                    if (selected.length < length!) {
                                        setSelected([...selected, item])
                                    }
                                };
                            }}
                            style={[styles.wfit, styles.paddingV2vw, styles.paddingH4vw, styles.border1, { borderColor: selected.includes(item) ? clrStyle.main5 : clrStyle.grey2, borderRadius: vw(2), }]}>
                            {selected.includes(item) ?
                                <Nunito14ExBold style={[{ color: clrStyle.main5 }]}>{item}</Nunito14ExBold>
                                :
                                <Nunito14Reg style={[{ color: clrStyle.grey3 }]}>{item}</Nunito14Reg>
                            }
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

export class TopNav extends Component<{
    children?: React.ReactNode,
    title?: string,
    returnPreScreen?: boolean,
    returnPreScreenFnc?: () => void,
    rightIcon?: any,
    rightFnc?: () => void,
    hideChildren?: any,
}> {
    render() {
        const { children, title, returnPreScreen, returnPreScreenFnc, rightIcon, rightFnc, hideChildren } = this.props;
        return (
            <>
                <Animated.View style={[styles.paddingH4vw, styles.paddingBottom4vw, styles.paddingTop2vw, styles.overflowHidden, { zIndex: 1, backgroundColor: clrStyle.main5, borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }]}>
                    <View style={[styles.paddingTop2vw, styles.w100, styles.flexRowBetweenCenter]}>
                        {returnPreScreen ?
                            <TouchableOpacity
                                style={[styles.padding2vw]}
                                onPress={returnPreScreenFnc}>
                                {sharpLeftArrow(vw(6), vw(6), 'white')}
                            </TouchableOpacity>
                            : <View style={[{ width: vw(10), height: vw(10), }]} />
                        }
                        {title ? <Nunito20Bold style={[styles.textCenter, styles.alignSelfCenter, { color: 'white' }]}>{title}</Nunito20Bold> : null}
                        {rightIcon ?
                            <TouchableOpacity
                                style={[styles.padding2vw]}
                                onPress={rightFnc}>
                                {rightIcon}
                            </TouchableOpacity>
                            : <View style={[{ width: vw(10), height: vw(10), }]} />
                        }
                    </View>
                    <Animated.View style={{ height: hideChildren, opacity: hideChildren }}>
                        {children}
                    </Animated.View>
                </Animated.View >
            </>
        )
    }
}
