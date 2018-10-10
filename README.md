# 内联加载的使用方式

1. 把 loader、react-applet-1 和 react-applet-2 项目克隆到同一个目录下
1. 构建 react-applet-1 和 react-applet-2 项目
1. 运行 npm run build-apps
1. npm start 即可（默认监听于 4200 端口）

# iframe 加载的使用方式

1. 把 loader、ng-applet-a 项目克隆到同一个目录下
1. 启动 ng-applet-a 项目，它会监听 4201 端口
1. 启动 loader

ng-applet-a 还同时支持 ssr prerender。只要运行它的 prerender.sh 并将其 prebuilt 目录放到静态文件服务器中，再把 iframe 的 src 指向它的部署地址即可。
