import { initScreen } from '../common/util';
// ...移动端不需要asyn
const init = () => {
    initScreen();

    $(document).ready(() => {
        // 点击
        $('').click(()=>{})

        // 跳转
        $('').scrollTop()

        // 添加
        $('').addClass('添加类名不加点')

        // 移除
        $('').removeClass('添加类名不加点')

// 用于实现跳转
$('.qmbzfl').click(() => {
    const distance = 50
    const onepage = $('#onepage').offset().top-distance;
    $('html,body').scrollTop(onepage);
  });

    })

}