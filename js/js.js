document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
                // 当元素超过35%可见时，添加动画效果
                entry.target.style.opacity = 1; // 设置透明度为1使其完全可见
                entry.target.style.transform = "translateX(0)"; // 移动到最终位置
                entry.target.style.transition = "all 0.6s ease-in-out"; // 添加过渡效果
            }
        });
    }, {threshold: [0, 0.35, 1]}); // 使用多个阈值以确保在达到35%时触发

    // 监听 .githubs 元素
    const githubsElement = document.querySelector('.githubs');
    observer.observe(githubsElement);
});