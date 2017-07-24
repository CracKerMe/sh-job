<template>
  <!-- <div>我是JD发布页面</div> -->
  <div class="publish-con">
    <div class="job-item">
      <p class="left-part">公司／company</p>
      <input type="text">
    </div>
    <!--<div class="job-item">
      <p class="left-part">岗位名称／position</p>
      <input type="text">
    </div>-->
    <div class="job-item">
      <p class="left-part">薪资范围／salary</p>
      <input class="small-input" type="text"> ～ <input class="small-input" type="text" placeholder=""> 元
    </div>
    <div class="job-item">
      <p class="left-part">地区／area</p>
      <input type="text">
    </div>
    <div class="job-item">
      <p class="left-part">搜索关键字／keywords</p>
      <input type="text" placeholder="用 , 隔开">
    </div>
    <div class="job-item">
      <p class="left-part">工作经验／experience</p>
      <input type="text" placeholder="不填无要求"> 年
    </div>
    <div class="job-item">
      <p class="left-part">学历要求／education</p>
      <select name="">
        <option value="0">不限</option>
        <option value="1">大专</option>
        <option value="2">本科</option>
        <option value="3">硕士</option>
        <option value="4">博士</option>
      </select>
    </div>
    <div class="job-item">
      <p class="left-part">职位类型／jobType</p>
      <select name="">
        <option value="1">全职</option>
        <option value="2">兼职</option>
        <option value="3">实习</option>
        <option value="4">私活</option>
        <option value="5">其他</option>
      </select>
    </div>
    <!-- jon main -->
    <!--<div class="job-item">
      <p class="left-part">岗位描述／description</p>
      <textarea placeholder="用 ; 隔开"></textarea>
    </div>-->
    <div class="job-item">
      <p class="left-part">岗位要求／requirement</p>
      <textarea placeholder="" v-model="info.description"></textarea>
    </div>

    <!--<div class="job-item">
      <p class="left-part">工作地址／address</p>
      <input type="text" value="">
    </div>-->

    <button class="btn btn_lg btn_green" @click="submit">发布招聘</button>
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
  .publish-con {
    width: 1024px;
    margin: 20px auto;
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
  }

  input {
    width: 400px;
    height: 40px;
    text-align: center;
    display: inline-block;
  }

  textarea {
    width: 403px;
    height: 80px;
    padding: 12px;
    box-sizing: border-box;
    display: inline-block;
    resize: none;
    margin-top: 10px;
  }

  input.small-input {
    width: 185px;
  }

  select {
    float: left;
    margin-top: 8px;
    display: block;
    width: 403px;
    height: 30px;
  }

  button {
    margin-left: 100px;
  }
</style>
