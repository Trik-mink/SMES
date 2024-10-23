import { View, Text } from 'react-native'
import React from 'react'

import * as CLASS from '@/assets/Class'
import * as CTEXT from '@/assets/CustomText'
import * as USERSTYLE from '@/assets/stylesheet'
import * as COLOR from '@/assets/componentStyleSheet'

export default function index() {
  return (
    <CLASS.SaveViewWithColorStatusBar bgColor={COLOR.clrStyle.black as string} StatusBarLightContent>
      
    </CLASS.SaveViewWithColorStatusBar>
  )
}