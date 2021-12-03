# ms-teams-dump
This repo has a script which allows you to get a csv dump of all emails for all users in a Microsoft Teams Team

## Instructions

This script is easy to run for anyone. It is not necessary to have coding chops. Just follow these simple instuctions:

1. Visit the website URL for your Microsoft Teams Team. Do this by going to [teams.microsoft.com](teams.microsoft.com) and navigating to the team you want to dump emails for in the left sidebar.
1. Click the three dots to the right of the Team name (NOT a channel) and click "Manage Team"
1. On the "Members" tab, expand the "Members and Guests" section
1. Open the developer console. In Chrome, you can do this easily by right clicking anywhere on the screen and selecting "Inspect". Then click "Console" at the top of the screen.
1. Open the [./dump.js](./dump.js) file in this repository, copy all the code, paste it into the developer console, and hit enter.
1. Wait some amount of time (it takes about 5 minutes for 500 people) and the eventually it will download a csv file with all the emails.
1. You're done!

This code is based on code found at this link https://developers.salestim.com/blog/export-microsoft-teams-team-members/
