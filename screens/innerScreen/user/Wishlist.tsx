import { View, Text, ScrollView, Animated, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { getGoalMajor, getWishlist } from '../../../data/storageFunc';
import { Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito16Bold, Nunito16Reg, Nunito20Bold, SaveViewWithColorStatusBar, Signika20Bold, TopNav } from '../../../assets/Class';
import clrStyle from '../../../assets/componentStyleSheet';
import styles, { vw } from '../../../assets/stylesheet';
import { SvgXml } from 'react-native-svg';
import { CompareMajorItem } from '../../../data/data';
import { editIcon, } from '../../../assets/svgXml';
import { Screen } from 'react-native-screens';
import { majorDefault } from '../../../assets/svgXml';

export default function Wishlist() {
    const navigation = useNavigation();

    const [goalList, setGoalList] = React.useState<CompareMajorItem>();
    const [wishList, setWishList] = React.useState<CompareMajorItem[] | []>([]);
    const [isEdit, setIsEdit] = React.useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getGoalMajor().then((data) => {
                if (data) {
                    console.log(data);
                    setGoalList(data);
                } else {
                }
            });
            getWishlist().then((data) => {
                if (data) {
                    console.log(data);
                    setWishList(data);
                } else {
                }
            });
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <SaveViewWithColorStatusBar
            StatusBarColor={clrStyle.main5}
            StatusBarLightContent={true}
            bgColor={clrStyle.white}>
            <TopNav
                title='Wishlist'
                returnPreScreen={true}
                returnPreScreenFnc={() => { navigation.goBack() }}
                rightIcon={editIcon(vw(7), vw(7))}
                rightFnc={() => { setIsEdit(!isEdit) }}
            >
                {wishList.length > 0 ? <Nunito14Bold style={[styles.textCenter, { color: clrStyle.white }]}>{wishList.length} major(s) in your list</Nunito14Bold> : null}
            </TopNav>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.flexColStartCenter, styles.gap4vw, styles.paddingV4vw, styles.paddingH4vw]}
                style={[styles.flex1]}>
                <ImageBackground source={require('../../../assets/photos/goalbg.png')}
                    resizeMode='cover'
                    resizeMethod='resize'
                    style={[styles.w100, styles.borderRadius3vw, styles.overflowHidden,]}>
                    <View style={[styles.paddingV2vw, styles.paddingH3vw]}>
                        <View style={[styles.flexRowStartCenter]}>
                            <Signika20Bold style={{ color: clrStyle.main9 }}>GOAL  </Signika20Bold>
                            {
                                goalList?.major ?
                                    <View style={[styles.paddingV1vw, styles.paddingH2vw, { backgroundColor: clrStyle.main5, borderRadius: vw(2) }]}>
                                        <Nunito12Reg style={{ color: clrStyle.white }}>Match <Nunito14Bold>70%</Nunito14Bold></Nunito12Reg>
                                    </View> : null
                            }
                        </View>
                        {
                            goalList?.major ?
                                <View style={[styles.flexRow, styles.gap2vw, styles.paddingTop4vw]}>
                                    {goalList.major.icon ? goalList.major.icon(vw(16.5), vw(16.5)) : <View style={{ width: vw(16.5), height: vw(16.5), borderRadius: vw(1) }}>{majorDefault(vw(16.5), vw(16.5))}</View>}
                                    <View style={[styles.flex1, styles.flexCol, styles.gap2vw]}>
                                        <Nunito16Bold style={{ color: clrStyle.grey3, }}>{goalList.major.majorName}</Nunito16Bold>
                                        <View style={[styles.flexRow, styles.gap1vw]}>
                                            <View style={[styles.paddingV1vw, styles.paddingH2vw, { borderRadius: vw(2), backgroundColor: clrStyle.main2 }]}>
                                                <Nunito12Bold style={[{ color: clrStyle.main1 }]}>{goalList.major.examGroup ? goalList.major.examGroup.map((examGroupItem: any, index: number) => { return examGroupItem.name }).join(', ') : `Recruitment`}</Nunito12Bold>

                                            </View>
                                            <View style={[styles.paddingV1vw, styles.paddingH2vw, { borderRadius: vw(2), backgroundColor: clrStyle.main8 }]}>
                                                {/* TODO: check recuit */}
                                                <Nunito12Bold style={[{ color: clrStyle.main7 }]}>{goalList.major.degreeType ? goalList.major.degreeType : `College`}</Nunito12Bold>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                :
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Search') }}
                                    style={[styles.marginTop8vw]}>
                                    <Nunito16Bold style={{ color: clrStyle.grey3, }}>Click here to choose your GOAL</Nunito16Bold>
                                    <Nunito12Reg style={{ color: clrStyle.grey2, }}>Set your goal to get the best match</Nunito12Reg>
                                </TouchableOpacity>
                        }
                    </View>
                </ImageBackground>


                <Nunito16Bold style={[styles.w100, { color: clrStyle.black }]}>Your Wishlist</Nunito16Bold>
                <View>
                    {wishList.map((wishlistItem: any, index: number) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.flexRowBetweenCenter, styles.padding10, styles.paddingV4vw, styles.w100, styles.borderRadius3vw, { backgroundColor: clrStyle.white, borderBottomWidth: 1, borderBottomColor: clrStyle.grey1 }]}
                            onPress={() => {
                                // TODO: fix the uniItem to fit the MajorDetail screen requirement
                                navigation.navigate(`MajorDetail`, { major: wishlistItem.major, uniItem: wishlistItem.uniItem });
                            }}>

                            <View style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.flex1]}>
                                {wishlistItem.major.icon ? wishlistItem.major.icon(vw(16.5), vw(16.5)) : <View style={{ width: vw(16.5), height: vw(16.5), borderRadius: vw(1) }}>{majorDefault(vw(16.5), vw(16.5))}</View>}
                                <View style={[styles.flex1, styles.flexCol, styles.gap2vw]}>
                                    <Nunito20Bold style={{ color: clrStyle.grey3, }}>{wishlistItem.major.majorName}</Nunito20Bold>
                                    <Nunito16Reg style={{ color: clrStyle.grey2, }}>{wishlistItem.uniItem.name} {wishlistItem.major.field ? `- ${wishlistItem.major.field}` : null}</Nunito16Reg>
                                </View>
                            </View>
                            {/* TODO: fix match */}
                            <View style={[styles.flexColCenter, styles.gap2vw,]}>
                                <Nunito12Reg style={{ color: clrStyle.grey2 }}>Match</Nunito12Reg>
                                <Nunito16Bold style={{ color: clrStyle.main5 }}>70</Nunito16Bold>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
        </SaveViewWithColorStatusBar >
    )
}