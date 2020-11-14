import Vue from 'vue'
Vue.filter('dateFormat',function(originVal){
    const dt=new Date(originVal)
    const y=dt.getFullYear()
    const m=(dt.getMonth()+1+'').padStart(2,'0')
    const d=(dt.getDate()+'').padStart(2,'0')
    const h=(dt.getHours()+'').padStart(2,'0')
    const mm=(dt.getMinutes()+'').padStart(2,'0')
    const s=(dt.getSeconds()+'').padStart(2,'0')
    return `${y}-${m}-${d} ${h}:${mm}:${s}`
})