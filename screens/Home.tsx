import { View, Text, TouchableOpacity, Animated, Image, ImageStyle, FlatList, Easing, ScrollView, ImageBackground, Linking } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getUserInfo } from '../data/storageFunc'
import { BannerSliderWithCenter, BottomBar, Nunito12Bold, Nunito12Reg, Nunito14Bold, Nunito14Reg, Nunito16Bold, Nunito18Bold, Nunito20Bold, SaveViewWithColorStatusBar, TopNav } from '../assets/Class'
import clrStyle, { componentStyle } from '../assets/componentStyleSheet'
import styles, { vh, vw } from '../assets/stylesheet'
import { curveRightArrow, searchIcon } from '../assets/svgXml'
import { bannerList, suitableForYou, bestOfEconomic, bestOfScience } from '../data/data'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { avatarComponet, marginBottomForScrollView } from '../assets/component'

export default function Home() {
  const navigation = useNavigation();

  const [currentBanner, setCurrentBanner] = useState<number>(0)
  const [userInfo, setUserInfo] = useState<any>(null)

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res);
    })
  }, [userInfo])

  // Animation generator
  function renderAnimation(itemIndex: number, currentIndex: number) {
    const animation = new Animated.Value(0); // Initialize animation value
    const scaleAnimation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.25]
    });

    const scaleSliderDotAnimation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [vw(1.5), vw(4)]
    });

    const bgSliderDotAnimation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [clrStyle.grey2, clrStyle.main5]
    });

    function runAnimation(isCurrent: boolean) {
      Animated.timing(animation, {
        toValue: isCurrent ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }).start();
    }

    if (itemIndex === currentIndex) {
      runAnimation(true); // Scale up for the current item
    } else {
      runAnimation(false)
    }

    return { scaleAnimation, scaleSliderDotAnimation, bgSliderDotAnimation };
  }
  // End of Animation generator

  // Banner Section
  const itemWidth = vw(60);
  const itemHeight = vh(18);
  const itemMargin = vw(20);
  // Render item fomat for the banner
  const renderBanner = ({ item, index }: { item: any, index: number }) => {
    const { scaleAnimation } = renderAnimation(index, currentBanner); // Pass the required arguments to the renderAnimation function
    return (
      <Animated.View key={item.id} style={[styles.borderRadius20, styles.overflowHidden, styles.shadowW0H1Black, styles.bgcolorBlack,
      {
        width: itemWidth,
        height: itemHeight,
        marginLeft: index == 0 ? itemMargin : 0,
        marginRight: index == bannerList.length - 1 ? itemMargin : 0,
        transform: [{ scale: scaleAnimation }],
      }
      ]}>
        <TouchableOpacity
          onPress={
            () => {
              Linking.openURL(item.naviTo).catch(err => console.error('An error occurred', err))
            }
          }>
          <Animated.Image source={item.img} style={[styles.w100, styles.h100, { resizeMode: 'cover', transform: [{ translateX: 0 }] }] as ImageStyle} />
        </TouchableOpacity>
      </Animated.View>
    );
  };
  // End of Banner Section

  // Suitable for you Section
  // Render item format for suitable for you
  const renderSuitableForYou = ({ item, index }: { item: any, index: number }) => {
    return (
      <View style={[styles.borderRadius10, styles.overflowHidden, styles.shadowW0H1Black, { width: vw(53), height: vw(58), backgroundColor: 'white', marginLeft: index == 0 ? vw(4) : 0, marginRight: index == suitableForYou.length - 1 ? vw(4) : 0 }]}>
        <ImageBackground source={item.img} style={[styles.flex1]}>
          <LinearGradient colors={['rgba(255,255,255,0.0)', 'rgba(255,255,255,1)']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 1 }} style={[styles.flex1, styles.justifyContentEnd, styles.padding2vw]} />
        </ImageBackground>
        <View style={[styles.bgcolorWhite, styles.padding3vw, styles.flexCol, styles.gap1vw]}>
          <Nunito16Bold lineNumber={1}>{item.title}</Nunito16Bold>
          <View style={[styles.flexRow, styles.gap1vw]}>
            <View style={[styles.paddingV1vw, styles.paddingH2vw, { borderRadius: vw(1.5), backgroundColor: clrStyle.main2 }]}><Nunito12Bold style={{ color: clrStyle.main1 }}>Score {item.minScore}+</Nunito12Bold></View>
            <View style={[styles.paddingV1vw, styles.paddingH2vw, { borderRadius: vw(1.5), backgroundColor: clrStyle.main8 }]}><Nunito12Bold style={{ color: clrStyle.main7 }}>{item.majorNum} Majors</Nunito12Bold></View>
          </View>
          <Nunito16Bold lineNumber={1} style={[{ color: clrStyle.main3 }]}>{item.unitFee}{item.minFee}~{item.maxFee}<Nunito14Reg style={{ color: clrStyle.grey2 }}>/{item.yearOrSemForFee}</Nunito14Reg></Nunito16Bold>
        </View>
      </View>
    )
  }
  // End of Suitable for you Section

  // Track the Y position of the ScrollView
  const [showTopNav, setShowTopNav] = useState<boolean>(false);
  const topNavHeight = vh(20);
  const topNavHideAnimation = useRef(new Animated.Value(0)).current;
  const topNavMove = topNavHideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [vw(16), 0]
  });
  useEffect(() => {
    Animated.timing(topNavHideAnimation, {
      toValue: showTopNav ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [showTopNav])

  return (
    <SaveViewWithColorStatusBar
      StatusBarColor={clrStyle.main5}
      StatusBarLightContent={true}
      bgColor={clrStyle.white}
    >
      <TopNav
        title='College Search'
        rightIcon={searchIcon(vw(6), vw(6), 'white')}
        rightFnc={() => navigation.navigate('Search')}
        hideChildren={topNavMove}
      >
        {/* HomeNameBar */}
        <View style={[styles.flexRowBetweenCenter, styles.paddingBottom2vw, styles.paddingH2vw, styles.paddingTop2vw]}>
          <View style={[styles.flexCol, styles.gap1vw]}>
            <Nunito18Bold style={[{ color: 'white' }]}>Hello, {userInfo?.name}</Nunito18Bold>
            <Nunito14Bold style={[{ color: clrStyle.main6 }]}>Welcome back!</Nunito14Bold>
          </View>
          {avatarComponet()}
        </View>
      </TopNav>

      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(e) => { setShowTopNav(e.nativeEvent.contentOffset.y > topNavHeight ? true : false) }}
        style={[styles.flex1]}>
        {/* banner */}
        <BannerSliderWithCenter
          data={bannerList}
          renderBanner={renderBanner}
          currentIndex={currentBanner}
          setCurrentIndex={setCurrentBanner}
          itemWidth={itemWidth}
          customStyle={[styles.marginTop8vw, { height: itemHeight * 1.25 }]}
        />
        <View style={[styles.w80vw, styles.borderRadius10, styles.alignSelfCenter, styles.shadowW0H05Black, { paddingVertical: vw(2.5), paddingHorizontal: vw(5), backgroundColor: clrStyle.main5, transform: [{ translateY: -vw(2) }] }]}>
          <Nunito14Bold lineNumber={2} style={[styles.flex1, { color: clrStyle.white }]}>{bannerList[currentBanner].title}</Nunito14Bold>
        </View>
        <View style={[styles.flexRowCenter, styles.gap2vw,]}>
          {bannerList.map((item, index) => {
            const { scaleSliderDotAnimation, bgSliderDotAnimation } = renderAnimation(index, currentBanner);
            return (
              <Animated.View key={index} style={[styles.borderRadius100, { width: scaleSliderDotAnimation, height: vw(1.5), backgroundColor: bgSliderDotAnimation }]} />
            )
          })}
        </View>
        {/* end of banner */}

        {/* suitable for you */}
        <View style={[styles.marginTop6vw, styles.flexCol, styles.gap4vw]}>
          <View style={[styles.flexRowBetweenCenter, styles.paddingH4vw]}>
            <Nunito16Bold>Suitable for you</Nunito16Bold>
            <TouchableOpacity
              onPress={() => {
                console.log('see all');
                // TODO: do something
              }}>
              {curveRightArrow(vw(6), vw(6))}
            </TouchableOpacity>
          </View>
          <FlatList
            data={suitableForYou}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSuitableForYou}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.gap4vw, styles.paddingBottom2vw]}
          />
        </View>
        {/* end of Suitable */}

        <View style={[styles.paddingV2vw, styles.paddingH4vw]}>

          <View style={[styles.paddingV1vw, styles.marginLeft4vw, styles.wfit, { backgroundColor: clrStyle.white, top: vw(3), zIndex: 1 }]}>
            <Nunito16Bold style={[styles.paddingH2vw, { color: clrStyle.main1, }]}>Best of science</Nunito16Bold>
          </View>
          <View style={[styles.flexRowBetweenCenter, styles.borderRadius4vw, { borderWidth: 2, borderColor: clrStyle.main2 }]}>
            {bestOfScience.map((item, index) => {
              return (
                <TouchableOpacity key={index}
                  onPress={() => {
                    // TODO: do something
                  }}
                  style={[styles.flexColStartCenter, styles.paddingV4vw, { width: vw(90) / 3 }]}>
                  {item.icon && item.icon}
                  <Nunito12Reg lineNumber={1} style={[styles.paddingTop1vw, { color: clrStyle.grey2 }]}>{item.description}</Nunito12Reg>
                  <Nunito18Bold lineNumber={1} style={{ color: clrStyle.main1 }}>{item.title}</Nunito18Bold>
                </TouchableOpacity>
              )
            })}
          </View>

          <View style={[styles.paddingV1vw, styles.marginLeft4vw, styles.wfit, { backgroundColor: clrStyle.white, top: vw(3), zIndex: 1 }]}>
            <Nunito16Bold style={[styles.paddingH2vw, { color: clrStyle.main7, }]}>Best of Economic</Nunito16Bold>
          </View>
          <View style={[styles.flexRowBetweenCenter, styles.borderRadius4vw, { borderWidth: 2, borderColor: clrStyle.main8 }]}>
            {bestOfEconomic.map((item, index) => {
              return (
                <TouchableOpacity key={index}
                  onPress={() => {
                    // TODO: do something
                  }}
                  style={[styles.flexColStartCenter, styles.paddingV4vw, { width: vw(90) / 3 }]}>
                  {item.icon && item.icon}
                  <Nunito12Reg lineNumber={1} style={[styles.paddingTop1vw, { color: clrStyle.grey2 }]}>{item.description}</Nunito12Reg>
                  <Nunito18Bold lineNumber={1} style={{ color: clrStyle.main7 }}>{item.title}</Nunito18Bold>
                </TouchableOpacity>
              )
            })}
          </View>

        </View>

        {marginBottomForScrollView()}
      </ScrollView>
      {/* <BottomBar navFnc={() => navigation} currentScreen='Home' bgColor={clrStyle.white} shadow={true} /> */}
    </SaveViewWithColorStatusBar >
  )
}