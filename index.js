window.onload = function () {
    var search = document.querySelector('#search')
    var liss = search.querySelectorAll('li')
    var inp = search.querySelector('input')
    var span = search.querySelector('span')
    var form = document.querySelector('#form')
    for (var i = 0; i < liss.length; i++) {
        liss[i].setAttribute('index', i)
        liss[i].onclick = function () {
            for (var i = 0; i < liss.length; i++) {
                liss[i].className = ''
            }
            this.className = 'act'
            var index = this.getAttribute('index')
            console.log(typeof index);

            switch (parseInt(index)) {
                case 0:
                    form.action = 'http://www.baidu.com/s'
                    inp.name = 'word'
                    inp.placeholder = '百度一下'
                    break
                case 1:
                    form.action = 'https://www.google.com/search'
                    inp.name = 'q'
                    inp.placeholder = 'Google搜索'
                    break
                case 2:
                    form.action = 'https://cn.bing.com/search'
                    inp.name = 'q'
                    inp.placeholder = '微软 Bing 搜索'
                    break

                case 3:
                    form.action = 'https://magi.com/search'
                    inp.name = 'q'
                    inp.placeholder = 'Magi搜索'
                    break
                case 4:
                    form.action = 'https://cn.bing.com/images/search'
                    inp.name = 'q'
                    inp.placeholder = '海量图片搜索'
                    break
                case 5:
                    form.action = 'https://torrentz2.eu/search'
                    inp.name = 'f'
                    inp.placeholder = '磁力链，种子搜索'
                    break
                case 6:
                    form.action = 'https://xueshu.baidu.com/s'
                    inp.name = 'word'
                    inp.placeholder = '中英文文献检索'
                    break

            }
        }
    }
    span.onclick = function () {
        inp.value = ''
        span.style.display = 'none'
    }

    inp.oninput = function () {
        if (inp.value.length !== 0) {
            span.style.display = 'block'
        }

    }

    var tab_list = document.querySelector('.tab_list')
    var lis = tab_list.querySelectorAll('li')
    var items = document.querySelectorAll('.info')
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i)
        // 单击切换
        lis[i].onclick = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = ''
            }
            this.className = 'active'
            var index = this.getAttribute('index');
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none'
            }
            items[index].style.display = 'block'
        }
    }
}
