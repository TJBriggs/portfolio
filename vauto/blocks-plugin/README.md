## Lerna Installation
======================================================

To run the commands required in this plugin, you'll need to insall Lerna globally.
If you already have Lerna installed you can skip to the next section.

1. In the root directory (mx-blocks-plugin) run ```npm install --global lerna```

If you already have Lerna installed be sure to run ```npm install``` if the root directory
does not contain a node_modules folder


## Adding new blocks
======================================================

To add a new block to the plugin follow the directions listed below:

1. Change directories into the blocks folder:
   ```cd blocks```

2. Run the npx command to create a new block:
   ```npx @wordpress/create-block block-name --namespace  mx```

## Bootstrap new blocks to the monorepo with Lerna
=======================================================

Now that the new block(s) have been created, follow the directions below to remove the node_modules folder from 
the block(s) and hoist the dependencies to the root directory.

1. Change directories back to the root folder: 
   ```cd ../```

2. Run the Lerna command to clear the node_modules folders from your newly created blocks:
   ```lerna clean --yes```

3. Run the Lerna command to hoist the package dependencies into root directory:
   ```leran bootstrap --hoist```

Note: Although all the node packages have been hoisted to the main repo, you'll still see a node_modules
folder in each of your blocks. This folder is required for the symlinking, but does not contain all the packages.  

## Running Block Scripts
=======================================================

The package.json file contains a list of all available npm commands, but here is an example of the one's most commonly used:

1. ```"start": "lerna run start --stream --scope"```
   This command will allow you to run the normal "npm run start" command found in your block files. The "--scope" flag
   allows us to declare which block to start. The "--stream" flag allows us to watch for changes as the files are saved.
   Here is an example of running a start command on a block called "hero-image":
   ```npm run start hero-image```

2. ```"build": "lerna run build --scope",```
   Similar to the start command, we can run a build of an individual block like this:
   ```npm run build hero-image```

3. ```"build-all": "lerna run build",```
   This command is helpful when you've made several changes accross your block files and you don't have a start command running.
   Run this to quickly build and compile all your block changes into their appropriate src folders:
   ```npm run build-all```