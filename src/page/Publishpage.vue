<template>
  <!-- <div>我是JD发布页面</div> -->
  <div class="publish-con">
    <div class="job-item">
      <p class="left-part">公司／company</p>
      <input type="text">
    </div>
    <div class="job-item">
      <p class="left-part">岗位名称／position</p>
      <input type="text">
    </div>
    <div class="job-item">
      <p class="left-part">薪资范围／salary</p>
      <input class="small-input" type="text"> K ～ <input class="small-input" type="text" placeholder="不填无上限"> K
    </div>
    <div class="job-item">
      <p class="left-part">城市／base</p>
      <input type="text" value="上海">
    </div>
    <div class="job-item">
      <p class="left-part">搜索关键字／keywords</p>
      <input type="text" placeholder="用 , 隔开">
    </div>
    <div class="job-item">
      <p class="left-part">工作经验／experience</p>
      <input class="small-input" type="text" placeholder="不填无要求"> 年 ～ <input class="small-input" type="text"> 年
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
    <!-- jon main -->
    <div class="job-item">
      <p class="left-part">岗位描述／description</p>
      <textarea placeholder="用 ; 隔开"></textarea>
    </div>
   <div class="job-item">
      <p class="left-part">岗位要求／requirement</p>
      <textarea placeholder="用 ; 隔开"></textarea>
    </div>

    <div class="job-item">
      <p class="left-part">工作地址／address</p>
      <input type="text" value="">
    </div>

    <button class="btn btn_lg btn_green">发布招聘</button>
  </div>
</template>
<script>
  export default {
    name: 'publishpage'
  }
</script>
<style scoped>
  .publish-con{
    width: 1024px;
    margin: 0 auto;
  }
  .job-item{
    min-height: 46px;
    margin-bottom: 12px;
  }
  .left-part{
    float: left;
    width: 140px;
    line-height: 46px;
    text-align: right;
    margin-right: 20px;
  }
  input{
    width: 200px;
    height: 40px;
    text-align: center;
    display: inline-block;
  }
  textarea{
    width: 200px;
    height: 80px;
    padding: 12px;
    box-sizing: border-box;
    display: inline-block;
    resize: none;
    margin-top: 10px;
  }
  input.small-input{
    width: 70px;
  }
  select{
    float: left;
    margin-top: 8px;
    display: block;
    width: 200px;
    height: 30px;
  }
  button{
    margin-left: 100px;
  }
</style>
