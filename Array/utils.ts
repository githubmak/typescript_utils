/**
 * 判断是否是数组
 */
export const isArray = (arr: any): boolean => {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(arr);
    } else {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }
}

/**
 * 删除数组中重复的元素
 * @param array 数组
 * @param key 数组对象中需要去重的关键字
 */
export const removeDuplicatesArray = <T>(array: T[], key: string ): T[] | boolean => {
    if (isArray(array)) {
        throw '不是数组';
    }
    if (key) {
        const hash = {};
        return array.reduce((pre: any, current: any) => {
            if (!hash[current[key]]) {
                hash[current[key]] = pre.push(current);
            }
            return pre;
        }, []);
    }
    return Array.from(new Set(array));
}

/**
 * 数组求和
 * @param array 求和数组 -> number or 可以转number的string
 */
export const sum = (array: number[] | string[]): number => {
    if (isArray(array)) {
        throw '不是数组';
    }
    const arr: number[] = array.map((item: number | string) => Number(item));
    return arr.reduce((pre: number, cur: number) => pre + cur, 0);
}

/**
 * 数组排序
 * @param array 排序的数组
 * @param key 需要排序的对象key
 */
export const sort = <T>(array: T[], key: string): T[] => {
    if (isArray(array)) {
        throw '不是数组';
    }
    if (key) {
        return array.sort((a: any, b: any): number => {
            return a[key] - b[key];
        });
    }
    return array.sort((a: any, b: any): number => {
        return a - b;
    });
}

/**
 * 过滤空值 包括undefined null '' 0
 * @param array
 */
export const filterEmpty = <T>(array: any[]): T[] => {
    return array.filter((item: any) => !item);
}

/**
 * 数组交集
 * @param arr1
 * @param arr2
 */
export const intersection = <T>(arr1: T[], arr2: T[]): T[] => {
    if (isArray(arr1) || isArray(arr2)) throw '有非数组的入参';
    return arr1.filter((item: T) => arr2.includes(item));
}

/**
 * 数组差集
 * @param arr1
 * @param arr2
 */
export const difference = <T>(arr1: T[], arr2: T[]): T[] => {
    if (isArray(arr1) || isArray(arr2)) throw '有非数组的入参';
    return arr1.filter((item: T) => !arr2.includes(item));
}

/**
 * 数组合集
 * @param arr1
 * @param arr2
 */
export const union = <T>(arr1: T[], arr2: T[]): T[] => {
    if (isArray(arr1) || isArray(arr2)) throw '有非数组的入参';
    return [...arr1, ...arr2];
}