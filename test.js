function test(a) {
  a = unescape(a)
  var c = String.fromCharCode(a.charCodeAt(0) - a.length)
  for (var i = 1; i < a.length; i++) {
    c += String.fromCharCode(a.charCodeAt(i) - c.charCodeAt(i - 1))
  }
  console.log('c', c)
  return c
}
test(
  '%u02EE%D7%D3%92%8F%DA%A8mk%B1%D7%D3%92%89%A6nl%B0%E7%DE%A9%AD%E2%E1%DC%DD%E4%9CJ%u8FB5%uE0F8%uB407%uB4DA%u5299%D1%D9%u5799%uAE70%u5760Z%5CK3%81%E0%D7%D2%D3%E6%A5%A1%D8%D9%BD%B7%E2%D9%D7%E8%D7%CD%94PQf%7B%B9%EE%D8%D9%C8%BD%D6%D2%D4%E4%E9%9C%8E%DB%E3%D1%D7%DD%D8%DD%96Q%A4%F1%D7%D3%92%8D%E6%BD%A5%D5%D9%A2%AB%D3%DC%97d%A5%D5%D9%8DQd%B1%D7%D3%92%88%A5%AA%E6%BD%A5%D5%D9%93%95%CC%D9%BC%B7%E4%E7%E5%9BQd%B1%D7%D3%92%8D%AA%AA%E6%BD%A5%D5%D9%93%95%CC%D9%C1%B6%D7%E3%E9%D9%D8%9BQd%B1%D7%D3%92%93%B0%AA%E6%BD%A5%D5%D9%93%95%CC%D9%C7%B8%C8%D2%DD%D2%D7%9BQd%9E%D2%DD%E1%E2%DB%D1%93%9A%DB%D6%8FJ%u6618%uFBEA%u950E%uFF3CM%93%93M%uFF3C%uFF3CM%98%98M%uFF3C%uFF3CM%9E%9Cd%A4%CF%8EP%90%A5zmi_L%93%AAzrn_L%99%B0zrma%A5%F8%A4%90%A5znbWL%93%AAzrn_L%99%B0zrma%A5%F8%A4%90%A5zndYL%93%AAzrn_L%99%B0zrma%A5%F8%A4%90%A5znf%5BL%93%AAzrn_L%99%B0zrma%A5%F8%A4%90%A5znh%5DL%93%AAzrn_L%99%B0zrma%A5%F8%A4%90%A5znj_L%93%AAzrn_L%99%B0zrma%A5%F8%A4%90%A5zoeYL%93%AAzrn_L%99%B0zrmaR%A4%EA%DA%A8%B4%E0%D7%D2%D3%E6%A5%A1%D8%D9%BD%B7%E2%D9%D7%E8%D7%CD%94PQf%7B%B9%EE%D8%D9%C8%BD%D6%D2%D4%E4%E9%9C%8E%DB%E3%D1%D7%DD%D8%DD%96Q%A4%E1%CB%D9%D7%CB%90%96%D3%DC%97r%B7%D6%E6%DA%D8%E7%9C%9D%E7%DE%98%A7%E8%D2%D9%DC%D7%D3%9Eaw%9F%A2%A7%7BS%8F%D5%D7%C9%C9%D3%E2%DD%CA%CD%DF%ADa%90%D7%D1%CF%E1%D9%C9%8CS%A9%A6RW%A2%DC%CD%D3%96%9A%D7%D8%B0%7B%B0%D7%D8%A1%A2%D9%DD%EC%9CQRW%A2%DC%CD%D3%96%9A%D7%D8%B0%7B%A1%D2%DD%E1%E2%DB%D1%93%9A%DB%D6%8F%9A%D7%D8%9CRd%9E%D2%DD%E1%E2%DB%D1%93%9A%DB%D6%8FJ%u7B4E%u7B4EM%94%94M%u6B43%uCDC3%uB4DA%u5139%uFF23Kd%A4%CF%8E%91%A7%7BqdY%A4%E4%A6nl%9E%CF%D1%C6%D3%BB%B7%E2%D9%D7%E8%D7%CD%94%97%DA%94d%B8%E6%94Vf%B8%A9%5CY%A6%A9al%60d%B8%FA%A9%5CY%A6%A9%5Da%60%60Yd'
)
var ok = 0
var i = 1
url = prompt('输入抢券api地址 :')
window.setInterval(() => {
  setTimeout(function () {
    var myDate = new Date()
    var h = myDate.getHours()
    var m = myDate.getMinutes()
    var s = myDate.getSeconds()
    console.log('时间：' + h + '：' + m + '：' + s)
    if (
      (h == 09 && m == 59 && s == 58) ||
      (h == 11 && m == 59 && s == 58) ||
      (h == 13 && m == 59 && s == 58) ||
      (h == 15 && m == 59 && s == 58) ||
      (h == 17 && m == 59 && s == 58) ||
      (h == 19 && m == 59 && s == 58) ||
      (h == 23 && m == 59 && s == 58)
    ) {
      ok = window.setInterval(() => {
        setTimeout(function () {
          fetch(new Request(url, { method: 'POST', credentials: 'include' }))
            .then((res) => res.text())
            .then((res) => console.log(res))
          console.log('第' + i + '次抢券！')
          if (i >= 40) {
            i = 1
            clearInterval(ok)
          }
          i++
        }, 0)
      }, 57)
    }
  }, 0)
}, 1000)
