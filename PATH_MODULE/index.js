const path = require('path');

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json")) // "./" is relative path

// path.join() is a method from Node.js's built-in path module. It helps safely combine multiple path segments into a single, properly formatted path, regardless of the operating system.

// 🧠 Why use it?
// Different operating systems use different path separators:

// Windows: \

// Linux/macOS: /

// path.join() automatically handles these separators and removes any unnecessary slashes.

// console.log(path.join("folder1","folder2","index.html"));
// console.log(path.join("/folder1","folder2","index.html"));
// console.log(path.join("folder1","//folder2","index.html"));
// console.log(path.join("folder1","//folder2","../index.html"));
// console.log(path.join(__dirname,"data.json"));

// Resolve Method
// path.resolve() resolves a sequence of paths into an absolute path.
// It works from right to left, treating the rightmost path as the target, and the rest as base paths. If any path in the sequence is absolute, it stops there and ignores everything to the left.

// console.log(path.resolve("folder1","folder2","index.html"));
// console.log(path.resolve("/folder1","folder2","index.html"));
// console.log(path.resolve("folder1","//folder2","index.html"));
// console.log(path.resolve("folder1","//folder2","../index.html"));
// console.log(path.resolve(__dirname,"data.json"));

// ⚡ Difference from path.join()

// Feature	path.join()	path.resolve()
// Returns	Relative path	Absolute path
// Based on	Just joins segments	Starts from right & resolves to absolute
// Use case	Merging folders/files into a path	Finding full path from current location
// Handles current dir?	❌ (Doesn’t consider current path)	✅ (Uses process.cwd())

//Create a path object:
// var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
//Format the path object into a path string:
// var p = path.format(obj);
// console.log(p);
