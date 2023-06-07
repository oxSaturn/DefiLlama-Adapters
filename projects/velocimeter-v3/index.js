const { getUniTVL } = require('../helper/unknownTokens')

module.exports = {
  misrepresentedTokens: true,
  pulse: {
    tvl: getUniTVL({
      factory: '0x370d160992C8C48BCCFcf009f0c9db9d00574eF7',
      fetchBalances: true,
      useDefaultCoreAssets: true,
      hasStablePools: true,
    })
  }
}
