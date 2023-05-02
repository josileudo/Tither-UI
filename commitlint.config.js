const typeEnum = [
  'build',
  'ci',
  'docs',
  'feat',
  'bug',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
  'chore',
  'merge',
  'wip'
];

const configurations = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [2, 'always', typeEnum],
    'subject-case': [2, 'always', 'sentence-case'],
    'header-max-length': [1, 'always', 80],
    'header-min-length': [2, 'always', 15]
  }
};

module.exports = configurations;
