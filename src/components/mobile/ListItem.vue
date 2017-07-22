/**
* Created by 姜凯丽 on 2017/7/22.
* QQ: 452930228
* weChat: kally10307
* ListItem：使用时将列表数据以props传入，例：
*
* <list-item :item="item" v-for="item in items"></list-item>
* items为其父组件中列表的数据
*/
<template>
  <div class="item dis-flex">
    <img class="logo" :src="item.logoUrl" alt="">
    <div class="item-inner dis-flex-item">
      <div class="dis-flex dis-flex-center">
        <div class="item-info dis-flex-item">
          <h2 class="title">{{item.company_name}}</h2>
          <p class="job">{{item.job}}[{{item.area}}]</p>
          <p class="time">{{item.ctime | time}}</p>
        </div>
        <div class="salary">{{item.minWage | salary}}-{{item.maxWage | salary}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      item: {
        type: Object,
        default: {
          logoUrl: '',        // logo图片的url地址
          company_name: '',  // 公司名称
          job: '',            // 职位
          area: '',           // 职位所在地区
          ctime: '',          // 发布时间
          minWage: '',        // 最低薪资
          maxWage: ''         // 最高薪资
        }
      }
    },
    data () {
      return {
        developer: '后知不觉(452930228@qq.com)'
      }
    },
    created () {

    },
    filters: {
      salary: function (val) {
        // 处理薪资显示，将超过 1000 的数据显示成 1k
        return val >= 1000 ? `${val / 1000}k` : val
      },
      time: function (time) {
        /**
         * 处理时间显示形式
         * 转化成为 MM-DD HH: MM
         * 并将日期为今天，明天，昨天的时间转化成 如‘今天 HH: MM’的形式
         */
        let date = (typeof time === 'number') ? new Date(time) : new Date((time || '').replace(/-/g, '/'))
        let diff = (((new Date()).getTime() - date.getTime()) / 1000)
        let dayDiff = Math.floor(diff / 86400)
        let isValidDate = Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())

        if (!isValidDate) {
          console.error('not a valid date')
          return time
        }
        let today = new Date(date)
        // let year = today.getFullYear()
        let month = ('0' + (today.getMonth() + 1)).slice(-2)
        let day = ('0' + today.getDate()).slice(-2)
        let hour = ('0' + today.getHours()).slice(-2)
        let minute = ('0' + today.getMinutes()).slice(-2)
        if (isNaN(dayDiff) || dayDiff < 0 || dayDiff > 3) {
          return `${month}-${day} ${hour}:${minute}`
        }
        return dayDiff === 0 && (
          diff < 86400 && `今天 ${hour}:${minute}`) ||
          dayDiff < 2 && `昨天 ${hour}:${minute}` ||
          dayDiff < 3 && `前天 ${hour}:${minute}` ||
          dayDiff >= 3 && `${month}-${day} ${hour}:${minute}`
      }
    }
  }
</script>
<style scoped>
  .dis-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  .dis-flex-center {
    -webkit-align-items: center;
    align-items: center;
  }

  .dis-flex-item {
    -webkit-flex: 1;
    flex: 1;
  }

  .item {
    padding: 1.2rem 1.2rem 0.8rem;
    border-bottom: 1px solid #e5e5e5;
  }

  .item:first-of-type {
    border-top: 1px solid #e5e5e5;
  }

  .logo {
    display: inline-block;
    width: 5.2rem;
    height: 5.2rem;
  }

  .item-inner {
    padding-left: 1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .title {
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: bold;
    color: #2b2b2b;
  }

  .job {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #2b2b2b;
  }

  .time {
    font-size: 1rem;
    line-height: 1.6rem;
    color: #8d8d8d;
    -webkit-text-size-adjust: none;
  }

  .salary {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #00af84;
  }
</style>
