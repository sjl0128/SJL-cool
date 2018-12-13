var gulp = require("gulp");

gulp.task("copy-html",function(){
	gulp.src("html/**/*.html")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\SHOPBOP\\html"));
});
gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\SHOPBOP\\img"));
});
gulp.task("copy-css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\SHOPBOP\\css"));
});
// gulp.task("copy-font",function(){
// 	gulp.src("fonts/**/*")
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\fonts"));
// });
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\SHOPBOP\\js"));
});
gulp.task("copy-php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\SHOPBOP\\php"));
});
gulp.task("data",function(){
	gulp.src(["xml/*.xml","json/*.json","!json/test.json"])
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\SHOPBOP\\data"));
});
gulp.task("build",["copy-html","copy-img","copy-css","copy-js","copy-php","data"],function(){
	console.info("OK!");
});
//监听，自动复制
gulp.task("watch",function(){
	gulp.watch("html/**/*.html",["copy-html"]);
	gulp.watch("imgs/**/*",["copy-img"]);
	gulp.watch("css/**/*",["copy-css"]);
	// gulp.watch("fonts/**/*",["copy-font"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("php/**/*",["copy-php"]);
});