const fs = require('fs');

interface Stats {
  total: number,
  covered: number,
  skipped: number,
  pct: number
}

function addStats(a: Stats, b: Stats): Stats {
  const total = a.total + b.total;
  const skipped = a.skipped + b.skipped;
  const covered = a.covered + b.covered;
  return {
    total, skipped, covered, pct: total == 0 ? 0 : Math.round(covered / total * 10000) / 100
  };
}

interface Summary {
  lines: Stats,
  statements: Stats,
  functions: Stats,
  branches: Stats,
}

function addSummary(a: Summary, b: Summary): Summary {
  return {
    lines: addStats(a.lines, b.lines),
    branches: addStats(a.branches, b.branches),
    functions: addStats(a.functions, b.functions),
    statements: addStats(a.statements, b.statements),
  };
}


interface Report {
  [path: string]: Summary;
}

interface TreeNode {
  children: TreeNodeChildren;
  summary?: Summary;
  path?: string;
}

interface TreeNodeChildren {
  [key: string]: TreeNode;
}

const emptyNode = (): TreeNode => ({children: {}});

function addSummery(node: TreeNode, path: string, keys: string[], summery: Summary) {
  if (keys.length === 0) {
    node.summary = summery;
    node.path = path;
    return;
  }
  const [key, ...rest] = keys;
  let child = node.children[key];
  if (!child) {
    child = emptyNode();
    node.children[key] = child;
  }
  addSummery(child, path, rest, summery);
}

function buildSummaries(node: TreeNode): Summary {
  if (node.summary) {
    return node.summary;
  }
  const summary = Object
    .values(node.children)
    .map(buildSummaries)
    .reduce((p, c) => {
      return addSummary(p, c);
    });
  node.summary = summary;
  return summary;
}

function buildTree(summaries: [string, Summary][]) {
  const root = emptyNode();

  for (const [path, summery] of summaries) {
    const key = path.split('/');
    addSummery(root, path, key, summery);
  }

  buildSummaries(root);

  return root;
}


const longestCommonPrefix = (words: string[]) => {
  function getLongestPrefix(a: string, b: string) {
    let i = 0;
    // while all words have the same character at position i, increment i
    while (a[i] && a[i] === b[i]) {
      i++;
    }
    return a.substring(0, i);
  }


  if (words.length === 0) {
    return '';
  }
  if (words.length === 1) {
    return words[0];
  }
  let longestPrefix = words[0];

  for (let i = 1; i < words.length; i++) {
    longestPrefix = getLongestPrefix(longestPrefix, words[i]);
  }


  return longestPrefix;
};


(async () => {

  const file = JSON.parse(await fs.promises.readFile('coverage/coverage-summary.json', 'utf-8'));


  const keys = Object.keys(file);
  const paths = keys.slice(1);

  const prefix = longestCommonPrefix(paths);
  if (!prefix) {
    throw Error('WTH');
  }

  const shortened = Object.entries(file).slice(1).map(([k, v]) => [k.substring(prefix.length), v]) as [string, Summary][];
  const tree = buildTree(shortened);

  await fs.promises.writeFile('docs/src/summary.json', JSON.stringify(tree));
})();
