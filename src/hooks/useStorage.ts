import { useState, useMemo } from 'react';

export interface Storage {
    key: string;
    data: <T>() => T;
    select: <T>(key: string) => T;
    update: <T>(datas: T) => T;
}

/**
 * storage hook
 */
const useStorage = (initKey = 'undefined'): Storage => {
    const [storageKey, setStorageKey] = useState(initKey);

    return useMemo(
        () => ({
            get key() {
                return storageKey;
            },

            data: <T>() => getItem<T>(storageKey),

            select: <T>(key: string) => {
                setStorageKey(key);
                return getItem<T>(key);
            },

            update: <T>(datas: T): T => {
                localStorage.setItem(storageKey, JSON.stringify(datas));
                return datas;
            },
        }),
        [storageKey]
    );
};

const getItem = <T>(key: string): T =>
    JSON.parse(String(localStorage.getItem(key)));

export default useStorage;
