/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
	clearMocks: true,
	collectCoverageFrom: ['**/*.(t|j)s'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	coverageProvider: 'v8',
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['ts', 'js'],
	moduleNameMapper: {
		'@entities/(.*)$': ['<rootDir>/src/entities/$1'],
		'@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
		'@repositories/(.*)': '<rootDir>/src/repositories/$1',
		'@services/(.*)$': ['<rootDir>/src/services/$1'],
		'@types$': ['<rootDir>/src/types'],
	},
	testEnvironment: 'node',
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest',
	},
};

export default config;
