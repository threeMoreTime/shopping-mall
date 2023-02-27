import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    //dev配置
    return {
      plugins: [uni()],
      server: {
        host: 'localhost',//使用当前的IP地址，没有这个就是以localhost作为本地地址
        port: 4408, //端口号为
        open: true, //是否在默认浏览器中自动打开该地址
        proxy: { //使用代理
          '/dev': { //当有 /api开头的地址是，代理到target地址
            target: 'http://192.168.1.39:8860', // 需要跨域代理的本地路径
						// target: 'http://192.168.1.99:8860', // 需要跨域代理的本地路径
            changeOrigin: true, //是否改变请求源头
            rewrite: (path) => path.replace(new RegExp('^' + '/dev'), '') // 路径重写
          }
        }
      },
      define: {
        // 'process.env.VITE_APP_BASE_API': JSON.stringify('http://192.168.1.2:8850'),
      },
    }
  }else{
    //build配置
    return {
      plugins: [uni()],
      build: {
        minify: 'terser',
        /* 发布时删除 console */
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      },
      define: {
        // 'process.env.VITE_APP_BASE_API': JSON.stringify('http://192.168.1.2:8850'),
      },
    }
  }
});
