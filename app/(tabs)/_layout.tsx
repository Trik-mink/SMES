import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SvgXml } from 'react-native-svg';
import * as userStyles from '@/assets/stylesheet';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  let screens = [
    {
      name: 'index',
      icon: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><rect x="5" y="5" width="60" height="60" rx="30" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><path d="M35 20.833C24.1667 20.833 20.8333 24.1663 20.8333 34.9997C20.8333 45.833 24.1667 49.1663 35 49.1663C45.8333 49.1663 49.1667 45.833 49.1667 34.9997C49.1667 24.1663 45.8333 20.833 35 20.833Z" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><path d="M31.222 32.4343C31.3713 31.8371 31.8375 31.3709 32.4347 31.2216L38.1978 29.7808C39.4184 29.4757 40.5241 30.5813 40.2189 31.802L38.7781 37.5651C38.6288 38.1622 38.1626 38.6285 37.5654 38.7777L31.8023 40.2185C30.5817 40.5237 29.4761 39.418 29.7812 38.1974L31.222 32.4343Z" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 20.833C24.1667 20.833 20.8333 24.1663 20.8333 34.9997C20.8333 45.833 24.1667 49.1663 35 49.1663C45.8333 49.1663 49.1667 45.833 49.1667 34.9997C49.1667 24.1663 45.8333 20.833 35 20.833Z" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      iconOutline: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3554 12.2039C11.4599 11.7859 11.7863 11.4595 12.2043 11.355L16.2384 10.3465C17.0929 10.1329 17.8668 10.9068 17.6532 11.7613L16.6447 15.7954C16.5402 16.2134 16.2138 16.5398 15.7958 16.6443L11.7616 17.6529C10.9072 17.8665 10.1332 17.0925 10.3468 16.2381L11.3554 12.2039Z" stroke="#969696" style="stroke:#969696;stroke:color(display-p3 0.5882 0.5882 0.5882);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 4.08301C6.41668 4.08301 4.08334 6.41634 4.08334 13.9997C4.08334 21.583 6.41668 23.9163 14 23.9163C21.5833 23.9163 23.9167 21.583 23.9167 13.9997C23.9167 6.41634 21.5833 4.08301 14 4.08301Z" stroke="#969696" style="stroke:#969696;stroke:color(display-p3 0.5882 0.5882 0.5882);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      name: 'LoanScreen',
      icon: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><rect x="5" y="5" width="60" height="60" rx="30" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><path d="M50 26.667L39.0237 37.6433C37.7219 38.9451 35.6114 38.9451 34.3096 37.6433L32.357 35.6907C31.0553 34.3889 28.9447 34.3889 27.643 35.6907L20 43.3337M50 26.667H40M50 26.667V36.667" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      iconOutline: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.5 8.16699L16.8166 15.8504C15.9054 16.7616 14.428 16.7616 13.5167 15.8504L12.1499 14.4836C11.2387 13.5724 9.76131 13.5724 8.85008 14.4836L3.5 19.8337M24.5 8.16699H17.5M24.5 8.16699V15.167" stroke="#969696" style="stroke:#969696;stroke:color(display-p3 0.5882 0.5882 0.5882);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      name: `FqaScreen`,
      icon: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><rect x="5" y="5" width="60" height="60" rx="30" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><path d="M35 46.6663V46.6497M34.9999 41.6663C34.9999 34.1663 41.6666 35.833 41.6666 29.9997C41.6666 26.3178 38.6818 23.333 34.9999 23.333C31.8935 23.333 29.2834 25.4576 28.5433 28.333" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      iconOutline: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 22.1663V22.1547M14 18.6663C14 13.4163 18.6666 14.583 18.6666 10.4997C18.6666 7.92235 16.5773 5.83301 14 5.83301C11.8255 5.83301 9.99837 7.32024 9.48032 9.33301" stroke="#969696" style="stroke:#969696;stroke:color(display-p3 0.5882 0.5882 0.5882);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      name: `SaveScreen`,
      icon: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><rect x="5" y="5" width="60" height="60" rx="30" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><path d="M25 28.3337C25 23.6426 28.3333 21.667 35 21.667C41.6667 21.667 45 23.6426 45 28.3337V46.81C45 48.2948 43.2048 49.0384 42.1548 47.9885L36.1785 42.0122C35.5276 41.3613 34.4724 41.3613 33.8215 42.0122L27.8452 47.9885C26.7952 49.0384 25 48.2948 25 46.81V28.3337Z" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      iconOutline: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9.33365C7 6.04991 9.33333 4.66699 14 4.66699C18.6667 4.66699 21 6.04992 21 9.33366V22.2671C21 23.3065 19.7433 23.827 19.0084 23.092L14.825 18.9086C14.3693 18.453 13.6307 18.453 13.175 18.9086L8.99163 23.092C8.25667 23.827 7 23.3065 7 22.2671V9.33365Z" stroke="#969696" style="stroke:#969696;stroke:color(display-p3 0.5882 0.5882 0.5882);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      name: `UserScreen`,
      icon: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><rect width="70" height="70" rx="35" fill="#8D92D0" style="fill:#8D92D0;fill:color(display-p3 0.5529 0.5725 0.8157);fill-opacity:1;"/><path d="M28.3334 28.334H41.6667M28.3334 35.0007H41.6667M31.6667 41.6673H38.3334M20.8334 35.0007C20.8334 24.1673 24.1667 20.834 35 20.834C45.8334 20.834 49.1667 24.1673 49.1667 35.0007C49.1667 45.834 45.8334 49.1673 35 49.1673C24.1667 49.1673 20.8334 45.834 20.8334 35.0007Z" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      iconOutline: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.33337 9.33301H18.6667M9.33337 13.9997H18.6667M11.6667 18.6663H16.3334M4.08337 13.9997C4.08337 6.41634 6.41671 4.08301 14 4.08301C21.5834 4.08301 23.9167 6.41634 23.9167 13.9997C23.9167 21.583 21.5834 23.9163 14 23.9163C6.41671 23.9163 4.08337 21.583 4.08337 13.9997Z" stroke="#969696" style="stroke:#969696;stroke:color(display-p3 0.5882 0.5882 0.5882);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    }
  ]

  let tabs = screens.map((screen, index) => {
    return (
      <Tabs.Screen
        key={index}
        name={screen.name}
        options={{
          title: screen.name,
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            overflow: 'visible',
            height: userStyles.vw(20),
            paddingBottom: insets.bottom ? insets.bottom : userStyles.vw(6),
            paddingHorizontal: userStyles.vw(4),
          },
          tabBarIcon: ({ color, focused }) => (
            <SvgXml xml={focused ? screen.icon : screen.iconOutline} />
          ),
        }}
      />
    )
  })
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      {tabs}
    </Tabs>
  );
}
