# BackMarketTest

Set of cypress tests for the Back Market creation of user, connection, disconnection, and registaration failed.

Copy or clone files to your local cypress\integration folder,

Windows:
Install Cypress via npm:
cd /your/project/path
npm install cypress --save-dev
This will install Cypress locally as a dev dependency for your project.

or for the Linux:
Linux
If you're using Linux, you'll want to have the required dependencies installed on your system.

We also have an official cypress/base Docker container with all of the required dependencies installed.

Ubuntu/Debian
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
CentOS
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 

If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin.

Now you can open Cypress from your project root one of the following ways:

The long way with the full path

./node_modules/.bin/cypress open
Or with the shortcut using npm bin

$(npm bin)/cypress open
Or by using npx

note: npx is included with npm > v5.2 or can be installed separately.

npx cypress open
Or by using yarn
yarn run cypress open

Execute tests using Test Runner.
