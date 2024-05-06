/**
 * Check if an object is an object.
 * @param obj
 */
export const isObject = (obj: any): boolean => {
    return Object.prototype.toString.call(obj) === '[object Object]';
}


/**
 * Get all values from an object.
 * @param obj
 */
export const getAllValues = (obj: object): any[] => {
    if (isObject) throw 'Not an object';
    return Object.values(obj);
}

/**
 * Get all keys from an object.
  * @param obj
 */
export const getAllKeys = (obj: object): string[] => {
    if (isObject) throw 'Not an object';
    return Object.keys(obj);
}

/**
 * Check if an object has a key.
 * @param obj
 * @param key
 */
export const hasKey = (obj: object, key: string): boolean => {
    if (isObject) throw 'Not an object';
    return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Object to Array
 * @param obj
 */
export const objectToArray = (obj: object): any[] => {
    if (isObject) throw 'Not an object';
    if (Object.keys(obj).length > 0) {
        return Object.keys(obj).map(key => {
            return {
                [key]: obj[key],
            }
        })
    }
}

/**
 * JSON转换器，不会抛出异常
 * @param json JSON内容
 * @param defaultValue 默认值
 */
export const parseJSONSafety = (json: string | any, defaultValue?: any) => {
    if (typeof json === 'string') {
        try {
            return JSON.parse(json);
        } catch (e) {
            console.warn(e);
            return defaultValue;
        }
    }
    if (json == null && defaultValue) return defaultValue;
    return json;
};