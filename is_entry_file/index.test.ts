import { resolve } from 'path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { is_entry_file_ } from './index.js'
test('is_entry_file_', ()=>{
	equal(is_entry_file_(import.meta.url, new URL(import.meta.url).pathname), true)
	equal(is_entry_file_(
		import.meta.url,
		new URL(import.meta.url).pathname.replace(resolve(process.cwd()) + '/', '')),
	true)
	equal(is_entry_file_(import.meta.url, '/not/url'), false)
})
test.run()
