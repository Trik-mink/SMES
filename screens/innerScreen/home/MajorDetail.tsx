import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LowBtn, Nunito12Bold, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito18Reg, SaveViewWithColorStatusBar, TopNav } from '../../../assets/Class'
import clrStyle, { componentStyle } from '../../../assets/componentStyleSheet'
import styles, { vh, vw } from '../../../assets/stylesheet'
import { SvgXml } from 'react-native-svg'
import { marginBottomForScrollView } from '../../../assets/component'
import { CompareMajorItem, examGroupList } from '../../../data/data'
import { getCompareData, getWishlist, saveCompareData, saveCompareDataWithAlert, saveGoalMajor, saveWishlist, updateWishlist } from '../../../data/storageFunc'

export default function MajorDetail({ route }: any) {
    const { major, uniItem } = route.params
    const navigation = useNavigation()
    const [isInWishlist, setIsInWishlist] = React.useState<boolean>(false)

    useEffect(() => {
        getWishlist().then((data) => {
            if (data) {
                if (data.find(item => item.uniItem.name === uniItem.name && item.major.majorName === major.majorName)) {
                    setIsInWishlist(true)
                }
            }
        })
    }, [])

    return (
        <SaveViewWithColorStatusBar
            StatusBarColor={clrStyle.main5}
            StatusBarLightContent={true}
            bgColor={clrStyle.white}
        >
            <TopNav
                returnPreScreen={true}
                returnPreScreenFnc={() => navigation.goBack()}
                title={uniItem.name}
            >
                {/* TODO: change with major */}
                <Nunito14Bold style={[styles.textCenter, { color: clrStyle.grey1 }]}>{major.majorName}</Nunito14Bold>
            </TopNav>
            <ScrollView
                contentContainerStyle={[styles.flexCol, styles.gap4vw]}
                style={[styles.flex1, styles.padding4vw]}>
                {/* banner */}
                <View style={[styles.flexRowEvenlyCenter, styles.paddingV4vw, styles.gap4vw, styles.flex1]}>
                    {major.icon ? major.icon(vw(16.5), vw(16.5)) : <View style={{ backgroundColor: clrStyle.grey2, width: vw(31), height: vw(35), borderRadius: vw(1) }} />}
                    <View style={[styles.flexColBetweenCenter, styles.flex1, styles.h100, styles.gap2vw]}>
                        {/* major */}
                        <View style={[styles.flexRowBetweenCenter, styles.gap1vw, styles.flex1, styles.w100]}>
                            <View style={[styles.flexRowStartCenter, styles.gap1vw]}>
                                <SvgXml width={vw(6)} height={vw(6)} xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 11.5617C3.56231 11.1916 2.5 9.88653 2.5 8.33333C2.5 6.49238 3.99238 5 5.83333 5C5.97444 5 6.1135 5.00877 6.25 5.02579C6.7648 3.5693 7.9506 2.5 9.58337 2.5C11.0103 2.5 12.3248 3.3043 12.9586 4.47746C13.3167 4.2794 13.7285 4.16667 14.1667 4.16667C15.5475 4.16667 16.6667 5.28595 16.6667 6.66667C16.6667 7.53624 16.2228 8.30212 15.5492 8.75C16.4454 9.03643 17.1115 9.8761 17.1115 10.8673C17.1115 12.0948 16.1165 13.0898 14.8891 13.0898C13.6616 13.0898 12.8705 12.3781 12.5 11.6667C11.6796 12.0913 10.6703 11.7704 10.2457 10.9499M5 11.5617C5 12.7891 5.995 13.8891 7.22242 13.8891C8.55587 13.8891 11.7397 13.7562 11.7397 15.5342V17.3121M5 11.5617C5 10.3342 5.995 9.44424 7.22242 9.44424M8.22484 6.66994C8.68674 5.86992 9.70972 5.59581 10.5097 6.05771C11.3098 6.5196 11.5839 7.54258 11.122 8.3426" stroke="#CD3B3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />
                                <Nunito14Reg style={[{ color: clrStyle.grey2 }]}>Major</Nunito14Reg>
                            </View>
                            {/* TODO: chuyen nganh */}
                            <Nunito14Bold style={[styles.flex1, { color: clrStyle.grey3 }]}>{major.field ? major.field : `N/A`}</Nunito14Bold>
                        </View>
                        {/* exam group */}
                        <View style={[styles.flexRowBetweenCenter, styles.gap1vw, styles.flex1, styles.w100]}>
                            <View style={[styles.flexRowStartCenter, styles.gap1vw]}>
                                <SvgXml width={vw(6)} height={vw(6)} xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.625 2.5C3.23529 2.5 2.5 3.23529 2.5 5.625C2.5 8.01471 3.23529 8.75 5.625 8.75C8.01471 8.75 8.75 8.01471 8.75 5.625C8.75 3.23529 8.01471 2.5 5.625 2.5Z" stroke="#1C8EDC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.625 11.25C3.23529 11.25 2.5 11.9853 2.5 14.375C2.5 16.7647 3.23529 17.5 5.625 17.5C8.01471 17.5 8.75 16.7647 8.75 14.375C8.75 11.9853 8.01471 11.25 5.625 11.25Z" stroke="#1C8EDC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.375 11.25C11.9853 11.25 11.25 11.9853 11.25 14.375C11.25 16.7647 11.9853 17.5 14.375 17.5C16.7647 17.5 17.5 16.7647 17.5 14.375C17.5 11.9853 16.7647 11.25 14.375 11.25Z" stroke="#1C8EDC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.375 2.5C11.9853 2.5 11.25 3.23529 11.25 5.625C11.25 8.01471 11.9853 8.75 14.375 8.75C16.7647 8.75 17.5 8.01471 17.5 5.625C17.5 3.23529 16.7647 2.5 14.375 2.5Z" stroke="#1C8EDC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />
                                <Nunito14Reg style={[{ color: clrStyle.grey2 }]}>Comb</Nunito14Reg>
                            </View>
                            <Nunito14Bold style={[styles.flex1, { color: clrStyle.grey3 }]}>{major.examGroup ? major.examGroup.map((examGroupItem: any, index: number) => { return examGroupItem.name }).join(', ') : `Recruitment`}</Nunito14Bold>
                        </View>
                        {/* major */}
                        <View style={[styles.flexRowBetweenCenter, styles.gap1vw, styles.flex1, styles.w100]}>
                            <View style={[styles.flexRowStartCenter, styles.gap1vw]}>
                                <SvgXml width={vw(6)} height={vw(6)} xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 11.6666C17.6743 11.6666 19.1667 13.3333 19.1667 14.5833C19.1667 15.2736 18.607 15.8333 17.9167 15.8333H17.5M14.1667 9.16663C15.5474 9.16663 16.6667 8.04734 16.6667 6.66663C16.6667 5.28591 15.5474 4.16663 14.1667 4.16663M4.16668 11.6666C2.32573 11.6666 0.833344 13.3333 0.833344 14.5833C0.833344 15.2736 1.39299 15.8333 2.08334 15.8333H2.50001M5.83334 9.16663C4.45263 9.16663 3.33334 8.04734 3.33334 6.66663C3.33334 5.28591 4.45263 4.16663 5.83334 4.16663M13.75 15.8333H6.25001C5.55965 15.8333 5.00001 15.2736 5.00001 14.5833C5.00001 12.5 7.50001 11.6666 10 11.6666C12.5 11.6666 15 12.5 15 14.5833C15 15.2736 14.4404 15.8333 13.75 15.8333ZM12.5 6.66663C12.5 8.04734 11.3807 9.16663 10 9.16663C8.6193 9.16663 7.50001 8.04734 7.50001 6.66663C7.50001 5.28591 8.6193 4.16663 10 4.16663C11.3807 4.16663 12.5 5.28591 12.5 6.66663Z" stroke="#36B77A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />
                                <Nunito14Reg style={[{ color: clrStyle.grey2 }]}>Admission</Nunito14Reg>
                            </View>
                            <Nunito14Bold style={[styles.flex1, { color: clrStyle.grey3 }]}>{major.addmission ? major.addmission : `N/A`}</Nunito14Bold>
                        </View>
                        {
                            !isInWishlist ?
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            saveWishlist(uniItem, major).then((res) => {
                                                if (res) {
                                                    setIsInWishlist(true)
                                                }
                                            })
                                        }}
                                    style={[styles.flexRowCenter, styles.w100, { backgroundColor: clrStyle.main5, paddingVertical: vw(1.5), borderRadius: vw(2) }]}>
                                    <SvgXml width={vw(6)} height={vw(6)} xml={`<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.83334 10H17.1667M10.5 3.33337V16.6667" stroke="#CCCED5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />
                                    <Nunito14Bold style={{ color: clrStyle.white }}> Add to Wishlist</Nunito14Bold>
                                </TouchableOpacity> :
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            Alert.alert(
                                                'Remove from Wishlist',
                                                `Are you sure you want to remove ${uniItem.name} - ${major.majorName} from your Wishlist?`,
                                                [
                                                    {
                                                        text: 'Cancel',
                                                        style: 'cancel'
                                                    },
                                                    {
                                                        text: 'OK',
                                                        onPress: () => {
                                                            getWishlist().then((data) => {
                                                                if (data) {
                                                                    // find index of item
                                                                    let index = data.findIndex(item => item.uniItem.name === uniItem.name && item.major.majorName === major.majorName)

                                                                    data.splice(index, 1)
                                                                    updateWishlist(data).then((res) => {
                                                                        if (res) {
                                                                            setIsInWishlist(false)
                                                                        }
                                                                    })

                                                                }
                                                            })
                                                        }
                                                    }
                                                ]
                                            )
                                        }}
                                    style={[styles.flexRowCenter, styles.w100, { backgroundColor: clrStyle.main9, paddingVertical: vw(1.5), borderRadius: vw(2) }]}>
                                    <SvgXml width={vw(6)} height={vw(6)} xml={`<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.16667 17.4999H13.8333M10.5 17.4999V14.1666M10.5 14.1666C8.19881 14.1666 6.33333 12.3011 6.33333 9.99992V4.99992M10.5 14.1666C12.8012 14.1666 14.6667 12.3011 14.6667 9.99992V4.99992M14.6667 4.99992C14.6667 4.07944 13.9205 3.33325 13 3.33325H8C7.07953 3.33325 6.33333 4.07944 6.33333 4.99992M14.6667 4.99992H15.9167C17.0673 4.99992 18 5.93266 18 7.08325C18 8.23385 17.0673 9.16659 15.9167 9.16659H14.6667M6.33333 4.99992H5.08333C3.93274 4.99992 3 5.93266 3 7.08325C3 8.23385 3.93274 9.16659 5.08333 9.16659H6.33333" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />
                                    <Nunito14Bold style={{ color: clrStyle.white }}> Your Wishlist</Nunito14Bold>
                                </TouchableOpacity>
                        }
                    </View>
                </View>

                {/* tuition */}
                <View style={[styles.flex1, styles.flexCol, styles.gap3vw]}>
                    <Nunito16Bold style={{ color: clrStyle.main5 }}>Tuition</Nunito16Bold>
                    {/* TODO: change to multi if have more data */}
                    <View style={[styles.flexRowBetweenCenter, styles.paddingV1vw]}>
                        <Nunito14Reg style={[{ color: clrStyle.grey2 }]}>In <Nunito14Bold>{uniItem.scoreRefYear}</Nunito14Bold></Nunito14Reg>
                        <Nunito16Bold style={{ color: major.majorFee ? clrStyle.main3 : clrStyle.grey3 }}>{major.majorFee ? `${uniItem.unitFee} ${major.majorFee}/${uniItem.yearOrSemForFee}` : `N/A`}</Nunito16Bold>
                    </View>
                </View>

                {/* score */}
                <View style={[styles.flex1, styles.flexCol, styles.gap3vw]}>
                    <Nunito16Bold style={{ color: clrStyle.main5 }}>Scores from previous years</Nunito16Bold>
                    <View style={[styles.flexRowBetweenCenter, styles.gap4vw, styles.paddingH4vw]}>
                        <Nunito16Bold style={{ color: clrStyle.grey2 }}>{uniItem.scoreRefYear}</Nunito16Bold>
                        <View style={[styles.flex1, { height: 2, backgroundColor: clrStyle.grey1 }]}></View>
                    </View>
                    {major.examGroup ? major.examGroup.map((examGroupItem: any, index: number) => {
                        return (
                            <View key={index} style={[styles.flexRowBetweenCenter, styles.paddingV1vw]}>
                                <Nunito14Bold style={{ color: clrStyle.main1 }}>Comb {examGroupItem.name} <Nunito12Bold style={{ color: clrStyle.grey2 }}><Nunito18Reg>|</Nunito18Reg> {examGroupList[examGroupItem.name].join(', ')}</Nunito12Bold></Nunito14Bold>
                                <Nunito18Bold style={{ color: clrStyle.main5 }}>{examGroupItem.lowestStandardScore ? examGroupItem.lowestStandardScore : `N/A`}</Nunito18Bold>
                            </View>
                        )
                    }) :
                        <Nunito14Bold style={[styles.paddingH4vw, { color: clrStyle.grey3 }]}>Recruitment</Nunito14Bold>
                    }
                    <View style={[styles.padding4vw]}>
                        <LowBtn
                            CustomStyle={{ backgroundColor: clrStyle.main9 }}
                            title='Add to your GOAL'
                            onPress={() => {
                                saveGoalMajor(uniItem.name, major).then((res) => {
                                    if (res) {
                                        Alert.alert('Success', 'Add to your GOAL successfully')
                                    }
                                })
                            }}
                        />
                    </View>
                </View>
                {marginBottomForScrollView(2)}
            </ScrollView>
            <View style={[styles.padding4vw, componentStyle.upperShadow, { backgroundColor: clrStyle.white }]}>
                <LowBtn
                    round={vw(2)}
                    title='Compare with ...'
                    onPress={() => {
                        saveCompareDataWithAlert(uniItem, major, () => { navigation.navigate('BottomTab', { screen: 'Compare' }); })
                    }}
                />
            </View>
        </SaveViewWithColorStatusBar >
    )
}