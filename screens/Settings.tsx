import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { getUserInfo, removeAllUserInfo, resetPersonalData } from '../data/storageFunc'
import { SvgXml } from 'react-native-svg'
import { sharpRightArrow } from '../assets/svgXml'
import { avatarComponet, marginBottomForScrollView } from '../assets/component'
import { useNavigation } from '@react-navigation/native'

// import * as ImagePicker from 'expo-image-picker';

export default function Settings() {
  const [userInfo, setUserInfo] = useState<any>(null)
  const navigation = useNavigation()

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res);
    })
  }, [userInfo])

  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
  };


  const btnList = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00006 17.5V18.5C9.00006 20.1569 10.3432 21 12.0001 21C13.6569 21 15.0001 20.1569 15.0001 18.5V17.5M6.00005 8.5C6.00005 5.18629 8.68634 3.5 12 3.5C15.3138 3.5 18 5.18629 18 8.5C18 10.4392 18.7051 12.6133 19.4316 14.3389C20.0349 15.7717 19.0223 17.5 17.4677 17.5H6.53243C4.97784 17.5 3.96524 15.7717 4.56848 14.3389C5.29499 12.6133 6.00005 10.4392 6.00005 8.5Z" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      name: `Notification`,
      fnc: () => { console.log('Notification') }
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8C6 5.18536 8 4 12 4C16 4 18 5.18537 18 8V19.0858C18 19.9767 16.9229 20.4229 16.2929 19.7929L12.7071 16.2071C12.3166 15.8166 11.6834 15.8166 11.2929 16.2071L7.70711 19.7929C7.07714 20.4229 6 19.9767 6 19.0858V8Z" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      name: `Save`,
      fnc: () => { }
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      name: `Support`,
      fnc: () => { }
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4L17.5 4C20.5577 4 20.5 8 20.5 12C20.5 16 20.5577 20 17.5 20H14M15 12L3 12M15 12L11 16M15 12L11 8" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      name: `Log out`,
      fnc: () => { },
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.5C14 9.5 14.5 10.5 14.5 12.5C14.5 14.5 14 15.5 14 15.5M10 9.5C10 9.5 9.5 10.5 9.5 12.5C9.5 14.5 10 15.5 10 15.5M5.99999 6C5.99999 11.8587 4.63107 20 12 20C19.3689 20 18 11.8587 18 6M4 6H20M15 6V5C15 3.22496 13.3627 3 12 3C10.6373 3 9 3.22496 9 5V6" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      name: `Delete account`,
      fnc: () => { },
      caution: true,
    },
    {
      icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_6900_12469" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25"><rect x="0.128418" y="0.271484" width="24" height="24" fill="#D9D9D9"/></mask><g mask="url(#mask0_6900_12469)"><path d="M1.12842 21.2715L12.1284 2.27148L23.1284 21.2715H1.12842ZM4.57842 19.2715H19.6784L12.1284 6.27148L4.57842 19.2715ZM12.1284 18.2715C12.4118 18.2715 12.6493 18.1757 12.8409 17.984C13.0326 17.7923 13.1284 17.5548 13.1284 17.2715C13.1284 16.9882 13.0326 16.7507 12.8409 16.559C12.6493 16.3673 12.4118 16.2715 12.1284 16.2715C11.8451 16.2715 11.6076 16.3673 11.4159 16.559C11.2243 16.7507 11.1284 16.9882 11.1284 17.2715C11.1284 17.5548 11.2243 17.7923 11.4159 17.984C11.6076 18.1757 11.8451 18.2715 12.1284 18.2715ZM11.1284 15.2715H13.1284V10.2715H11.1284V15.2715Z" fill="red"/></g></svg>`,
      name: `Reset personal data`,
      fnc: () => {
        resetPersonalData().then(() => {
          console.log('resetPersonalData');

          navigation.navigate('DataCollect', { step: 0 } as never)
        })
      },
      caution: true,
    },
    {
      icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_6900_12469" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25"><rect x="0.128418" y="0.271484" width="24" height="24" fill="#D9D9D9"/></mask><g mask="url(#mask0_6900_12469)"><path d="M1.12842 21.2715L12.1284 2.27148L23.1284 21.2715H1.12842ZM4.57842 19.2715H19.6784L12.1284 6.27148L4.57842 19.2715ZM12.1284 18.2715C12.4118 18.2715 12.6493 18.1757 12.8409 17.984C13.0326 17.7923 13.1284 17.5548 13.1284 17.2715C13.1284 16.9882 13.0326 16.7507 12.8409 16.559C12.6493 16.3673 12.4118 16.2715 12.1284 16.2715C11.8451 16.2715 11.6076 16.3673 11.4159 16.559C11.2243 16.7507 11.1284 16.9882 11.1284 17.2715C11.1284 17.5548 11.2243 17.7923 11.4159 17.984C11.6076 18.1757 11.8451 18.2715 12.1284 18.2715ZM11.1284 15.2715H13.1284V10.2715H11.1284V15.2715Z" fill="red"/></g></svg>`,
      name: `Delete local storage`,
      fnc: () => {
        console.log('Delete local storage');

        removeAllUserInfo().then(() => {
          navigation.navigate('LoginOpt')
        })
      },
      caution: true,
    },
  ]

  function renderBtn() {
    return (
      <View style={[styles.flexCol, styles.gap2vw, styles.w100]}>
        {
          btnList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={
                  item.caution ? () => {
                    Alert.alert(
                      'Are you sure?',
                      `You are about to ${item.name.toLowerCase()}. This action cannot be undone.`,
                      [
                        {
                          text: 'Cancel',
                          style: 'cancel'
                        },
                        { text: 'OK', onPress: item.fnc }
                      ]
                    )
                  } : item.fnc
                }
                style={[styles.flexRowBetweenCenter, styles.gap3vw, styles.paddingV3vw, styles.paddingH6vw, { backgroundColor: clrStyle.white, borderRadius: vw(4), borderBottomColor: clrStyle.grey1, borderBottomWidth: 1 }]}>
                <View style={[styles.flexRowStartCenter, styles.gap2vw]}>
                  <SvgXml xml={item.icon} width={vw(6)} height={vw(6)} />
                  <Nunito16Bold style={{ color: clrStyle.grey3 }}>{item.name}</Nunito16Bold>
                </View>
                {sharpRightArrow(vw(4), vw(4), clrStyle.main5)}
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}>
      <TopNav
        title='Settings' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.flexColStartCenter, styles.gap6vw, styles.paddingV4vw, styles.paddingH4vw]}
        style={[styles.flex1]}>

        <View style={[styles.flexColCenter, styles.gap3vw]}>
          <TouchableOpacity
            onPress={() => {
              // open the image picker
              pickImage()
            }}>
            {avatarComponet(vw(20), vw(20))}
          </TouchableOpacity>
          <Nunito18Bold style={[{ color: clrStyle.black }]}>Hello, {userInfo?.name}</Nunito18Bold>
          <Nunito14Reg style={[{ color: clrStyle.grey2 }]}>Welcome back!</Nunito14Reg>
        </View>

        {renderBtn()}

        {marginBottomForScrollView()}
      </ScrollView>
    </SaveViewWithColorStatusBar>
  )
}
