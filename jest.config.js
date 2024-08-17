module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^three$': '<rootDir>/node_modules/three/build/three.cjs',
    },
  };