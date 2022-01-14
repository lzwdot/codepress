// 基于 form-data 实现上传文件
(function () {
  const upload = document.querySelector('#upload1')
  const upload_inp = upload.querySelector('input.form-control')
  const upload_button_select = upload.querySelector('label.btn-primary')
  const upload_button_upload = upload.querySelector('button.btn-success')
  const upload_tip = upload.querySelector('small.text-muted')
  const upload_list = upload.querySelector('ul.list-group')
  // 存文件对象
  let _file = null

  const changeDisabel = flag => {
    if (flag) {
      upload_button_select.classList.add('disable')
      upload_button_upload.classList.add('loading')
      return
    }
    upload_button_select.classList.remove('disable')
    upload_button_upload.classList.remove('loading')
  }
  // 上传文件到服务器
  upload_button_upload.addEventListener('click', function () {
    if (!_file) {
      alert('请先选择上传文件~')
      return
    }
    changeDisabel(true)
    // 把文件传递给服务器：FormData / Base64
    const formData = new FormData()
    formData.append('file', _file)
    formData.append('filename', _file.name)

    // axios
    instance.post('/upload', formData).then(data => {
      if (+data.code === 0) {
        alert(`文件上传成功，通过${data.servicePath}访问资源`)
        return
      }

      return Promise.reject(data.codeText)
    }).catch(error => {
      alert('文件上传失败，请稍后再试~')
    }).finally(() => {
      clearHandle()
      changeDisabel(false)
    })
  })

  const clearHandle = () => {
    upload_tip.style.display = 'block'
    upload_list.style.display = 'none'
    upload_list.innerHTML = ``
    _file = null
  }
  // 移除按钮的点击事件
  upload_list.addEventListener('click', function (e) {
    const target = e.target
    if (target.tagName === 'SPAN') {
      // 点击的是移除按钮
      clearHandle()
    }
  })

  // 监听用户选择文件的操作
  upload_inp.addEventListener('change', function () {
    // 获取选中文件对象
    // name:文件名
    // size:文件大小
    // type:文件的 MIME 类型
    const file = upload_inp.files[0]
    if (!file) return

    // 限制文件上传的格式 [方案1]
    if (!/(jpg|jpeg|png)/i.test(file.type)) {
      alert(upload_tip.innerHTML)
      return
    }

    // 限制文件上传大小不超过 2MB
    if (file.size > 2 * 1024 * 1024) {
      alert(upload_tip.innerHTML)
      return
    }

    // 显示上传的文件
    upload_tip.style.display = 'none'
    upload_list.style.display = 'block'
    upload_list.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
            文件：${file.name}<span class="badge bg-primary rounded-pill">移除</span>
        </li>`

    _file = file
  })
})();

// 基于 base64 实现上传文件
(function () {
  const upload = document.querySelector('#upload2')
  const upload_inp = upload.querySelector('input.form-control')
  const upload_button_select = upload.querySelector('label.btn-primary')
  const upload_tip = upload.querySelector('small.text-muted')
  const upload_abbre = upload.querySelector('.img-wrap')
  const upload_abbre_img = upload.querySelector('img.img-thumbnail')

  const changeDisabel = flag => {
    if (flag) {
      upload_button_select.classList.add('loading')
      upload_abbre.style.display = 'none'
      return
    }
    upload_button_select.classList.remove('loading')
    upload_abbre.style.display = 'block'
  }

  // 文件读取成为 base64
  const changeBase64 = file => {
    return new Promise(resolve => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = ev => {
        resolve(ev.target.result)
      }
    })
  }

  // 监听用户选择文件的操作
  upload_inp.addEventListener('change', async function () {
    const file = upload_inp.files[0]
    if (!file) return

    // 限制文件上传大小不超过 2MB
    if (file.size > 2 * 1024 * 1024) {
      alert(upload_tip.innerHTML)
      return
    }

    changeDisabel(true)

    const base64 = await changeBase64(file)
    // 文件预览，就是显示 base64
    upload_abbre_img.src = base64
    
    try {
      const data = await instance.post('/upload', {
        file: encodeURIComponent(base64),
        filename: file.name
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      if (+data.code === 0) {
        alert(`文件上传成功，通过${data.servicePath}访问资源`)
        return
      }

      throw data.codeText
    } catch (err) {
      alert('文件上传失败，请稍后再试')
    } finally {
      changeDisabel(false)
    }
  })
})();