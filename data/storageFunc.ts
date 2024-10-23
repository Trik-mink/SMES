import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { Alert } from 'react-native';
import * as FORMATDATA from './interfaceFormat';
import { factoryData } from './factoryData';

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
 * Saves the user data to storage.
 *
 * @param data - The user data to be saved.
 * @returns A promise that resolves to `true` if the data was saved successfully, or `false` if there was an error.
 */
export const saveUser = async (data: FORMATDATA.UserFormat): Promise<boolean> => {
  try {
    await storage.save({
      key: 'user',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save user');
    console.log('Failed to save user:', error);
    return false;
  }
};

/**
 * Retrieves the user data from storage.
 *
 * @returns {Promise<FORMATDATA.UserFormat | false>} A promise that resolves to the user data if found, or `false` if an error occurs.
 */
export const getUser = async (): Promise<FORMATDATA.UserFormat | false> => {
  try {
    const ret: FORMATDATA.UserFormat = await storage.load({
      key: 'user',
    });
    return ret;
  } catch (error) {
    console.log('Failed to get user:', error);
    return false;
  }
};

/**
 * Asynchronously removes the user data from storage.
 *
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user data was successfully removed,
 *                             or `false` if an error occurred during the removal process.
 */
export const removeUser = async (): Promise<boolean> => {
  try {
    await storage.remove({
      key: 'user',
    });
    return true;
  } catch (error) {
    console.log('Failed to remove user:', error);
    return false;
  }
};

// END OF DEFAULT STORAGE FUNCTIONS ______________________________________________________

// export const savePillList = async (dataArr: PillFormat[]) => {
//   try {
//     await Promise.all(dataArr.map(async (data) => {
//       await storage.save({
//         key: 'pill',
//         data: data,
//         id: data.pill_id,
//       });
//     }));
//     return true;
//   } catch (error) {
//     Alert.alert('Failed to save drug list');
//     console.log('Failed to save pill list:', error);
//     return false;
//   }
// }

// export const getPillList = async (): Promise<PillFormat[] | false> => {
//   try {
//     const ret: PillFormat[] = await storage.getAllDataForKey('pill');
//     return ret;
//   } catch (error) {
//     console.log('Failed to get pill list:', error);
//     return false;
//   }
// }

// export const getPillById = async (id: string): Promise<PillFormat | false> => {
//   try {
//     const ret: PillFormat = await storage.load({
//       key: 'pill',
//       id: id,
//     });
//     return ret;
//   } catch (error) {
//     console.log('Failed to get pill by id:', error);
//     return false;
//   }
// }

// export const removePillById = async (id: string): Promise<boolean> => {
//   try {
//     await storage.remove({
//       key: 'pill',
//       id: id,
//     });
//     return true;
//   } catch (error) {
//     console.log('Failed to remove pill:', error);
//     return false;
//   }
// }

// export const clearPillList = async (): Promise<boolean> => {
//   try {
//     await storage.clearMapForKey('pill');
//     return true;
//   } catch (error) {
//     console.log('Failed to clear pill list:', error);
//     return false;
//   }
// }

// export const editPillById = async (id: string, data: PillFormat): Promise<boolean> => {
//   try {
//     await storage.save({
//       key: 'pill',
//       data: data,
//       id: id,
//     });
//     return true;
//   } catch (error) {
//     console.log('Failed to edit pill:', error);
//     return false;
//   }
// }

// export const saveOrder = async (data: OrderFormat, idItem: string) => {
//   try {
//     await storage.save({
//       key: 'order',
//       data: data,
//       id: idItem,
//     });
//     return true;
//   } catch (error) {
//     Alert.alert('Failed to save order');
//     console.log('Failed to save order:', error);
//     return false;
//   }
// }

// export const getOrderList = async (): Promise<OrderFormat[] | false> => {
//   try {
//     const ret: OrderFormat[] = await storage.getAllDataForKey('order');
//     console.log('Order list:', ret);
//     return ret;
//   } catch (error) {
//     console.log('Failed to get order list:', error);
//     return false;
//   }
// }

// export const removeOrderById = async (id: string): Promise<boolean> => {
//   try {
//     await storage.remove({
//       key: 'order',
//       id: id,
//     });
//     return true;
//   } catch (error) {
//     console.log('Failed to remove order:', error);
//     return false;
//   }
// }

// export const clearOrderList = async (): Promise<boolean> => {
//   try {
//     await storage.clearMapForKey('order');
//     return true;
//   } catch (error) {
//     console.log('Failed to clear order list:', error);
//     return false;
//   }
// }

// export const editCart = async (pills: PillFormat | PillFormat[]): Promise<boolean> => {
//   const prepare = (): PillFormat[] => {
//     let data: PillFormat[] = [];
//     if (Array.isArray(pills)) {
//       data.push(...pills);
//     } else {
//       data.push(pills);
//     }
//     return data;
//   };

//   try {
//     await storage.save({
//       key: 'cart',
//       data: prepare(),
//     });
//     return true;
//   } catch (error) {
//     console.error('Failed to save cart:', error);
//     return false;
//   }
// }

// export const getCart = async (): Promise<PillFormat[] | false> => {
//   try {
//     const ret: PillFormat[] = await storage.load({ key: 'cart' })
//     return ret;
//   } catch (error) {
//     console.error('Failed to get cart:', error);
//     return false;
//   }
// }

// export const clearCart = async (): Promise<boolean> => {
//   try {
//     await storage.clearMapForKey('cart');
//     return true;
//   } catch (error) {
//     console.error('Failed to clear cart:', error);
//     return false;
//   }
// }

// export const loadDemoData = async (): Promise<boolean> => {
//   try {
//     // Save all pills and orders concurrently
//     await Promise.all([
//       savePillList(factoryData.pillList),
//       factoryData.orderList.forEach(async (order) => {
//         let res = await saveOrder(order, order.order_id);
//         console.log('Save order:', res, order.order_id);
//       }),
//     ]);

//     const data: DataStorageFormat = {
//       pillList: factoryData.pillList,
//       pillPortList: factoryData.pillPortList,
//       orderList: factoryData.orderList,
//       lastChange: factoryData.lastChange,
//     };

//     await storage.save({
//       key: 'DATADEMO',
//       data: data,
//     });

//     return true;
//   } catch (error) {
//     console.log('Failed to load demo data:', error);
//     return false;
//   }
// }

// export const clearData = async (): Promise<boolean> => {
//   try {
//     await clearOrderList();
//     await clearPillList();
//     await clearCart();
//     await storage.clearMapForKey('DATADEMO');
//     return true;
//   } catch (error) {
//     console.log('Failed to clear data:', error);
//     return false;
//   }
// }