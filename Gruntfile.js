module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      build : {
        src: ['src/**/*.ts', '!**/*.spec.ts'],
        outDir: 'dist',
        //tsconfig: 'tsconfig.json',
      },
      options: {
          fast: 'never',
          verbose: true,
          listFiles: true,
          experimentalDecorators: true,
          lib: [ "es2015", "dom" ]
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};