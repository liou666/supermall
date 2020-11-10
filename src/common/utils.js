export function formatData(data, format = "YYYY/MM/DD hh:mm:ss") {
            const newDate = new Date(data);
            const config = {
                YYYY: newDate.getFullYear(),
                MM: newDate.getMonth() + 1,
                DD: newDate.getDay(),
                hh: newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours(),
                mm: newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes(),
                ss: newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds()
            };
            for (const key in config) {
                format = format.replace(key, config[key])
            };
            return format
        }