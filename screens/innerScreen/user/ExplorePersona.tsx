import { View, Text, ScrollView, TouchableOpacity, FlatList, Animated, Linking } from 'react-native'
import React, { useRef, useState } from 'react'
import { LowBtn, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, Nunito24Bold, SaveViewWithColorStatusBar, TopNav } from '../../../assets/Class'
import clrStyle, { componentStyle } from '../../../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import styles, { vw } from '../../../assets/stylesheet'
import { marginBottomForScrollView } from '../../../assets/component'
import { mbti, mbtiGroup } from '../../../data/data'
import { SvgXml } from 'react-native-svg'

export default function ExplorePersona() {
    const navigation = useNavigation()
    //  selector section
    const [selectedGroup, setSelectedGroup] = useState<number>(0)
    const [showSelector, setShowSelector] = useState<boolean>(false)

    const animation = useRef(new Animated.Value(0)).current
    const opacityAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    function renderAnimation(trigger: boolean) {
        Animated.timing(animation, {
            toValue: trigger ? 1 : 0,
            duration: 300,
            useNativeDriver: false
        }).start()
    }
    renderAnimation(showSelector)

    function selectorRender() {
        return (
            <View style={[styles.w100, { zIndex: 1 }]}>
                <TouchableOpacity
                    onPress={() => setShowSelector(!showSelector)}
                    style={[styles.flexRowStartCenter, styles.gap1vw, styles.paddingV2vw]}>
                    <Nunito16Bold style={[{ color: mbtiGroup[selectedGroup].clr }]}>{mbtiGroup[selectedGroup].gr}</Nunito16Bold>
                    <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.92 8.17993H11.69H6.07999C5.11999 8.17993 4.63999 9.33993 5.31999 10.0199L10.5 15.1999C11.33 16.0299 12.68 16.0299 13.51 15.1999L15.48 13.2299L18.69 10.0199C19.36 9.33993 18.88 8.17993 17.92 8.17993Z" fill="#808797"/></svg>`} />
                </TouchableOpacity>
                <View style={[styles.positionRelative, showSelector ? styles.shadowW0H05Black : null, styles.borderRadius3vw, styles.wfit, { backgroundColor: clrStyle.white, display: showSelector ? undefined : 'none' }]}>
                    <Animated.View style={[styles.w50vw, styles.overflowHidden, styles.borderRadius3vw, styles.positionAbsolute, { opacity: opacityAnimation, backgroundColor: clrStyle.white }]}>
                        {mbtiGroup.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => { setSelectedGroup(index), setShowSelector(false) }}
                                    style={[styles.padding3vw, { backgroundColor: selectedGroup === index ? clrStyle.main5 : clrStyle.grey4, borderBottomWidth: index < mbtiGroup.length - 1 ? 1 : 0, borderBlockColor: clrStyle.grey1 }]}>
                                    <Nunito14Bold style={[styles.textCenter, { color: selectedGroup === index ? clrStyle.white : clrStyle.grey2 }]}>{item.gr}</Nunito14Bold>
                                </TouchableOpacity>
                            )
                        })}
                    </Animated.View>
                </View>
            </View>
        )
    }

    function renderMBTIgroup({ item, index }: { item: any, index: number }) {
        return (
            <TouchableOpacity
                key={index}
                style={[styles.flexColEndCenter, styles.gap2vw, styles.padding4vw, styles.shadowW0H05Black, styles.margin2vw, styles.borderRadius3vw, styles.w30vw, { backgroundColor: clrStyle.white }]}
                onPress={() => {
                    navigation.navigate('Persona', { data: item.mbti })
                }}>
                <View style={[{ width: vw(20), height: vw(25) }]}>{item.icon}</View>
                <Nunito14Bold style={[styles.textCenter, { color: clrStyle.grey2 }]}>{item.name}</Nunito14Bold>
                <Nunito18Bold style={[styles.textCenter, { color: mbtiGroup[selectedGroup].clr }]}>{item.mbti}</Nunito18Bold>
            </TouchableOpacity>
        )
    }

    return (
        <SaveViewWithColorStatusBar
            StatusBarColor={clrStyle.main5}
            StatusBarLightContent={true}
            bgColor={clrStyle.white}>
            <TopNav
                returnPreScreen={true}
                returnPreScreenFnc={navigation.goBack}
                title={mbtiGroup[selectedGroup].gr}>
            </TopNav>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.flexColStartCenter, styles.gap4vw, styles.paddingV4vw, styles.paddingH8vw]}
                style={[styles.flex1]}>
                {selectorRender()}
                <Nunito14Reg style={[styles.paddingV2vw, styles.w100, { color: clrStyle.grey2 }]}>{mbtiGroup[selectedGroup].desc}</Nunito14Reg>
                <FlatList
                    data={mbtiGroup[selectedGroup].data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderMBTIgroup}
                    numColumns={2}
                    scrollEnabled={false}
                />
                {marginBottomForScrollView()}
            </ScrollView>
            {/* bottom btn */}
            <View style={[styles.padding4vw, componentStyle.upperShadow, { backgroundColor: clrStyle.white }]}>
                <LowBtn
                    round={vw(2)}
                    title='Test personality HERE'
                    onPress={() => {
                        Linking.openURL('https://www.16personalities.com').catch(err => console.error('An error occurred', err))
                    }}
                />
            </View>
        </SaveViewWithColorStatusBar>
    )
}