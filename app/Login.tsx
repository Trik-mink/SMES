import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import * as CLASS from '@/assets/Class'
import * as CTEXT from '@/assets/CustomText'
import styles, { vw } from '@/assets/stylesheet'
import * as COLOR from '@/assets/componentStyleSheet'
import * as SVG from '@/assets/svgXml'
import { Ionicons } from '@expo/vector-icons'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { useNavigation } from 'expo-router'

export default function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [showPass, setShowPass] = React.useState(false)

  return (
    <CLASS.SaveViewWithColorStatusBar StatusBarColor={COLOR.clrStyle.purple60 as string} StatusBarLightContent bgColor={COLOR.clrStyle.purple60 as string}>
      <CLASS.ViewColCenter style={[styles.flex1]}>
        <CLASS.ViewColCenter style={[styles.gap2vw, styles.w90, styles.padding6vw, { backgroundColor: COLOR.clrStyle.purple30, borderRadius: vw(8) }]}>
          {SVG.onboarding(vw(50), vw(45))}
          <CTEXT.Nunito28Black>Đăng nhập</CTEXT.Nunito28Black>

          <CLASS.BoardingInput
            title='Email'
            value={email}
            onChgText={(value: string | number) => setEmail(value.toString())}
            CustomStyleText={[styles.textLeft, styles.w90, { color: COLOR.clrStyle.grey60 as string, }]}
            TitleFontClass={CTEXT.Nunito16Reg}
            placeholder="Email bạn đã đăng ký"
            passiveColor={COLOR.clrStyle.grey10 as string}
            CustomStyleClass={[styles.w100, styles.gap2vw]}
            CustomStyleInput={[styles.borderRadius20, styles.padding4vw, styles.textLeft, {}]}
            autoCap='none'
            contentType='emailAddress'
          />
          <CLASS.BoardingInput
            title='Mật khẩu'
            value={password}
            onChgText={(value: string | number) => setPassword(value.toString())}
            CustomStyleText={[styles.textLeft, styles.w90, { color: COLOR.clrStyle.grey60 as string, }]}
            TitleFontClass={CTEXT.Nunito16Reg}
            placeholder="Mật khẩu của bạn"
            passiveColor={COLOR.clrStyle.grey10 as string}
            CustomStyleClass={[styles.w100, styles.gap2vw]}
            CustomStyleInput={[styles.borderRadius20, styles.padding4vw, styles.textLeft, {}]}
            autoCap='none'
            contentType='password'
            hideContent={showPass}
            hideContentFnc={() => setShowPass(!showPass)}
          />

          <CLASS.RoundBtn
            title="Đăng nhập"
            onPress={() => { }}
            icon={<TabBarIcon name='log-in' />}
            textClass={CTEXT.Nunito18Bold}
            bgColor={COLOR.clrStyle.purple60 as string}
            border
            customStyle={[styles.justifyContentCenter, { borderRadius: vw(100), }]}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Register' as never)}
            style={[styles.marginVertical4vw]}
          >
            <CTEXT.Nunito16Med style={{ color: COLOR.clrStyle.purple60 }}>Chưa có tài khoản? Đăng ký</CTEXT.Nunito16Med>
          </TouchableOpacity>
        </CLASS.ViewColCenter>
      </CLASS.ViewColCenter>
    </CLASS.SaveViewWithColorStatusBar>
  )
}