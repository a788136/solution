const code = [
  'code = [',
  '    "code = [",',
  '    "    \\"code = [\\",",',
  '    "    \\"    \\\\\\"code = [\\\\\\",\\",",',
  '    "    \\"    \\\\\\"    \\\\\\\\\\\\\\"code = [\\\\\\\\\\\\\\",\\\\\\",\\",",',
  '    "    \\"    \\\\\\"    \\\\\\\\\\\\\\"    \\\\\\\\\\\\\\\\\\\\\\\"code = [\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\",\\\\\\",\\",",',
  '    "    ...",',
  '    "print(\\"code = [\\")",',
  '    "for line in code:",',
  '    "    print(f\'    \\\\\\"\{line.replace(chr(92), chr(92)+chr(92)).replace(chr(34), chr(92)+chr(34))}\\\\\\",\')",',
  '    "print(\\"\\")",',
  '    "for line in code: print(line)"',
  ']',
  '',
  'print("code = [")',
  'for line in code:',
  '    print(f\'    "{line.replace(chr(92), chr(92)+chr(92)).replace(chr(34), chr(92)+chr(34))}",\')',
  'print("]")',
  '',
  'for line in code: print(line)'
];

console.log('code = [');
for (const line of code) {
  const escaped = line.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  console.log(`    "${escaped}",`);
}
console.log(']');
console.log();
console.log('for line in code: print(line)');
