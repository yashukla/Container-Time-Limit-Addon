# Container-Time-Limit-Addon
 Simple Firefox addon to allow for time restrictions on usage of specific containers.

 The algorithm behind this extension is recursive. Every minute, the extension checks if the time spent in the current container has exceeded the limit for that container. If it has, the program redirects the user to the extension page. This page informs the user that they have reached the daily time limit for that container and provides an option for the user to ignore the limit. Otherwise, the extension will wait another minute and check again. If the user is 5 minutes from reaching the limit, the extension will warn the user.


