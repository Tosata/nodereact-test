import {Moment} from "moment";

type CacheResult = any;
import moment = require('moment');

export class SimpleCache {

    private static instance: SimpleCache;

    private cache: { url: string; body?: string, result: CacheResult, timestamp: Moment}[] = [];

    constructor() {
        if (!!SimpleCache.instance) {
            return SimpleCache.instance;
        }
        SimpleCache.instance = this;
        return this;
    }

    public set = (url: string, result: any, body?: string): void => {
        const timestamp = moment();
            this.cache.push({
                url,
                body,
                result,
                timestamp});
    }

    public get = (url: string, body?: string): CacheResult | null => {
        const cacheRecord = this.cache.find(x => {
            if (body) {
                return x.url === url && x.body === body;
            }
            return x.url === url;
        });
        const now = moment();
        if (cacheRecord && cacheRecord.timestamp.add(20, 'seconds').isAfter(now)) {
            return cacheRecord.result;
        }
        return null;
    }

    public recordExists = (url: string, body?: string): boolean => {
        return !!this.get(url, body);
    }
}