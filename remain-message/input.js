/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-17 19:33:08
 */
Vue.component('vInput', {
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  render: function (h) {
    var _this = this
    return h('div', [
      h('span', '昵称'),
      h('input', {
        attrs: {
          type: 'text'
        },
        domProps: {
          value: this.value
        },
        on: {
          input: function (e) {
            _this.value = e.target.value
            _this.$emit('input', e.target.value)
          }
        }
      })
    ])
  }
})
Vue.component('vTextarea', {
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  render: function (h) {
    var _this = this
    return h('div', [
      h('span', '留言内容:'),
      h('textarea', {
        attrs: {
          placeholder: '请输入留言内容'
        },
        domProps: {
          value: this.value
        },
        ref: 'message',
        on: {
          input: function (e) {
            _this.value = e.target.value
            _this.$emit('input', e.target.value)
          }
        }
      })
    ])
  },
  methods: {
    focus: function () {
      this.$refs.message.focus()
    }
  }
})