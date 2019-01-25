$(function() {
  // var wrapper=$("wrapper");
  var input = $('.text')
  var button = $('.search .button')
  var text = $('.interface .text')
  var interface = $('.Cinterface .button')
  var remaind = $('.remaind')
  var know = $('.know')
  var content = $('.content')
  var tip = $('.tip')
  var v_add=$('.v_add')
  // var interfaceUrl=["http://jqaaa.com/jq3/?url=&url=","http://jx.598110.com/v/3.php?url=","http://www.1717yun.com/jx/ty.php?url="];
  // var href="http://jqaaa.com/jq3/?url=&url=";
  var interfaceUrl = [
    'http://jx.ovov.cc/?url=',
    'http://vip.jlsprh.com/?url=',
    'http://jx.618ge.com/?url='
  ]
  var readydata = ['http://jx.598110.com/?url=','http://app.baiyug.cn:2019/vip/?url=','http://app.baiyug.cn:2019/vip/search/?url='] //备用接口

  var href = 'http://jx.aeidu.cn/index.php?url='
  var textinner = [
    '我查个锤子，你都没输网址',
    '越努力，越幸运',
    '又点人家，快说想看什么'
  ]
  var v_url=['https://www.iqiyi.com/','https://v.qq.com/','https://www.mgtv.com/','https://www.youku.com/']
  var count = 0
  remaind.hide()
  tip.click(function() {
    var text = input.val()
    if (!text) return
    else {
      input.val('')
    }
  })
  v_add.click(function() {
  var id=parseInt(this.id)
   window.open(v_url[id-1])
  })
  know.click(function(event) {
    if (event._constructed) {
      return
    }
    remaind.slideUp()
  })
  button.click(function() {
    var text = input.val()
    if (!text) {
      content.text(textinner[count])
      var num = count + 1
      count = getcount(num)
      remaind.slideDown()
    } else {
      remaind.slideUp()
      setTimeout(function() {
        var url = href+ text
        // window.location.href = 'http://jqaaa.com/jq3/?url=&url='+text;
        window.open(url)
      }, 500)
    }
  })
  interface.click(function() {
    remaind.slideUp()
    var url = $(this).attr('id')
    href = interfaceUrl[url]
    if (url == '0') {
      content.text('已更换默认接口')
    } else content.text('接口' + url + '更换成功')
    remaind.slideDown()
  })
  function getcount(num) {
    if (num > 2) num = 0
    return num
  }
  function resize() {
    var width = $(window).width()
    if (width < 340) {
      text.text('如果找不到视频要记得换个接口试试ლ(°◕‵ƹ′◕ლ)')
    } else {
      text.text('如果找不到视频要记得换个接口试试，不行的话联系我呦ლ(°◕‵ƹ′◕ლ)')
    }
  }
  resize()
  $(window).on('resize', resize)
})
