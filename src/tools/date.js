/*
 * 给日期添加格式化方法
 */
export const dateFormat = () => {
    Date.prototype.Format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "H+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds()
                //毫秒 
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1,
                    (RegExp.$1.length == 1) ? (o[k]) :
                    (("00" + o[k])
                        .substr(("" + o[k]).length)));
        return fmt;
    }
}

/*
 * 倒计时，最小单位秒
 */
export const countDownSec = (millisecond) => {
    let day = parseInt(millisecond / (24 * 60 * 60 * 1000));
    let hour = parseInt((millisecond % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let min = parseInt((millisecond % (60 * 60 * 1000)) / (60 * 1000));
    let sec = parseInt((millisecond % (60 * 1000)) / 1000);
    return {
        day: day >= 0 ? day : 0,
        hour: hour >= 0 ? hour : 0,
        min: min >= 0 ? min : 0,
        sec: sec >= 0 ? sec : 0
    }
}

/*
 * 倒计时，最小单位毫秒
 */
export const countDownMiliSec = (millisecond) => {
    let min = parseInt((millisecond % (60 * 60 * 1000)) / (60 * 1000));
    let sec = parseInt((millisecond % (60 * 1000)) / 1000);
    let mili = parseInt(millisecond % 1000)
    return {
        min: min >= 0 ? min : 0,
        sec: sec >= 0 ? sec : 0,
        mili: mili >= 0 ? mili : 0
    }
}

/*
 * 计算迄今为止过了多少天
 */
export const soFarTime = (year, month, day) => {
    //切记 month应比实际月份少1
    let nowTime = new Date() * 1;
    // let useTime = new Date("October 13, 1975 11:13:00");
    let useTime = new Date().setFullYear(year, month, day);
    let dayNum = ((nowTime - useTime) / 1000 / 60 / 60 / 24);
    return dayNum;
}