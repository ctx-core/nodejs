import { resolve } from 'path'
export function is_entry_file_(url, entry_path = process.argv[1]) {
	return new URL(url).pathname === resolve(entry_path)
}
