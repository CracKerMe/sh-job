/**
 * Created by 王冬 on 2017/7/20.
 * QQ: 20004604
 * weChat: qq20004604
 * 过滤器，将数字转为对应的文字
 * 使用方法：
 * 1、最标准的vue的过滤器的使用方法。
 * 2、示例：{{item.academic | filter_academic}}
 */

export default {
  install: function (Vue, options) {
    // 学历的转换
    Vue.filter('filter_academic', function (item) {
      let template = {
        '0': '无要求',
        '1': '大专',
        '2': '本科',
        '3': '硕士',
        '4': '博士'
      }
      if (item < 0 || item > 4) {
        return '错误的学历要求'
      } else {
        return template[String(item)]
      }
    })

    // 融资程度转换
    Vue.filter('filter_financing', function (item) {
      let template = {
        '0': '无限制',
        '1': '不需要融资',
        '2': '未融资',
        '3': '天使轮',
        '4': 'A轮',
        '5': 'B轮',
        '6': 'C轮',
        '7': 'D轮及以上',
        '8': '上市'
      }
      if (item < 0 || item > 8) {
        return '错误的融资程度'
      } else {
        return template[String(item)]
      }
    })

    // 职位类型转换
    Vue.filter('filter_jobType', function (item) {
      let template = {
        '0': '不限',
        '1': '全职',
        '2': '兼职',
        '3': '实习',
        '4': '私活',
        '5': '其他'
      }
      if (item < 0 || item > 8) {
        return '错误的职位类型'
      } else {
        return template[String(item)]
      }
    })

    // 格式化工资
    Vue.filter('toFixedWage', function (number, afterComma = 0) {
      return Number(number / 1000).toFixed(afterComma) + 'k'
    })
  }
}
