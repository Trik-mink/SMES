import { View, Text, TextInput, TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { BoardingPicking, LowBtn, Nunito12Bold, Nunito12Med, Nunito14Bold, Nunito14Med, Nunito14Reg, Nunito16Bold, Nunito18Bold, SaveViewWithColorStatusBar, TopNav } from '../../../assets/Class'
import clrStyle, { componentStyle } from '../../../assets/componentStyleSheet'
import { adjustIcon, searchIcon, sharpLeftArrow, sharpXIcon, xIcon } from '../../../assets/svgXml'
import { useNavigation } from '@react-navigation/native'
import styles, { vh, vw } from '../../../assets/stylesheet'
import { RecentSearch, universityList } from '../../../data/data'
import { Slider } from '@miblanchard/react-native-slider';
import { formatNumber, marginBottomForScrollView } from '../../../assets/component'
import { getRecentSearch, saveRecentSearch } from '../../../data/storageFunc'
import { examGroupList } from '../../../data/data'

export default function Search() {
  const navigation = useNavigation()

  const [searchText, setSearchText] = React.useState<string>('')
  const [result, setResult] = React.useState<any[]>([])

  useEffect(() => {
    setResult(searchUniFnc(searchText))
  }, [searchText])

  // get search history _______________________________________________________
  const [recentSearch, setRecentSearch] = React.useState<RecentSearch[]>()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getRecentSearch().then((ren) => {
        if (ren) { setRecentSearch(ren) }
      });
    })

    return unsubscribe
  }, [navigation])

  // show filter animation _______________________________________________________
  const [showFilter, setShowFilter] = React.useState<boolean>(false)

  useEffect(() => {
    renderShowFilterAnimation(showFilter)
  }, [showFilter])

  const showFilterAnimate = useRef(new Animated.Value(0)).current
  const showFilterAnimation = showFilterAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [vh(0), vh(70)]
  })
  const scrollViewOpaAnimation = showFilterAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5]
  })
  const showFilterOpaAnimation = showFilterAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })
  function renderShowFilterAnimation(trigger: boolean) {
    Animated.timing(showFilterAnimate, {
      toValue: trigger ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }

  // slider data set section _______________________________________________________
  const [minSlide1, setMinSlide1] = React.useState<number>(0)
  const [maxSlide1, setMaxSlide1] = React.useState<number>(1)
  const [minSlide2, setMinSlide2] = React.useState<number>(0.003)
  const [maxSlide2, setMaxSlide2] = React.useState<number>(1)
  const [maxScore, setMaxScore] = React.useState<number>(0)
  const [minScore, setMinScore] = React.useState<number>(0)
  const [maxFee, setMaxFee] = React.useState<number>(0)
  const [minFee, setMinFee] = React.useState<number>(0)

  useEffect(() => {
    setMaxScore(Math.round(maxSlide1 * 60))
    setMinScore(Math.round(minSlide1 * 60))
  }, [minSlide1, maxSlide1,])

  useEffect(() => {
    setMaxFee(maxSlide2 * 500000000)
    setMinFee(minSlide2 * 500000000)
  }, [minSlide2, maxSlide2,])

  class SliderInput extends React.Component<
    {
      minvalue: number,
      maxvalue: number,
      onchangeMax: (value: number) => void,
      onchangeMin: (value: number) => void
      showMinValue: number
      showMaxValue: number
      step: number
      thumbTintColor?: string
      minimumTrackTintColor?: string
      formatNumber?: boolean
    }> {
    state = {
      value: [this.props.minvalue, this.props.maxvalue]
    };
    render() {
      return (
        <>
          <Slider
            thumbTintColor={this.props.thumbTintColor}
            minimumTrackTintColor={this.props.minimumTrackTintColor}
            value={this.state.value}
            step={this.props.step}
            onValueChange={value => {
              this.setState({ value })
            }}
            onSlidingComplete={(value) => {
              this.props.onchangeMin(value[0])
              this.props.onchangeMax(value[1])
            }}
          />
          <View style={[styles.flexRowCenter, styles.gap4vw]}>
            <View style={[styles.flexRowCenter, styles.gap1vw, styles.border1, { borderColor: clrStyle.grey2, padding: vw(2.5), borderRadius: vw(2), }]}>
              <Nunito14Reg style={[{ color: clrStyle.grey2 }]}>Min |</Nunito14Reg>
              <TextInput
                value={
                  this.props.formatNumber ? formatNumber(this.props.showMinValue) : this.props.showMinValue.toString()
                }
                editable={false}
                onChangeText={(text) => this.props.onchangeMin(parseInt(text))}
                style={[styles.textCenter, { fontFamily: 'Nunito-Bold', fontSize: vw(4), color: this.props.thumbTintColor }]} />
            </View>
            <View style={[styles.flexRowCenter, styles.gap1vw, styles.border1, { borderColor: clrStyle.grey2, padding: vw(2.5), borderRadius: vw(2), }]}>
              <Nunito14Reg style={[{ color: clrStyle.grey2 }]}>Max |</Nunito14Reg>
              <TextInput
                value={
                  this.props.formatNumber ? formatNumber(this.props.showMaxValue) : this.props.showMaxValue.toString()
                }
                editable={false}
                onChangeText={(text) => this.props.onchangeMax(parseInt(text))}
                style={[styles.textCenter, { fontFamily: 'Nunito-Bold', fontSize: vw(4), color: this.props.thumbTintColor }]} />
            </View>
          </View>
        </>
      );
    }
  }
  // end of slider data set section _______________________________________________________

  // tag picker section _______________________________________________________
  const [selectComb, setSelectComb] = React.useState<string[]>([])
  const [selectField, setSelectField] = React.useState<string[]>([])
  const [otherComb, setOtherComb] = React.useState<string>('')
  const [otherField, setOtherField] = React.useState<string>('')

  const [fieldList, setFieldList] = useState<string[]>([`Economics`, `Science`, `Engineering`, `Art`, `Medicine`, `Education`, `Social Science`, `other`])
  const [combList, setCombList] = useState<string[]>([`A00`, `A01`, `A02`, `B00`, `B01`, `B02`, `C00`, `D00`, `D01`, `D02`, `other`])
  const orginFieldList: string[] = [`Economics`, `Science`, `Engineering`, `Art`, `Medicine`, `Education`, `Social Science`, `other`]
  const orginCombList: string[] = [`A00`, `A01`, `A02`, `B00`, `B01`, `B02`, `C00`, `D00`, `D01`, `D02`, `other`]
  const examGroupKey: string[] = Object.keys(examGroupList)
  // TODO: update the fieldGroupKey with real data
  // TODO: update and check the search engine with real data
  const fieldGroupKey: string[] = [`Economics`, `Science`, `Engineering`, `Art`, `Medicine`, `Education`, `Social Science`, `Law`, `Accounting`, `Architecture`, `Business`,]
  function renderCombSelect() {
    // get the key of the examGroupList

    useEffect(() => {
      if (otherComb) {
        if (!selectComb.includes(otherComb) && examGroupKey.includes(otherComb)) {
          if (orginCombList.includes(otherComb)) {
            return setSelectComb([...selectComb, otherComb])
          }
          setSelectComb([...selectComb, otherComb])
          setCombList([...combList, otherComb])
        } else if (otherComb.includes(',')) {
          otherComb.split(',').map((item) => {
            item.trim()
            if (!selectComb.includes(item) && examGroupKey.includes(item)) {
              if (orginCombList.includes(item)) {
                return setSelectComb([...selectComb, item])
              }
              setSelectComb([...selectComb, item])
              setCombList([...combList, item])
            }
          })
        }
      }
    }, [otherComb, selectComb])

    return (
      <>
        <Nunito16Bold style={[{ color: clrStyle.grey3 }]}>Combination</Nunito16Bold>
        <BoardingPicking
          data={combList}
          selected={selectComb}
          originalData={orginCombList}
          setSelected={setSelectComb as React.Dispatch<React.SetStateAction<string[]>>}
          deleteFromOriginal={combList}
          deleteFromOriginalFnc={setCombList as React.Dispatch<React.SetStateAction<string[]>>}
          deleteFromOtherSelected1={otherComb}
          deleteFromOtherSelectedFnc1={setOtherComb as React.Dispatch<React.SetStateAction<string>>}
        />
        {selectComb.includes('other') ?
          <TextInput
            placeholder='Other comb, saparate by comma (,)'
            placeholderTextColor={clrStyle.grey2}
            value={otherComb}
            autoCapitalize='characters'
            onChangeText={setOtherComb}
            style={[styles.w100, styles.border1, styles.textCenter, { borderColor: otherComb ? clrStyle.main5 : clrStyle.grey2, padding: vw(2.5), fontFamily: 'Nunito-Bold', fontSize: vw(4), borderRadius: vw(2), color: otherComb ? clrStyle.main5 : clrStyle.grey2 }]} />
          : null
        }
      </>
    )
  }

  function renderFieldSelect() {
    useEffect(() => {
      if (otherField) {
        if (!selectField.includes(otherField) && fieldGroupKey.includes(otherField)) {
          if (orginFieldList.includes(otherField)) {
            return setSelectField([...selectField, otherField])
          }
          setSelectField([...selectField, otherField])
          setFieldList([...fieldList, otherField])
        } else if (otherField.includes(',')) {
          otherField.split(',').map((item) => {
            item.trim()
            if (!selectField.includes(item) && fieldGroupKey.includes(item)) {
              if (orginFieldList.includes(item)) {
                return setSelectField([...selectField, item])
              }
              setSelectField([...selectField, item])
              setFieldList([...fieldList, item])
            }
          })
        }
      }
    }, [otherField, selectField])

    return (
      <>
        <Nunito16Bold style={[{ color: clrStyle.grey3 }]}>Majors</Nunito16Bold>
        <BoardingPicking
          data={fieldList}
          selected={selectField}
          originalData={orginFieldList}
          setSelected={setSelectField as React.Dispatch<React.SetStateAction<string[]>>}
          deleteFromOriginal={fieldList}
          deleteFromOriginalFnc={setFieldList as React.Dispatch<React.SetStateAction<string[]>>}
          deleteFromOtherSelected1={otherField}
          deleteFromOtherSelectedFnc1={setOtherField as React.Dispatch<React.SetStateAction<string>>}
        />
        {selectField.includes('other') ?
          <TextInput
            placeholder='Other field, saparate by comma (,)'
            placeholderTextColor={clrStyle.grey2}
            value={otherField}
            onChangeText={setOtherField}
            style={[styles.w100, styles.border1, styles.textCenter, { borderColor: otherField ? clrStyle.main5 : clrStyle.grey2, padding: vw(2.5), fontFamily: 'Nunito-Bold', fontSize: vw(4), borderRadius: vw(2), color: otherField ? clrStyle.main5 : clrStyle.grey2 }]} />
          : null
        }
      </>
    )
  }

  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}
    >
      {/* HomeNameBar */}
      <View style={[styles.paddingH4vw, styles.paddingBottom4vw, styles.paddingTop2vw, styles.overflowHidden, styles.flexRowCenter, styles.gap4vw, { backgroundColor: clrStyle.main5, borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }]}>
        <TouchableOpacity
          style={[styles.padding2vw]}
          onPress={() => navigation.goBack()}>
          {sharpLeftArrow(vw(6), vw(6), 'white')}
        </TouchableOpacity>
        <View style={[styles.borderRadius10, styles.flex1, styles.overflowHidden, styles.flexRowStartCenter, styles.paddingLeft2vw, { backgroundColor: clrStyle.white }]}>
          {searchIcon(vw(6), vw(6), clrStyle.grey2)}
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search"
            placeholderTextColor={clrStyle.grey2}
            style={[styles.flex1, styles.padding2vw, { backgroundColor: clrStyle.white, fontFamily: 'Nunito-Thin', fontSize: vw(4) }]} />
          <TouchableOpacity
            style={[styles.padding2vw]}
            onPress={() => setSearchText('')}>
            {xIcon(vw(6), vw(6))}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => { setShowFilter(!showFilter) }}
          style={[styles.padding2vw, styles.borderRadius10, { backgroundColor: clrStyle.white }]}>
          {adjustIcon(vw(6), vw(6))}
        </TouchableOpacity>
      </View>

      {/* Search Result */}
      <Animated.ScrollView style={[styles.paddingH6vw, styles.paddingTop2vw, styles.flex1, { opacity: scrollViewOpaAnimation }]}>
        {
          searchText.trim() === '' ?
            // if no search
            <View style={[styles.flexCol, styles.paddingV2vw]}>
              <Nunito16Bold style={[styles.marginVertical2vw, { color: clrStyle.black }]}>Recent search</Nunito16Bold>
              {Array.isArray(recentSearch) ?
                recentSearch.map((item: RecentSearch, index: number) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.paddingTop1vw, styles.marginTop4vw, { borderBottomColor: clrStyle.grey1, borderBottomWidth: 1 }]}
                    onPress={() => {
                      setSearchText(item.uniName)
                    }}
                  >
                    <Nunito14Med style={[{ color: clrStyle.main1 }]}>{item.uniName.toUpperCase()} {item.uniShortName ? <Nunito12Med style={[{ color: clrStyle.grey3 }]}>({item.uniShortName})</Nunito12Med> : null}</Nunito14Med>
                    <Nunito12Bold style={{ color: clrStyle.grey2 }}>{item.field}</Nunito12Bold>
                  </TouchableOpacity>
                )) : null
              }
            </View> :
            // if no result
            result.length === 0 ?
              <View style={[styles.flexColCenter, styles.paddingV2vw]}>
                <Text style={[{ color: clrStyle.grey2 }]}>No result found</Text>
              </View> :
              // if have result
              result.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.paddingV2vw, styles.marginVertical2vw, { borderBottomColor: clrStyle.grey1, borderBottomWidth: 1 }]}
                  onPress={() => {
                    let recent: RecentSearch = {
                      indexNum: 1,
                      uniName: item.name,
                      uniShortName: item.shortName,
                      field: item.field,
                    }
                    if (recentSearch) {
                      if (!recentSearch.some((item) => item.uniName === recent.uniName)) {
                        saveRecentSearch([...recentSearch, recent])
                      }
                    } else {
                      saveRecentSearch([recent])
                    }
                    navigation.navigate('UniversityDetail', { item });
                  }}
                >
                  <Nunito14Bold style={[{ color: clrStyle.main1 }]}>{item.name.toUpperCase()} {item.shortName ? <Nunito14Reg style={[{ color: clrStyle.grey3 }]}>({item.shortName})</Nunito14Reg> : null}</Nunito14Bold>
                  <Nunito12Bold style={{ color: clrStyle.grey2 }}>{item.city} - {item.major.length > 0 ? <Nunito12Bold>{item.major.length} Major(s) and Program(s) - </Nunito12Bold> : null}score: {item.lowestStandardScore}+</Nunito12Bold>
                </TouchableOpacity>
              ))}
      </Animated.ScrollView>

      {/* Filter */}
      <Animated.View style={[styles.w100, styles.zIndex1, componentStyle.filterShadow, styles.paddingV4vw, styles.paddingH6vw, { height: showFilterAnimation, borderTopRightRadius: vw(6), borderTopLeftRadius: vw(6), backgroundColor: clrStyle.white, opacity: showFilterOpaAnimation }]}>
        <View style={[styles.flexRowBetweenCenter, styles.paddingH2vw, { borderBottomWidth: 1, borderBlockColor: clrStyle.grey2 }]}>
          <Nunito18Bold style={{ color: clrStyle.main5 }}>Filter</Nunito18Bold>
          <TouchableOpacity
            onPress={() => setShowFilter(false)}
            style={[styles.padding3vw, styles.borderRadius10,]}>
            {sharpXIcon(vw(6), vw(6))}
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.flexCol, styles.gap4vw, styles.paddingV4vw]}>
          <Nunito16Bold>Score range</Nunito16Bold>
          <SliderInput
            step={1 / 60}
            minvalue={minSlide1}
            maxvalue={maxSlide1}
            onchangeMax={(value) => setMaxSlide1(value)}
            onchangeMin={(value) => setMinSlide1(value)}
            showMinValue={minScore}
            showMaxValue={maxScore}
            thumbTintColor={clrStyle.main1}
            minimumTrackTintColor={clrStyle.main2}
          />
          {renderCombSelect()}
          {renderFieldSelect()}
          <Nunito16Bold>Fee range/ (semester or year)</Nunito16Bold>
          <SliderInput
            step={0.001}
            minvalue={minSlide2}
            maxvalue={maxSlide2}
            onchangeMax={(value) => setMaxSlide2(value)}
            onchangeMin={(value) => setMinSlide2(value)}
            showMinValue={minFee}
            showMaxValue={maxFee}
            thumbTintColor={clrStyle.main3}
            minimumTrackTintColor={clrStyle.main4}
            formatNumber={true}
          />

          {marginBottomForScrollView(3)}
        </ScrollView>
        <View style={[styles.padding4vw, componentStyle.upperShadow, styles.w100vw, styles.positionAbsolute, { bottom: 0, left: 0, backgroundColor: clrStyle.white }]}>
          <LowBtn
            title='Apply Filter'
            onPress={() => setResult(filterUniFnc(result, minScore, maxScore, minFee, maxFee, selectComb, selectField))}
            round={vw(2)}
            CustomStyle={[styles.w100]}
          />
        </View>
      </Animated.View>
    </SaveViewWithColorStatusBar >
  )
}

export const searchUniFnc = (searchText: string) => {
  if (searchText.trim() === '') { return [] }
  const filteredData = universityList.filter((item) => {
    if (item.name) { return item.name.toLowerCase().includes(searchText.trim().toLowerCase()) }
    else { return false }
  })
  return filteredData
}

export const filterUniFnc = (data: any[], minScore: number, maxScore: number, minFee: number, maxFee: number, selectComb: string[], selectField: string[]) => {
  const filteredData = data.filter((item) => {
    if (item.lowestStandardScore) {
      if (item.lowestStandardScore >= minScore && item.lowestStandardScore <= maxScore && item.fee >= minFee && item.fee <= maxFee) {
        return true
      }
      else { return false }
    }
    else { return false }
  })

  // if (selectComb.length > 0) {
  //   return filteredData.filter((item) => {
  //     if (item.field) {
  //       if (selectComb.includes(item.field)) {
  //         return true
  //       }
  //       else { return false }
  //     }
  //     else { return false }
  //   })
  // }

  return filteredData
}

