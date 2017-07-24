<template>
  <!-- <div>我是JD发布页面</div> -->
  <div class="publish">
    <div class="publish-con">
      <p class="publish-item"><span>1&nbsp;</span>职位基本信息</p>
      <div class="job-item">
        <p class="left-part">公司／company</p>
        <input type="text" placeholder="例如:BAT">
      </div>
      <div class="job-item">
        <p class="left-part">职位名称／jobName</p>
        <input type="text" placeholder="例如:web 前端">
      </div>
      <div class="job-item">
        <p class="left-part">职位类型／jobType</p>
        <select name="" class="select">
          <option value="1">全职</option>
          <option value="2">兼职</option>
          <option value="3">实习</option>
          <option value="4">私活</option>
          <option value="5">其他</option>
        </select>
      </div>
      <div class="job-item">
        <p class="left-part">工作城市／area</p>
        <input type="text" placeholder="例如:上海">
      </div>
      <!--<div class="job-item">
        <p class="left-part">岗位名称／position</p>
        <input type="text">
      </div>-->
      <p class="publish-item"><span>2&nbsp;</span>职位要求</p>
      <div class="job-item">
        <p class="left-part">经历和学历／exp & edu</p>
        <select name="" class="select small-select">
          <option value="0">无要求</option>
          <option value="1">1~3年</option>
          <option value="2">3~5年</option>
          <option value="3">5到10年</option>
          <option value="4">10年以上</option>
        </select>
        <select name="" class="select small-select ml40">
          <option value="0">不限</option>
          <option value="1">大专</option>
          <option value="2">本科</option>
          <option value="3">硕士</option>
          <option value="4">博士</option>
        </select>
      </div>
      <div class="job-item">
        <p class="left-part">薪资范围／salary</p>
        <select name="" class="select small-select">
          <option value="0">5K</option>
          <option value="1">10K</option>
          <option value="2">15K</option>
          <option value="3">20K</option>
          <option value="4">20K以上</option>
        </select>
        <select name="" class="select small-select ml40">
          <option value="0">8K</option>
          <option value="1">10K</option>
          <option value="2">15K</option>
          <option value="3">20K</option>
          <option value="4">20K以上</option>
        </select>
      </div>
      <div class="job-item">
        <p class="left-part">技能要求／keywords</p>
        <input type="text" placeholder="请使用 , 隔开(例 vue,react,jquery)">
      </div>
      <div class="job-item">
        <p class="left-part">职位描述／requirement</p>
        <textarea placeholder="" v-model="info.description"></textarea>
      </div>

      <!--<div class="job-item">
        <p class="left-part">工作地址／address</p>
        <input type="text" value="">
      </div>-->

      <button class="btn btn_lg btn_green" @click="submit">发布招聘</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'publishpage',
    data () {
      return {
        info: {
          keywords: ['高薪', '弹性工作制'],
          area: '上海市浦东区',
          minYear: '0',
          academic: '0',
          financing: '0',
          minWage: '1000',
          maxWage: '99999',
          companyName: '这是一个公司的名字',
          jobType: '1',
          description: ''
        }
      }
    },
    methods: {
      submit () {
        this.http.publishJob(this.info).then(result => {
          console.log(result)
          if (result.data.code === '200') {
            alert('发布成功！')
          }
        })
      }
    }
  }
</script>
<style scoped>
  .ml40{
    margin-left: 40px;
  }
  .publish{
    padding: 20px;
    background: #EEF0F5;
  }
  .publish-con {
    width: 1200px;
    background: #fff;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 30px 200px;
  }
  .publish-item{
    line-height: 20px;
    margin-bottom: 8px;
  }
  .publish-item span{
    color: #00b38a;
    font-size: 24px;
  }
  .job-item {
    min-height: 46px;
    margin-bottom: 12px;
  }

  .left-part {
    float: left;
    width: 180px;
    line-height: 46px;
    text-align: right;
    margin-right: 20px;
    font-weight: lighter;
  }

  input {
    width: 336px;
    height: 40px;
    text-align: center;
    display: inline-block;
  }
  .select{
    width: 340px;
    height: 46px;
    box-sizing: border-box;
    padding: 6px;
    font-size: 16px;
  }
  .small-select{
    width: 150px;
  }
  textarea {
    width: 340px;
    height: 130px;
    padding: 12px;
    overflow-y: auto;
    box-sizing: border-box;
    display: inline-block;
    resize: none;
    margin-top: 10px;
  }
  textarea::-webkit-input-placeholder:after{
    display:block;
    content:"line@ \A line#";/*  \A 表示换行  */
    color:red;
  }
  textarea::-moz-placeholder:after{
    content:"line@ \A line#";/*  \A 表示换行  */
    color:red;
  }
  input.small-input {
    width: 185px;
  }

  select {
    float: left;
    display: block;
  }

  button {
    margin-left: -85px;
    position: relative;
    left: 50%;
  }
</style>
