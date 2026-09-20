# PLS 152 — Plant Genetics course website

Quarto site published to https://greymonroe.github.io/PLS_152/ via GitHub
Pages (main branch, /docs folder).

To edit: change the .qmd files, then

    quarto render
    git add -A && git commit -m "..." && git push

`quarto render` writes to docs/, which Pages serves. Content decisions and
non-public build materials (quiz bank with answers, announcements, Canvas
cartridge) live in the parent workspace `~/Dropbox/myapps/pls152/` and are
deliberately NOT part of this repo.
