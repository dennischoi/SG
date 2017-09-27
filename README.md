# Test Environment for ScoutGather new site


## Development

```
yarn
yarn run dev
```

### Dev tools

Dev tools (vertical and horizontal grids, mobx devtools) are hidden by default. To show them use `ctrl + k`. Horizontal grid can be toggled via `ctrl + l`.



## Production build

```bash
yarn run build
yarn start
```


## Make sure PORTS are clear and kill Process ID 
```
sudo lsof -iTCP -sTCP:LISTEN -P
sudo kill -9 <PID>
```

## Updating from upstream

Make sure you have the `upstream` remote:

```bash
> git remote -v # should show..
...
upstream git@github.com:ueno-llc/starter-kit-universally.git (fetch)
...
# if not, run...
git remote add upstream https://github.com/ueno-llc/starter-kit-universally.git
git remote set-url --push upstream no_push # disable push to upstream
```

Then, update:

```bash
git fetch upstream
git merge upstream/master

# These are the usual conflicts
git rm -r -f shared/components/DemoApp
git checkout --ours package.json
```