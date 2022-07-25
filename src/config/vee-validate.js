// 匯入驗證元件
import { defineRule, configure } from 'vee-validate'

// 匯入驗證規則
import {
  required, alpha_num, email, min, max
} from '@vee-validate/rules'

// 匯入繁體中文化模組
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 建立、定義規則
defineRule('required', required)
defineRule('alpha_num', alpha_num)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)

// 繁體中文化設定
configure({
  validateOnInput: true,
  generateMessage: localize({
    zh_TW: zhTW,
  }),
})
// 指定語言環境
setLocale('zh_TW')