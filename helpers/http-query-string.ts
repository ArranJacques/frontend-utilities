function serialize(obj: { [key: string]: any }, prefix?: string): string {

    const str = [];

    for (const key in obj) {

        if (obj.hasOwnProperty(key)) {

            const k = prefix ? prefix + '[' + key + ']' : key;
            const v = obj[key];

            const param = (v !== null && typeof v === 'object')
                ? serialize(v, k)
                : encodeURIComponent(k) + '=' + encodeURIComponent(v);

            if (param && param !== '') {
                str.push(param);
            }
        }
    }

    return str.join('&');
}

export default function httpQueryString(obj: { [key: string]: any }): string {
    return serialize(obj);
}
