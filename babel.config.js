const rootImportOpts = {
    paths:[
        //add shortcut for import path
        {
            rootPathSuffix: "src",
            rootPathPrefix: "~"
        },
        {
            rootPathSuffix: "src/components",
            rootPathPrefix: "@components"
        },
        {
            rootPathSuffix: "src/css",
            rootPathPrefix: "@css"
        }
    ]
  };
   
  module.exports = (api) => {
    api.cache(true);
   
    const plugins = [['babel-plugin-root-import', rootImportOpts]];
   
    return { plugins };
  };