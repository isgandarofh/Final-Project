import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

const config = {
    mode: {
        css: {
            render: {
                css: true
            }
        },
        symbol: {
            sprite: "sprite.symbol.svg"
        }
    }
};

gulp.task('sprite', function () {
    return gulp.src('**/*.svg', { cwd: 'public/svg' })
        .pipe(svgSprite(config))
        .pipe(gulp.dest('public'));
});

// Default task
gulp.task('default', gulp.series('sprite'));
