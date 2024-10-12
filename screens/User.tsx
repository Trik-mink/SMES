import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BottomBar, Nunito14Bold, Nunito16Bold, Nunito16Reg, Nunito18Bold, Nunito20Bold, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import { getGoalMajor, getUserInfo, getWishlist } from '../data/storageFunc'
import styles, { vw } from '../assets/stylesheet'
import { bestOfScCoIcon, curveRightArrow, ENTJicon, MBTIIcon, wishListIcon } from '../assets/svgXml'
import { useNavigation } from '@react-navigation/native'
import { bestOfEconomic, CompareMajorItem, mbti } from '../data/data'
import { avatarComponet, marginBottomForScrollView } from '../assets/component'

export default function User() {
  const navigation = useNavigation()

  const [userInfo, setUserInfo] = useState<any>(null)
  const [goalItem, setGoalItem] = useState<any>(null)
  const [wishList, setWishList] = useState<CompareMajorItem[]>([])

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res);
      mbti.filter((item) => {
        if (item.mbti === res?.data?.persona) {
          setMbtiIcon(item.icon)
        }
      })
    })
    getWishlist().then((res) => {
      if (res) {
        setWishList(res)
      }
    })
    getGoalMajor().then((res) => {
      if (res) {
        setGoalItem(res)
      }
    })
  }, [userInfo])

  const [mbtiIcon, setMbtiIcon] = useState<any>(null)

  interface UserTarget {
    title: string,
    icon: any,
    data: string
    navTo: string
  }
  let userTarget: UserTarget[] = [
    {
      title: 'MBTI', icon: mbtiIcon, data: userInfo?.data?.persona, navTo: 'Persona'
    },
    { title: 'Goal', icon: bestOfScCoIcon(), data: goalItem ? goalItem.major.majorName : userInfo?.data?.goal, navTo: '' },
    { title: 'Wishlist', icon: wishListIcon(), data: `${wishList.length} major(s)`, navTo: 'Wishlist' },
  ]

  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}>
      <TopNav
        title='User' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.flexColStartCenter, styles.gap6vw, styles.paddingV4vw, styles.paddingH4vw]}
        style={[styles.flex1]}>

        <View style={[styles.flexRowStartCenter, styles.paddingV2vw, styles.w100]}>
          {avatarComponet()}
          <View style={[styles.flexCol, styles.gap1vw]}>
            <Nunito18Bold style={[{ color: clrStyle.grey3 }]}>Hello, {userInfo?.name}</Nunito18Bold>
            {/* <Nunito14Bold style={[{ color: clrStyle.grey2 }]}>Welcome back!</Nunito14Bold> */}
          </View>
        </View>

        <View style={[styles.w100, styles.flexRowBetweenCenter]}>
          {
            userTarget.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => { navigation.navigate(item.navTo, { data: userInfo.data.persona }) }}
                  key={index} style={[styles.flexCol, styles.alignItemsCenter, styles.w30, styles.shadowW0H1Black, styles.borderRadius4vw, styles.padding2vw, { backgroundColor: clrStyle.white }]}>
                  <Nunito14Bold style={[styles.paddingTop2vw, styles.textCenter, { color: clrStyle.grey3 }]}>{item.title}</Nunito14Bold>
                  <View style={[{ width: '100%', height: vw(28), borderTopWidth: 2, borderTopColor: clrStyle.grey1 }]}>{item.icon}</View>
                  <Nunito14Bold style={[styles.paddingTop1vw, { color: clrStyle.grey2 }]}>{item.data}</Nunito14Bold>
                </TouchableOpacity>
              )
            })
          }
        </View>


        <View style={[styles.flexCol, styles.w100]}>
          <View style={[styles.flexRowBetweenCenter, styles.w100]}>
            <Nunito16Bold>Best fit</Nunito16Bold>
            <TouchableOpacity
              onPress={() => {
                console.log('see all');
                // TODO: do something
              }}>
              {curveRightArrow(vw(6), vw(6))}
            </TouchableOpacity>
          </View>
          {
            bestOfEconomic.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    // TODO: nav to item.navTo
                    console.log('nav to ' + item.navTo);
                  }}
                  key={index} style={[styles.flexRowStartCenter, styles.w100, styles.padding4vw, styles.gap2vw, { backgroundColor: clrStyle.white, borderBottomWidth: 1, borderBottomColor: clrStyle.grey1 }]}>
                  {item.icon}
                  <View style={[styles.flexCol, styles.paddingLeft2vw]}>
                    <Nunito20Bold style={{ color: clrStyle.grey3, }}>{item.title}</Nunito20Bold>
                    <Nunito16Reg style={{ color: clrStyle.grey2, }}>{item.description}</Nunito16Reg>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>

        {marginBottomForScrollView()}
      </ScrollView>
      {/* <BottomBar navFnc={() => navigation} currentScreen='User' bgColor={clrStyle.white} shadow={true} /> */}
    </SaveViewWithColorStatusBar>
  )
}