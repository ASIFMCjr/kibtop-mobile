import AsyncStorage from '@react-native-async-storage/async-storage'

class DeviceStorage {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {}
  }

  async getItem(key) {
    try {
      return await AsyncStorage.getItem(key)
    } catch (error) {}
  }

  async deleteItem(key) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {}
  }

  async multiGet(keys = []) {
    try {
      return await AsyncStorage.multiGet(keys)
    } catch (error) {}
  }

  async multiSet(keys = []) {
    try {
      await AsyncStorage.multiSet(keys)
    } catch (error) {}
  }

  async clear() {
    try {
      await AsyncStorage.clear()
    } catch (error) {}
  }
}

export default new DeviceStorage()
