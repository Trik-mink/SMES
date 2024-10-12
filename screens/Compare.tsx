import { View, Text, ScrollView, Animated, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { Nunito12Reg, Nunito14Bold, Nunito14Med, Nunito14Reg, Nunito16Bold, Nunito16Reg, Nunito18Bold, Nunito20Bold, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { SvgXml } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import { getCompareData } from '../data/storageFunc'
import { CompareMajorItem } from '../data/data'
import { editIcon, infoIcon, majorDefault, xIcon } from '../assets/svgXml'
import { formatNumber, marginBottomForScrollView } from '../assets/component'

import * as Progress from 'react-native-progress';

export default function Compare() {
  const navigation = useNavigation();

  const [compare, setCompare] = React.useState<boolean>(false)
  const [compareList, setCompareList] = React.useState<CompareMajorItem[]>([])
  const [visible, setVisible] = React.useState<boolean[]>([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCompareData().then((data) => {
        if (data) {
          setCompareList(data);
        } else {
        }
      });
    });
    return unsubscribe;
  }, [navigation, compareList]);

  function pendingCompare() {
    if (compareList.length > 0) {
      return (
        <View style={[styles.flexCol, styles.gap6vw, styles.paddingH6vw]}>
          <View style={[styles.flexRowStartCenter, styles.w100, styles.gap2vw,]}>
            <SvgXml xml={`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.17855L28.7721 24.5936L32 19.4383L3.25107 1L0 6.17855Z" fill="#94CDED"/><path d="M1.62549 3.60093L30.3977 22.0393L32 19.4383L3.25106 1L1.62549 3.60093Z" fill="#DBDBDB"/><path d="M18.2061 10.3583L16.7198 9.40625L15.1407 11.8678L13.2598 14.7937L15.373 16.1406L18.2061 10.3583Z" fill="#850000"/><path d="M15.3267 13.447C15.5357 14.5849 15.4892 15.1887 14.0727 20.6923C12.6793 26.2191 14.003 28.5181 14.003 28.5181L15.8607 28.193C15.8607 28.193 14.9319 20.8549 15.5124 18.3237C16.093 15.7925 16.0001 13.7024 16.0001 13.7024L15.3267 13.4703V13.447Z" fill="#850000"/><path d="M16.6733 13.2844C18.2524 14.4455 23.0826 17.743 22.6878 21.3192C22.2698 24.8954 21.9447 31.7227 21.9447 31.7227L19.4135 30.6777C20.3424 24.64 20.8533 19.1596 19.1581 17.2554C17.1842 15.0493 16.1392 14.4223 16.1392 14.4223L16.6965 13.2844H16.6733Z" fill="#B80000"/></svg>`} width={vw(8)} height={vw(8)} />
            <Nunito20Bold style={{ color: clrStyle.main5 }}>Choose your option</Nunito20Bold>
          </View>
          {compareList.map((compareItem: any, index: number) => (
            <View key={index} style={[styles.flexCol, styles.gap6vw, { display: visible ? 'flex' : 'none' }]}>
              <TouchableOpacity
                style={[styles.flexRowBetweenCenter, styles.padding10, styles.paddingV4vw, styles.w100, styles.borderRadius3vw, styles.shadowW0H2Black, { backgroundColor: clrStyle.white, borderBottomWidth: 1, borderBottomColor: clrStyle.grey1 }]}
                onPress={() => {
                  navigation.navigate(`MajorDetail`, { major: compareItem.major, uniItem: compareItem.uniItem })
                }}>

                <View style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.flex1]}>
                  {compareItem.major.icon ? compareItem.major.icon(vw(16.5), vw(16.5)) : <View style={{ width: vw(16.5), height: vw(16.5), borderRadius: vw(1) }}>{majorDefault(vw(16.5), vw(16.5))}</View>}
                  <View style={[styles.flex1, styles.flexCol, styles.gap2vw]}>
                    <Nunito20Bold style={{ color: clrStyle.grey3, }}>{compareItem.major.majorName}</Nunito20Bold>
                    <Nunito16Reg style={{ color: clrStyle.grey2, }}>{compareItem.uniItem.name} {compareItem.major.field ? `- ${compareItem.major.field}` : null}</Nunito16Reg>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Remove', 'Are you sure you want to remove this major from compare list?', [{ text: 'Cancel' }, {
                      text: 'OK', onPress: () => {
                        let temp = compareList
                        temp.splice(index, 1)
                        setCompareList(temp)
                        let visibleTemp = [...visible]
                        visibleTemp[index] = false
                        setVisible(visibleTemp)
                      }
                    }])
                  }}
                  style={[styles.flexColCenter, styles.padding1vw]}>
                  {xIcon(vw(6), vw(6), clrStyle.main7)}
                </TouchableOpacity>
              </TouchableOpacity>
              {
                index === compareList.length - 1 ?
                  <TouchableOpacity
                    onPress={() => { navigation.navigate('Search') }}
                    style={[styles.flexRowCenter, styles.paddingV2vw, styles.paddingH4vw, styles.border1, styles.alignSelfCenter, { borderRadius: vw(2), borderColor: clrStyle.grey2 }]}>
                    <Nunito16Reg style={{ color: clrStyle.grey2 }}>Add </Nunito16Reg>
                    <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H20M12 4V20" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />
                  </TouchableOpacity>
                  :
                  <View style={[styles.flexColCenter, styles.w100, styles.paddingH2vw]}>
                    <View style={[styles.w100, styles.positionAbsolute, { borderTopWidth: 2, borderTopColor: clrStyle.grey1 }]} />
                    <View style={[styles.flexColCenter, styles.paddingH4vw, { backgroundColor: clrStyle.white, zIndex: 1 }]}>
                      <Nunito14Bold style={{ color: clrStyle.grey3 }}>with</Nunito14Bold>
                    </View>
                  </View>
              }
            </View>
          ))
          }
          {
            compareList.length > 1 ?
              <TouchableOpacity
                onPress={() => { setCompare(true) }}
                style={[styles.flexRowCenter, styles.paddingV3vw, styles.paddingH4vw, { borderRadius: vw(2), backgroundColor: clrStyle.main6 }]}>
                <Nunito16Bold style={{ color: clrStyle.main5 }}>Start compare</Nunito16Bold>
              </TouchableOpacity>
              : null
          }
        </View >
      )
    } else {
      return (
        <View style={[styles.flexCol, styles.gap6vw, styles.paddingV4vw]}>
          <Nunito16Bold style={{ color: clrStyle.grey3 }}>Please select at least 2 majors to start compare</Nunito16Bold>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Search') }}
            style={[styles.flexRowCenter, styles.paddingV2vw, styles.paddingH4vw, styles.border1, styles.alignSelfCenter, { borderRadius: vw(2), borderColor: clrStyle.grey2 }]}>
            <Nunito16Reg style={{ color: clrStyle.grey2 }}>Add </Nunito16Reg>
            <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H20M12 4V20" stroke="#808797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} />
          </TouchableOpacity>
        </View>
      )
    }
  }

  function inCompare() {
    if (compareList.length === 0) {
      return null
    }
    function compareLayout() {
      // TODO:change it to dynamic percent
      const percent = 50

      return (
        compareList.map((inCompareItem, index) => {
          return (
            <React.Fragment key={index}>
              <View style={[styles.flexCol, styles.gap8vw, styles.w30vw, styles.h100, { marginLeft: index == 0 ? vw(6) : null, marginRight: index == compareList.length - 1 ? vw(6) : 0 }]}>
                {/* icon */}
                <View style={[styles.shadowW0H05Black, styles.flexColCenter, styles.gap2vw, { borderRadius: vw(2), backgroundColor: clrStyle.white }]}>
                  <View style={[styles.flexColCenter, styles.gap1vw, styles.paddingTop2vw, styles.paddingH1vw, { borderTopLeftRadius: vw(2), borderTopRightRadius: vw(2) }]}>
                    {inCompareItem.major.icon ? inCompareItem.major.icon(vw(16.5), vw(16.5)) : <View style={{ width: vw(16.5), height: vw(16.5), borderRadius: vw(1) }}>{majorDefault(vw(16.5), vw(16.5))}</View>}
                    <Nunito12Reg lineNumber={2} style={[styles.textCenter, { color: clrStyle.grey2 }]}>{inCompareItem.uniItem.name}</Nunito12Reg>
                    <Nunito14Med lineNumber={2} style={[styles.textCenter, { color: clrStyle.grey3 }]}>{inCompareItem.major.majorName}</Nunito14Med>
                  </View>
                  <TouchableOpacity
                    onPress={() => { }}
                    style={[styles.flexRowCenter, styles.padding10, styles.w100, { backgroundColor: clrStyle.main5, borderBottomLeftRadius: vw(2), borderBottomRightRadius: vw(2) }]}>
                    <SvgXml xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 2.5V7.5M2.5 7.5H7.5M2.5 7.5C4.43953 5.7595 6.23573 3.78897 8.95444 3.40649C10.5647 3.17995 12.2051 3.48284 13.6282 4.26953C15.0514 5.05622 16.1803 6.28409 16.8449 7.76814M17.5 17.5V12.5M17.5 12.5H12.5M17.5 12.5C15.5605 14.2405 13.7643 16.211 11.0455 16.5935C9.43524 16.82 7.79493 16.5172 6.37175 15.7305C4.94858 14.9438 3.81964 13.7159 3.15503 12.2319" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`} width={vw(6)} height={vw(6)} />
                    <Nunito14Bold style={{ color: clrStyle.white }}>Change</Nunito14Bold>
                  </TouchableOpacity>
                </View>

                {/* comb */}
                <View style={[styles.flexRowCenter, styles.positionRelative, styles.borderRadius2vw, styles.paddingH2vw, styles.paddingV2vw, { borderWidth: 2, borderColor: clrStyle.grey1 }]}>
                  <View style={[styles.positionAbsolute, styles.paddingH2vw, { top: -vw(2.5), backgroundColor: clrStyle.white }]}><Nunito12Reg style={[styles.textCenter, { color: clrStyle.grey2 }]}>Comb</Nunito12Reg></View>
                  {inCompareItem.major.examGroup && inCompareItem.major.examGroup.length > 1 ?

                    <Nunito16Bold style={[styles.flex1, styles.textCenter, { color: clrStyle.main1 }]}>{inCompareItem.major.examGroup.map((item: any) => { return item.name }).join(', ')}</Nunito16Bold>
                    :
                    inCompareItem.major.examGroup && inCompareItem.major.examGroup.length == 1 ?
                      <Nunito16Bold style={{ color: clrStyle.main1 }}>{inCompareItem.major.examGroup[0].name}</Nunito16Bold>
                      : <Nunito16Bold style={{ color: clrStyle.main1 }}>No exam group</Nunito16Bold>
                  }
                </View>

                {/* Tuition */}
                <View style={[styles.flexRowCenter, styles.positionRelative, styles.borderRadius2vw, styles.paddingV2vw, { borderWidth: 2, borderColor: clrStyle.grey1 }]}>
                  <View style={[styles.positionAbsolute, styles.paddingH2vw, { top: -vw(2.5), backgroundColor: clrStyle.white }]}><Nunito12Reg style={[styles.textCenter, { color: clrStyle.grey2 }]}>Tuition</Nunito12Reg></View>
                  <Nunito16Bold style={[styles.textCenter, { color: clrStyle.main3 }]}>{inCompareItem.major.majorFee ? formatNumber(inCompareItem.major.majorFee) : inCompareItem.uniItem.minFee ? formatNumber(inCompareItem.uniItem.minFee) : `N/A`} <Nunito12Reg style={{ color: clrStyle.grey2 }}>{inCompareItem.uniItem.minFee || inCompareItem.major.majorFee ? `/${inCompareItem.uniItem.unitFee} /${inCompareItem.uniItem.yearOrSemForFee}` : null}</Nunito12Reg></Nunito16Bold>
                </View>

                {/* score */}
                <View style={[styles.flexRowCenter, styles.positionRelative, styles.borderRadius2vw, styles.paddingH4vw, styles.paddingV2vw, { borderWidth: 2, borderColor: clrStyle.grey1 }]}>
                  <View style={[styles.positionAbsolute, styles.paddingH2vw, { top: -vw(2.5), backgroundColor: clrStyle.white }]}><Nunito12Reg style={[styles.textCenter, { color: clrStyle.grey2 }]}>Score</Nunito12Reg></View>
                  {inCompareItem.major.examGroup && inCompareItem.major.examGroup.length > 1 ?

                    <View style={[styles.w100]}>
                      {
                        inCompareItem.major.examGroup.map((item: any, index: number) => {
                          return (
                            <Nunito14Bold key={index} style={[styles.flex1, styles.textCenter, { color: clrStyle.grey2 }]}>{item.name}: <Nunito16Bold style={{ color: clrStyle.main1 }}>{item.lowestStandardScore}</Nunito16Bold></Nunito14Bold>
                          )
                        })
                      }
                    </View>

                    :
                    inCompareItem.major.examGroup && inCompareItem.major.examGroup.length == 1 ?
                      <Nunito16Bold style={{ color: clrStyle.main1 }}>{inCompareItem.major.examGroup[0].lowestStandardScore}</Nunito16Bold>
                      : <Nunito16Bold style={{ color: clrStyle.main1 }}>No score</Nunito16Bold>
                  }
                </View>
                <View style={[styles.flexRowCenter, styles.positionRelative]}>
                  <View style={[styles.positionAbsolute, styles.flexColCenter]}>
                    <Nunito14Reg style={{ color: clrStyle.grey2 }}>Matching</Nunito14Reg>
                    <Nunito16Bold style={{ color: clrStyle.main5 }}>{percent}%</Nunito16Bold>
                  </View>
                  <Progress.Circle thickness={vw(2)} strokeCap='round' color={clrStyle.main5} unfilledColor={clrStyle.grey1} borderWidth={0} size={vw(25)} progress={percent / 100} animated={true} />
                </View>

              </View>
              {index < compareList.length - 1 ?
                <View style={[styles.h100, styles.positionRelative, styles.flexRow, styles.justifyContentCenter, { width: 1, borderLeftWidth: 1, borderLeftColor: clrStyle.grey1 }]}>
                  <View style={[styles.positionAbsolute, styles.paddingV2vw, styles.marginTop10vh, { backgroundColor: clrStyle.white }]}><Nunito18Bold style={[{ color: clrStyle.main5, }]}>VS</Nunito18Bold></View>
                </View>
                : null}
            </React.Fragment>
          )
        })
      )

    }
    if (compareList.length > 2) {
      return (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={[styles.flex1, styles.w100, styles.paddingV4vw]}
          contentContainerStyle={[styles.flexRow, styles.justifyContentSpaceEvenly, styles.gap6vw,]}>
          {compareLayout()}
        </ScrollView>
      )
    } else {
      return (
        <View
          style={[styles.flexRow, styles.justifyContentSpaceEvenly, styles.gap6vw, styles.w100]}>
          {compareLayout()}
        </View>
      )
    }
  }

  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}>
      <Animated.View style={[styles.flex1]}>
        <TopNav
          title='Compare'
          returnPreScreen={compare}
          returnPreScreenFnc={() => { setCompare(false) }}
          rightIcon={!compare ? infoIcon(vw(6), vw(6)) : editIcon(vw(6), vw(6))}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.flexColStartCenter, styles.gap4vw, styles.paddingV4vw,]}
          style={[styles.flex1]}>

          {!compare ? pendingCompare() : inCompare()}
          {marginBottomForScrollView()}
        </ScrollView>
      </Animated.View>
    </SaveViewWithColorStatusBar>
  )
}