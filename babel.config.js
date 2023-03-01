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
        },
        {
            rootPathSuffix: "src/redux",
            rootPathPrefix: "@redux"
        },
        {
            rootPathPrefix: "src/config",
            rootPathSuffix: "@config"
        }
    ]
  };
   
  module.exports = (api) => {
    api.cache(true);
   
    const plugins = [['babel-plugin-root-import', rootImportOpts]];
   
    return { plugins };
  };