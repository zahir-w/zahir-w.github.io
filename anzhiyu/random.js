var posts=["2024/06/03/(RAL 23) Orbit -- A Unified Simulation Framework for Interactive Robot Learning Environments/","2024/05/29/Orbit/","2024/03/06/(RSS 20) Event-driven visual-tactile sensing and learning for robots/","2021/01/25/RobotMail No.2021.1.25/","2021/07/15/RobotMail No.2021.7.15/","2023/12/07/Ch2 预备知识/","2022/08/22/RobotMail No.2022.8.22/","2024/05/31/tactile_gym2/","2023/01/04/标签外挂/","2022/08/11/初来乍到/","2022/01/01/hello-world/","2022/02/10/RobotMail No.2022.2.10/","2023/11/29/基于视触融合的机器人抓取滑动检测 -- 崔少伟/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };