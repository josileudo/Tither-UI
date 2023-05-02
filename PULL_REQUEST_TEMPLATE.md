Mirror the type definition of EntityCollectionServiceBase.add on EntityServerCommands.add.

Closes EntityServerCommands.add does not allow optional id #3847

PR Checklist

Please check if your PR fulfills the following requirements:

The commit message follows our guidelines: https://github.com/ngrx/platform/blob/master/CONTRIBUTING.md#commit
Tests for the changes have been added (for bug fixes / features)
Documentation has been added / updated (for bug fixes / features)
PR Type

What kind of change does this PR introduce?

[x] Bugfix
[ ] Feature
[ ] Code style update (formatting, local variables)
[ ] Refactoring (no functional changes, no api changes)
[ ] Build related changes
[ ] CI related changes
[ ] Documentation content changes
[ ] Other... Please describe:
What is the current behavior?

EntityServerCommands.add() allows only full entities.

Closes #3847

What is the new behavior?

EntityServerCommands.add() allows partial entities if non-optimistic, just like EntityCollectionServiceBase.add().

Does this PR introduce a breaking change?

[ ] Yes
[x] No
