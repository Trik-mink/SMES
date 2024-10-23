import { View, Text } from 'react-native'
import React from 'react'

import * as CLASS from '@/assets/Class'
import * as CTEXT from '@/assets/CustomText'
import styles, { vw } from '@/assets/stylesheet'
import * as COLOR from '@/assets/componentStyleSheet'
import * as SVG from '@/assets/svgXml'
import { Ionicons } from '@expo/vector-icons'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { useNavigation } from 'expo-router'

export default function Onboard() {
  const navigation = useNavigation()
  return (
    <CLASS.SaveViewWithColorStatusBar StatusBarColor={COLOR.clrStyle.black as string} StatusBarLightContent bgColor={COLOR.clrStyle.black as string}>
      <CLASS.ViewColCenter style={[styles.flex1]}>
        <CLASS.ViewColCenter style={[styles.gap2vw, styles.w90, styles.padding6vw, { backgroundColor: COLOR.clrStyle.purple60, borderRadius: vw(8) }]}>
          {SVG.onboarding(vw(50), vw(45))}
          <CTEXT.Nunito28Black>Khám phá ứng dụng</CTEXT.Nunito28Black>
          <CTEXT.Nunito16Reg style={[styles.textCenter, { color: COLOR.clrStyle.white }]}>Bạn có thể tạo tài khoản mới bằng các liên kết dưới đây:</CTEXT.Nunito16Reg>
          <CLASS.RoundBtn
            title="Tiếp tục với Google"
            onPress={() => { }}
            icon={SVG.googleLogo(vw(6), vw(6))}
            textClass={CTEXT.Nunito18Reg}
            bgColor={COLOR.clrStyle.white as string}
            border
            customStyle={{ borderRadius: vw(100), marginTop: vw(6) }}
          />
          <CLASS.RoundBtn
            title="Tiếp tục với Apple"
            onPress={() => { }}
            icon={SVG.appleLogo(vw(6), vw(6))}
            textClass={CTEXT.Nunito18Reg}
            bgColor={COLOR.clrStyle.white as string}
            border
            customStyle={{ borderRadius: vw(100) }}
          />
          <CLASS.RoundBtn
            title="Tiếp tục với Email"
            onPress={() => { navigation.navigate('Login' as never) }}
            icon={<TabBarIcon name='person-add' />}
            textClass={CTEXT.Nunito18Reg}
            bgColor={COLOR.clrStyle.white as string}
            border
            customStyle={{ borderRadius: vw(100) }}
          />
        </CLASS.ViewColCenter>
      </CLASS.ViewColCenter>
    </CLASS.SaveViewWithColorStatusBar>
  )
}