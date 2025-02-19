<!--
grid-container {
    columns: 7;
    visible-columns: 5;
    columns-width: mimax(150px, 1fr);
}

[1,[2,3,4,5,6],7]
[1,2,2,3,4,5,6,7]
 -->

terser ./dist/bundle.js -o bundle.js -c "drop_console,passes=5,unsafe" -m "toplevel,eval"
babel-minify/bin/minify.js  --mangle --deadcode --evaluate ./dist/bundle.js  -o bumdle.js --simplify