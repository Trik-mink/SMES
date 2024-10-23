// system import
import React, { Component, ComponentType, useState } from 'react';
import { ImageBackground, Platform, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View, Image, ImageStyle, StatusBarStyle, ReturnKeyType, KeyboardType, FlatList, TextInputProps, Animated, Easing, ViewStyle, FlexStyle, TextInputIOSProps } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh } from './stylesheet';
import { clrStyle, NGHIASTYLE } from './componentStyleSheet';

// component import
import { marginBottomForScrollView } from '@/assets/component';

import { CurrentCache } from '../data/store';
import * as SVG from './svgXml';
import * as FormatData from '../data/interfaceFormat';
import * as CTEXT from './CustomText';

// other import


// ____________________END OF IMPORT_______________________

// ____________________START OF UNIVERSAL CLASS_______________________


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

export class ViewRow extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRow, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewCol extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexCol, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRowCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowBetweenCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRowBetweenCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColBetweenCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColBetweenCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowEvenlyCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRowEvenlyCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColEvenlyCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColEvenlyCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColEndCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColEndCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowStartCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRowStartCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColStartCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColStartCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColStartBetween extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexCol, styles.justifyContentSpaceBetween, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

// ____________________END OF UNIVERSAL CLASS_______________________

// ____________________START OF FONT_______________________

// END OF UNIVERSAL CLASS SECTION

/**
 * A React component that renders a customizable status bar and its content.
 * 
 * @remarks
 * This component is designed to work with both Android and iOS platforms.
 * It allows customization of the status bar's color, content style, and translucency.
 * Additionally, it provides an option to add a margin below the status bar on Android devices.
 * 
 * @param barColor - Optional. The color of the status bar background.
 * @param trans - Optional. If true, the status bar will be translucent.
 * @param children - Optional. The content to be rendered below the status bar.
 * @param bgColor - Optional. The background color of the view containing the status bar and its content.
 * @param barContentStyle - Optional. The style of the status bar content (e.g., 'dark-content', 'light-content').
 * @param notMargin - Optional. If true, no margin will be added below the status bar on Android devices.
 * 
 * @returns A React node containing the status bar and its content.
 */
export class SSBar extends Component<{ barColor?: any, trans?: boolean, children?: React.ReactNode, bgColor?: any, barContentStyle?: StatusBarStyle, notMargin?: boolean }> {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <View style={[styles.flex1, { backgroundColor: this.props.bgColor ? this.props.bgColor : clrStyle.white }]}>
                <>
                    <StatusBar
                        barStyle={this.props.barContentStyle ? this.props.barContentStyle : 'dark-content'}
                        translucent={this.props.trans ? true : false}
                        backgroundColor={this.props.barColor ? this.props.barColor : 'white'} />
                    {Platform.OS === 'android' && !this.props.notMargin ? <View style={{ height: statusBarHeight * 1.5 }}></View> : null}
                </>
                {this.props.children}
            </View>
        )
    }
}

export class SSBarWithSaveArea extends Component<{ barColor?: any, trans?: boolean, children?: React.ReactNode, bgColor?: any, barContentStyle?: StatusBarStyle, margin?: boolean }> {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <SafeAreaView style={[styles.flex1, { backgroundColor: this.props.bgColor ? this.props.bgColor : clrStyle.white }]}>
                <StatusBar
                    barStyle={this.props.barContentStyle ? this.props.barContentStyle : 'dark-content'}
                    translucent={this.props.trans ? true : false}
                    backgroundColor={this.props.barColor ? this.props.barColor : 'white'} />
                {Platform.OS === 'android' && this.props.margin ? <View style={{ height: statusBarHeight }}></View> : null}
                {this.props.children}
            </SafeAreaView>
        )
    }
}

/**
 * A React component that renders a customizable round button.
 *
 * @component
 * @example
 * ```tsx
 * <RoundBtn
 *   icon={<SomeIcon />}
 *   title="Click Me"
 *   onPress={() => console.log('Button pressed')}
 *   bgColor="#ff0000"
 *   textClass={CustomTextComponent}
 *   textColor="#ffffff"
 *   iconColor="#000000"
 *   border={true}
 *   borderColor="#00ff00"
 *   customStyle={{ margin: 10 }}
 * />
 * ```
 *
 * @prop {React.ReactNode} [icon] - The icon to display inside the button.
 * @prop {string} [title] - The text to display inside the button.
 * @prop {() => void} onPress - The function to call when the button is pressed.
 * @prop {string} [bgColor] - The background color of the button.
 * @prop {React.ComponentType<any>} [textClass] - The custom text component to use for the button text.
 * @prop {string} [textColor] - The color of the button text.
 * @prop {string} [iconColor] - The color of the icon.
 * @prop {boolean} [border] - Whether the button should have a border.
 * @prop {string} [borderColor] - The color of the border.
 * @prop {any} [customStyle] - Additional custom styles for the button.
 */
export class RoundBtn extends Component<{
    icon?: React.ReactNode
    title?: string
    onPress: () => void
    bgColor?: string
    textClass?: React.ComponentType<any>
    textColor?: string
    iconColor?: string
    border?: boolean
    borderColor?: string
    customStyle?: any
}> {
    render() {
        const { icon, title, onPress, bgColor, textClass, textColor, iconColor, border, borderColor, customStyle } = this.props;
        let TextClass = textClass ? textClass : Text
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.flexRow, styles.w100, styles.alignItemsCenter, styles.padding4vw, styles.gap3vw, styles.borderRadius10, styles.overflowHidden, { backgroundColor: bgColor ? bgColor : undefined, borderWidth: border ? 1 : 0, }, customStyle]}>
                {icon ? icon : null}
                <TextClass style={[{ color: textColor ? textColor : clrStyle.black as string }]}>{title}</TextClass>
            </TouchableOpacity>
        );
    }
}

// ________________________________________________________________________________________-
// ________________________________________________________________________________________-

export class SearchBox extends Component<{
    customStyle?: any
    placeholder?: string
    placeholderTextColor?: any
    value: string
    onChangeText?: (input: any) => void
    onClear?: () => void
    showSearchIcon?: boolean
    fontFam?: string
    currentCache?: CurrentCache
}> {
    render() {
        async function searchEngine(keyword: string, dataBank: any, type: 'set' | 'desk' | 'card') {
            keyword = value.trim();
            // keyword = keyword.trim();
            let result: any = [];
            const regex = new RegExp(`\\b${keyword}`, 'i');

            if (keyword === '') {
                return [];
            }
        }

        const { customStyle, placeholder, placeholderTextColor, value, onChangeText, onClear, showSearchIcon, fontFam } = this.props;
        return (
            <ViewRowBetweenCenter
                style={[styles.gap3vw, styles.borderRadius10, styles.paddingH4vw, { backgroundColor: clrStyle.white, borderColor: clrStyle.black }, customStyle]}>
                {showSearchIcon ? SVG.searchIcon(vw(5), vw(5), clrStyle.black) : null}
                <TextInput
                    style={[styles.flex1, styles.paddingV2vw, { color: clrStyle.black as string, fontSize: vw(3.5), fontFamily: fontFam ? fontFam : undefined }]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder ? placeholder : 'Search'}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : ''}
                />
                <TouchableOpacity
                    onPress={onClear}
                    style={{ display: value ? 'flex' : 'none' }}
                >
                    {SVG.xIcon(vw(5), vw(5), clrStyle.black)}
                </TouchableOpacity>
            </ViewRowBetweenCenter>
        );
    }
}

interface SearchBoxState {
    showSearch: boolean;
    searchInput: string;

}

export class TopNav2 extends Component<{
    containerStyle?: any
    backGoundImage: any
}> {
    render() {
        let { containerStyle, backGoundImage } = this.props
        return (
            <View style={[containerStyle, styles.bgcolorWhite, { containerStyle }]}>
                <Image source={backGoundImage} resizeMethod='resize' resizeMode='cover' style={[styles.flex1, styles.alignSelfCenter] as ImageStyle} />
            </View>
        )
    }
}

export class TopBarWithAvatarIMGand2RightIcon extends Component<{
    title: string
    avatarIMG: any
    rightIcon1: any
    rightIcon1Press?: () => void
    avatarPress?: () => void
    customStyle?: any
}> {
    render() {
        const { avatarIMG, rightIcon1, rightIcon1Press, title, avatarPress, customStyle } = this.props;
        return (
            <ViewRowBetweenCenter style={[styles.padding4vw, customStyle]}>
                <CTEXT.Inter20Bold style={{ color: NGHIASTYLE.NghiaGray700 }}>{title}</CTEXT.Inter20Bold>
                <ViewRowBetweenCenter style={[styles.gap3vw]}>
                    <TouchableOpacity
                        style={[styles.borderRadius100, styles.padding1vw, { backgroundColor: '#F2F4F7' }]}
                        onPress={avatarPress ? avatarPress : undefined}>
                        {avatarIMG ? <Image source={{ uri: avatarIMG }} style={[styles.borderRadius100, { width: vw(6), height: vw(6) }] as ImageStyle} /> : <View style={[styles.borderRadius100, styles.bgcolorBlack, { width: vw(6), height: vw(6) }]} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={rightIcon1Press ? rightIcon1Press : undefined}>
                        {rightIcon1}
                    </TouchableOpacity>
                </ViewRowBetweenCenter>
            </ViewRowBetweenCenter>
        );
    }
}

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
        const Font = FontElement ? FontElement : CTEXT.Nunito14Bold;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.flexRowCenter, styles.gap3vw, styles.borderRadius100, styles.shadowW0H1Black, styles.w90, styles.alignSelfCenter, { backgroundColor: bgColor ? bgColor : clrStyle.black, padding: vw(3.75), borderRadius: round ? round : vw(1000) }, CustomStyle ? CustomStyle : null]}>
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
    TitleFontClass?: React.ComponentType<any>,
    CustomStyleClass?: any,
    CustomStyleText?: any,
    CustomStyleInput?: any,
    contentType?: string
    hideContent?: boolean,
    hideContentFnc?: (value: boolean) => void,
    autoCap?: 'none' | 'characters' | 'words' | 'sentences',
    maxLength?: number,
    activeColor?: string,
    passiveColor?: string,
    tileColor?: string,
}> {

    render() {
        const { title, placeholder, value, TitleFontClass, onChgText, CustomStyleClass, CustomStyleInput, CustomStyleText, contentType, subTitle, supFnc, supFncTitle, hideContent, hideContentFnc, autoCap, maxLength, supFncTitleColor, activeColor, passiveColor, tileColor } = this.props;
        const isNumber = this.props.isNumber ? this.props.isNumber : false;

        function changFnc(value: string | number) {
            if (isNumber) {
                onChgText(parseInt(value as string));
            } else {
                onChgText(value);
            }
        }

        let TitleFont = TitleFontClass ? TitleFontClass : Text;

        return (
            <View style={[styles.flexColCenter, styles.gap4vw, styles.positionRelative, CustomStyleClass]}>
                {title ?
                    <TitleFont style={[{ color: tileColor }, CustomStyleText]}>{title}</TitleFont>
                    : null}
                <TextInput
                    placeholder={placeholder ? placeholder : 'Type here'}
                    value={value ? value.toString() : ''}
                    onChangeText={changFnc}
                    placeholderTextColor={clrStyle.grey30 as string}
                    secureTextEntry={hideContent ? hideContent : false}
                    keyboardType={isNumber ? 'numeric' : 'default'}
                    autoCapitalize={autoCap ? autoCap : 'sentences'}
                    textContentType={contentType as TextInputIOSProps['textContentType']}
                    maxLength={maxLength ? maxLength : undefined}
                    style={[styles.w100, styles.border1, styles.textCenter, { borderColor: value ? clrStyle.black : clrStyle.grey10, padding: vw(2.5), fontFamily: value ? 'NunitoBold' : 'NunitoRegular', fontSize: vw(4.5), borderRadius: vw(2), color: value ? clrStyle.black : clrStyle.grey10 }, CustomStyleInput]} />
                {hideContentFnc ?
                    <TouchableOpacity
                        onPress={() => { hideContentFnc && hideContentFnc(!hideContent) }}
                        style={[styles.padding2vw,]}>
                        <CTEXT.Nunito14Reg style={{ color: clrStyle.grey30 }}>{hideContent ? `Show ${contentType}` : `Hide ${contentType}`}</CTEXT.Nunito14Reg>
                    </TouchableOpacity>
                    : null}
                {subTitle ?
                    <View style={[styles.flexRowCenter]}>
                        <CTEXT.Nunito16Reg style={[{ color: passiveColor }]}>{subTitle}</CTEXT.Nunito16Reg>
                        <TouchableOpacity onPress={supFnc}><CTEXT.Nunito16Reg style={[styles.textUnderline, { color: supFncTitleColor ? supFncTitleColor : clrStyle.black }]}>{supFncTitle}</CTEXT.Nunito16Reg></TouchableOpacity>
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
    activeColor?: string,
    passiveColor?: string,
    activeArrowColor?: string,
    passiveArrowColor?: string,
}> {
    render() {
        const { fnc, leftTitle, rightTitle, showGoBack, currentStep, dataLength, activeColor, passiveColor, activeArrowColor, passiveArrowColor } = this.props;

        return (
            <View style={[styles.flexRowBetweenCenter, styles.marginTop2vw, styles.marginBottom8vw]}>
                <TouchableOpacity
                    onPress={() => { fnc(false) }}>
                    <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep > 0 ? activeColor as string : passiveColor as string }]}>
                        {showGoBack ?
                            <CTEXT.Nunito16Reg style={[styles.textUpperCase, styles.paddingH2vw, { color: clrStyle.black }]}>{leftTitle}</CTEXT.Nunito16Reg>
                            :
                            SVG.sharpLeftArrow(vw(6), vw(6), currentStep > 0 ? activeArrowColor : passiveArrowColor)}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { fnc(true) }}>
                    <View style={[styles.borderRadius100, styles.wfit, { padding: vw(2.5), backgroundColor: currentStep < dataLength - 1 ? activeColor as string : passiveArrowColor as string }]}>
                        {currentStep < dataLength - 1 ?
                            SVG.sharpRightArrow(vw(6), vw(6), currentStep < dataLength - 1 ? activeArrowColor : passiveArrowColor)
                            :
                            <CTEXT.Nunito16Bold style={[styles.textUpperCase, styles.paddingH2vw, { color: clrStyle.white }]}>{rightTitle}</CTEXT.Nunito16Bold>
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
                            style={[styles.wfit, styles.paddingV2vw, styles.paddingH4vw, styles.border1, { borderColor: selected.includes(item) ? clrStyle.black as string : clrStyle.white as string, borderRadius: vw(2), }]}>
                            {selected.includes(item) ?
                                <CTEXT.Nunito14ExBold style={[{ color: clrStyle.black }]}>{item}</CTEXT.Nunito14ExBold>
                                :
                                <CTEXT.Nunito14Reg style={[{ color: clrStyle.black }]}>{item}</CTEXT.Nunito14Reg>
                            }
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

export class SectionTitleAndRightArrow extends Component<{
    title: string,
    titleFontClass?: ComponentType<{ children: React.ReactNode }>,
    fnc: () => void,
    disableArrow?: boolean,
    titleColor?: string,
    arrowColor?: string,
}> {
    render() {
        const { title, fnc, titleColor, arrowColor, disableArrow } = this.props;
        const TitleFontClass = this.props.titleFontClass ? this.props.titleFontClass : CTEXT.Inter16Bold;
        return (
            <ViewRowBetweenCenter style={[styles.paddingH6vw, styles.paddingV2vw]}>
                <TitleFontClass style={[{ color: titleColor ? titleColor : clrStyle.black }]}>{title}</TitleFontClass>
                {disableArrow ?
                    null :
                    <TouchableOpacity onPress={fnc}>
                        {SVG.sharpRightArrow(vw(6), vw(6), arrowColor ? arrowColor : clrStyle.black)}
                    </TouchableOpacity>}
            </ViewRowBetweenCenter>
        )
    }
}

export class TopNav3ItemWithTitle extends Component<{
    title: string,
    icon: any,
    fnc: () => void,
    customStyle?: any,
    nav: any,
}> {
    render() {
        const { title, icon, fnc, customStyle, nav } = this.props;
        return (
            <ViewRowBetweenCenter style={[styles.w100, styles.paddingH6vw]}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    {SVG.sharpLeftArrow(vw(6), vw(6), clrStyle.black)}
                </TouchableOpacity>
                <CTEXT.Inter20Bold style={[styles.paddingH2vw, styles.textCenter, { color: clrStyle.black }]}>{title}</CTEXT.Inter20Bold>
                <TouchableOpacity onPress={fnc} style={[styles.padding2vw]}>
                    {icon}
                </TouchableOpacity>
            </ViewRowBetweenCenter>
        )
    }
}

