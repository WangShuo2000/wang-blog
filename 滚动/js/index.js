$(function () {
	//滚动事件，每三秒滚动一次
	var mun = setInterval(function () {
		$("li:last").hide("slow").prependTo($("#file0")).slideDown();
	}, 4000);
	//鼠标悬停事件，悬停停止滚动，鼠标移出开始滚动
	$("li").hover(function () {
		clearInterval(mun);
	}, function () {
		mun = setInterval(function () {
			$("li:last").hide("slow").prependTo($("#file0")).slideDown();
		}, 4000);
	});
});
