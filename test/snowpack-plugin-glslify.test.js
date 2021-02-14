import test from 'ava'
import { promises as fs } from 'fs'
import { build, createConfiguration } from 'snowpack'

process.chdir('test')

test.afterEach.always(async () => {
	await fs.rmdir('./build', { recursive: true })
})

test('compressed', async (t) => {
	const config = createConfiguration({
		plugins: ['../src/snowpack-plugin-glslify'],
	})
	// @ts-ignore
	const { result } = await build({ config })
	const code =
		result[Object.keys(result).find((filePath) => filePath.includes('frag.js'))]
			.contents
	t.truthy(!code.includes('// Description'))
	t.truthy(code.includes('taylorInvSqrt'))
})

test('uncompressed', async (t) => {
	const config = createConfiguration({
		plugins: [['../src/snowpack-plugin-glslify', { compress: false }]],
	})
	// @ts-ignore
	const { result } = await build({ config })
	const code =
		result[Object.keys(result).find((filePath) => filePath.includes('frag.js'))]
			.contents
	t.truthy(code.includes('// Description'))
	t.truthy(code.includes('taylorInvSqrt'))
})
