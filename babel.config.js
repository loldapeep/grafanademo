module.exports = {
    plugins: [
      ["@babel/plugin-transform-typescript", { allowDeclareFields: true }],
      ['@babel/plugin-proposal-export-default-from'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
    presets: [
        ['@babel/preset-typescript', { allowDeclareFields: true }],
        ['@babel/preset-env'], 
        ['@babel/preset-react']
        
    ],
    assumptions: {
      setPublicClassFields: true
    }
  }