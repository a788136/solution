const code = [
  'const code = [',
  '  // PLACEHOLDER',
  '];',
  '',
  'for (const line of code) {',
  '  const quoted = line.replace(/\\\\/g, \'\\\\\\\\\').replace(/"/g, \'\\\\"\');',
  '  console.log(`    "\${quoted}",`);',
  '}',
  '',
  'console.log("");',
  'console.log("print(\\\"code = [\\\")");',
  'for (const line of code) {',
  '  const escaped = line.replace(/\\\\/g, \'\\\\\\\\\').replace(/"/g, \'\\\\"\');',
  '  console.log(`print(\\\"    \\\\\\"\${escaped}\\\\\\",\\\")`);',
  '}',
  'console.log("print(\\\"]\\\")");',
  'console.log("print()");',
  'console.log("for line in code: print(line)");'
];

console.log('print("code = [")');
for (const line of code) {
  const escaped = line.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  console.log(`print("    \\"${escaped}\\",")`);
}
console.log('print("]")');
console.log('print()');
console.log('for line in code: print(line)');
