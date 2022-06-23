1. 在components文件夹下创建`.vue`文件
2. 将创建的文件配置到router文件夹下的`index.js`文件中
  ```
  {path:'/', component:() => import('../components/TestElementUi.vue') }
  ```
3. 在main.js文件中引入路由下的index.js文件`import router from './router/index.js'`
4. 在main.js文件中引入elementUI组件
```
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI
```
