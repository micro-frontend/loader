export class AppletModel {
  /**
   小应用的ID

   如果一个内存空间加载了两份同一个小应用的实例，则不具备唯一性
   */
  id: string;
  /**
   index 的 body 内容

   把其中的内嵌脚本 `<script></script>` 和引用脚本 `<script src...></script>` 都提取到了单独的文件中，并等 body 加载完之后再统一执行，因此，任何脚本都不得假定自己在body渲染过程中执行。
   */
  body: string;
  /**
   index 中的脚本

   包括内嵌脚本 `<script></script>` 和 引用脚本 `<script src...></script>`，它们会保持在 index 中出现的顺序。
   */
  scripts: string[];
  /**
   index 中的样式

   包括内联样式 `<style></style>` 和引用样式 `<link rel="stylesheet" href="">`，它们会保持在 index 中出现的顺序。

   */
  styles: string[];
}
