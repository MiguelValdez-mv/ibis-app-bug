#!/usr/bin/env bash

# TODO: event, service, reducer
echo "What would you like to create?"
source ./_templates/menu.sh
menu component component screen container util context hoc hook
eval "yarn hygen $MENU_SELECTED-generator with-prompt"