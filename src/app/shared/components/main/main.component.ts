import { NgClass } from '@angular/common';
import { literalMap } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit {

  searchCat = '';
  
  changeSearchCat(strFromChild: string){
    this.searchCat = strFromChild;
    console.log('searchCat is now '+ this.searchCat)
  }
  
   emptylink = 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';
   
   elArray: {link: string, num?: number, tags?: string, discription?: string}[]= [
    {
      link: 'https://sun9-35.userapi.com/impg/0W0o665dWRAdfEsOCWnpx0PM7WsK5JHZChodPQ/oDCUIByU4uk.jpg?size=650x650&quality=96&sign=a5e85ed1273480110fc7fec47aeaebfd&type=album',
      num: 382111,
      tags: "двигатель стирлинга, стирлинг, стирлинга двигатель",
      discription: ""
    },
    {
      link: 'https://sun9-65.userapi.com/impg/FE0yFpNL1a7sC4je-KPSzllnwrVlqQuTw2nvSA/ARCHvoyZRVg.jpg?size=445x445&quality=96&sign=2dccf1add48960144fdc13010a936fc8&type=album',
      num: 711111,
      tags: "кольца+кольцо+диски+диск+крышки+крышка+блоки+блок",
      discription: ""
    },
    {
      link: 'https://sun9-83.userapi.com/impg/7Wk2hkGaYS32OfZfS-Ufa0OFDPJsvuMaVQmg2A/P18AtGho0ZM.jpg?size=723x516&quality=96&sign=651cb6b2566c29f99fb2af5f9c1d1406&type=album',
      num: 711112,
      tags: "кольца+кольцо+диски+диск+крышки+крышка+блоки+блок",
      discription: ""
    },
    {
      link: 'https://sun9-86.userapi.com/impg/sZit2h6tP-x_StjRy27jC5Qlly8Dbm2xSxc8Ng/7rHMTdONU4s.jpg?size=443x443&quality=96&sign=65cea4dbb8b77e7c7a35c2c03b1d0541&type=album',
      num: 711113,
      tags: "кольца+кольцо+диски+диск+крышки+крышка+блоки+блок",
      discription: ""
    },
    {
      link: 'https://sun9-35.userapi.com/impg/PmqWDpJ3ExZKoiJcmLqhpKqcrTA5eGTiGMwFnA/3ZtMNHkikpo.jpg?size=725x517&quality=96&sign=fb8d64ecb128bf24235b0b072c54c8d8&type=album',
      num: 711114,
      tags: "кольца+кольцо+диски+диск+крышки+крышка+блоки+блок",
      discription: ""
    },
    {
      link: 'https://sun9-72.userapi.com/impg/LuEPmx1LiHwgYmjsKdWhZjHW3LzStTfH7mIBDQ/hcLuW8Dy9aI.jpg?size=448x448&quality=96&sign=9151930a20dced6a81dfd44754c2a0e4&type=album',
      num: 711115,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок',
      discription: ""
    },
    {
      link: 'https://sun9-81.userapi.com/impg/0D_aOpfRsBT2gAiETTBfgEz-rWicAao6NRojrA/LJV38zq_7Zg.jpg?size=502x503&quality=96&sign=dd7d9b6b9f7470836c231a6f026a95da&type=album',
      num: 711116,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок',
      discription: ""
    },
    {
      link: 'https://sun9-82.userapi.com/impg/2X6Y5HlLiqKKDNA9bPM2bV6lEjQYxqa1ysoC_Q/s54FKe-6upw.jpg?size=758x541&quality=96&sign=3f68165654e814d5a27dfcfb54fa115f&type=album',
      num: 711117,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок',
      discription: ""
    },
    {
      link: 'https://sun9-86.userapi.com/impg/U9clFl-dnXiZ1ard1K1U2O9JvL1F9GvL3B0Rbg/eyboZPKL9t4.jpg?size=525x526&quality=96&sign=cf4d9e76cda25c81d70ed66cb0e3eeb8&type=album',
      num: 711118,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок',
      discription: ""
    },
    {
      link: 'https://sun9-88.userapi.com/impg/g_SNCaHgg-4RyselCbnxFNNrpZueHhCoIFPjlg/Mv_OhkSXcBo.jpg?size=500x500&quality=96&sign=b57dff08e772a63c1e5b0fb8e7d7ea6a&type=album',
      num: 711121,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок',
      discription: ""
    },
    {
      link: 'https://sun9-88.userapi.com/impg/xUHeH29vCODWOYzTn9tLqVkdO1h3QpVkQbQgrg/TGUqWHHgkU0.jpg?size=739x528&quality=96&sign=b694d7f724dfdb2ae62c628578baa5a4&type=album',
      num: 711123,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-63.userapi.com/impg/7sY6GRAJ7-n7A24OzlUpY5p_8WKFvR4RCSHHug/Eevanv9B-WA.jpg?size=484x484&quality=96&sign=c71eaff6925cb862b57481ff47bc6004&type=album',
      num: 711125,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-70.userapi.com/impg/_y-958TwAJJoKr_RsJuGgz_LXdOS5yz2Fr_bsA/osXb9czXosQ.jpg?size=492x491&quality=96&sign=a9d4123159b62d65c17b12a425f71ec9&type=album',
      num: 711127,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-2.userapi.com/impg/YiExKYlzyJe5YGBc05XoaLvafSfs0hEZe6e27g/Vdwa1tOOan8.jpg?size=498x498&quality=96&sign=9a53dc087e8dab0de93e98d720f85f0d&type=album',
      num: 711131,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-35.userapi.com/impg/9Kdnfd75oOKYCrLAb9T-dbIBKiWakrZHidufYQ/gUiLcaFNa0g.jpg?size=477x478&quality=96&sign=02beb9d57ccbc420cd828969ac5c5b85&type=album',
      num: 711132,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-34.userapi.com/impg/kyosI0oJPxqRjjk5lnEY4CPoqzOeQgQHc4Nfqw/owuwk7e4_xE.jpg?size=504x504&quality=96&sign=c3d89fa1cc66fc185dbdc31958523e94&type=album',
      num: 711133,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-74.userapi.com/impg/HxGrZmjDxlrgkbGGCkBeXIXKKibn12SN-nYu8g/ciU3UedKsAM.jpg?size=503x503&quality=96&sign=6645937eaf4ae847fbdc964ac32f4fab&type=album',
      num: 711134,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    }, 
    {
      link: 'https://sun9-7.userapi.com/impg/096G6XurYHYwM8zFvNsC2B-WwFSeD0TXiS-jMw/jCQydRsrSnY.jpg?size=473x473&quality=96&sign=cd9010e129a047fc2d26c19577dbb1f0&type=album',
      num: 711135,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-34.userapi.com/impg/7Me5k7JYJ2DyZfeuaPp-wSxxsQGOaup8HZ5nZw/nm1uRi4-mN8.jpg?size=467x466&quality=96&sign=fac5be2699d77aeb5ee2c9e4cc85d532&type=album',
      num: 711136,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-7.userapi.com/impg/q-KiW06BqUJ_quXWaYruxbjIV6hsqjKjabhH3g/uN7z6Qpoov8.jpg?size=488x488&quality=96&sign=92f0a263e5d4e0d7f6c60f53bae9a832&type=album',
      num: 711137,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-81.userapi.com/impg/j-NO78Kcz_4QA6Ek1FbnVDfODM6KByYTa2vYdQ/uIV2V4ogJ28.jpg?size=453x453&quality=96&sign=19bf16ea918c6d8fddacee6f12dfc9da&type=album',
      num: 711141,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-30.userapi.com/impg/F88MRZcR3VaWfJRecBIYHgR4fRH6s7AEno61Jg/F3n1VNswQHY.jpg?size=461x461&quality=96&sign=2248e17b7a94cbc4e41c8186460946ac&type=album',
      num: 711142,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-63.userapi.com/impg/gA9IQr_vn_M7RCkuvlD2vX34k3qdLPyx6qMnog/Gq9vtgWRJyQ.jpg?size=647x463&quality=96&sign=2424ff97c46d6fbc773f8e9ae0b5e624&type=album',
      num: 711143,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-70.userapi.com/impg/zLE18ImqXBMH-92d_I0RY7uTpo7SwnRTb6XRwA/dERk5fTVjRk.jpg?size=461x461&quality=96&sign=a0f021a69b847eaa4833ae79a7d9d863&type=album',
      num: 711145,
      tags: 'кольца+кольцо+диски+диск+крышки+крышка+блоки+блок'
    },
    {
      link: 'https://sun9-5.userapi.com/impg/gE32j6oWprM3k0uwMg2ZjftmyPSfYIzWVTCZWw/6ivVecMWJVo.jpg?size=736x526&quality=96&sign=2eb67b7d7b1b1e63fd0b1afebf5d76c8&type=album',
      num: 721112,
      tags: 'колеса зубчатые колеса колесо зубчатое колесо'
    },
    {
      link: 'https://sun9-73.userapi.com/impg/Brd0gG2XF26wvJFEdTTgkzcdJV9sXRSivryZ3g/GBDiDy3dsM8.jpg?size=710x507&quality=96&sign=68b11055ea9a4f8c3774845921488912&type=album',
      num: 721114,
      tags: 'колеса зубчатые колеса колесо зубчатое колесо'
    },
    {
      link: 'https://sun9-85.userapi.com/impg/2bmOcRVn1sK93dPZNlHUss_9BmZkyrRZldLgEQ/x0l07TURQm4.jpg?size=721x515&quality=96&sign=2de8a6e0c51ae74e1d5809247b4259db&type=album',
      num: 721115,
      tags: 'колеса зубчатые колеса колесо зубчатое колесо'
    },
    {
      link: 'https://sun9-59.userapi.com/impg/YHpGBhesORoSRrW9G0lF7gQOy1zQJsvUVDy7xw/cNHDUnJDpU0.jpg?size=719x513&quality=96&sign=832aacbd3912c54d2bf11ac3e0e28af3&type=album',
      num: 721116,
      tags: 'колеса зубчатые колеса колесо зубчатое колесо'
    }
    
  ];



  treeclass: {parent: number, classNum: number, caption: string}[]= [
    { parent: 0,
      classNum: 38,
      caption: "38xxxx - Двигатели (кроме электрических)"
    },
    { parent: 38,
      classNum: 382,
      caption: "382xxx - Поршневые с внешним подводом тепла, гидравлические, пневматические, роторные и роторно-поршневые, поворотные гидродвигатели"
    },
    { parent: 382,
      classNum: 3821,
      caption: "3821xx - Поршневые с внешним подводом тепла"
    },
    { parent: 3821,
      classNum: 38211,
      caption: "38211x - Стирлинг"
    },
    { parent: 38211,
      classNum: 382111,
      caption: "382111 - Одноцилиндровые с вытеснителем"
    },
    {
      parent: 0,
      classNum: 71,
      caption: "71xxxx - Детали - тела вращения типа колец, дисков, шкивов, блоков, стержней, втулок, стаканов, колонок, валов, осей, штоков, шпинделей и др."
    },
    {
      parent: 0,
      classNum: 72,
    caption: "72xxxx - Детали - тела вращения с элементами зубчатого зацепления; трубы, шланги, проволочки, разрезные, сектора, сегменты; изогнутые из листов, полос и лент; аэрогидродинамические; корпусные, опорные; емкостные; подшипников"
    },
    {
      parent: 0,
      classNum: 73,
    caption: "73хххх - Детали - не тела вращения корпусные, опорные, емкостные"
    },
    {
      parent: 0,
      classNum: 74,
    caption: "74хххх - Детали - не тела вращения плоскостные; рычажные, грузовые, тяговые; аэрогидродинамические; изогнутые из листов, полос и лент; профильные; трубы"
    },
    {
      parent: 0,
      classNum: 75,
    caption: "75хххх - Детали - тела вращения и (или) не тела вращения, кулачковые, карданные, с элементами зацепления, арматуры, санитарно-технические, разветвленные, пружинные, ручки, уплотнительные, отсчетные, пояснительные, маркировочные, защитные, посуды, оптические, электрорадиоэлектронные, крепежные"
    },
    {
      parent: 71,
      classNum: 711,
      caption: "711xxx - С L до 0,5 D вкл. с нар. поверхностью цилиндрической"
    },
    {
      parent: 71,
      classNum: 712,
      caption: "712xxx - С L до 0,5 D вкл. с нар. поверхностью конической, криволин., комбинир."
    },
    {
      parent: 71,
      classNum: 713,
      caption: "713xxx - С L от 0,5 D до 2 D вкл. с нар. поверхностью цилиндрической"
    },
    {
      parent: 71,
      classNum: 714,
      caption: "714xxx - С L от 0,5 D до 2 D вкл. с нар. поверхностью конической, криволин., комбинир."
    },
    {
      parent: 71,
      classNum: 715,
      caption: "715xxx - С L св. 2 D с нар. поверхностью цилиндрической"
    },
    {
      parent: 71,
      classNum: 716,
      caption: "716xxx - С L св. 2 D с нар. поверхностью конической, криволин., комбинир."
    },
    {
      parent: 711,
      classNum: 7111,
      caption: "7111xx - Без закр. уступов, гладкой, без наружн. резьбы"
    },
    {
      parent: 711,
      classNum: 7112,
      caption: "7112xx - Без закр. уступов, гладкой, с наружн. резьбой"
    },
    {
      parent: 711,
      classNum: 7113,
      caption: "7113xx - Без закр. уступов, ступенчатой односторонней, без нар. резьбы"
    },
    {
      parent: 711,
      classNum: 7114,
      caption: "7114xx - Без закр. уступов, ступенчатой двухсторонней, без нар. резьбы"
    },
    {
      parent: 711,
      classNum: 7115,
      caption: "7115xx - Без закр. уступов, ступенчатой, с нар. резьбой"
    },
    {
      parent: 711,
      classNum: 7116,
      caption: "7116xx - С закрытыми уступами, без наружной резьбы"
    },
    {
      parent: 711,
      classNum: 7117,
      caption: "7117xx - С закрытыми уступами, с наружной резьбой"
    },
    {
      parent: 7111,
      classNum: 71111,
      caption: "71111x - Без центр. отв."
    },
    {
      parent: 7111,
      classNum: 71112,
      caption: "71112x - С центр. глухим отв. с одной или двух сторон, без резьбы"
    },
    {
      parent: 7111,
      classNum: 71113,
      caption: "71113x - С центр. глухим отв. с одной или двух сторон, с резьбой"
    },
    {
      parent: 7111,
      classNum: 71114,
      caption: "71114x - С центр. сквоз. отв., круг. в сеч., цилиндр. без резьбы, гладким"
    },
    {
      parent: 7111,
      classNum: 71115,
      caption: "71115x - С центр. сквоз. отв., круг. в сеч., цилиндр. без резьбы, ступенчатым"
    },
    {
      parent: 7111,
      classNum: 71116,
      caption: "71116x - С центр. сквоз. отв., круг. в сеч., цилиндр. с резьбой"
    },
    {
      parent: 7111,
      classNum: 71117,
      caption: "71117x - С центр. сквоз. отв., круг. в сеч., конич., криволин., комбинир."
    },
    {
      parent: 7111,
      classNum: 71119,
      caption: "71119x - С центр. сквозным отв., некруг. в сеч."
    },
    {
      parent: 71111,
      classNum: 711111,
      caption: "711111 - Без кольц. пазов на торцах, без пазов и/или шлицев на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711112,
      caption: "711112 - Без кольц. пазов на торцах, без пазов и/или шлицев на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711113,
      caption: "711113 - Без кольц. пазов на торцах, с пазами и/или шлицами на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711114,
      caption: "711114 - Без кольц. пазов на торцах, с пазами и/или шлицами на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711115,
      caption: "711115 - С кольц. пазами на торцах, без пазов и шлицев на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711116,
      caption: "711116 - С кольц. пазами на торцах, без пазов и шлицев на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711117,
      caption: "711117 - С кольц. пазами на торцах, с пазами и/или шлицами на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711118,
      caption: "711118 - С кольц. пазами на торцах, с пазами и/или шлицами на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 72,
      classNum: 721,
      caption: "721xxx - С элементами зубч. зацепления цилиндрические"
    },
    {
      parent: 721,
      classNum: 7211,
      caption: "7211xx - Одновенцовые с нар. прямыми зубьями с модулем до 1,0 мм вкл., с эвольвентными зубьями"
    },
    {
      parent: 7211,
      classNum: 72111,
      caption: "72111x - Колеса зубч. с нар. осн. базой (трибы) с консольным зубчатым венцом"
    },
    {
      parent: 72111,
      classNum: 721112,
      caption: "721112 - С модулем до 0,3 мм вкл."
    },
    {
      parent: 72111,
      classNum: 721114,
      caption: "721114 - С модулем св.0,3 до 0,5 мм вкл."
    },
    {
      parent: 72111,
      classNum: 721115,
      caption: "721115 - С модулем св.0,5 до 0,8 мм вкл."
    },
    {
      parent: 72111,
      classNum: 721116,
      caption: "721116 - С модулем св.0,8 мм"
    },
    {
      parent: 71112,
      classNum: 711121,
      caption: "711121 - Без кольц. пазов на торцах, без пазов и/или шлицев на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71112,
      classNum: 711122,
      caption: "711122 - Без кольц. паз. на торц., без паз. на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 71112,
      classNum: 711123,
      caption: "711123 - Без кольц. пазов на торцах, с пазами и/или шлицами на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71112,
      classNum: 711124,
      caption: "711124 - Без кольц. пазов на торцах, с пазами и/или шлицами на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 71112,
      classNum: 711125,
      caption: "711125 - С кольц. пазами на торцах, без пазов и шлицев на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71112,
      classNum: 711126,
      caption: "711126 - С кольц. пазами на торцах, без пазов и шлицев на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 71112,
      classNum: 711127,
      caption: "711127 - С кольц. пазами на торцах, с пазами и/или шлицами на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71112,
      classNum: 711128,
      caption: "711128 - С кольц. пазами на торцах, с пазами и/или шлицами на нар. пов., с отв. вне оси дет."
    }
  ]

  async AddClassDisctiption(){
    for(let classitem of this.elArray){
      if(classitem.num != undefined)
      {
        
        this.classDiscription = [];
        this.updateSearchArray(classitem.num.toString())
        for(let cl of this.elArray){
          if (cl.num == classitem.num){
            for (let i = 1; i <=  this.substrArray.length; i++){
              for (let arr of this.treeclass){
                if (arr.classNum.toString() == this.substrArray[i]){
                  //console.log('добавлено описание к классу')
                  this.classDiscription[i-1] = arr.caption;
                  break;
                }
              }
            }
          }
        }
      }
      classitem.discription = "";
      for (let cd of this.classDiscription){
        classitem.discription = classitem.discription + " " + cd;
      }
      

    }
    console.log(this.elArray[1].discription)
  }
    
  currentParent = 0;
  treeElClick(classNum: number){
    this.searchCat = classNum.toString();
    this.currentParent = classNum;
    this.updateSearchArray(this.searchCat)
  }

  substrArray: {}[] = ['0']

  onSearchChange(event: any) {  
    let newVal = event.target.value;
    if (newVal === ""){
      this.currentParent = 0;
    }else{
      this.currentParent = newVal;
      this.updateSearchArray(this.searchCat)
    }
  }

  updateSearchArray(searchCat: string){
    this.substrArray = ['0']
    if (searchCat.length >= 2){
      let substr = ""
        for(let i = 2; i <= searchCat.length; i++){
          substr = searchCat.substring(0,i)
          this.substrArray.push(substr)
        }
    }
  }

  HideShadowBox(){
    this.treeDisplay = "none"
    this.shadowDisplay = "none";
    this.classviewdisplay = "none";
    document.body.style.overflow = "auto"
  }

   //this.CreateChildren('0');
    //let gal = document.getElementById("main-gallery-view")?.firstChild?.textContent;
    //console.log('first div on this page is !' + gal + '!');

  ShowTree(){
    this.treeDisplay = "block"
    this.ShowShadowBox();
    document.body.style.overflow = "hidden"
  }

 
  CloseTree(){
    this.HideShadowBox()
  }

  constructor() { 
  }

  

  ngOnInit(): void {
  }

  treeDisplay = "none";
  classviewdisplay = "none";
  shadowDisplay = "none";

  ngAfterViewInit(){
    this.treeDisplay = "none";
    this.classviewdisplay = "none";
    this.shadowDisplay = "none";
    this.AddClassDisctiption();
  }

  CreateChildren(parentNum: string){
    let treeContainer = document.getElementById('treeContainer');
    treeContainer?.classList.add('childrenCreated');
    for (let treeEl of this.treeclass){
      if(parentNum == treeEl.parent.toString()){
        let child = document.createElement('div');
        treeContainer?.appendChild(child);
        child.style.border = '1px solid black';
        child.innerHTML = treeEl.classNum.toString();
        child.id = treeEl.classNum.toString();
      }
    }
  }

  classSelected: string = '';

  TreeElClick(classNum: number){
    this.classSelected = classNum.toString();
  }

  ApplyTreeFilter(){
    this.searchCat = this.classSelected;
    this.currentParent = Number(this.classSelected);
    this.CloseTree();
    this.updateSearchArray(this.searchCat)
  }
  
  
  emitClassNum: number = 0;
  displayClassView(disp: boolean){
    if (disp){
      this.ShowClassView();
    }
  }

  ChangeClassNum(num: number){
    this.emitClassNum = num;
  }

  ShowClassView() {
    this.classviewdisplay = "block"
    this.ShowShadowBox();
    this.AddToDisctiption();
  }

  ShowShadowBox(){
    this.shadowDisplay = "block";
  }


  classDiscription:string[] = [];

  async AddToDisctiption(){
    this.classDiscription = [];
    this.updateSearchArray(this.emitClassNum.toString())
    for(let cl of this.elArray){
      if (cl.num == this.emitClassNum){
        for (let i = 1; i <=  this.substrArray.length; i++){
          for (let arr of this.treeclass){
            if (arr.classNum.toString() == this.substrArray[i]){
              this.classDiscription[i-1] = arr.caption;
              break;
            }
          }
        }
      }
    }
  }

}


