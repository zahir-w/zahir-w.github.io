var posts=["2023/12/07/Ch2 预备知识/","2021/07/15/RobotMail No.2021.7.15/","2022/02/10/RobotMail No.2022.2.10/","2022/01/01/hello-world/","2021/01/25/RobotMail No.2021.1.25/","2022/08/11/初来乍到/","2022/08/22/RobotMail No.2022.8.22/","2023/11/29/基于视触融合的机器人抓取滑动检测 -- 崔少伟/","2023/01/04/标签外挂/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };