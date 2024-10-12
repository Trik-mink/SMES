import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CompareMajorItem,
  Major,
  RecentSearch,
  University,
  UserInfo,
} from './data';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // Sync method for retrieving data from the server
  },
});
export default storage;

/**
 * Saves the exercise course data to storage.
 * @param exerciseCourse - The exercise course data to be saved.
 * @param category - The category of the exercise course.
 * @param index - The index of the exercise course.
 */

export async function saveUserInfo(
  data: UserInfo,
): Promise<boolean | undefined> {
  try {
    await storage.save({
      key: 'userInfo',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save user info');
    return false;
  }
}

/**
 * Retrieves the exercise course data from storage.
 * @returns The exercise course data.
 */
export async function getUserInfo(
  enableAlert?: boolean,
): Promise<UserInfo | undefined> {
  try {
    const data = await storage.load({
      key: 'userInfo',
    });
    return data;
  } catch (error) {
    enableAlert ? Alert.alert('No user info found') : null;
    return undefined;
  }
}

// remove user info
export async function removeAllUserInfo(): Promise<void> {
  await storage.remove({
    key: 'wishList',
  });
  await storage.remove({
    key: 'compareData',
  });
  await storage.remove({
    key: 'userInfo',
  });
  await storage.remove({
    key: 'recentSearch',
  });
  await storage.remove({
    key: 'goalList',
  });
}

// save recent search
export async function saveRecentSearch(
  data: RecentSearch[],
): Promise<boolean | undefined> {
  try {
    await storage.save({
      key: 'recentSearch',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save recent search');
    return false;
  }
}

// get recent search
export async function getRecentSearch(): Promise<RecentSearch[] | undefined> {
  try {
    const data = await storage.load({
      key: 'recentSearch',
    });
    return data;
  } catch (error) {
    console.log('No recent search found');
    return undefined;
  }
}

export async function resetPersonalData(): Promise<void> {
  let newUserInfo: UserInfo;
  try {
    const data = await getUserInfo();
    if (data) {
      newUserInfo = {
        synced: data.synced,
        name: data.name,
        email: data.email,
        userID: data.userID,
        loginMethod: data.loginMethod,
        password: data.password,
        createTime: data.createTime,
        dataCollect: false,
        age: 0,
        data: {
          persona: ``,
          interest: [],
          favorite: [],
          goal: ``,
        },
      };
      await saveUserInfo(newUserInfo).then(() => {
        console.log('Personal data reset');

        return true;
      });
    }
  } catch (error) {
    console.error('Error resetting personal data:', error);
  }
}

export const saveCompareData = async (data: CompareMajorItem[]) => {
  try {
    await storage.save({
      key: 'compareData',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save compare data');
    return false;
  }
};

export const saveCompareDataWithAlert = async (
  uniItem: University,
  major: Major,
  naviFnc: () => void,
) => {
  let data: CompareMajorItem = {
    uniItem: uniItem as University,
    major: major as Major,
  };
  getCompareData().then(compareData => {
    console.log(compareData);
    if (compareData) {
      if (
        !compareData.find(
          item =>
            item.uniItem.name === data.uniItem.name &&
            item.major.majorName === data.major.majorName,
        )
      ) {
        compareData.push(data);
        saveCompareData(compareData).then(res => {
          if (res) {
            if (compareData.length > 1) {
              Alert.alert(
                'Add to compare list successfully',
                `You have ${compareData.length} items in your list. Do you want to compare them now?`,
                [
                  {text: 'Cancel'},
                  {text: 'OK', style: 'default', onPress: naviFnc},
                ],
              );
            } else {
              Alert.alert('Success', 'Add to compare list successfully');
            }
          }
        });
      } else {
        Alert.alert(
          'No need to add',
          'This item is already in your compare list',
        );
      }
    } else {
      saveCompareData([data]).then(res => {
        if (res) {
          Alert.alert('Success', 'Add to compare list successfully');
        }
      });
    }
  });
};

export const getCompareData = async (): Promise<
  CompareMajorItem[] | undefined
> => {
  try {
    const data = await storage.load({
      key: 'compareData',
    });
    return data;
  } catch (error) {
    console.log('No compare data found');
    return undefined;
  }
};

export const removeCompareData = async () => {
  await storage.remove({
    key: 'compareData',
  });
};

export const saveWishlist = async (uniItem: University, major: Major) => {
  let data: CompareMajorItem = {
    uniItem: uniItem as University,
    major: major as Major,
  };
  const saveFNC = async (data: CompareMajorItem[]) => {
    try {
      await storage.save({
        key: 'wishList',
        data: data,
      });
      return true;
    } catch (error) {
      Alert.alert('Failed to save wish data');
      return false;
    }
  };

  return getWishlist().then(wishData => {
    console.log(wishData);
    if (wishData) {
      if (
        !wishData.find(
          item =>
            item.uniItem.name === data.uniItem.name &&
            item.major.majorName === data.major.majorName,
        )
      ) {
        wishData.push(data);
        return saveFNC(wishData).then(res => {
          if (res) {
            Alert.alert('Success', 'Add to wish list successfully');
            return true;
          }
          return false;
        });
      } else {
        Alert.alert('No need to add', 'This item is already in your wish list');
        return false;
      }
    } else {
      return saveFNC([data]).then(res => {
        if (res) {
          Alert.alert('Success', 'Add to wishlist successfully');
          return true;
        }
        return false;
      });
    }
  });
};

export const updateWishlist = async (data: CompareMajorItem[]) => {
  try {
    await storage.save({
      key: 'wishList',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save wish data');
    return false;
  }
};

export const getWishlist = async (): Promise<
  CompareMajorItem[] | undefined
> => {
  try {
    const data = await storage.load({
      key: 'wishList',
    });
    return data;
  } catch (error) {
    console.log('No wish data found');
    return undefined;
  }
};

export const saveGoalMajor = async (uniName: string, major: Major) => {
  let data = {
    uniName: uniName as string,
    major: major as Major,
  };
  try {
    await storage.save({
      key: 'goalList',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save goal data');
    return false;
  }
};

export const getGoalMajor = async (): Promise<CompareMajorItem | undefined> => {
  try {
    const data = await storage.load({
      key: 'goalList',
    });
    return data;
  } catch (error) {
    console.log('No goal data found');
    return undefined;
  }
};
