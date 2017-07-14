<template>
  <div class="list-part">
    <div v-for="item in items" :key="item.id">
      <div class="list_item_top" :date-id="item.id">
        <div class="position">
          <div class="p_top">
            <a>
              <h2>web前端</h2>
              <span class="area">[
                <em>{{item.area}}</em>]</span>
            </a>
            <span class="format-time">{{item.ctime}}发布</span>
          </div>
          <div class="p_bot">
            <div class="li_b_l">
              <span class="money">15k-30k</span>
              经验1-3年 / {{item.academic | get_academic}}
            </div>
          </div>
        </div>
        <div class="company">
          <div class="company_name">
            <a>{{item.company_name}}</a>
          </div>
          <div class="industry">
            移动互联网,O2O / 成长型(A轮)
          </div>
        </div>
        <div class="com_logo">
          <a>
            <img src="//www.lgstatic.com/thumbnail_120x120/image1/M00/29/ED/CgYXBlVoC3uAHMCKAABtFH9fMeg040.jpg" :alt="item.company_name" width="60" height="60">
          </a>
        </div>
      </div>
      <div class="list_item_bot">
        <div class="li_b_l">
          <span v-for="key in item.keywords" :key="key.id">{{key}}</span>
        </div>
        <div class="li_b_r">"奔向IPO,极客氛围,扁平式管理,新技术"</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'listview',
  data () {
    return {
      items: [{
        'id': '123',
        'keywords': ['高薪', '弹性工作'],
        'area': '上海浦东新区',
        'minYear': '0',
        'academic': '2',
        'finacing': '4',
        'minWage': '5000',
        'maxWage': '10000',
        'company_name': '上海艾艺文化有限公司',
        'jobType': '2',
        'ctime': '2017-07012 13:00:00'
      }]
    }
  },
  filters: {
    get_academic (key) {
      let value = ''
      // 0: 不要求，1: 大专，2: 本科，3: 硕士，4: 博士
      switch (key) {
        case '0':
          value = '不要求'
          break
        case '1':
          value = '大专'
          break
        case '2':
          value = '本科'
          break
        case '3':
          value = '硕士'
          break
        case '4':
          value = '博士'
          break
      }
      return value
    }
  }
}
</script>
<style scoped lang="less">
  .list-part{
    width: 800px;
    >div{
        color: #555;
        border: 1px solid #ededed;
        margin-top: 18px;
    }
  }
  .list_item_top{
    width: 100%;
    height: 82px;
    padding: 14px 15px 0;
    background: #fff;
    box-sizing: border-box;
    .position{
        width: 55%;
        margin-right: 20px;
        float: left;
        .p_top{
        height: 34px;
        line-height: 34px;
        h2{
          float: left;
          max-width: 270px;
          margin: 0;
          font-size: 16px;
          color: #00b38a;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
        .area{
          font-size: 16px;
            color: #00b38a;
          float: left;
            margin: 0 3px;
        }
        >span{
          float: left;
          margin: 0 3px;
          color: #999;
        }
        }
        .p_bot{
        height: 24px;
        line-height: 24px;
        .li_b_l{
          font-size: 14px;
          color: #555;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          span{
            margin-right: 1em;
            font-size: 16px;
            color: #fd5f40;
          }
        }
        }
    }
    .company{
        width: 30%;
        float: left;
        margin-right: 15px;
        .company_name{
        height: 34px;
        line-height: 34px;
        a{
          display: inline-block;
          max-width: 196px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          color: #00b38a;
          font-size: 16px;
          vertical-align: middle;
        }
        }
        .industry{
        height: 24px;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        }
    }
    .com_logo{
        float: left;
        a{
        display: block;
        }
    }
  }
  .list_item_bot{
    width: 100%;
    height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fafafa;
    .li_b_l{
        float: left;
        width: 55%;
        height: 40px;
        margin-right: 20px;
        line-height: 40px;
        overflow: hidden;
        span{
          display: inline-block;
          max-width: 84px;
          height: 20px;
          padding: 0 5px;
          font-size: 12px;
          line-height: 20px;
          color: #555;
          border: 1px solid #dcdcdc;
          border-radius: 3px;
          vertical-align: middle;
          margin-left: 6px;
        }
        span:first-child{
          margin-left: 0;
        }
    }
    .li_b_r{
        float: left;
        width: 30%;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
  }
</style>

