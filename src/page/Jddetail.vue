<template>
  <!-- <div>我是JD详情页面</div> -->
  <div>
    
    <div class="head-top">
      <div class="headtop-con">
        <div class="headtop-con-l">
          <div class="job-name" title="web前端">
            <div class="company">泛微招聘</div>
            <span class="name">web前端</span>
          </div>
          <dd class="job_request">
            <p>
              <span class="salary">13k-17k </span>
              <span>/上海 /</span>
              <span>经验1-3年 /</span>
              <span>本科及以上 /</span>
              <span>全职</span>
            </p>
            <!-- 职位标签 -->
            <ul class="position-label clearfix">
              <li class="labels">前端</li>
              <li class="labels">web</li>
              <li class="labels">web前端</li>
            </ul>
            <p class="publish_time">11:40 发布</p>
          </dd>
        </div>
        <div class="headtop-con-r">
          <a class="btn btn_green btn_lg" href="http://wpa.qq.com/msgrd?v=3&uin=1160948478" target="_blank">Contact Me</a>
        </div>
      </div>
    </div>
    <div class="container">
      <dl class="job_detail" id="job_detail">
        <dd class="job-advantage">
            <span class="advantage">职位诱惑:</span>
            <p class="list-paddingleft-2">半年加薪，奖金多，双休，包三餐</p>
        </dd>
        <dd class="job_bt">
            <h3 class="description">职位描述：</h3>
            <div>
              <p>岗位描述：&nbsp;<br></p>
              <ol class="list-paddingleft-2">
                <p>1、负责公司云桥系统的PC端，移动端页面功能的开发和优化&nbsp;</p>
                <p>2、可以独立编写前端的页面，包括PC端和移动端</p>
                <p>3、有自己熟练掌握的比较好的技术框架，会设计方面优先&nbsp;</p>
                <p>4、利用HTML5/CSS3/JavaScript/Flash<span>/React.js/angular.js</span>等各种Web技术进行产品的界面开发&nbsp;</p>
                <p>5、配合后台开发人员实现产品界面和功能与后台的交互&nbsp;</p>
                <p>6、制作标准优化的代码，并增加交互动态功能。&nbsp;</p>
              </ol>
              <p><br>岗位要求：&nbsp;</p>
              <ol class="list-paddingleft-2">
                <p>1. 本科以上学历，计算机相关专业，技术优秀，大专学历也可考虑</p>
                <p>2. 3年左右前端开发工作经验（或自认为前端能力足以胜任）；</p>
                <p>3. &nbsp;熟练掌握Web前端技术CSS/HTML/Javascript，有html5/css3开发经验 </p>
                <p>3. &nbsp;熟悉常用Web前端框架(jQuery,<span>React.js，angular.js，</span>Bootstrap)；</p>
                <p>4. &nbsp;良好的编程习惯和较强的的学习能力；</p>
                <p>5. &nbsp;有责任感和良好的团队合作精神；</p>
                <p>6. &nbsp;有java开发经验者优先</p>
              </ol>
            </div>
        </dd>
        <dd class="job-address clearfix">
            <h3 class="address">工作地址:</h3>
            <p class="list-paddingleft-2">耀华支路39弄9号泛微软件大厦（济明路和通耀路交叉口）</p>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'jddetail'
  }
</script>
<style scoped>
  .head-top{
    background-color: #ebf0ef;
    padding: 30px 0 11px;
    width: 100%;
    min-width: 1024px;
  }
  .headtop-con{
    position: relative;
    width: 1024px;
    height: 174px;
    margin: 0 auto;
  }
  .headtop-con-l{
    float: left;
  }
  .headtop-con-l .job-name{
    margin: 0 0 13px;
  }
  .headtop-con-l .job-name .company{
    margin: -2px 0 8px 0;
    font-size: 14px;
    color: #555;
    position: relative;
    left: 2px;
  }
  .headtop-con-l .job-name .name{
    position: relative;
    font-size: 36px;
    color: #333;
    line-height: 36px;
  }
  .headtop-con-l .job_request{
    margin-top: 2px;
    font-size: 18px;
    color: #555;
  }
  .headtop-con-l .job_request p{
    margin-bottom: 8px;
  }
  .headtop-con-l .job_request .labels{
    float: left;
    height: 22px;
    margin-right: 8px;
    padding: 0 10px;
    line-height: 22px;
    background-color: #fff;
    color: #70797b;
    font-size: 12px;
    border-radius: 10px;
  }
  .headtop-con-l .job_request .publish_time{
    padding-top: 10px;
    font-size: 14px;
    color: #999;
  }

  .headtop-con-r{
    float: right
  }
  .container{
    width: 1024px;
    margin: 0 auto;
    padding-bottom: 150px;
  }
  .job_detail dd {
    padding: 15px 0 10px;
    color: #333;
    word-wrap: break-word;
  }
  .job-advantage .advantage {
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }
  .job-advantage p {
    margin-top: 13px;
    color: #333;
  }
  .job_detail dd.job_bt {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .job_bt h3.description,.job_detail .job-address .address{
    font-size: 16px;
    font-weight: 700;
    color: #333;
    line-height: 16px;
    margin-bottom: 22px;
    margin-top: 5px;
  }
  .job_bt p {
    margin: 1em 0;
  }
  .list-paddingleft-2 {
    padding-left: 30px;
  }
  .job_detail .job-address {
    padding-top: 25px;
    margin-top: -26px;
    margin-bottom: 10px;
  }
</style>

