import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LowBtn, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito20Bold, Nunito24Bold, SaveViewWithColorStatusBar, TopNav } from '../../../assets/Class'
import clrStyle, { componentStyle } from '../../../assets/componentStyleSheet'
import styles, { vw } from '../../../assets/stylesheet'
import { MBTI, mbti, mbtiGroup } from '../../../data/data'
import { getUserInfo } from '../../../data/storageFunc'
import { marginBottomForScrollView } from '../../../assets/component'
import { SvgXml } from 'react-native-svg'

export default function Persona({ navigation, route }) {
    const { data } = route.params
    const [personaData, setPersonaData] = useState<MBTI>()
    const [selectedGroup, setSelectedGroup] = useState<number>(0)
    const [colorTheme, setColorTheme] = useState<string>(clrStyle.main5)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            mbti.filter((item) => {
                if (item.mbti === data) {
                    setPersonaData(item)
                    console.log(item.mbti);
                }
            })
            mbtiGroup.filter((group, index) => {
                if (group.data.filter((f1) => f1.mbti === data).length > 0) {
                    setSelectedGroup(index)
                    setColorTheme(group.clr)
                }
            })
        })
        return unsubscribe
    }, [data])

    return (
        <SaveViewWithColorStatusBar
            StatusBarColor={clrStyle.main5}
            StatusBarLightContent={true}
            bgColor={clrStyle.white}>
            <TopNav
                returnPreScreen={true}
                returnPreScreenFnc={navigation.goBack}
                title='Persona'>
                <Nunito14Bold style={[styles.textCenter, { color: clrStyle.grey2 }]}>{data}</Nunito14Bold>
            </TopNav>
            <ScrollView
                contentContainerStyle={[styles.flexColStartCenter, styles.gap6vw, styles.paddingV4vw, styles.paddingH4vw]}
                style={[styles.flex1]}>
                <Nunito24Bold style={[styles.w100, { color: clrStyle.grey3 }]}>Your personality</Nunito24Bold>
                <View style={[styles.flexRowStartCenter, styles.padding3vw, styles.w100, styles.gap2vw, { backgroundColor: colorTheme, borderRadius: vw(4.5) }]}>
                    <View style={[{ width: vw(16.5), height: vw(20) }]}>{personaData?.icon}</View>
                    <View style={[styles.flexCol, styles.gap2vw, styles.flex1, styles.paddingH2vw]}>
                        <Nunito20Bold style={[styles.textCenter, { color: clrStyle.white }]}>{personaData?.mbti}</Nunito20Bold>
                        <View style={{ borderTopWidth: 2, borderTopColor: clrStyle.white, paddingTop: vw(1) }}><Nunito24Bold style={[styles.textCenter, { color: clrStyle.white }]}>{personaData?.name}</Nunito24Bold></View>
                    </View>
                </View>

                <View style={[styles.flexColCenter, styles.w100, styles.paddingH2vw]}>
                    <View style={[styles.w100, styles.positionAbsolute, { borderTopWidth: 2, borderTopColor: clrStyle.grey1 }]} />
                    <View style={[styles.flexColCenter, styles.paddingH4vw, { backgroundColor: clrStyle.white, zIndex: 1 }]}>
                        <Nunito14Bold style={{ color: colorTheme }}>Personality of</Nunito14Bold>
                        <Nunito14Bold style={{ color: colorTheme }}>{data} group</Nunito14Bold>
                    </View>
                </View>

                <View style={[styles.flexCol, styles.gap2vw, styles.w100]}>
                    <Nunito16Bold style={[styles.w100, { color: clrStyle.grey3 }]}>Description</Nunito16Bold>
                    <Nunito14Reg style={[styles.w100, styles.textJustify, { color: clrStyle.grey3 }]}>{personaData?.description}</Nunito14Reg>
                </View>

                <View style={[styles.flexCol, styles.gap2vw, styles.w100]}>
                    <Nunito16Bold style={[styles.w100, { color: clrStyle.grey3 }]}>Personality</Nunito16Bold>
                    {personaData?.personality.map((item, index) => {
                        return (
                            <Nunito14Reg key={index} style={[styles.w100, styles.textJustify, { color: clrStyle.grey3 }]}>{item}</Nunito14Reg>
                        )
                    })}
                </View>

                <View style={[styles.flexCol, styles.gap2vw, styles.w100]}>
                    <Nunito16Bold style={[styles.w100, { color: clrStyle.grey3 }]}>Favorite jobs</Nunito16Bold>
                    {personaData?.favJob.map((item, index) => {
                        return (
                            <Nunito14Reg key={index} style={[styles.w100, styles.textJustify, { color: clrStyle.grey3 }]}>{'> ' + item}</Nunito14Reg>
                        )
                    })}
                </View>
                {marginBottomForScrollView()}
            </ScrollView>
            {/* bottom btn */}
            <View style={[styles.padding4vw, componentStyle.upperShadow, { backgroundColor: clrStyle.white }]}>
                <LowBtn
                    round={vw(2)}
                    title='Explore other personalities'
                    onPress={() => {
                        navigation.navigate('ExplorePersona')
                    }}
                />
            </View>
        </SaveViewWithColorStatusBar>
    )
}